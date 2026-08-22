import Image from "next/image";

export default function Nav() {
  const links = [
    { href: "#problem", roman: "II", label: "Problem" },
    { href: "#calculator", roman: "III", label: "Calculator" },
    { href: "#engagements", roman: "IV", label: "Engagements" },
    { href: "#tiers", roman: "VII", label: "Tiers" },
  ];
  return (
    <nav className="relative z-20 px-6 md:px-12 lg:px-16 pt-8 pb-6">
      <div className="flex items-end justify-between max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="New Plains LLC"
            width={60}
            height={40}
            priority
            className="h-9 w-auto shrink-0"
          />
          <div className="flex items-baseline gap-3">
            <span className="[font-family:var(--font-fraunces)] text-[1.875rem] leading-none tracking-tight text-[#1A1814]">
              Field<span className="italic text-[#B08A3E]">Notes</span>
            </span>
            <span className="hidden md:inline-block text-sm text-[#5B6470] pl-3 border-l border-[rgba(26,24,20,0.18)] [font-family:var(--font-geist-mono)] tracking-wider">
              By New Plains <span className="ml-1 text-[#B08A3E]">/</span> MMXXVI
            </span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-baseline gap-1.5 text-sm text-[#1A1814] hover:text-[#B08A3E] transition-colors"
            >
              <span className="[font-family:var(--font-geist-mono)] text-xs text-[#B08A3E] tabular">
                {l.roman}.
              </span>
              <span className="[font-family:var(--font-fraunces)] text-base border-b border-[rgba(26,24,20,0.18)] group-hover:border-[#B08A3E] transition-colors pb-0.5">
                {l.label}
              </span>
            </a>
          ))}
          <a
            href="#claim"
            className="ml-2 text-base [font-family:var(--font-fraunces)] text-[#F6EFE1] bg-[#1A1814] px-5 py-2.5 hover:bg-[#B08A3E] transition-colors flex items-center gap-2"
          >
            Book the $999 Audit
            <span className="[font-family:var(--font-geist-mono)] text-sm">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
