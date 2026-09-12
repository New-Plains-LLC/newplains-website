import Link from "next/link";

const AUDIT_MAILTO =
  "mailto:info@newplains.dev?subject=AI%20Audit&body=Hi%20New%20Plains%2C%20I%27d%20like%20to%20book%20a%2045-minute%20AI%20audit%20call%20%28%24999%29.%20Here%27s%20a%20bit%20about%20my%20business%3A";

/* Case studies — vetted content (no tool jargon) */
const CASES = [
  {
    tag: "BACK OFFICE",
    title: "Receipt processing",
    before: "14 hrs/wk of manual expense coding across 2 bookkeepers.",
    after: "4 hrs/wk review only.",
    metric: "$22K",
    metricLabel: "per year recovered",
    note: "Receipts coded overnight. Books current by Monday.",
  },
  {
    tag: "SALES OPS",
    title: "Lead triage",
    before: "257 inbound emails/day, zero categorization, 2 hrs/day lost to sorting.",
    after: "98% auto-labeled. Triage under 15 min/day.",
    metric: "$18K",
    metricLabel: "per year recovered",
    note: "Every lead labeled and routed before you open your inbox.",
  },
  {
    tag: "REVENUE",
    title: "Deal flow routing",
    before: "New leads sat unseen in an inbox 4–6 hours.",
    after: "Scored and routed in under 90 seconds.",
    metric: "90 sec",
    metricLabel: "lead response — was 4–6 hours",
    note: "You get a text the moment a real buyer raises their hand.",
  },
];

/* Three Buckets */
const BUCKETS = [
  {
    name: "Get more customers",
    description:
      "Net-new leads, booked appointments, conversions from any channel. The machine does the chasing, qualifying, and following up.",
    examples: [
      "AI lead-intake that filters and qualifies in real time",
      "Automated follow-up that never sleeps",
      "Speed-to-lead: first response in seconds, not hours",
    ],
  },
  {
    name: "Make each customer worth more",
    description:
      "Keep who you have. Sell them more. Get them profitable faster. AOV, LTV, retention, repeat-purchase, upsell.",
    examples: [
      "Onboarding flows that get customers live in days, not weeks",
      "Retention and churn alerts that trigger before the customer leaves",
      "Upsell and renewal sequences that run themselves",
    ],
  },
  {
    name: "Cut costs",
    description:
      "Take hours off recurring work. Same outcome, less labor, less rework, less waste. Easy to baseline, easy to attribute.",
    examples: [
      "Operations, dispatch, and ticket triage",
      "Reporting dashboards that build themselves",
      "Invoice coding, data rekeying, weekly reports — gone",
    ],
  },
];

/* Services */
const SERVICES = [
  {
    title: "Workflow automation",
    promise:
      "We replace the manual stuff — invoice coding, lead routing, data rekeying, weekly reports — with software that runs while you sleep.",
    saves: "~10–20 hrs/wk",
  },
  {
    title: "AI team setup",
    promise:
      "A small group of specialized AI agents on a private server, each tuned to a different job (ops, finance, sales, admin). They share memory, learn your business, and act without prompting.",
    saves: "~$40K/yr in admin salary",
  },
  {
    title: "Custom agents",
    promise:
      "Built for one job. Sales-call summarizer. Contract red-liner. RFP drafter. Field-tech dispatcher. You name it, we build it.",
    saves: "~50% of one role",
  },
  {
    title: "Doc & spreadsheet automation",
    promise:
      "Your agents can read, analyze, and create Excel workbooks, Word docs, PowerPoint decks, and PDFs from raw data — on demand, in your formatting.",
    saves: "~6 hrs/wk of reporting",
  },
  {
    title: "AI training",
    promise:
      "4-hour on-site workshop (OK + surrounding) or 60-min Zoom cohort for distributed teams. Hands-on: build your first 3 automations live.",
    saves: null,
  },
];

