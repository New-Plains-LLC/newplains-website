import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Consulting — New Plains LLC",
  description:
    "The $999 1-hour AI audit call, workflow automation, AI team setup, custom agents, document & spreadsheet automation, and AI training — on-site or on the web. Fixed-scope engagements from a 1-hour onboarding to a monthly retainer. info@newplains.dev",
  robots: { index: false },
};

const BUCKETS_MAILTO =
  "mailto:info@newplains.dev?subject=Three%20Buckets%20audit&body=Hi%20New%20Plains%2C%20I%27d%20like%20to%20walk%20through%20the%20three%20buckets%20and%20find%20where%20we%27re%20leaking.";

const buckets = [
  {
    name: "Get more customers",
    description:
      "Net-new leads, booked appointments, conversions from any channel. The machine does the chasing, qualifying, and following up.",
    examples: [
      "AI lead-intake that filters and qualifies in real time",
      "Automated follow-up that never sleeps",
      "Sources-sought and proposal response automation (GovCon)",
    ],
  },
  {
    name: "Make each customer worth more",
    description:
      "Keep who you have. Sell them more. Get them profitable faster. AOV, LTV, retention, repeat-purchase, upsell.",
    examples: [
      "Onboarding flows that get customers live in days, not weeks",
      "Retention and churn alerts that trigger before the customer leaves",
      "Capability-statement / past-performance updates that ship in minutes",
    ],
  },
  {
    name: "Cut costs",
    description:
      "Take hours off recurring work. Same outcome, less labor, less rework, less waste. The metrics are easy to baseline and the wins are easy to attribute.",
    examples: [
      "Operations, dispatch, and ticket triage",
      "Reporting dashboards that build themselves",
      "Invoice coding, data rekeying, weekly reports — gone",
    ],
  },
];

const rungs = [
  {
    rung: 0,
    name: "AI Onboarding",
    price: "$150–$500",
    timeline: "1 hour",
    includes: "Setup + walkthrough. No SOW, no contract — get something working in a day.",
    conversion: "~40–60% move up to an audit",
  },
  {
    rung: 1,
    name: "Workflow Audit",
    price: "$1,500–$3,000",
    timeline: "5–7 days",
    includes:
      "A 10–40 page deck mapping your workflows to the three buckets and finding the highest-ROI build.",
    conversion: "~50–70% move up to a build",
  },
  {
    rung: 2,
    name: "Build Project",
    price: "$5,000–$10,000",
    timeline: "14–21 days",
    includes:
      "One focused automation, end to end, built on the tools you already use. Anchored to the manual workflow it replaces.",
    conversion: "~30–50% move up to a retainer",
  },
  {
    rung: 3,
    name: "Monthly Retainer",
    price: "$3,000–$10,000/mo",
    timeline: "Ongoing",
    includes:
      "Continuous builds. The audit pipeline refills itself; we keep shipping what earns. Two clients at $5K/mo = $120K/yr.",
    conversion: "—",
  },
];

const AUDIT_MAILTO =
  "mailto:info@newplains.dev?subject=AI%20Audit&body=Hi%20New%20Plains%2C%20I%27d%20like%20to%20book%20a%201-hour%20AI%20audit%20call%20(%24999).%20Here%27s%20a%20bit%20about%20my%20business%3A";
const TRAINING_MAILTO = "mailto:info@newplains.dev?subject=AI%20Training";

const CAPABILITY_IMG =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop&q=80&auto=format";

const services = [
  {
    title: "$999 Audit Call",
    promise:
      "1-hour video call. We map the 3 biggest leaks in your business and put a dollar figure on each. Anything after that gets bid out as a separate engagement.",
    saves: null as string | null,
    cta: { label: "Book the call", href: AUDIT_MAILTO },
  },
  {
    title: "Workflow Automation",
    promise:
      "We replace the manual stuff — invoice coding, lead routing, data rekeying, weekly reports — with software that runs while you sleep.",
    saves: "~10–20 hrs/wk",
    cta: null,
  },
  {
    title: "AI Team Setup",
    promise:
      "A small group of specialized AI agents on a private server, each tuned to a different job (ops, finance, sales, admin). They share memory, learn your business, and act without prompting.",
    saves: "~one FTE of administrative time",
    cta: null,
  },
  {
    title: "Custom Agents",
    promise:
      "Built for one job. Sales-call summarizer. Contract red-liner. RFP drafter. Field-tech dispatcher. You name it, we build it.",
    saves: "~50% of one role's time",
    cta: null,
  },
  {
    title: "Document & Spreadsheet Automation",
    promise:
      "Your agents can read, analyze, and create Excel workbooks, Word docs, PowerPoint decks, and PDFs from raw data — on demand, in your formatting.",
    saves: "~6 hrs/wk of reporting",
    cta: null,
  },
  {
    title: "AI Training",
    promise:
      "4-hour on-site workshop (OK + surrounding) or 60-min Zoom cohort for distributed teams. “How to run your business with an AI team instead of a chatbot.” Hands-on: build your first 3 automations live.",
    saves: null,
    cta: { label: "Book training", href: TRAINING_MAILTO },
  },
];

