import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type WaitlistPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  zip?: string;
  recoveryStatus?: string;
  background?: string;
  preferredTimes?: string[];
  heardAbout?: string;
  motivation?: string;
};

// Basic email validation
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Basic string sanitizer — trim and cap length
const clean = (value: unknown, maxLength = 500): string => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
};

export async function POST(request: Request) {
  try {
    const body: WaitlistPayload = await request.json();

    // Extract and sanitize fields
    const firstName = clean(body.firstName, 100);
    const lastName = clean(body.lastName, 100);
    const email = clean(body.email, 200);
    const phone = clean(body.phone, 50);
    const zip = clean(body.zip, 20);
    const recoveryStatus = clean(body.recoveryStatus, 100);
    const background = clean(body.background, 100);
    const heardAbout = clean(body.heardAbout, 100);
    const motivation = clean(body.motivation, 2000);

    const preferredTimes = Array.isArray(body.preferredTimes)
      ? body.preferredTimes
          .filter((t): t is string => typeof t === "string")
          .map((t) => t.trim().slice(0, 100))
          .slice(0, 10)
      : [];

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "First name, last name, email, and phone are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Write to Firestore
    const docRef = await addDoc(collection(db, "waitlist"), {
      firstName,
      lastName,
      email,
      phone,
      zip,
      recoveryStatus,
      background,
      preferredTimes,
      heardAbout,
      motivation,
      source: "serenity-institute-landing",
      createdAt: serverTimestamp(),
    });

    return NextResponse.json(
      { success: true, id: docRef.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}