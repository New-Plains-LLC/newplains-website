import Link from "next/link";

const AUDIT_MAILTO = "mailto:dsskaggs@gmail.com?subject=AI%20Audit";

const caseStudies = [
  {
    title: "Receipt Processing Automation",
    before: "14 hrs/wk of manual expense coding across 2 bookkeepers.",
    after: "4 hrs/wk review only.",
    outcome: "~$22K/yr saved in labor.",
    tool: "Gmail + OpenAI Vision + n8n + QuickBooks webhook",
  },
  {
    title: "Lead-to-CRM Auto-Labeling",
    before: "257 inbound emails/day, 0% categorized, sales wasting 2 hrs/day triaging.",
    after: "98% auto-labeled, sales triage < 15 min/day.",
    outcome: "~$18K/yr recovered selling time.",
    tool: "Email → AI classifier → CRM field updates",
  },
  {
    title: "Property Deal Flow Routing",
    before: "New leads sat in inbox 4-6 hrs before a human saw them.",
    after: "Scored + routed in <90 seconds, with Telegram alert.",
    outcome:
      "First-responder capture rate up ~3x; one $14K deal traced directly to speed-of-response.",
    tool: "n8n → AI scoring → Telegram alerts",
  },
];

const auditSteps = [
  {
    step: "Day 0",
    title: "Kickoff call",
    body: "We map your revenue operations, pull your inbox and workflow stats, and agree the two highest-leverage processes to attack.",
  },
  {
    step: "Days 1–2",
    title: "Find the leak",
    body: "We measure exactly where hours and money are going — manual coding, triage, follow-up, rekeying. Nothing gets fixed blind.",
  },
  {
    step: "Days 3–5",
    title: "Build the proof",
    body: "A working pipeline on your data — not a slide deck. You watch it process real work before you pay a cent.",
  },
  {
    step: "Day 7",
    title: "Deliver the report",
    body: "You get the savings model, the build spec, and a fixed quote to productionize. If we found under $20K/yr, the audit is free.",
  },
];

const naicsCodes = ["561210", "722310", "561720", "561730", "561790"];

const naicsDescriptions = [
  "Facilities Support",
  "Food Service",
  "Janitorial",
  "Landscaping",
  "Other Services to Buildings",
];

export default function ConceptAPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-24 md:pt-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
          AI Consulting · Fixed Price · 7 Days
        </p>
        <h1 className="font-heading max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-brand-charcoal sm:text-5xl md:text-6xl">
          We find the $50K/yr your business is leaving on the table.
        </h1>
        <p className="mt-7 max-w-2xl text-xl font-medium text-brand-charcoal md:text-2xl">
          7-day AI audit. $999. No recovery = no fee.
        </p>
        <p className="mt-3 max-w-2xl text-lg text-brand-charcoal/70">
          Backed by a working AI delivery pipeline, not a deck.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={AUDIT_MAILTO}
            className="inline-flex items-center justify-center rounded-full bg-brand-copper px-8 py-4 text-base font-semibold text-brand-cream shadow-lg shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
          >
            Book the $999 Audit
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center rounded-full border border-brand-charcoal/20 px-8 py-4 text-base font-semibold text-brand-charcoal transition-colors hover:border-brand-copper hover:text-brand-copper"
          >
            See the results
          </a>
        </div>
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-brand-copper/15 pt-6 text-sm font-medium text-brand-charcoal/60">
          <span>SAM.gov registered</span>
          <span className="text-brand-copper">·</span>
          <span>UEI on file · CAGE assigned</span>
          <span className="text-brand-copper">·</span>
          <span>HUBZone-eligible</span>
          <span className="text-brand-copper">·</span>
          <span>Fixed scope, fixed deliverable</span>
        </div>
      </section>

      {/* RISK REVERSAL BANNER */}
      <section className="border-y border-brand-copper/15 bg-brand-green/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-6 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-left">
          <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-cream">
            No-recovery guarantee
          </span>
          <p className="text-sm font-medium text-brand-charcoal/80 sm:text-base">
            Pay at end if the audit identifies $20K+ in annualized savings — otherwise the audit is free.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="bg-white/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            Case Studies
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Recent engagements, measured in dollars.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <article
                key={cs.title}
                className="flex flex-col rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-copper/10"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand-copper">
                  Case {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading mt-3 text-xl font-semibold text-brand-charcoal">
                  {cs.title}
                </h3>
                <dl className="mt-5 flex flex-1 flex-col gap-4 text-sm">
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-brand-charcoal/45">
                      Before
                    </dt>
                    <dd className="mt-1 text-brand-charcoal/80">{cs.before}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-brand-charcoal/45">
                      After
                    </dt>
                    <dd className="mt-1 font-medium text-brand-green">{cs.after}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-brand-charcoal/45">
                      Outcome
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-brand-copper">{cs.outcome}</dd>
                  </div>
                </dl>
                <p className="mt-6 border-t border-brand-charcoal/10 pt-4 text-xs leading-relaxed text-brand-charcoal/60">
                  Tooling: {cs.tool}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT PROCESS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            The Process
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            One week. Four steps. Zero surprises.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
            {auditSteps.map((s) => (
              <div key={s.step} className="bg-brand-cream p-7">
                <span className="font-heading text-sm font-semibold tracking-wide text-brand-copper">
                  {s.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-brand-charcoal">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVCON CREDIBILITY — CARD GRID */}
      <section className="bg-white/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            GovCon Credibility
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Registered, vetted, and ready to bid.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-brand-copper/25 bg-brand-cream p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-copper">
                SAM.gov
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
                Registered — UEI on file, CAGE assigned, entity status: Active.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-copper">
                NAICS Coverage
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {naicsCodes.map((code, i) => (
                  <li
                    key={code}
                    className="rounded-md bg-brand-green/15 px-2 py-1 text-xs font-semibold text-brand-charcoal"
                    title={naicsDescriptions[i]}
                  >
                    {code}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-brand-charcoal/60">
                Facilities support, food service, janitorial, landscaping, and other building services.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-copper">
                Set-Asides
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
                HUBZone-eligible (verify) · 8(a)-eligibility under review.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-copper">
                Past Performance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
                Supply-chain operations experience via CoBank and AGCO engagements (confidential figures withheld).
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-brand-charcoal p-8 sm:flex-row sm:items-center">
            <p className="font-heading max-w-xl text-xl font-medium leading-snug text-brand-cream">
              “Bid us. We’ll respond with a fixed-scope RFQ reply within 48 hrs.”
            </p>
            <Link
              href="/a/govcon"
              className="shrink-0 rounded-full border border-brand-wheat px-6 py-3 text-sm font-semibold text-brand-wheat transition-colors hover:bg-brand-wheat hover:text-brand-charcoal"
            >
              See the GovCon page
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            Fixed price · Fixed scope · Fixed deliverable
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-brand-charcoal md:text-5xl">
            The fix ships in 7 days. Or you don’t pay.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-brand-charcoal/70">
            One email starts the audit. We reply within one business day with your kickoff slot.
          </p>
          <a
            href={AUDIT_MAILTO}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-copper px-10 py-5 text-lg font-semibold text-brand-cream shadow-xl shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
          >
            Book the $999 Audit
          </a>
          <p className="mt-5 text-sm text-brand-charcoal/50">
            dsskaggs@gmail.com · subject: AI Audit
          </p>
        </div>
      </section>
    </>
  );
}
