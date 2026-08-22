import Section from "./Section";

export default function Problem() {
  return (
    <Section
      id="problem"
      numeral="II."
      label="The Doing-Nothing Tax"
      variant="parchment"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="[font-family:var(--font-fraunces)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em] text-[#1A1814] mb-10">
            You don’t have an AI strategy.
            <br />
            You have a{" "}
            <span className="italic text-[#9B2C2C]">backlog.</span>
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[#1A1814]/80 max-w-2xl">
            <p>
              The cost of staying manual isn’t zero — it compounds.
            </p>
            <p>
              Every quarter, the gap between what your team can produce and what
              your business demands widens.
            </p>
            <p>
              The team works later. Hiring accelerates. Quality erodes.
            </p>
            <p>
              Five years in, you’ve paid the price of an AI-equipped competitor
              many times over — in overtime, in turnover, in missed deals.
            </p>
            <p className="[font-family:var(--font-fraunces)] italic text-2xl text-[#1A1814] pt-2">
              That isn’t a strategy gap. It’s an operating gap.
            </p>
          </div>
        </div>

        {/* Right column — manual-overhead ledger */}
        <div className="col-span-12 lg:col-span-5 lg:pl-8 lg:border-l border-[rgba(26,24,20,0.18)]">
          <div className="eyebrow text-[#5B6470] mb-6">
            Manual overhead, by the year
          </div>
          <div className="space-y-0 [font-family:var(--font-geist-mono)] text-sm">
            {[
              { y: "Year 1", a: "$195K / yr", n: "5 automations × 30 hrs/wk × 52 wk × $25/hr" },
              { y: "Year 2", a: "$205K / yr", n: "Manual overhead +5% drift, process debt" },
              { y: "Year 3", a: "$215K / yr", n: "Turnover from overwork + tool sprawl" },
              { y: "Year 4", a: "$225K / yr", n: "Opportunity cost — deals/quotes/responses missed" },
              { y: "Year 5", a: "$236K / yr", n: "Compounding + competitor gap widens" },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-3 py-4 border-b border-[rgba(26,24,20,0.18)] items-baseline"
              >
                <div className="col-span-3 eyebrow text-[#5B6470]">{row.y}</div>
                <div className="col-span-4 tabular text-[#1A1814] text-base">
                  {row.a}
                </div>
                <div className="col-span-5 text-[#5B6470] text-xs leading-snug">
                  {row.n}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-12 gap-3 py-5 items-baseline">
              <div className="col-span-3 eyebrow text-[#1A1814]">Σ</div>
              <div className="col-span-4 [font-family:var(--font-fraunces)] italic text-2xl text-[#9B2C2C] tabular">
                $1.076M
              </div>
              <div className="col-span-5 text-[#5B6470] text-xs leading-snug">
                5-year manual overhead · automation built: <span className="text-[#9B2C2C]">$0.00</span>
              </div>
            </div>
          </div>
          <p className="mt-8 [font-family:var(--font-fraunces)] italic text-xl text-[#1A1814]/70 leading-snug">
            Five years of manual work. Nothing automated to show for it.
          </p>
        </div>
      </div>
    </Section>
  );
}
