import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Implementation Services — New Plains LLC",
  description:
    "AI Implementation Services — scoping, integration, training. AI systems that ship and stick.",
};

const RFQ_MAILTO = "mailto:info@newplains.dev?subject=RFQ";

const engagements = [
  {
    title: "Receipt Automation Rollout",
    quarter: "Q1 2026",
    scope: "2 sites, 3 staff, full pipeline deployment.",
    duration: "14 days from kickoff to production.",
    value: "$22K/yr run-rate savings.",
  },
  {
    title: "Lead Triage + CRM Wiring",
    quarter: "Q2 2026",
    scope: "Multi-channel email → CRM auto-labeling.",
    duration: "21 days.",
    value: "18 hrs/wk recovered.",
  },
  {
    title: "Deal Flow Pipeline",
    quarter: "Q3 2026",
    scope: "Inbound scoring → SMS/Telegram alerts → human-in-the-loop.",
    duration: "30 days.",
    value: "First-responder capture rate tripled.",
  },
];

const phases = [
  {
    phase: "01",
    title: "Scope",
    body: "Site visit or working session. We map the process, the data, and the failure points before anything is built.",
  },
  {
    phase: "02",
    title: "Fixed Bid",
    body: "You get a fixed-scope bid within 48 hours — timeline, deliverables, and price. No hourly surprises.",
  },
  {
    phase: "03",
    title: "Integrate",
    body: "We deploy the pipeline into your existing tools — email, CRM, accounting, messaging. No rip-and-replace.",
  },
  {
    phase: "04",
    title: "Train & Hand Off",
    body: "Your staff runs it, we stay on call. Documentation and training are part of the job, not an upsell.",
  },
];

export default function AiPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-24">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5C518]">
          AI Implementation Services
        </p>
        <h1 className="[font-family:var(--font-anton)] mt-5 max-w-3xl text-5xl leading-[0.95] tracking-wide text-white md:text-7xl">
          AI SYSTEMS THAT SHIP AND STICK.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[#8FA1B7]">
          Scoping, integration, and training — framed the way a GC frames a build. We don’t sell
          demos. We close out projects with production systems your staff actually uses.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={RFQ_MAILTO}
            className="inline-flex items-center justify-center bg-[#F5C518] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#0E1B2C] transition-colors hover:bg-white"
          >
            Send RFQ
          </a>
          <Link
            href="/b/capabilities"
            className="inline-flex items-center justify-center border-2 border-[#8FA1B7]/60 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#8FA1B7] transition-colors hover:border-[#F5C518] hover:text-[#F5C518]"
          >
            View capabilities
          </Link>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="border-y border-white/10 bg-[#0A1420] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5C518]">
            Completed Engagements
          </p>
          <h2 className="[font-family:var(--font-anton)] mt-4 text-4xl tracking-wide text-white md:text-5xl">
            DELIVERED, NOT PROMISED.
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {engagements.map((e) => (
              <article key={e.title} className="border border-white/10 bg-[#0E1B2C] p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F5C518]">
                    {e.quarter}
                  </span>
                  <span className="h-2.5 w-2.5 bg-[#F5C518]" />
                </div>
                <h3 className="mt-4 text-xl font-black uppercase tracking-wide text-white">
                  {e.title}
                </h3>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">Scope</dt>
                    <dd className="mt-1 text-white/90">{e.scope}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">Duration</dt>
                    <dd className="mt-1 text-white/90">{e.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">Value</dt>
                    <dd className="mt-1 font-bold text-[#F5C518]">{e.value}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5C518]">
            How We Work
          </p>
          <h2 className="[font-family:var(--font-anton)] mt-4 text-4xl tracking-wide text-white md:text-5xl">
            THE JOB RUNS LIKE A JOB SITE.
          </h2>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((p) => (
              <div key={p.phase} className="bg-[#0E1B2C] p-8">
                <span className="[font-family:var(--font-anton)] text-4xl text-[#F5C518]">
                  {p.phase}
                </span>
                <h3 className="mt-3 text-lg font-black uppercase tracking-wide text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8FA1B7]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0A1420] py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="[font-family:var(--font-anton)] text-4xl tracking-wide text-white md:text-6xl">
            GOT A PROCESS THAT’S EATING HOURS?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[#8FA1B7]">
            Send the scope. We’ll come back with a fixed bid within 48 hours.
          </p>
          <a
            href={RFQ_MAILTO}
            className="mt-10 inline-flex items-center justify-center bg-[#F5C518] px-12 py-5 text-base font-black uppercase tracking-[0.15em] text-[#0E1B2C] transition-colors hover:bg-white"
          >
            Send RFQ
          </a>
        </div>
      </section>
    </>
  );
}
