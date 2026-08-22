import Section from "./Section";

const tiers = [
  {
    n: "I.",
    name: "The $999 Audit",
    price: "$999",
    cadence: "one-time",
    primary: true,
  },
  {
    n: "II.",
    name: "Implementation Project",
    price: "Custom (quote-based)",
    cadence: "one-time",
    primary: false,
  },
  {
    n: "III.",
    name: "Managed Retainer + Solutions",
    price: "$5,000/mo + individually-priced",
    cadence: "monthly · optional",
    primary: false,
  },
];

const auditBullets = [
  "7-day diagnostic on a single high-leverage workflow",
  "Written findings + recommended architecture",
  "Time & cost estimates for the build",
  "Yours to keep regardless of who builds it — your team, our team, or a third party",
];

export default function Tiers() {
  return (
    <Section
      id="tiers"
      numeral="VII."
      label="Engagement Tiers"
      variant="parchment"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 items-end">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="[font-family:var(--font-fraunces)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em] text-[#1A1814]">
            One diagnostic. One project.
            <br />
            <span className="italic text-[#B08A3E]">
              One optional retainer.
            </span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <p className="text-base text-[#1A1814]/70 leading-relaxed">
            The audit is the product. The implementation is optional.
          </p>
        </div>
      </div>

      {/* Table header */}
      <div className="hidden md:grid grid-cols-12 gap-3 pb-3 border-b border-[rgba(26,24,20,0.18)] eyebrow text-[#5B6470]">
        <div className="col-span-5">Tier</div>
        <div className="col-span-3">Price</div>
        <div className="col-span-3">Cadence</div>
        <div className="col-span-1 text-right">Primary</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`md:grid md:grid-cols-12 md:gap-3 md:py-6 border-b border-[rgba(26,24,20,0.18)] ${
              t.primary
                ? "bg-[#1A1814] text-[#F6EFE1] px-6 py-6 md:px-0 md:py-6 -mx-6 md:mx-0"
                : "px-0 py-6"
            }`}
          >
            <div className="md:col-span-5 flex items-baseline gap-3 mb-2 md:mb-0">
              <span
                className={`[font-family:var(--font-geist-mono)] text-xs tracking-widest tabular ${
                  t.primary ? "text-[#C9A26B]" : "text-[#B08A3E]"
                }`}
              >
                Tier {t.n}
              </span>
              <span
                className={`[font-family:var(--font-fraunces)] text-2xl leading-tight ${
                  t.primary ? "text-[#F6EFE1]" : "text-[#1A1814]"
                }`}
              >
                {t.name}
              </span>
            </div>
            <div
              className={`md:col-span-3 [font-family:var(--font-fraunces)] text-2xl tabular leading-none mb-2 md:mb-0 ${
                t.primary ? "text-[#C9A26B]" : "text-[#1A1814]"
              }`}
            >
              {t.price}
            </div>
            <div
              className={`md:col-span-3 [font-family:var(--font-geist-mono)] text-xs uppercase tracking-widest ${
                t.primary ? "text-[#F6EFE1]/60" : "text-[#5B6470]"
              }`}
            >
              {t.cadence}
            </div>
            <div
              className={`md:col-span-1 text-right [font-family:var(--font-geist-mono)] text-xs tabular ${
                t.primary ? "text-[#C9A26B]" : "text-[#5B6470]"
              }`}
            >
              {t.primary ? "YES" : "—"}
            </div>
          </div>
        ))}
      </div>

      {/* Primary tier detail */}
      <div className="mt-10 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-6">
          <div className="eyebrow text-[#5B6470] mb-6">
            The $999 Audit · What ships
          </div>
          <ul className="space-y-3">
            {auditBullets.map((b) => (
              <li
                key={b}
                className="flex items-baseline gap-3 text-sm text-[#1A1814]/85"
              >
                <span className="[font-family:var(--font-geist-mono)] text-xs mt-0.5 text-[#B08A3E]">
                  ✦
                </span>
                <span className="leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6 md:pl-8 md:border-l border-[rgba(26,24,20,0.18)] flex flex-col justify-center">
          <blockquote className="pl-6 border-l-2 border-[#B08A3E]">
            <p className="[font-family:var(--font-fraunces)] italic text-2xl md:text-3xl leading-snug text-[#1A1814]">
              “The audit is the product. The implementation is optional.”
            </p>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
