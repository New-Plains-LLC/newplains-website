import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "New Plains LLC: AI Business Consulting",
  description:
    "AI business consulting for established businesses: leadership workshops, custom AI systems, and ongoing AI concierge support. Start with a workshop or the $999 AI Audit. info@newplains.dev",
  robots: { index: false },
};

export default function ConceptALayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal antialiased">
      <header className="border-b border-brand-copper/15 bg-brand-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <Link href="/a/ai" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="New Plains LLC"
              width={60}
              height={40}
              priority
              className="h-10 w-auto shrink-0"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-heading whitespace-nowrap text-lg font-semibold tracking-tight text-brand-charcoal sm:text-xl">
                New Plains <span className="hidden text-brand-copper sm:inline">LLC</span>
              </span>
              <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-brand-charcoal/50 sm:inline">
                Business first. Built to work.
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/a/ai" className="transition-colors hover:text-brand-copper">
              AI Business Consulting
            </Link>
            <Link
              href="/a/ai#approach"
              className="text-brand-copper transition-colors hover:text-brand-copper-light"
            >
              Our approach
            </Link>
          </nav>
          <Link
            href="/a/ai/workshop"
            className="shrink-0 whitespace-nowrap bg-brand-charcoal px-3 py-2.5 text-sm sm:px-5 font-semibold text-brand-cream transition-colors hover:bg-brand-green"
          >
            Plan a workshop
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-brand-copper/15 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-brand-charcoal/60 sm:flex-row">
          <p>© {new Date().getFullYear()} New Plains LLC · Oklahoma</p>
          <div className="flex items-center gap-6">
            <Link href="/a/ai#approach" className="transition-colors hover:text-brand-copper">
              Our approach
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
