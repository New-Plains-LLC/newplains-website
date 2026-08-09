import Link from "next/link";

const AUDIT_MAILTO =
  "mailto:info@newplains.dev?subject=AI%20Audit&body=Hi%20New%20Plains%2C%20I%27d%20like%20to%20book%20a%201-hour%20AI%20audit%20call%20(%24999).%20Here%27s%20a%20bit%20about%20my%20business%3A";
const RFQ_MAILTO = "mailto:info@newplains.dev?subject=RFQ";

const howItWorks = [
  {
    step: "01",
    title: "Pick a side",
    body: "AI consulting or government contracting — or both. Each door has its own team, its own process, and its own fixed-price offer.",
  },
  {
    step: "02",
    title: "Tell us about your engagement",
    body: "One email with your situation. For AI work we book the 1-hour audit call; for contracting we take your RFQ and respond with a fixed scope.",
  },
  {
    step: "03",
    title: "We respond within 1 business day",
    body: "A real person, a real answer, and a clear next step — not a drip sequence.",
  },
];

export default function ConceptAPage() {
  return (
    <>
      {/* SHARED H1 */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-24 text-center md:pt-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
          New Plains LLC · Two Doors, One Firm
        </p>
        <h1 className="font-heading text-5xl font-semibold italic leading-[1.05] tracking-tight text-brand-charcoal sm:text-6xl">
          Two ways we work with you.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-charcoal/70">
          Same firm, two disciplines. Pick the door that fits what you&apos;re trying to buy —
          we&apos;ll take it from there.
        </p>
      </section>

      {/* DOUBLE HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {/* LEFT — AI CONSULTING */}
          <div className="flex flex-col rounded-3xl border border-brand-copper/25 bg-brand-cream p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-copper/10 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
              AI Consulting
            </p>
            <h2 className="font-heading mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-brand-charcoal md:text-4xl">
              We find the money your business is already losing to manual work.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-charcoal/70">
              Book a 1-hour AI audit call — $999. We map the three biggest time/money leaks in
              your business and hand you a written short-list of what to fix. Anything after that
              gets bid out as a separate engagement.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href={AUDIT_MAILTO}
                className="inline-flex items-center justify-center rounded-full bg-brand-copper px-8 py-4 text-base font-semibold text-brand-cream shadow-lg shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
              >
                Book a 1-hour audit call → $999
              </a>
              <Link
                href="/a/ai"
                className="text-sm font-semibold text-brand-charcoal underline-offset-4 transition-colors hover:text-brand-copper hover:underline"
              >
                See what the AI team actually runs →
              </Link>
            </div>
          </div>

          {/* RIGHT — GOVERNMENT CONTRACTING */}
          <div className="flex flex-col rounded-3xl border border-[#1B2D45]/15 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#1B2D45]/10 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1B2D45]">
              Government Contracting
            </p>
            <h2 className="font-heading mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-brand-charcoal md:text-4xl">
              Property services. Catering. Janitorial. And now: AI services for federal, state,
              and local agencies.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-charcoal/70">
              SAM.gov registered, UEI on file, CAGE assigned. Send an RFQ and get a fixed-scope
              reply within 48 hours.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href={RFQ_MAILTO}
                className="inline-flex items-center justify-center rounded-full bg-[#1B2D45] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1B2D45]/25 transition-colors hover:bg-[#243C5C]"
              >
                Send RFQ →
              </a>
              <Link
                href="/a/govcon"
                className="text-sm font-semibold text-brand-charcoal underline-offset-4 transition-colors hover:text-[#1B2D45] hover:underline"
              >
                See credentials + the full RFQ form →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-brand-copper/15 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            How It Works
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {howItWorks.map((s) => (
              <div key={s.step} className="rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-7">
                <span className="font-heading text-sm font-semibold tracking-wide text-brand-copper">
                  {s.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24 text-center md:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Not sure which door? Send one email and ask.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-charcoal/70">
            Tell us what you&apos;re trying to buy. We&apos;ll point you at the right one —
            info@newplains.dev.
          </p>
          <a
            href="mailto:info@newplains.dev?subject=New%20Plains%20—%20which%20door"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-brand-copper px-10 py-5 text-lg font-semibold text-brand-copper transition-colors hover:bg-brand-copper hover:text-brand-cream"
          >
            Email us
          </a>
        </div>
      </section>
    </>
  );
}
