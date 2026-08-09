import Image from "next/image";
import Link from "next/link";

const AUDIT_MAILTO =
  "mailto:info@newplains.dev?subject=AI%20Audit&body=Hi%20New%20Plains%2C%20I%27d%20like%20to%20book%20a%201-hour%20AI%20audit%20call%20(%24999).%20Here%27s%20a%20bit%20about%20my%20business%3A";
const RFQ_MAILTO = "mailto:info@newplains.dev?subject=RFQ";

const HERO_LEFT_IMG =
  "https://images.unsplash.com/photo-1687293233211-6b0cc3beba70?w=1600&h=900&fit=crop&q=80&auto=format";
const HERO_RIGHT_IMG =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop&q=80&auto=format";

const howItWorks = [
  {
    step: "01",
    title: "Tell us what you need",
    body: "AI consulting or government contracting — or both. Each side has its own team, its own process, and its own fixed-price offer.",
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
      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 pb-14 pt-24 text-center md:pt-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
          New Plains LLC · Two Ways We Serve
        </p>
        <h1 className="font-heading text-5xl font-semibold italic leading-[1.05] tracking-tight text-brand-charcoal sm:text-6xl md:text-7xl">
          Two ways we work. One promise.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-charcoal/60">
          New Plains LLC is a small American firm that helps two kinds of clients: businesses
          that want to use AI to get their time back, and federal, state, and local agencies
          that need a registered, reliable contractor. Whichever side needs us, we show up.
        </p>
      </section>

      {/* DOUBLE HERO — PHOTO CARDS */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 md:grid-cols-2">
          {/* LEFT — AI FOR SMALL BUSINESS */}
          <div className="relative flex min-h-[460px] flex-col justify-between overflow-hidden rounded-3xl border border-brand-copper/25 p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-copper/10 md:p-10">
            <Image
              src={HERO_LEFT_IMG}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-cream/70" aria-hidden="true" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
                AI for small business
              </p>
              <h2 className="font-heading mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-brand-charcoal md:text-4xl">
                Find the money your business is already losing to manual work. Ship the fix. Or
                build the AI team you&apos;ve been hiring for.
              </h2>
            </div>
            <div className="relative z-10 mt-8 flex flex-col items-start gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal/60">
                1-hour audit call · $999
              </p>
              <a
                href={AUDIT_MAILTO}
                className="inline-flex items-center justify-center rounded-full bg-brand-copper px-8 py-4 text-base font-semibold text-brand-cream shadow-lg shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
              >
                Book the audit →
              </a>
              <Link
                href="/a/ai"
                className="text-sm font-semibold text-brand-charcoal underline-offset-4 transition-colors hover:text-brand-copper hover:underline"
              >
                See the full AI services list →
              </Link>
            </div>
          </div>

          {/* RIGHT — GOVERNMENT CONTRACTING */}
          <div className="relative flex min-h-[460px] flex-col justify-between overflow-hidden rounded-3xl border border-[#1B2D45]/25 p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#1B2D45]/10 md:p-10">
            <Image
              src={HERO_RIGHT_IMG}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1B2D45]/80" aria-hidden="true" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                Government contracting
              </p>
              <h2 className="font-heading mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl">
                Property services. Catering. Janitorial. Grounds. And now: AI services for
                federal, state, and local agencies.
              </h2>
            </div>
            <div className="relative z-10 mt-8 flex flex-col items-start gap-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/70">
                SAM.gov · UEI · CAGE assigned · NAICS 561210 · 722310 · 561720 · 561730 · 541512 ·
                541715
              </p>
              <a
                href={RFQ_MAILTO}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1B2D45] shadow-lg shadow-black/20 transition-colors hover:bg-[#E8EDF4]"
              >
                Send an RFQ →
              </a>
              <Link
                href="/a/govcon"
                className="text-sm font-semibold text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                See credentials + the full RFQ form →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="border-y border-brand-copper/15 bg-white/60 py-8">
        <p className="mx-auto max-w-3xl px-6 text-center font-heading text-xl font-medium tracking-tight text-brand-charcoal md:text-2xl">
          Service-disabled veteran-owned. American-built. Born in Oklahoma.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-24">
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
            Not sure which side fits? Send one email and ask.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-charcoal/70">
            Tell us what you&apos;re trying to buy. We&apos;ll point you at the right one —
            info@newplains.dev.
          </p>
          <a
            href="mailto:info@newplains.dev?subject=New%20Plains%20—%20which%20side"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-brand-copper px-10 py-5 text-lg font-semibold text-brand-copper transition-colors hover:bg-brand-copper hover:text-brand-cream"
          >
            Email us
          </a>
        </div>
      </section>
    </>
  );
}
