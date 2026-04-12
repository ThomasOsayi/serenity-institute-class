"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  recoveryStatus: string;
  background: string;
  preferredTimes: string[];
  heardAbout: string;
  motivation: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  zip: "",
  recoveryStatus: "",
  background: "",
  preferredTimes: [],
  heardAbout: "",
  motivation: "",
};

export default function WaitlistForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleTime = (time: string) => {
    setForm((prev) => ({
      ...prev,
      preferredTimes: prev.preferredTimes.includes(time)
        ? prev.preferredTimes.filter((t) => t !== time)
        : [...prev.preferredTimes, time],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-[620px] mx-auto bg-white rounded-soft-lg p-12 shadow-soft-md border border-black/[0.04] text-center">
        <CheckCircle2 className="w-16 h-16 text-forest-light mx-auto mb-4" />
        <h2 className="font-display text-[28px] mb-3">{"You're on the list"}</h2>
        <p className="text-base text-earth leading-[1.7] max-w-md mx-auto">
          {"Thanks for joining the founding cohort waitlist. We'll reach out personally with program details, schedule, and pricing before enrollment opens to the public."}
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-[13px] text-sm border border-[var(--sand)] rounded-soft bg-warm-white text-ink transition-all focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 focus:bg-white";

  const labelClass = "block text-[13px] font-semibold text-earth mb-1.5";

  const radioOptClass =
    "flex items-center gap-2.5 px-3.5 py-[11px] bg-warm-white border border-[var(--sand)] rounded-soft cursor-pointer transition-all hover:border-sage text-sm text-earth";

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[620px] mx-auto bg-white rounded-soft-lg p-12 shadow-soft-md border border-black/[0.04]"
    >
      <h2 className="font-display text-[28px] mb-2 text-center">Reserve Your Seat</h2>
      <p className="text-sm text-earth text-center mb-8 leading-[1.6]">
        {"Founding cohort enrollment opens soon. Join the waitlist and we'll reach out personally with program details, schedule, and pricing."}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
        <div>
          <label className={labelClass}>First Name <span className="text-gold">*</span></label>
          <input type="text" className={inputClass} value={form.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="First name" />
        </div>
        <div>
          <label className={labelClass}>Last Name <span className="text-gold">*</span></label>
          <input type="text" className={inputClass} value={form.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Last name" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
        <div>
          <label className={labelClass}>Email <span className="text-gold">*</span></label>
          <input type="email" className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
        </div>
        <div>
          <label className={labelClass}>Phone <span className="text-gold">*</span></label>
          <input type="tel" className={inputClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(555) 123-4567" />
        </div>
      </div>

      <div className="mb-5">
        <label className={labelClass}>Zip Code</label>
        <input type="text" className={inputClass} value={form.zip} onChange={(e) => update("zip", e.target.value)} placeholder="90001" />
      </div>

      <div className="mb-5">
        <label className={labelClass}>Are you in personal recovery?</label>
        <div className="flex flex-col gap-2">
          {["Yes — less than 2 years", "Yes — 2 to 5 years", "Yes — 5+ years", "No, but personal connection to addiction", "Prefer not to say"].map((opt) => (
            <label key={opt} className={radioOptClass}>
              <input type="radio" name="recovery" className="accent-[var(--forest)]" checked={form.recoveryStatus === opt} onChange={() => update("recoveryStatus", opt)} />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <label className={labelClass}>Current background</label>
        <select className={inputClass} value={form.background} onChange={(e) => update("background", e.target.value)}>
          <option value="">Select one…</option>
          <option>Peer support / recovery coach</option>
          <option>Counselor / therapist</option>
          <option>Healthcare professional</option>
          <option>Social worker</option>
          <option>Career change — currently in another field</option>
          <option>Student</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mb-5">
        <label className={labelClass}>Preferred class times (check all that apply)</label>
        <div className="flex flex-col gap-2">
          {["Weekday evenings", "Saturdays", "Sundays", "Flexible — any of the above"].map((opt) => (
            <label key={opt} className={radioOptClass}>
              <input type="checkbox" className="accent-[var(--forest)]" checked={form.preferredTimes.includes(opt)} onChange={() => toggleTime(opt)} />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <label className={labelClass}>How did you hear about us?</label>
        <select className={inputClass} value={form.heardAbout} onChange={(e) => update("heardAbout", e.target.value)}>
          <option value="">Select one…</option>
          <option>Flyer at a meeting</option>
          <option>Referred by a friend</option>
          <option>Social media</option>
          <option>Recovery Bridge website</option>
          <option>Search engine</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mb-5">
        <label className={labelClass}>Why do you want to become an interventionist? (Optional)</label>
        <textarea
          className={`${inputClass} resize-y min-h-[80px]`}
          rows={3}
          value={form.motivation}
          onChange={(e) => update("motivation", e.target.value)}
          placeholder="Tell us a bit about what's drawing you to this work…"
        />
      </div>

      {status === "error" && errorMsg && (
        <div className="mb-4 p-3 rounded-soft bg-red-50 border border-red-200 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 text-[15px] font-semibold text-white bg-forest rounded-soft transition-all hover:bg-forest-mid disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting…
          </>
        ) : (
          "Join the Founding Cohort Waitlist"
        )}
      </button>

      <p className="text-[11px] text-stone text-center mt-3.5 leading-[1.6]">
        {"Your information is confidential. Joining the waitlist is not a commitment to enroll — we'll share program details, pricing, and answer your questions before you decide. Serenity Institute is an independent training program; the CIP credential is issued by the Pennsylvania Certification Board upon meeting all their requirements."}
      </p>
    </form>
  );
}