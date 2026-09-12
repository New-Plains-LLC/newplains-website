import Link from "next/link";
import BlockTower from "./BlockTower";

/* Concept D — "The Showroom"
   Brutalist editorial on warm gray. Flat surfaces, zero shadows,
   condensed uppercase display type, mint + voltage accents. */

const AUDIT_MAILTO =
  "mailto:info@newplains.dev?subject=AI%20Audit&body=Hi%20New%20Plains%2C%20I%27d%20like%20to%20book%20a%201-hour%20AI%20audit%20call%20(%24999).%20Here%27s%20a%20bit%20about%20my%20business%3A";

/* Case studies — from /a COPY.md, framed generically (client pipeline work) */
const CASES = [
  {
    tag: "BACK OFFICE",
    num: "01",
    title: "RECEIPT PROCESSING",
    before: "14 hrs/wk of manual expense coding across 2 bookkeepers.",
    after: "4 hrs/wk review only.",
    metric: "$22K",
    metricLabel: "/ YR RECOVERED",
    stack: "GMAIL → VISION OCR → N8N → QUICKBOOKS",
  },
  {
    tag: "SALES OPS",
    num: "02",
    title: "LEAD TRIAGE",
    before: "257 inbound emails/day, zero categorization, 2 hrs/day lost to sorting.",
    after: "98% auto-labeled. Triage under 15 min/day.",
    metric: "$18K",
    metricLabel: "/ YR RECOVERED",
    stack: "INBOX → AI SCORING → CRM → TELEGRAM",
  },
  {
    tag: "REVENUE",
    num: "03",
    title: "DEAL FLOW ROUTING",
    before: "New leads sat unseen in an inbox 4–6 hours.",
    after: "Scored and routed in under 90 seconds.",
    metric: "3×",
    metricLabel: "RESPONSE CAPTURE",
    stack: "WEBHOOK → AGENT REVIEW → ALERT",
  },
];

const PROCESS = [
  {
    step: "01",
    label: "AUDIT",
    body: "A 45-minute working session — not a sales pitch. We map where your hours actually go.",
  },
  {
    step: "02",
    label: "PLAN",
    body: "Within four days: a written plan. Quick wins first, the exact tools, the order to do them in.",
  },
  {
    step: "03",
    label: "AUTOMATE",
    body: "We ship the systems. They run in production. You get your evenings back.",
  },
];

/* Three Buckets — from /a/ai */
const BUCKETS = [
  {
    name: "GET MORE CUSTOMERS",
    description:
      "Net-new leads, booked appointments, conversions from any channel. The machine does the chasing, qualifying, and following up.",
    examples: [
      "AI lead-intake that filters and qualifies in real time",
      "Automated follow-up that never sleeps",
      "Speed-to-lead: first response in seconds, not hours",
    ],
  },
  {
    name: "MAKE EACH CUSTOMER WORTH MORE",
    description:
      "Keep who you have. Sell them more. Get them profitable faster. AOV, LTV, retention, repeat-purchase, upsell.",
    examples: [
      "Onboarding flows that get customers live in days, not weeks",
      "Retention and churn alerts that trigger before the customer leaves",
      "Upsell and renewal sequences that run themselves",
    ],
  },
  {
    name: "CUT COSTS",
    description:
      "Take hours off recurring work. Same outcome, less labor, less rework, less waste. Easy to baseline, easy to attribute.",
    examples: [
      "Operations, dispatch, and ticket triage",
      "Reporting dashboards that build themselves",
      "Invoice coding, data rekeying, weekly reports — gone",
    ],
  },
];

