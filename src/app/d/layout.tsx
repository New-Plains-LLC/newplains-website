import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/../components/d/Nav";
import Footer from "@/../components/d/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Field Notes № 01 — An Operating Manual for the AI Era",
  description:
    "New Plains LLC — an operating manual for the AI era. $999 audit, hands-on engineering, managed retainer. Book the audit at info@newplains.dev.",
  robots: { index: false },
};

export default function FieldNotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`d-fieldnotes ${fraunces.variable} ${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#F6EFE1] text-[#1A1814] [font-family:var(--font-geist-sans)] antialiased`}
    >
      <Nav />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
