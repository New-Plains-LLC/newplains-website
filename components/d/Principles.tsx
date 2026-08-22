import Section from "./Section";

const principles = [
  {
    t: "Audits before pitches.",
    d: "Every engagement starts with the $999 audit. No exceptions.",
  },
  {
    t: "Ship to production.",
    d: "If it isn’t running in your business by day 90, it didn’t happen.",
  },
  {
    t: "Your team, trained.",
    d: "Every system ships with documentation and a handoff session.",
  },
  {
    t: "No lock-in.",
    d: "Source, credentials, data — all yours. We hand over. You keep it.",
  },
];

export default function Principles() {
  return (
    <Section
      id="principles"
      numeral="VI."
      label="Operating Principles"
      variant="paper"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="[font-family:var(--font-geist-mono)] text-xs text-[#B08A3E] uppercase tracking-[0.22em]">
              New Plains · Operating Code
            </span>
          </div>
          <h2 className="[font-family:var(--font-fraunces)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em] text-[#1A1814] mb-8">
            Software is leverage.
            <br />
            <span className="italic text-[#B08A3E]">
              Operating discipline
            </span>{" "}
            is what makes it multiply.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#1A1814]/80 max-w-2xl">
            <p>
              Most AI work fails after the pilot — not because the demo was
              wrong, but because nobody ran it like an operating function.
            </p>
            <p>
              Four rules govern every engagement. The same discipline we hold
              our own operations to.
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:pl-6 lg:border-l border-[rgba(26,24,20,0.18)]">
          <div className="eyebrow text-[#5B6470] mb-6">The four rules</div>
          <ol className="space-y-0">
            {principles.map((row, i) => (
              <li
                key={row.t}
                className="grid grid-cols-12 gap-4 py-5 border-b border-[rgba(26,24,20,0.18)] items-baseline"
              >
                <span className="col-span-1 [font-family:var(--font-geist-mono)] text-xs text-[#B08A3E] tabular">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-6 [font-family:var(--font-fraunces)] text-xl text-[#1A1814] leading-tight">
                  {row.t}
                </span>
                <span className="col-span-5 text-sm text-[#5B6470] leading-snug text-right">
                  {row.d}
                </span>
              </li>
            ))}
          </ol>
          <p className="[font-family:var(--font-fraunces)] italic text-xl text-[#1A1814]/70 mt-8 leading-snug">
            The discipline compounds. The operation you run becomes the asset.
          </p>
        </div>
      </div>
    </Section>
  );
}
