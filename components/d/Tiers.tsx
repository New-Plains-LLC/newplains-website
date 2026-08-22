import Section from "./Section";

const tiers = [
  {
    n: "I.",
    name: "The $999 Audit",
    price: "$999",
    cadence: "one-time",
    delivery: "7 days",
    primary: true,
    bullets: [
      "7-day diagnostic on a single high-leverage workflow",
      "Written findings + recommended architecture",
      "Time & cost estimates for the build",
      "Yours to keep regardless of who builds it — your team, our team, or a third party",
    ],
  },
  {
    n: "II.",
    name: "Implementation Project",
    price: "Custom (quote-based)",
    cadence: "one-time",
    delivery: "30 days",
    primary: false,
    bullets: [
      "Average time to deliver: 30 days from audit sign-off",
      "Production automation, deployed into your stack",
      "Hands-on change-management for the team using it",
      "90-day post-launch support window",
    ],
  },
  {
    n: "III.",
    name: "Managed Retainer + Solutions",
    price: "$5,000/mo + individually-priced",
    cadence: "monthly · optional",
    delivery: "ongoing",
    primary: false,
    bullets: [
      "∞ automations — build as many as your operation needs",
      "∞ usage — no per-call, per-query, or per-seat metering",
      "∞ a principal on retainer to keep building, maintaining, and improving them",
    ],
  },
];

export default function Tiers() {
  const primary = tiers.find((t) => t.primary)!;
  return (
    <Section
      id="tiers"
      numeral="VII."
      label="Engagement Tiers"
      variant="parchment"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 items-end">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="[font-family:var(--font-fraunces)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-[#1A1814]">
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

      {/* Tier table */}
      <div className="hidden md:grid grid-cols-12 gap-3 pb-3 border-b border-[rgba(26,24,20,0.18)] eyebrow text-[#5B6470]">
        <div className="col-span-4">Tier</div>
        <div className="col-span-3">Price</div>
        <div className="col-span-2">Cadence</div>
        <div className="col-span-3">Delivery</div>
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
            <div className="md:col-span-4 flex items-baseline gap-3 mb-2 md:mb-0">
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
              className={`md:col-span-2 [font-family:var(--font-geist-mono)] text-xs uppercase tracking-widest ${
                t.primary ? "text-[#F6EFE1]/60" : "text-[#5B6470]"
              }`}
            >
              {t.cadence}
            </div>
            <div
              className={`md:col-span-3 [font-family:var(--font-geist-mono)] text-sm tabular ${
                t.primary ? "text-[#C9A26B]" : "text-[#9B2C2C]"
              }`}
            >
              {t.delivery}
            </div>
          </div>
        ))}
      </div>

      {/* Per-tier detail blocks */}
      <div className="mt-12 space-y-10">
        {/* Audit detail */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow text-[#5B6470] mb-6">
              The $999 Audit · What ships
            </div>
            <ul className="space-y-3">
              {primary.bullets.map((b) => (
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
                &ldquo;The audit is the product. The implementation is optional.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>

        {/* Project delivery */}
        <div className="rule pt-8 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow text-[#B08A3E] mb-3">
              Implementation Project
            </div>
            <div className="[font-family:var(--font-fraunces)] text-6xl md:text-7xl leading-none tabular text-[#1A1814]">
              30
            </div>
            <div className="[font-family:var(--font-fraunces)] italic text-xl text-[#1A1814]/80 mt-2">
              days, average time to deliver
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:pl-8 md:border-l border-[rgba(26,24,20,0.18)]">
            <ul className="space-y-3">
              {tiers[1].bullets.map((b, i) => (
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
        </div>

        {/* Retainer — infinite */}
        <div className="rule pt-8 grid grid-cols-12 gap-6 md:gap-10 bg-[#1A1814] text-[#F6EFE1] -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16 py-10 md:py-14">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow text-[#C9A26B] mb-3">
              Managed Retainer + Solutions
            </div>
            <div className="[font-family:var(--font-fraunces)] text-7xl md:text-8xl leading-none tabular text-[#B08A3E]">
              ∞
            </div>
            <div className="[font-family:var(--font-fraunces)] italic text-xl text-[#F6EFE1]/80 mt-2">
              automations. usage. me on retainer.
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:pl-8 md:border-l border-[rgba(246,239,225,0.18)]">
            <p className="[font-family:var(--font-fraunces)] text-2xl md:text-3xl leading-snug text-[#F6EFE1] mb-6">
              $5,000/mo keeps the lights on. Then we keep building —
              <span className="italic text-[#C9A26B]"> without metering.</span>
            </p>
            <ul className="space-y-3">
              {tiers[2].bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-baseline gap-3 text-sm text-[#F6EFE1]/85"
                >
                  <span className="[font-family:var(--font-geist-mono)] text-xs mt-0.5 text-[#C9A26B]">
                    ∞
                  </span>
                  <span className="leading-snug">{b.replace(/^∞ /, "")}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-4 [font-family:var(--font-geist-mono)] text-xs uppercase tracking-widest text-[#F6EFE1]/60 border-t border-[rgba(246,239,225,0.18)] pt-6">
              <div>
                <div className="text-[#C9A26B] text-2xl tabular leading-none mb-1">
                  ∞
                </div>
                automations
              </div>
              <div>
                <div className="text-[#C9A26B] text-2xl tabular leading-none mb-1">
                  ∞
                </div>
                usage
              </div>
              <div>
                <div className="text-[#C9A26B] text-2xl tabular leading-none mb-1">
                  ∞
                </div>
                principal on retainer
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}