"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Will I get my CIP credential from this course?",
    a: "The Certified Intervention Professional (CIP) credential is issued by the Pennsylvania Certification Board, not by any individual training program. Our course is designed to prepare you for the CIP pathway by covering the required knowledge areas. To earn the credential you'll also need to meet PCB's requirements for supervised experience, documented interventions, and other criteria. We'll walk you through every step of the process.",
  },
  {
    q: "How much does the course cost?",
    a: "Final pricing for the founding cohort will be shared with waitlist members first. We're committed to keeping the program accessible. Pricing will reflect the small cohort size and live instruction format. Payment plans will be available.",
  },
  {
    q: "Do I need to be in recovery to take this course?",
    a: "No. Many excellent interventionists come from clinical, social work, or counseling backgrounds without personal recovery experience. That said, if you are in recovery, most credentialing boards require a minimum sober time (typically 2+ years) before issuing certain credentials. We'll discuss your individual pathway with you.",
  },
  {
    q: "When does the first cohort start?",
    a: "We're finalizing the launch date now. Founding cohort waitlist members will be the first to know, and they will have first access to seats before we open registration publicly.",
  },
  {
    q: "Is this fully online?",
    a: "Yes. All instruction is delivered live over Zoom, so you can participate from anywhere. Live attendance is strongly encouraged because the discussions and case work are central to the learning experience.",
  },
  {
    q: "What happens after I graduate?",
    a: "Graduates receive a certificate of completion documenting your training hours, ongoing mentorship as you pursue full CIP credentialing through PCB, and guidance on building your own practice, including pricing, contracts, insurance navigation, and ethical referral development.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-w-[780px] mx-auto">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-white border border-black/5 rounded-soft mb-3 overflow-hidden transition-all"
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              className="w-full px-6 py-5 text-[15px] font-semibold text-ink text-left flex justify-between items-center hover:bg-cream transition-colors"
            >
              <span>{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-forest flex-shrink-0 ml-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-[22px] text-sm text-earth leading-[1.7]">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}