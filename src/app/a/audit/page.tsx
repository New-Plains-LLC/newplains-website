import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 7-Day AI Audit — New Plains LLC",
  description:
    "$999 fixed-price, 7-day AI audit. Fixed scope, fixed deliverable, no-recovery/no-fee guarantee.",
};

const AUDIT_MAILTO = "mailto:dsskaggs@gmail.com?subject=AI%20Audit";

const inclusions = [
  {
    title: "Revenue-ops map",
    body: "A documented walkthrough of the manual processes costing you hours — inbox triage, expense coding, lead routing, rekeying.",
  },
  {
    title: "Savings model",
    body: "Annualized dollar figure per process, based on your real volumes and labor rates — not industry averages.",
  },
  {
    title: "Working proof, not a deck",
    body: "A live pipeline on your data by day 5. You watch it process real work before you pay anything.",
  },
  {
    title: "Build spec + fixed quote",
    body: "The production architecture and a fixed price to ship it — so the audit doubles as your implementation proposal.",
  },
];

const timeline = [
  { day: "Day 0", text: "Kickoff call — agree the two highest-leverage processes." },
  { day: "Days 1–2", text: "Measure the leak — hours and dollars per process." },
  { day: "Days 3–5", text: "Build the working pipeline proof on your data." },
  { day: "Day 7", text: "Delivery — savings report, build spec, fixed quote." },
];

export default function AuditPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
          The Offer · Fixed Price
        </p>
        <h1 className="font-heading max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-brand-charcoal sm:text-5xl md:text-6xl">
          The 7-Day AI Audit.
        </h1>
        <p className="mt-6 text-2xl font-semibold text-brand-copper">$999</p>
        <p className="mt-2 max-w-2xl text-lg text-brand-charcoal/70">
          We find the money your business is already losing to manual work — and we ship the fix in 7
          days. Or you don’t pay.
        </p>
        <a
          href={AUDIT_MAILTO}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-copper px-8 py-4 text-base font-semibold text-brand-cream shadow-lg shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
        >
          Book the $999 Audit
        </a>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-white/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            Fixed Scope
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            What you get for $999.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {inclusions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-7"
              >
                <h3 className="font-heading text-lg font-semibold text-brand-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            The Week
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Seven days, end to end.
          </h2>
          <ol className="mt-12 space-y-4">
            {timeline.map((t) => (
              <li
                key={t.day}
                className="flex flex-col gap-2 rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <span className="font-heading w-32 shrink-0 text-lg font-semibold text-brand-copper">
                  {t.day}
                </span>
                <p className="text-brand-charcoal/80">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RISK REVERSAL */}
      <section className="bg-brand-charcoal py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-wheat">
            Risk Reversal
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-brand-cream md:text-4xl">
            If we don’t find $20K+ in annualized savings, the audit is free.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-cream/70">
            You pay at the end, and only if the numbers clear the bar. We put the fee on the table
            because the pipeline already works — this is a measurement exercise, not a bet.
          </p>
        </div>
      </section>

      {/* AFTER THE AUDIT */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 rounded-3xl border border-brand-copper/25 bg-white/60 p-8 md:grid-cols-2 md:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
                What Happens Next
              </p>
              <h2 className="font-heading mt-4 text-2xl font-semibold tracking-tight text-brand-charcoal md:text-3xl">
                The audit is the front door to an implementation retainer.
              </h2>
            </div>
            <div>
              <p className="text-brand-charcoal/75">
                Most clients move straight into a production retainer ($5K–$25K/mo) once the savings
                model clears. You get the same team that built the proof — scoping, integration,
                training, and ongoing tuning.
              </p>
              <Link
                href="/a/govcon"
                className="mt-5 inline-block text-sm font-semibold text-brand-copper transition-colors hover:text-brand-copper-light"
              >
                Also serving federal clients → GovCon page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Start your audit today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-charcoal/70">
            One email. We reply within one business day with your kickoff slot.
          </p>
          <a
            href={AUDIT_MAILTO}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-copper px-10 py-5 text-lg font-semibold text-brand-cream shadow-xl shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
          >
            Book the $999 Audit
          </a>
        </div>
      </section>
    </>
  );
}
