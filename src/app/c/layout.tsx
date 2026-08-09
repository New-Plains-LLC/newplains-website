import type { Metadata } from "next";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "newplains.dev — delivery stack",
  description:
    "An AI consulting + GovCon delivery stack. Spec: every component below is real and runs in production.",
  robots: { index: false },
};

export default function ConceptCLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${jetbrains.variable} [font-family:var(--font-jetbrains)] min-h-screen bg-[#0A0A0B] text-[#4ADE80] antialiased`}
    >
      <header className="border-b border-[#4ADE80]/25 bg-[#0F0F10]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 text-xs">
          <Link href="/c" className="font-semibold text-[#F59E0B]">
            guest@newplains:~$ <span className="text-[#4ADE80]">cd /</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/c" className="transition-colors hover:text-[#F59E0B]">
              [home]
            </Link>
            <Link href="/c/ai-stack" className="transition-colors hover:text-[#F59E0B]">
              [ai-stack]
            </Link>
            <Link href="/c/govcon" className="transition-colors hover:text-[#F59E0B]">
              [govcon]
            </Link>
            <Link href="/compare" className="text-[#F59E0B] transition-colors hover:text-white">
              [index]
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[#4ADE80]/25 bg-[#0F0F10] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-[#4ADE80]/60 sm:flex-row">
          <p>{"// newplains.dev · delivery-stack v0.18.2"}</p>
          <div className="flex gap-5">
            <Link href="/compare" className="transition-colors hover:text-[#F59E0B]">
              {"// index"}
            </Link>
            <Link href="/" className="transition-colors hover:text-[#F59E0B]">
              {"// main-site"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
