import Section from "./Section";

export default function Contract() {
  const items = [
    {
      n: "I",
      title: "Source",
      body: "Code repository, scripts, prompts. Yours to fork, modify, or hand to anyone.",
    },
    {
      n: "II",
      title: "Credentials",
      body: "API keys, OAuth tokens, vault entries. Exported to your password manager.",
    },
    {
      n: "III",
      title: "Data",
      body: "All generated data, vector indexes, embeddings. Exported in portable formats.",
    },
    {
      n: "IV",
      title: "Documentation",
      body: "Runbooks, architecture decisions, known issues. Readable by your successor.",
    },
  ];
  return (
    <Section
      id="contract"
      numeral="VIII."
      label="Contractual Logic"
      variant="ink"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="[font-family:var(--font-fraunces)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em] text-[#F6EFE1]">
            The engagement ends.
            <br />
            <span className="italic text-[#C9A26B]">
              Your system keeps running.
            </span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <p className="text-base text-[#F6EFE1]/70 leading-relaxed max-w-md">
            New Plains operates under a single contractual principle: when the
            engagement closes, you hold everything needed to run it — without
            exception, without escrow, without condition.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(201,162,107,0.2)]">
        {items.map((item) => (
          <div key={item.n} className="bg-[#1A1814] p-8 md:p-10">
            <div className="[font-family:var(--font-fraunces)] italic text-6xl text-[#C9A26B] leading-none mb-6">
              {item.n}
            </div>
            <h3 className="[font-family:var(--font-fraunces)] text-2xl text-[#F6EFE1] mb-3">
              {item.title}
            </h3>
            <p className="text-[#F6EFE1]/65 leading-relaxed text-sm">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-3xl">
        <p className="[font-family:var(--font-fraunces)] italic text-2xl md:text-3xl text-[#F6EFE1]/90 leading-snug">
          “You don’t own a strategy deck. You own the system that’s still
          running on Monday morning.”
        </p>
        <div className="mt-4 eyebrow text-[#C9A26B]">
          — New Plains LLC, Field Notes № 01
        </div>
      </div>
    </Section>
  );
}