/* Services — from /a/ai */
const SERVICES = [
  {
    title: "WORKFLOW AUTOMATION",
    promise:
      "We replace the manual stuff — invoice coding, lead routing, data rekeying, weekly reports — with software that runs while you sleep.",
    saves: "~10–20 HRS/WK",
  },
  {
    title: "AI TEAM SETUP",
    promise:
      "A small group of specialized AI agents on a private server, each tuned to a different job (ops, finance, sales, admin). They share memory, learn your business, and act without prompting.",
    saves: "~ONE FTE OF ADMIN TIME",
  },
  {
    title: "CUSTOM AGENTS",
    promise:
      "Built for one job. Sales-call summarizer. Contract red-liner. RFP drafter. Field-tech dispatcher. You name it, we build it.",
    saves: "~50% OF ONE ROLE",
  },
  {
    title: "DOC & SPREADSHEET AUTOMATION",
    promise:
      "Your agents can read, analyze, and create Excel workbooks, Word docs, PowerPoint decks, and PDFs from raw data — on demand, in your formatting.",
    saves: "~6 HRS/WK OF REPORTING",
  },
  {
    title: "AI TRAINING",
    promise:
      "4-hour on-site workshop (OK + surrounding) or 60-min Zoom cohort for distributed teams. Hands-on: build your first 3 automations live.",
    saves: null,
  },
];

/* Offer ladder — VSL four paths */
const LADDER = [
  {
    num: "01",
    name: "AI AUDIT",
    meta: "$999",
    body: "A 45-minute working session. We map where your hours go, find the tasks a computer should be doing, and put real dollar numbers on it. Within four days: a written plan with quick wins, exact tools, and the order to do them in.",
  },
  {
    num: "02",
    name: "AI CONCIERGE",
    meta: "MONTHLY",
    body: "Two working calls with Shawn every month, plus direct messaging. We build every system together, on the calls. You stay in control.",
  },
  {
    num: "03",
    name: "SCOPED PROJECT",
    meta: "FIXED SCOPE",
    body: "One defined build. Receipts, lead routing, reporting — set up, tested, handed over, done.",
  },
  {
    num: "04",
    name: "MANAGED AGENTS",
    meta: "FULL SERVICE",
    body: "We build and run everything — unlimited agents, unlimited automations — and you get one weekly report.",
  },
];

