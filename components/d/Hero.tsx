export default function Hero() {
  return (
    <header className="relative px-6 md:px-12 lg:px-16 pt-12 md:pt-20 pb-24 md:pb-32 overflow-hidden">
      {/* Faint ledger-grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(26,24,20,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,24,20,0.5) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage:
            "radial-gradient(ellipse at 70% 40%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Top meta row */}
        <div className="flex items-baseline justify-between mb-16 md:mb-24">
          <div className="eyebrow text-[#5B6470] flex items-center gap-3 text-sm">
            <span className="inline-block w-2.5 h-2.5 bg-[#B08A3E] rounded-full" />
            Field Notes № 01 — An Operating Manual for the AI Era
          </div>
          <div className="hidden md:block eyebrow text-[#5B6470] tabular text-sm">
            Issued <span className="text-[#1A1814]">2026</span> /
            <span className="ml-1 text-[#1A1814]">Edition I</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Headline */}
          <div className="col-span-12 lg:col-span-9">
            <h1 className="reveal [font-family:var(--font-fraunces)] text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.92] tracking-[-0.02em] text-[#1A1814]">
              Stop hiring to do work
              <br />
              a system{" "}
              <span className="italic text-[#B08A3E]">should be doing.</span>
            </h1>
          </div>

          {/* Right column meta */}
          <aside
            className="col-span-12 lg:col-span-3 flex flex-col justify-end gap-6 lg:pl-6 lg:border-l lg:border-[rgba(26,24,20,0.18)] reveal"
            style={{ animationDelay: "0.3s" }}
          >
            <div>
              <div className="eyebrow text-[#5B6470] mb-3">Filed under</div>
              <div className="[font-family:var(--font-fraunces)] text-2xl text-[#1A1814] leading-tight">
                Operations,
                <br />
                Leverage,
                <br />
                Ownership.
              </div>
            </div>
            <div className="rule pt-4">
              <div className="eyebrow text-[#5B6470] mb-2">Author</div>
              <div className="text-base text-[#1A1814]">New Plains LLC</div>
            </div>
          </aside>
        </div>

        {/* Sub-headline + CTA */}
        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <p
              className="reveal text-2xl md:text-[1.75rem] leading-[1.4] text-[#1A1814]/95 max-w-2xl"
              style={{ animationDelay: "0.5s" }}
            >
              Most AI pilots die in the demo. We build the ones that{" "}
              <span className="italic text-[#9B2C2C] [font-family:var(--font-fraunces)]">
                survive the second quarter.
              </span>
            </p>
          </div>
          <div
            className="col-span-12 lg:col-span-5 flex flex-col lg:items-end gap-4 reveal"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#claim"
              className="group inline-flex items-center justify-between gap-6 bg-[#1A1814] text-[#F6EFE1] px-7 py-5 hover:bg-[#B08A3E] transition-colors w-full lg:w-auto"
            >
              <span className="[font-family:var(--font-fraunces)] text-2xl tracking-tight">
                Book the $999 Audit
              </span>
              <span className="[font-family:var(--font-geist-mono)] text-sm group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <span className="eyebrow text-[#5B6470] text-right w-full lg:w-auto text-sm">
              No obligation. No demos. Direct access.
            </span>
          </div>
        </div>

        {/* Bottom data strip */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[rgba(26,24,20,0.18)] pt-8">
          {[
            { k: "40 hrs/wk", l: "1 FTE per engagement absorbed into automation" },
            { k: "90 days", l: "typical audit-to-production timeline" },
            { k: "$41.6K", l: "annual operator cost absorbed per engagement (40 × 52 × $20)" },
            { k: "∞", l: "the operator that does the work doesn’t take vacation" },
          ].map((s, i) => (
            <div
              key={i}
              className="reveal"
              style={{ animationDelay: `${0.9 + i * 0.08}s` }}
            >
              <div className="[font-family:var(--font-fraunces)] text-5xl md:text-6xl text-[#1A1814] tabular leading-none mb-3">
                {s.k}
              </div>
              <div className="text-sm md:text-base text-[#5B6470] leading-snug">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 [font-family:var(--font-geist-mono)] text-xs text-[#5B6470]">
          Derived from observable operator baselines at $20/hr fully-loaded. Swap
          the rate to match your operation.
        </p>
      </div>
    </header>
  );
}
