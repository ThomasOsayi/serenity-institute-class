import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serenity Institute — Become a Certified Intervention Professional",
  description:
    "A live, instructor-led training program for those called to become Certified Intervention Professionals. Learn directly from a seasoned interventionist and college instructor — from anywhere, on Zoom.",
  keywords: [
    "intervention training",
    "CIP certification",
    "certified intervention professional",
    "addiction counselor training",
    "interventionist course",
    "Serenity Institute",
  ],
  openGraph: {
    title: "Serenity Institute — Become a Certified Intervention Professional",
    description:
      "Live Zoom cohort training for aspiring interventionists. Learn from a seasoned professional. Founding cohort enrolling now.",
    type: "website",
    siteName: "Serenity Institute",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}