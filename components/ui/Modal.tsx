"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!overlayRef.current || !contentRef.current) return;

      if (isOpen) {
        gsap.set(overlayRef.current, { display: "flex" });
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.2)" }
        );
      } else {
        gsap.to(contentRef.current, {
          opacity: 0,
          y: 20,
          scale: 0.97,
          duration: 0.25,
          ease: "power2.in",
        });
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            if (overlayRef.current) {
              gsap.set(overlayRef.current, { display: "none" });
            }
          },
        });
      }
    },
    { dependencies: [isOpen] }
  );

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 items-center justify-center p-4 bg-brand-charcoal/60 backdrop-blur-sm"
      style={{ display: "none", opacity: 0 }}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-brand-cream rounded-2xl shadow-2xl p-6 md:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-brand-charcoal/10 hover:bg-brand-charcoal/20 transition-colors text-brand-charcoal"
          aria-label="Close modal"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