export default function AiPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
          AI Consulting · Fixed Price
        </p>
        <h1 className="font-heading max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-brand-charcoal sm:text-6xl md:text-7xl">
          AI that pays for itself.
        </h1>
        <p className="mt-7 max-w-2xl text-xl font-medium text-brand-charcoal md:text-2xl">
          You don&apos;t need another chatbot. You need the manual work in your business to stop
          happening. We audit, design, and build the automation — and we hand you a team that
          keeps it running.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={AUDIT_MAILTO}
            className="inline-flex items-center justify-center rounded-full bg-brand-copper px-8 py-4 text-base font-semibold text-brand-cream shadow-lg shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
          >
            Book a 1-hour audit call → $999
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-brand-charcoal/20 px-8 py-4 text-base font-semibold text-brand-charcoal transition-colors hover:border-brand-copper hover:text-brand-copper"
          >
            See the services
          </a>
        </div>
      </section>

      {/* THREE BUCKETS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-brand-charcoal/10 bg-white/60 p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            The Three Buckets
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Every project we ship rolls up into one of these.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-brand-charcoal/70">
            If a build doesn&apos;t move the needle in one of these three buckets, we
            don&apos;t pitch it — clients don&apos;t pay for features, they pay for outcomes.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {buckets.map((b) => (
              <div
                key={b.name}
                className="flex flex-col rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-6"
              >
                <h3 className="font-heading text-xl font-semibold text-brand-copper">
                  {b.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">
                  {b.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {b.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2">
                      <span className="mt-0.5 text-brand-green-light">•</span>
                      <span className="text-brand-charcoal/80">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={BUCKETS_MAILTO}
              className="inline-flex items-center justify-center rounded-full bg-brand-charcoal px-7 py-3 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-charcoal/90"
            >
              Walk us through where you&apos;re leaking →
            </a>
            <p className="text-sm text-brand-charcoal/60">
              Starts the audit call. We reply within one business day with a call slot.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITY IMAGERY */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-brand-charcoal/10 shadow-sm">
          <Image
            src={CAPABILITY_IMG}
            alt="A team working together on laptops in a workshop"
            fill
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B2D45]/90 via-[#1B2D45]/50 to-transparent p-6 md:p-8">
            <p className="max-w-2xl text-sm font-medium leading-relaxed text-white/90 md:text-base">
              Your team of specialized AI agents on a private server — ops, finance, sales, and
              admin — sharing memory, learning your business, and acting without prompting.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-brand-copper/15 bg-white/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            Services · Fixed Scope
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Six ways we take the manual out of your business.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-7"
              >
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-charcoal/70">
                  {s.promise}
                </p>
                {s.saves && (
                  <div className="mt-5">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-brand-copper">
                      What it saves you
                    </p>
                    <p className="mt-1 text-sm font-semibold text-brand-charcoal">{s.saves}</p>
                  </div>
                )}
                {s.cta && (
                  <a
                    href={s.cta.href}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-copper px-6 py-3 text-sm font-semibold text-brand-cream shadow-md shadow-brand-copper/20 transition-colors hover:bg-brand-copper-light"
                  >
                    {s.cta.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE LADDER */}
      <section className="border-y border-brand-copper/15 bg-brand-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            The Service Ladder
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Four rungs. Start anywhere. Climb as it earns.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-brand-charcoal/70">
            You don&apos;t have to commit to a project to start. Each rung is earned by
            the one below it. The first call is always the hardest — we keep that one
            cheap on purpose.
          </p>
          <ol className="mt-12 space-y-4">
            {rungs.map((r) => (
              <li
                key={r.rung}
                className="rounded-2xl border border-brand-charcoal/10 bg-white p-6 md:p-7"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold text-brand-charcoal">
                    <span className="mr-2 text-brand-copper">Rung {r.rung}</span>
                    {r.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-semibold text-brand-charcoal">{r.price}</span>
                    <span className="text-brand-charcoal/60">{r.timeline}</span>
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/70">
                  {r.includes}
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-brand-copper/80">
                  Next: {r.conversion}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
          Why now
        </p>
        <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
          The 2026 AI gap
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
          <p>
            Two pieces of verified research frame the moment: <strong>76%</strong> of CEOs
            now have a Chief AI Officer in 2026 (IBM Institute for Business Value,
            partner-ship with Oxford Economics), and <strong>88%</strong> of
            organizations use AI in at least one business function (McKinsey State of
            AI in 2025, n=1,983). But only one in three has scaled AI
            enterprise-wide. Leadership is moving faster than operations. That gap is
            the addressable market for everything we sell.
          </p>
          <p>
            The demand signal is clear too: <strong>AI integration work on Upwork
            grew 178% year over year</strong> in their 2026 In-Demand Skills report.
            Operators who ship now capture the compounding advantage. Everyone else
            catches up later and more expensively.
          </p>
          <p>
            You don&apos;t need a strategy deck. You need one workflow that earns its
            keep this month. That&apos;s a Rung 1 audit. Everything after flows from
            there.
          </p>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-[#1B2D45] px-8 py-12 text-center shadow-xl shadow-[#1B2D45]/20 md:px-14 md:py-16">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Tell us what&apos;s manual. We&apos;ll tell you if we can automate it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              One email starts the audit. We reply within one business day with your call slot.
            </p>
            <a
              href={AUDIT_MAILTO}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-copper px-10 py-5 text-lg font-semibold text-brand-cream shadow-xl shadow-black/20 transition-colors hover:bg-brand-copper-light"
            >
              Book the $999 Audit
            </a>
            <p className="mt-5 text-sm text-white/50">
              info@newplains.dev · subject: AI Audit
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
