import type { Metadata } from "next";
import Link from "next/link";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";

/* Concept D — "The Showroom" (brutalist editorial on warm gray)
   Design system: Hermes Drive/AI Consulting Tools/Website inspiration/
   AI for business website inspiration (DESIGN.md, tokens.json) */

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cond-d",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-d",
  display: "swap",
});

const mono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono-d",
  display: "swap",
});

export const metadata: Metadata = {
  title: "New Plains AI — AI Consulting for Small Business",
  description:
    "We find the ten hours a week your business is losing to manual work — and ship the systems that get them back. $999 AI Audit. Working systems, not decks.",
  robots: { index: false },
};

const AUDIT_MAILTO =
  "mailto:info@newplains.dev?subject=AI%20Audit&body=Hi%20New%20Plains%2C%20I%27d%20like%20to%20book%20a%201-hour%20AI%20audit%20call%20(%24999).%20Here%27s%20a%20bit%20about%20my%20business%3A";

const NAV_LINKS = [
  { href: "/d", label: "Work" },
  { href: "/d#paths", label: "Paths" },
  { href: "/d#audit", label: "The Audit" },
  { href: "/d#govcon", label: "GovCon" },
  { href: "/compare", label: "Concepts" },
];

export default function ConceptDLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${anton.variable} ${inter.variable} ${mono.variable} min-h-screen bg-[#e5e5e5] text-black antialiased`}
    >
      {/* Nav — 8rem bar, floating white pill */}
      <header className="flex h-16 items-center justify-between px-4 sm:h-24 sm:px-8 md:h-32">
        <Link
          href="/d"
          className="[font-family:var(--font-cond-d)] text-xl uppercase leading-none tracking-[-0.02em] text-black sm:text-2xl"
        >
          New Plains
          <span className="ml-2 hidden align-middle [font-family:var(--font-mono-d)] text-[10px] font-medium uppercase tracking-[-0.03em] text-[#979797] sm:inline-block">
            AI CONSULTING
          </span>
        </Link>

        <nav className="hidden items-center gap-6 rounded-full bg-white px-8 py-3 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#444444] transition-colors hover:text-black"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={AUDIT_MAILTO}
          className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2f2f2f]"
        >
          Book the Audit
        </a>
      </header>

      <main>{children}</main>

      {/* Footer — compact dark band */}
      <footer className="mt-20 bg-black">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
          <p className="[font-family:var(--font-mono-d)] text-xs leading-relaxed tracking-[-0.03em] text-[#979797]">
            NEW PLAINS LLC · OKLAHOMA · SAM.GOV ACTIVE
            <br />
            AI SYSTEMS THAT SHIP AND STICK
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-white">
            <Link href="/compare" className="transition-colors hover:text-[#d1ffca]">
              Concept Index
            </Link>
            <Link href="/" className="transition-colors hover:text-[#d1ffca]">
              Main Site
            </Link>
            <a
              href="mailto:info@newplains.dev"
              className="rounded-full bg-[#fff100] px-4 py-1.5 font-medium text-black transition-opacity hover:opacity-80"
            >
              info@newplains.dev
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