export default function ConceptDPage() {
  return (
    <>
      {/* HERO — split: massive condensed headline left, black proof block right */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-10 md:pt-16">
        <p className="mb-8 [font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#444444]">
          AI CONSULTING / SMALL BUSINESS / OKLAHOMA, USA
        </p>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <h1 className="[font-family:var(--font-cond-d)] text-[clamp(64px,12vw,130px)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-black">
            We find the ten hours your week is losing.
          </h1>
          <div className="flex flex-col justify-end gap-8">
            <div className="order-first lg:order-none">
              <BlockTower />
              <p className="mt-4 text-center [font-family:var(--font-mono-d)] text-xs leading-[1.6] tracking-[-0.03em] text-[#979797]">
                EVERY BLOCK A TASK THAT NOW RUNS ITSELF
              </p>
            </div>
            <p className="max-w-md text-[16px] leading-[1.25] text-[#444444]">
              Quotes that go out late. Follow-ups that never happen. Invoices
              that wait until Friday night. You built a business where
              everything routes through a human — and that human is you. We
              map it, price it, and ship the systems that fix it.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={AUDIT_MAILTO}
                className="rounded-lg bg-black px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#2f2f2f]"
              >
                Book the $999 Audit
              </a>
              <Link
                href="#work"
                className="rounded-md border-[1.5px] border-[#444444] px-6 py-3.5 text-base font-medium text-[#444444] transition-colors hover:border-black hover:text-black"
              >
                See the work
              </Link>
            </div>
          </div>
        </div>

        {/* Proof strip — inverted black band with mono metrics */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-black sm:grid-cols-3">
          {[
            { m: "10 HRS", l: "TYPICAL WEEKLY RECOVERY PER AUDIT" },
            { m: "4 DAYS", l: "FROM SESSION TO WRITTEN PLAN" },
            { m: "$999", l: "FIXED PRICE. FIXED SCOPE. FIXED DELIVERABLE" },
          ].map((s) => (
            <div key={s.m} className="bg-black px-8 py-10">
              <p className="[font-family:var(--font-cond-d)] text-5xl font-bold uppercase leading-none tracking-[-0.02em] text-white">
                {s.m}
              </p>
              <p className="mt-3 [font-family:var(--font-mono-d)] text-xs leading-[1.6] tracking-[-0.03em] text-[#979797]">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* THE WORK — case study cards */}
      <section id="work" className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="[font-family:var(--font-cond-d)] text-[clamp(48px,8vw,80px)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-black">
            The work
          </h2>
          <p className="[font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#979797]">
            3 PIPELINES · ALL RUNNING IN PRODUCTION
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CASES.map((c) => (
            <article key={c.num} className="flex flex-col gap-5 rounded-3xl bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#d1ffca] px-4 py-1 [font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-black">
                  {c.tag}
                </span>
                <span className="[font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#979797]">
                  {c.num}
                </span>
              </div>
              <h3 className="[font-family:var(--font-sans-d)] text-[28px] font-medium uppercase leading-[1.1] tracking-[-0.84px] text-black">
                {c.title}
              </h3>
              <p className="text-sm leading-[1.3] text-[#444444]">
                <span className="text-[#979797]">Before — </span>
                {c.before}
              </p>
              <p className="text-sm leading-[1.3] text-black">
                <span className="text-[#979797]">After — </span>
                {c.after}
              </p>
              <div className="mt-auto border-t border-[#e5e5e5] pt-5">
                <p className="[font-family:var(--font-cond-d)] text-6xl font-bold uppercase leading-none tracking-[-0.02em] text-black">
                  {c.metric}
                  <span className="ml-2 align-middle [font-family:var(--font-mono-d)] text-[10px] font-normal tracking-[-0.03em] text-[#979797]">
                    {c.metricLabel}
                  </span>
                </p>
                <p className="mt-4 [font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#979797]">
                  {c.stack}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* THE AUDIT — full-width inverted block, top-arc */}
      <section id="audit" className="rounded-t-[64px] bg-black px-6 py-20 md:rounded-t-[64px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-8 [font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#d1ffca]">
            THE OFFER
          </p>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="[font-family:var(--font-cond-d)] text-[clamp(48px,8vw,80px)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-white">
                The $999 AI audit
              </h2>
              <p className="mt-8 max-w-md text-base leading-[1.25] text-[#979797]">
                A 45-minute working session. We map where your hours go, find
                the tasks a computer should be doing, and put real dollar
                numbers on it — what your hour is worth, how many you&apos;re
                losing, what that costs every month. Within four days you get
                a written plan: quick wins, exact tools, the order to do them
                in.
              </p>
              <a
                href={AUDIT_MAILTO}
                className="mt-10 inline-block rounded-lg bg-white px-6 py-3.5 text-base font-medium text-black transition-colors hover:bg-[#d1ffca]"
              >
                Book the Audit
              </a>
            </div>
            <div className="flex flex-col gap-px overflow-hidden rounded-3xl bg-[#2f2f2f]">
              {PROCESS.map((p) => (
                <div key={p.step} className="bg-black px-8 py-8">
                  <div className="mb-3 flex items-center gap-4">
                    <span className="[font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#d1ffca]">
                      {p.step}
                    </span>
                    <span className="[font-family:var(--font-sans-d)] text-xl font-medium uppercase tracking-[-0.02em] text-white">
                      {p.label}
                    </span>
                  </div>
                  <p className="text-sm leading-[1.3] text-[#979797]">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LADDER — the four rungs (black section) */}
      <section id="ladder" className="bg-black px-6 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-t border-[#2f2f2f] pt-20">
            <h2 className="[font-family:var(--font-cond-d)] text-[clamp(48px,8vw,80px)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-white">
              The ladder
            </h2>
            <p className="[font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#979797]">
              START ANYWHERE · EACH RUNG EARNS THE NEXT
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {LADDER.map((r) => (
              <article
                key={r.num}
                className="flex flex-col justify-between gap-8 rounded-3xl bg-[#0d0d0d] p-8 ring-1 ring-[#2f2f2f]"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="[font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#979797]">
                      {r.num}
                    </span>
                    <span className="rounded-full bg-[#2f2f2f] px-4 py-1 [font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#d1ffca]">
                      {r.meta}
                    </span>
                  </div>
                  <h3 className="[font-family:var(--font-sans-d)] text-[28px] font-medium uppercase leading-[1.1] tracking-[-0.84px] text-white">
                    {r.name}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-[1.3] text-[#979797]">
                    {r.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUCKETS — every build rolls up into one of three */}
      <section id="buckets" className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="[font-family:var(--font-cond-d)] text-[clamp(48px,8vw,80px)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-black">
            Three buckets
          </h2>
          <p className="[font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#979797]">
            IF IT DOESN&apos;T MOVE ONE, WE DON&apos;T PITCH IT
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BUCKETS.map((b, i) => (
            <article key={b.name} className="flex flex-col gap-5 rounded-3xl bg-white p-6">
              <span className="w-fit rounded-full bg-[#d1ffca] px-4 py-1 [font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-black">
                0{i + 1}
              </span>
              <h3 className="[font-family:var(--font-sans-d)] text-[22px] font-medium uppercase leading-[1.1] tracking-[-0.6px] text-black">
                {b.name}
              </h3>
              <p className="text-sm leading-[1.3] text-[#444444]">{b.description}</p>
              <ul className="mt-auto space-y-2 border-t border-[#e5e5e5] pt-4">
                {b.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2 text-sm text-[#444444]">
                    <span className="text-black">—</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES — what we build */}
      <section id="services" className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="[font-family:var(--font-cond-d)] text-[clamp(48px,8vw,80px)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-black">
            What we build
          </h2>
          <p className="[font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#979797]">
            FIXED SCOPE · FIXED PRICE · SHIPPED WORKING
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl bg-white">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`grid gap-4 px-8 py-8 sm:grid-cols-12 ${i > 0 ? "border-t border-[#e5e5e5]" : ""}`}
            >
              <h3 className="sm:col-span-4 [font-family:var(--font-sans-d)] text-xl font-medium uppercase leading-[1.1] tracking-[-0.6px] text-black">
                {s.title}
              </h3>
              <p className="sm:col-span-5 text-sm leading-[1.3] text-[#444444]">{s.promise}</p>
              <p className="sm:col-span-3 text-right [font-family:var(--font-mono-d)] text-xs leading-[1.6] tracking-[-0.03em] text-[#979797]">
                {s.saves ? <span className="rounded-full bg-[#d1ffca] px-3 py-1 text-black">SAVES {s.saves}</span> : ""}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA — voltage yellow accent */}
      <section className="mx-auto max-w-[1200px] px-6 pb-4">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[64px] bg-white p-10 md:flex-row md:items-center md:p-16">
          <div>
            <p className="mb-4 [font-family:var(--font-mono-d)] text-xs tracking-[-0.03em] text-[#979797]">
              NEXT STEP · 01
            </p>
            <h2 className="[font-family:var(--font-cond-d)] text-[clamp(40px,6vw,64px)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-black">
              Ten hours.
              <br />
              One audit.
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href={AUDIT_MAILTO}
              className="rounded-lg bg-black px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#2f2f2f]"
            >
              Book the $999 Audit
            </a>
            <p className="[font-family:var(--font-mono-d)] text-xs leading-[1.6] tracking-[-0.03em] text-[#979797]">
              REPLY WITHIN 1 BUSINESS DAY ·{" "}
              <span className="bg-[#fff100] px-1 text-black">INFO@NEWPLAINS.DEV</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