/* Ladder */
const LADDER = [
  {
    num: "01",
    name: "AI Audit",
    meta: "$999",
    body: "A 45-minute working session. We map where your hours go, find the tasks a computer should be doing, and put real dollar numbers on it. Within four days: a written plan with quick wins, exact tools, and the order to do them in.",
  },
  {
    num: "02",
    name: "AI Concierge",
    meta: "Monthly",
    body: "Two working calls with Shawn every month, plus direct messaging. We build every system together, on the calls. You stay in control.",
  },
  {
    num: "03",
    name: "Scoped Project",
    meta: "Fixed scope",
    body: "One defined build. Receipts, lead routing, reporting — set up, tested, handed over, done.",
  },
  {
    num: "04",
    name: "Managed Agents",
    meta: "Full service",
    body: "We build and run everything — unlimited agents, unlimited automations — and you get one weekly report.",
  },
];

export default function ConceptGPage() {
  return (
    <>
      {/* HERO — editorial display type on white, yellow wash behind headline */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-16">
        <div className="relative">
          <div
            aria-hidden
            className="absolute -left-10 -top-10 h-[340px] w-[70%] rounded-[24px] bg-gradient-to-b from-[#cccc25] to-[#cacd78] opacity-40"
          />
          <div className="relative">
            <p className="mb-6 text-[14px] font-medium tracking-[0.063em] text-[#17150e]">
              AI CONSULTING / OWNER-OPERATORS / OKLAHOMA, USA
            </p>
            <h1 className="max-w-[16ch] font-[family-name:var(--font-classic-g)] text-[clamp(64px,10vw,144px)] leading-[0.85] tracking-[-0.03em] text-[#17150e]">
              We find the ten hours your week is losing.
            </h1>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <p className="max-w-md text-[16px] leading-[1.5] text-[#17150e]">
            Quotes that go out late. Follow-ups that never happen. Invoices
            that wait until Friday night. You built a business where everything
            routes through a human — and that human is you. We map it, price
            it, and ship the systems that fix it.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={AUDIT_MAILTO}
                className="rounded-[1440px] bg-[#cccc25] px-8 py-3 text-[16px] font-medium text-[#17150e] transition-colors hover:bg-[#cacd78]"
              >
                Book the $999 Audit
              </a>
              <Link
                href="#work"
                className="rounded-[1440px] border-[1.5px] border-[#17150e] px-8 py-3 text-[16px] font-medium text-[#17150e] transition-colors hover:bg-[#f0f7f6]"
              >
                See the work
              </Link>
            </div>
            <p className="text-[14px] font-medium leading-[1.4] text-[#949494]">
              You email → I reply within a day with two time slots → 45-min
              call. $999 invoiced after the session.
            </p>
          </div>
        </div>
      </section>

      {/* WHO — mint band, Shawn intro card */}
      <section className="bg-[#f0f7f6] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="inline-block rounded-[8px] border-[1.5px] border-[#17150e] px-3 py-1.5 text-[14px] font-medium tracking-[0.063em] text-[#17150e]">
                WHO YOU&apos;RE HIRING
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-classic-g)] text-[clamp(40px,6vw,96px)] leading-[0.95] tracking-[-0.03em] text-[#17150e]">
                I&apos;m Shawn. I built these systems for my own companies
                first.
              </h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-[22px] leading-[1.2] tracking-[-0.44px] text-[#17150e]">
                I run businesses in Oklahoma — equipment, real estate,
                dealerships. Every system on this page ran in my companies
                before it ever shipped to a client. I work with
                owner-operators I can drive to: contractors, shops, clinics,
                dealerships.
              </p>
              <p className="mt-6 text-[16px] leading-[1.5] text-[#17150e]">
                If the audit doesn&apos;t find at least $999 a year in
                recoverable time or cost, you don&apos;t pay for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS — white band, oversized display numbers */}
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-3">
          {[
            { m: "10 hrs", l: "Typical weekly recovery per audit" },
            { m: "4 days", l: "From session to written plan" },
            { m: "$999", l: "Fixed price. Fixed scope. Fixed deliverable." },
          ].map((s) => (
            <div key={s.m}>
              <p className="font-[family-name:var(--font-classic-g)] text-[clamp(64px,8vw,96px)] leading-[0.95] tracking-[-0.03em] text-[#17150e]">
                {s.m}
              </p>
              <p className="mt-3 text-[16px] font-medium text-[#17150e]">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK — mint band, case cards */}
      <section id="work" className="bg-[#f0f7f6] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-classic-g)] text-[clamp(40px,6vw,72px)] leading-[0.97] tracking-[-0.03em] text-[#17150e]">
              The work
            </h2>
            <p className="text-[14px] font-medium tracking-[0.063em] text-[#949494]">
              3 PIPELINES · ALL RUNNING IN PRODUCTION
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {CASES.map((c) => (
              <article key={c.tag} className="rounded-[16px] bg-white p-6">
                <span className="inline-block rounded-[8px] bg-[#f0f7f6] px-3 py-1.5 text-[14px] font-medium text-[#17150e]">
                  {c.tag}
                </span>
                <h3 className="mt-4 text-[22px] font-medium leading-[1.1] tracking-[-0.44px] text-[#17150e]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.5] text-[#949494]">
                  Before — {c.before}
                </p>
                <p className="mt-2 text-[16px] leading-[1.5] text-[#17150e]">
                  After — {c.after}
                </p>
                <div className="mt-6 border-t-[1.5px] border-[#17150e] pt-5">
                  <p className="font-[family-name:var(--font-classic-g)] text-[clamp(48px,6vw,64px)] leading-[0.95] tracking-[-0.03em] text-[#17150e]">
                    {c.metric}
                  </p>
                  <p className="mt-1 text-[14px] font-medium text-[#17150e]">
                    {c.metricLabel}
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.4] text-[#949494]">
                    {c.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUCKETS — white band */}
      <section id="buckets" className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-classic-g)] text-[clamp(40px,6vw,72px)] leading-[0.97] tracking-[-0.03em] text-[#17150e]">
            Three buckets
          </h2>
          <p className="text-[14px] font-medium tracking-[0.063em] text-[#949494]">
            IF IT DOESN&apos;T MOVE ONE, WE DON&apos;T PITCH IT
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BUCKETS.map((b, i) => (
            <article key={b.name} className="rounded-[8px] bg-[#f0f7f6] p-6">
              <span className="inline-block rounded-[8px] border-[1.5px] border-[#17150e] px-3 py-1 text-[14px] font-medium text-[#17150e]">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-[22px] font-medium leading-[1.1] tracking-[-0.44px] text-[#17150e]">
                {b.name}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.5] text-[#17150e]/80">
                {b.description}
              </p>
              <ul className="mt-5 space-y-2 border-t-[1.5px] border-[#17150e]/20 pt-4">
                {b.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2 text-[16px] text-[#17150e]">
                    <span className="text-[#cccc25]">+</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* AUDIT — ink card on mint band */}
      <section id="audit" className="bg-[#f0f7f6] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[24px] bg-[#17150e] p-8 md:p-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-6 text-[14px] font-medium tracking-[0.063em] text-[#cccc25]">
                  THE OFFER
                </p>
                <h2 className="font-[family-name:var(--font-classic-g)] text-[clamp(40px,6vw,72px)] leading-[0.97] tracking-[-0.03em] text-white">
                  The $999 AI audit
                </h2>
                <p className="mt-6 max-w-md text-[16px] leading-[1.5] text-[#f0f7f6]/80">
                  A 45-minute working session. We map where your hours go, find
                  the tasks a computer should be doing, and put real dollar
                  numbers on it. Within four days you get a written plan: quick
                  wins, exact tools, the order to do them in.
                </p>
                <a
                  href={AUDIT_MAILTO}
                  className="mt-8 inline-block rounded-[1440px] bg-[#cccc25] px-8 py-3 text-[16px] font-medium text-[#17150e] transition-colors hover:bg-[#cacd78]"
                >
                  Book the Audit
                </a>
              </div>
              <div className="flex flex-col justify-center gap-px">
                {[
                  {
                    s: "01",
                    l: "Audit",
                    b: "A 45-minute working session — not a sales pitch. We map where your hours actually go.",
                  },
                  {
                    s: "02",
                    l: "Plan",
                    b: "Within four days: a written plan. Quick wins first, the exact tools, the order to do them in.",
                  },
                  {
                    s: "03",
                    l: "Automate",
                    b: "We ship the systems. They run in production. You get your evenings back.",
                  },
                ].map((p) => (
                  <div key={p.s} className="border-t-[1.5px] border-white/20 py-6">
                    <div className="flex items-center gap-3">
                      <span className="text-[14px] font-medium text-[#cccc25]">{p.s}</span>
                      <span className="text-[22px] font-medium tracking-[-0.44px] text-white">
                        {p.l}
                      </span>
                    </div>
                    <p className="mt-2 text-[16px] leading-[1.5] text-[#f0f7f6]/70">{p.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LADDER — white band */}
      <section id="ladder" className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-classic-g)] text-[clamp(40px,6vw,72px)] leading-[0.97] tracking-[-0.03em] text-[#17150e]">
            The ladder
          </h2>
          <p className="text-[14px] font-medium tracking-[0.063em] text-[#949494]">
            START ANYWHERE · EACH RUNG EARNS THE NEXT
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {LADDER.map((r) => (
            <article key={r.num} className="rounded-[16px] bg-[#f0f7f6] p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[14px] font-medium text-[#949494]">{r.num}</span>
                <span className="rounded-[8px] border-[1.5px] border-[#17150e] px-3 py-1 text-[14px] font-medium text-[#17150e]">
                  {r.meta}
                </span>
              </div>
              <h3 className="text-[32px] font-medium leading-[1.1] tracking-[-0.64px] text-[#17150e]">
                {r.name}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.5] text-[#17150e]/80">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES — white band continues, table rows */}
      <section id="services" className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-classic-g)] text-[clamp(40px,6vw,72px)] leading-[0.97] tracking-[-0.03em] text-[#17150e]">
            What we build
          </h2>
          <p className="text-[14px] font-medium tracking-[0.063em] text-[#949494]">
            FIXED SCOPE · SHIPPED WORKING
          </p>
        </div>
        <div className="overflow-hidden rounded-[16px] bg-[#f0f7f6]">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`grid gap-4 px-8 py-8 sm:grid-cols-12 ${i > 0 ? "border-t-[1.5px] border-[#17150e]/10" : ""}`}
            >
              <h3 className="sm:col-span-4 text-[22px] font-medium leading-[1.1] tracking-[-0.44px] text-[#17150e]">
                {s.title}
              </h3>
              <p className="sm:col-span-5 text-[16px] leading-[1.5] text-[#17150e]/80">
                {s.promise}
              </p>
              <p className="sm:col-span-3 text-right">
                {s.saves ? (
                  <span className="inline-block rounded-[8px] bg-[#cccc25] px-3 py-1.5 text-[14px] font-medium text-[#17150e]">
                    Saves {s.saves}
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — mint band final */}
      <section className="bg-[#f0f7f6] px-6 py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-4 text-[14px] font-medium tracking-[0.063em] text-[#949494]">
              NEXT STEP
            </p>
            <h2 className="font-[family-name:var(--font-classic-g)] text-[clamp(40px,6vw,72px)] leading-[0.97] tracking-[-0.03em] text-[#17150e]">
              Ten hours. One audit.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={AUDIT_MAILTO}
              className="rounded-[1440px] bg-[#17150e] px-8 py-4 text-[16px] font-medium text-[#f0f7f6] transition-colors hover:bg-[#272b30]"
            >
              Book the $999 Audit
            </a>
            <p className="text-[14px] font-medium text-[#949494]">
              REPLY WITHIN 1 BUSINESS DAY ·{" "}
              <span className="bg-[#cccc25] px-1 text-[#17150e]">INFO@NEWPLAINS.DEV</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
