import type { Metadata } from "next";
import Link from "next/link";
import { Instrument_Serif, Manrope } from "next/font/google";

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-classic-g",
});
const body = Manrope({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-grotesk-g",
});

export const metadata: Metadata = {
  title: "New Plains AI — AI Business Consulting for Owner-Operators",
  description:
    "We find the ten hours a week your business is losing to manual work — and ship the systems that get them back. $999 AI Audit, Oklahoma.",
};

const AUDIT_MAILTO =
  "mailto:info@newplains.dev?subject=AI%20Audit&body=Hi%20New%20Plains%2C%20I%27d%20like%20to%20book%20a%2045-minute%20AI%20audit%20call%20%28%24999%29.%20Here%27s%20a%20bit%20about%20my%20business%3A";

const NAV_LINKS = [
  { href: "/g", label: "Work" },
  { href: "/g#buckets", label: "Buckets" },
  { href: "/g#services", label: "Services" },
  { href: "/g#audit", label: "The Audit" },
  { href: "/compare", label: "Concepts" },
];

export default function ConceptGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen bg-white text-brand-charcoal antialiased`}
    >
      {/* Announcement bar — ink strip */}
      <div className="bg-[#2D2A26] px-6 py-3 text-center">
        <p className="text-[14px] font-medium text-brand-cream">
          If the audit doesn&apos;t find $999 a year in recoverable time, you
          don&apos;t pay for it.
        </p>
      </div>

      {/* Nav — text links left, button cluster right, no sticky */}
      <header className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
        <Link
          href="/g"
          className="text-[22px] font-medium tracking-[-0.44px] text-brand-charcoal"
        >
          New Plains
          <span className="ml-2 text-[14px] font-medium text-brand-charcoal">
            AI Business Consulting
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-2 py-1 text-[16px] font-medium text-brand-charcoal transition-colors hover:text-brand-charcoal"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={AUDIT_MAILTO}
          className="rounded-[1440px] bg-[#2D2A26] px-6 py-3 text-[16px] font-medium text-brand-cream transition-colors hover:bg-[#4A443C]"
        >
          Book the Audit
        </a>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#2D2A26] px-6 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-[14px] font-medium leading-[1.4] text-brand-charcoal">
            NEW PLAINS AI · AI BUSINESS CONSULTING · OKLAHOMA, USA
            <br />
            AI SYSTEMS THAT SHIP AND STICK
          </p>
          <div className="flex items-center gap-6 text-[14px] font-medium text-brand-cream">
            <Link href="/compare" className="transition-colors hover:text-[#B87333]">
              Concepts
            </Link>
            <a href={AUDIT_MAILTO} className="transition-colors hover:text-[#B87333]">
              info@newplains.dev
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
