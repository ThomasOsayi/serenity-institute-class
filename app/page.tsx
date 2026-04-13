import Link from "next/link";
import {
  GraduationCap,
  ClipboardList,
  Users,
  Sprout,
  Monitor,
  Calendar,
  UsersRound,
} from "lucide-react";
import WaitlistForm from "./components/WaitlistForm";
import FaqAccordion from "./components/FaqAccordion";

const whyCards = [
  {
    icon: GraduationCap,
    title: "Real Instruction",
    body: "Live Zoom sessions with a working interventionist and college instructor. No pre-recorded videos, no self-paced isolation. Real conversations, real cases, real questions answered.",
  },
  {
    icon: ClipboardList,
    title: "Credential Pathway",
    body: "Curriculum aligned to the Certified Intervention Professional (CIP) standard. Learn the models, ethics, and clinical foundations the credentialing boards require.",
  },
  {
    icon: Users,
    title: "Cohort Community",
    body: "Train alongside a small group of peers who share your calling. Build relationships that last beyond the course. Your future referral network starts here.",
  },
  {
    icon: Sprout,
    title: "Built for Practice",
    body: "Learn the business side alongside the clinical work: pricing, contracts, insurance navigation, and how to develop referral relationships ethically. Graduate ready to work.",
  },
];

const curriculum = [
  { num: "01", title: "Foundations of Addiction", body: "Disease model, ASAM criteria, DSM-5 substance use disorders, neurobiology, and co-occurring mental health conditions." },
  { num: "02", title: "Family Systems & Dynamics", body: "Enabling, codependency, boundary-setting, and how addiction reshapes the family unit. Tools for assessing readiness." },
  { num: "03", title: "The Johnson Model", body: "The classic confrontational approach: when it works, when it doesn't, and how to execute it with compassion and structure." },
  { num: "04", title: "ARISE & Invitational Models", body: "Transparent, non-confrontational approaches with the highest published treatment-entry rates. Stage-by-stage walkthrough." },
  { num: "05", title: "CRAFT Methodology", body: "Community Reinforcement and Family Training, the evidence-based skills approach families can use without a formal intervention." },
  { num: "06", title: "Conducting the Intervention", body: "Pre-meeting preparation, impact letter coaching, room dynamics, handling resistance, and same-day handoff to treatment." },
  { num: "07", title: "Treatment Matching", body: "How to evaluate facilities, what accreditation actually means, insurance navigation, and avoiding the patient brokering trap." },
  { num: "08", title: "Ethics & the Law", body: "EKRA, the Anti-Kickback Statute, California SB 1228, and the AIS Code of Ethics. How to build a practice you can defend." },
  { num: "09", title: "Building Your Practice", body: "Pricing, insurance, contracts, marketing within compliance, and how to develop referral relationships ethically." },
];

