import Section from "./Section";

const capabilities = [
  {
    n: "01",
    name: "Audit",
    tag: "Find the leverage",
    body: "Find the highest-leverage automation in your operation in 7 days.",
  },
  {
    n: "02",
    name: "Build",
    tag: "Ship to production",
    body: "Ship the working system in 30–90 days. Measured by users, not commits.",
  },
  {
    n: "03",
    name: "Operate",
    tag: "Keep it running",
    body: "The retainer plus the AI employee system. We keep it running, fix it when it breaks, and keep building as the business changes. Terms discussed after the audit.",
  },
];

export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      numeral="V."
      label="Productized Intelligence"
      variant="paper"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 items-end">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="[font-family:var(--font-fraunces)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em] text-[#1A1814]">
            Hands-on engineering.
            <br />
            <span className="italic text-[#B08A3E]">Not strategy decks.</span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <p className="text-base text-[#1A1814]/70 leading-relaxed">
            Three ways we engage — a diagnostic first, a build second, and an
            operating team only if you want one.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(26,24,20,0.18)]">
        {capabilities.map((c) => (
          <article
            key={c.name}
            className="bg-[#FBF6EA] p-8 md:p-10 flex flex-col"
          >
            <div className="flex items-start justify-between mb-10">
              <span className="[font-family:var(--font-fraunces)] italic text-5xl text-[#B08A3E] leading-none">
                {c.n}
              </span>
              <span className="eyebrow text-[#5B6470] text-right max-w-[8rem] leading-tight">
                {c.tag}
              </span>
            </div>
            <h3 className="[font-family:var(--font-fraunces)] text-3xl md:text-[2rem] text-[#1A1814] leading-tight mb-5">
              {c.name}
            </h3>
            <p className="text-[#1A1814]/70 leading-relaxed mb-8 flex-1">
              {c.body}
            </p>
            <div className="rule pt-5">
              <div className="eyebrow text-[#5B6470]">
                {c.name === "Audit" && "Fixed price · $999"}
                {c.name === "Build" && "Quoted from the audit"}
                {c.name === "Operate" && "Monthly · optional"}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
