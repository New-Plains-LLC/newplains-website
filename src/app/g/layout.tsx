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
  title: "New Plains AI — AI Consulting for Owner-Operators",
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
      className={`${display.variable} ${body.variable} min-h-screen bg-white text-[#17150e] antialiased`}
    >
      {/* Announcement bar — ink strip */}
      <div className="bg-[#17150e] px-6 py-3 text-center">
        <p className="text-[14px] font-medium text-[#f0f7f6]">
          If the audit doesn&apos;t find $999 a year in recoverable time, you
          don&apos;t pay for it.
        </p>
      </div>

      {/* Nav — text links left, button cluster right, no sticky */}
      <header className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
        <Link
          href="/g"
          className="text-[22px] font-medium tracking-[-0.44px] text-[#17150e]"
        >
          New Plains
          <span className="ml-2 text-[14px] font-medium text-[#949494]">
            AI Consulting
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-2 py-1 text-[16px] font-medium text-[#17150e] transition-colors hover:text-[#949494]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={AUDIT_MAILTO}
          className="rounded-[1440px] bg-[#17150e] px-6 py-3 text-[16px] font-medium text-[#f0f7f6] transition-colors hover:bg-[#272b30]"
        >
          Book the Audit
        </a>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#17150e] px-6 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-[14px] font-medium leading-[1.4] text-[#949494]">
            NEW PLAINS AI · AI CONSULTING · OKLAHOMA, USA
            <br />
            AI SYSTEMS THAT SHIP AND STICK
          </p>
          <div className="flex items-center gap-6 text-[14px] font-medium text-[#f0f7f6]">
            <Link href="/compare" className="transition-colors hover:text-[#cccc25]">
              Concepts
            </Link>
            <a href={AUDIT_MAILTO} className="transition-colors hover:text-[#cccc25]">
              info@newplains.dev
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
