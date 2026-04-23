"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-logo]", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
      })
        .from(
          "[data-hero-title]",
          { opacity: 0, y: 30, duration: 0.8 },
          "-=0.4"
        )
        .from(
          "[data-hero-tagline]",
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.3"
        )
        .from(
          "[data-hero-cta]",
          { opacity: 0, y: 15, duration: 0.5 },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-4 text-center px-4">
      <Image
        data-hero-logo
        src="/logo.png"
        alt="New Plains LLC"
        width={1264}
        height={848}
        priority
        className="hero-logo drop-shadow-[0_14px_30px_rgba(45,42,38,0.28)]"
      />
      <div className="bg-brand-charcoal/50 backdrop-blur-sm rounded-2xl px-6 py-4">
        <h1
          data-hero-title
          className="font-heading hero-title font-bold text-white leading-tight"
        >
          New Plains LLC
        </h1>
        <p
          data-hero-tagline
          className="hero-tagline text-brand-wheat-light mt-2"
        >
          Practical AI Innovation for the Real World
        </p>
      </div>
      <button
        data-hero-cta
        onClick={onContactClick}
        className="mt-2 px-6 py-2.5 bg-brand-copper text-brand-cream rounded-full font-semibold shadow-md hover:bg-brand-copper-light transition-colors"
        style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.125rem)" }}
      >
        Get in Touch
      </button>
    </div>
  );
}
