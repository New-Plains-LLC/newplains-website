import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import Analytics from "@/../components/Analytics";
import Footer from "@/../components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Plains LLC — Practical AI Innovation",
  description:
    "New Plains LLC is an AI innovation studio building practical tools that bring the power of AI to everyday workflows.",
  metadataBase: new URL("https://newplains.dev"),
  openGraph: {
    title: "New Plains LLC — Practical AI Innovation",
    description:
      "AI innovation studio building practical tools that bring the power of AI to everyday workflows.",
    url: "https://newplains.dev",
    siteName: "New Plains LLC",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "New Plains LLC — Practical AI Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Plains LLC — Practical AI Innovation",
    description:
      "AI innovation studio building practical tools that bring the power of AI to everyday workflows.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <Footer />
        <Analytics />
        {/* Herm.Chat widget */}
        <Script
          src="https://herm-chat-1413c.web.app/widget-loader.js"
          data-bot-id="52agKHE9mzEnPNHXIeLW"
          data-color="#f59e0b"
          data-position="right"
          strategy="lazyOnload"
        />
      </body>
      <GoogleTagManager gtmId="GTM-TP57JWGF" />
    </html>
  );
}