const formatItems = [
  { icon: Monitor, label: "Format", value: "Live Zoom" },
  { icon: Calendar, label: "Schedule", value: "Evenings & Weekends" },
  { icon: UsersRound, label: "Cohort", value: "12 Seats Max" },
  { icon: Sprout, label: "Location", value: "SoCal-Based" },
];

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-warm-white/90 backdrop-blur-xl border-b border-black/5 px-6">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between h-[68px]">
          <Link href="/" className="flex items-center gap-3 text-ink no-underline">
            <div className="w-[38px] h-[38px] bg-forest rounded-[10px] flex items-center justify-center text-lg text-white">🌿</div>
            <div>
              <div className="font-display text-[19px] text-forest leading-none">Serenity Institute</div>
              <div className="text-[10px] text-stone tracking-[1.5px] uppercase font-medium mt-[2px]">Professional Training</div>
            </div>
          </Link>
          <a href="#waitlist" className="px-[22px] py-[10px] text-sm font-semibold text-white bg-forest rounded-soft-full transition-all hover:bg-forest-mid hover:-translate-y-px hover:shadow-soft-md">
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-[90px] pb-[70px]" style={{ background: "linear-gradient(180deg, var(--warm-white) 0%, var(--sand) 100%)" }}>
        <div className="absolute -top-[120px] -right-[80px] w-[420px] h-[420px] rounded-full" style={{ background: "radial-gradient(circle, rgba(27,67,50,0.05) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-[80px] -left-[60px] w-[320px] h-[320px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,151,62,0.07) 0%, transparent 70%)" }} />
        <div className="relative max-w-[820px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-[18px] py-[7px] rounded-soft-full border text-xs font-semibold uppercase tracking-wider text-forest mb-7" style={{ background: "rgba(27,67,50,0.08)", borderColor: "rgba(27,67,50,0.12)" }}>
            <span className="w-[7px] h-[7px] bg-sage rounded-full animate-pulse" />
            Founding Cohort · 12 Seats Only
          </div>
          <h1 className="text-ink leading-[1.15] mb-[22px]" style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.6rem)" }}>
            Become a Certified<br />
            <em className="text-forest italic">Intervention Professional</em>
          </h1>
          <p className="text-earth max-w-[640px] mx-auto mb-9 leading-[1.7]" style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)" }}>
            {"Southern California's first live, instructor-led training program designed around the CIP pathway. Learn directly from a seasoned LAADC and interventionist, from anywhere on Zoom."}
          </p>
          <div className="flex gap-3 justify-center flex-wrap mb-10">
            <a href="#waitlist" className="px-8 py-4 text-[15px] font-semibold text-white bg-forest rounded-soft-full transition-all hover:bg-forest-mid hover:-translate-y-px hover:shadow-soft-md no-underline">
              Reserve Your Seat
            </a>
            <a href="#curriculum" className="px-8 py-4 text-[15px] font-semibold text-forest bg-white border rounded-soft-full transition-all hover:bg-sand no-underline" style={{ borderColor: "rgba(27,67,50,0.15)" }}>
              {"See What You'll Learn"}
            </a>
          </div>
          <div className="flex justify-center gap-12 flex-wrap">
            {[{ n: "Live", l: "Instructor-Led Zoom" }, { n: "CIP", l: "Pathway-Aligned" }, { n: "SoCal", l: "First of Its Kind" }].map((t) => (
              <div key={t.n} className="text-center">
                <div className="font-display text-[26px] text-forest">{t.n}</div>
                <div className="text-xs text-stone mt-[2px] tracking-[0.3px]">{t.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="px-6 py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold text-forest uppercase tracking-[1.2px] mb-3 text-center">Why This Program</div>
          <h2 className="text-center leading-tight mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>A serious program for serious practitioners</h2>
          <p className="text-center text-base text-earth max-w-[600px] mx-auto mb-14 leading-[1.7]">{"Whether you're coming from personal recovery, clinical practice, or a career in counseling, this program gives you the training, mentorship, and credential pathway to build a real intervention practice."}</p>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {whyCards.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white border border-black/5 rounded-soft-lg p-8 transition-all hover:shadow-soft-md hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-[18px]" style={{ background: "rgba(27,67,50,0.08)" }}>
                  <Icon className="w-[22px] h-[22px] text-forest" />
                </div>
                <h3 className="font-display text-[19px] mb-2">{title}</h3>
                <p className="text-sm text-earth leading-[1.65]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="px-6 py-20 bg-sand">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold text-forest uppercase tracking-[1.2px] mb-3 text-center">Curriculum Preview</div>
          <h2 className="text-center leading-tight mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>{"What you'll learn"}</h2>
          <p className="text-center text-base text-earth max-w-[600px] mx-auto mb-14 leading-[1.7]">A structured journey through the foundations, methods, and ethics of professional intervention work.</p>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {curriculum.map((m) => (
              <div key={m.num} className="bg-white rounded-soft-lg p-6 border border-black/[0.04]">
                <div className="font-display text-[14px] text-gold tracking-[1px] mb-1.5">MODULE {m.num}</div>
                <h4 className="font-display text-[17px] mb-1.5 text-ink">{m.title}</h4>
                <p className="text-[13px] text-earth leading-[1.6]">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold text-forest uppercase tracking-[1.2px] mb-3 text-center">Your Instructor</div>
          <h2 className="text-center leading-tight mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>Learn from a working professional</h2>
          <p className="text-center text-base text-earth max-w-[600px] mx-auto mb-14 leading-[1.7]">{"Taught by a Licensed Advanced Alcohol & Drug Counselor (LAADC) with 30+ years as a working interventionist and addiction studies professor."}</p>
          <div className="max-w-[780px] mx-auto bg-cream border rounded-soft-lg p-12 shadow-soft-sm grid gap-9 items-center md:grid-cols-[auto_1fr] text-center md:text-left" style={{ borderColor: "rgba(27,67,50,0.08)" }}>
            <div className="w-[140px] h-[140px] rounded-full flex items-center justify-center font-display text-5xl text-white flex-shrink-0 mx-auto md:mx-0" style={{ background: "linear-gradient(135deg, var(--forest-mid), var(--forest-light))" }}>★</div>
            <div>
              <div className="text-[11px] font-semibold text-gold uppercase tracking-[1.2px] mb-1.5">Lead Instructor</div>
              <div className="font-display text-[26px] mb-1">Lead Instructor</div>
              <div className="text-sm text-stone mb-3.5">LAADC · Addiction Studies Faculty · 30+ Years of Practice</div>
              <p className="text-sm text-earth leading-[1.7]">
                A Licensed Advanced Alcohol &amp; Drug Counselor with three decades of experience as a working interventionist and college-level addiction studies instructor. Has guided hundreds of families through the intervention process. Full instructor bio and credentials shared directly with enrolled students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAT STRIP */}
      <section className="px-6 py-[60px] bg-forest text-white">
        <div className="max-w-[1000px] mx-auto grid gap-8 text-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {formatItems.map(({ icon: Icon, label, value }) => (
            <div key={label}>
              <Icon className="w-7 h-7 mx-auto mb-2" />
              <div className="text-[11px] uppercase tracking-[1px] text-white/60 mb-1">{label}</div>
              <div className="font-display text-xl text-white">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WAITLIST FORM */}
      <section id="waitlist" className="px-6 py-20 bg-sand">
        <WaitlistForm />
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold text-forest uppercase tracking-[1.2px] mb-3 text-center">Frequently Asked</div>
          <h2 className="text-center leading-tight mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>Questions, answered</h2>
          <p className="text-center text-base text-earth max-w-[600px] mx-auto mb-14 leading-[1.7]">{"If you don't see your question here, join the waitlist and we'll answer it personally."}</p>
          <FaqAccordion />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-forest text-white/70 py-[50px] px-6 text-center">
        <div className="font-display text-[22px] text-white mb-1.5">🌿 Serenity Institute</div>
        <div className="text-xs text-sage uppercase tracking-[1.5px] mb-4">Professional Training</div>
        <p className="text-[13px] max-w-[520px] mx-auto mb-6 leading-[1.7]">An independent training program preparing the next generation of certified intervention professionals. A division of HNO Consulting.</p>
        <div className="pt-5 border-t border-white/10 text-[11px] text-white/40 max-w-[900px] mx-auto">
          © 2026 Serenity Institute · HNO Consulting · The CIP credential is administered by the Pennsylvania Certification Board. Serenity Institute is not affiliated with PCB and does not issue the CIP credential directly.
        </div>
      </footer>
    </main>
  );
}