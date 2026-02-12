"use client";

import { useState, type FormEvent } from "react";
import Modal from "../ui/Modal";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    const formspreeId =
      process.env.NEXT_PUBLIC_FORMSPREE_ID || "xojnjzgv";

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    setStatus("idle");
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-charcoal">
            Get in Touch
          </h2>
          <p className="text-brand-charcoal/60 text-sm mt-1">
            Or email us directly at{" "}
            <a
              href="mailto:info@NewPlains.dev"
              className="text-brand-copper font-semibold hover:underline"
            >
              info@NewPlains.dev
            </a>
          </p>
        </div>

        {status === "success" ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-green/20 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7A8B5C" strokeWidth="2.5">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-brand-charcoal">
              Message Sent!
            </h3>
            <p className="text-brand-charcoal/60 text-sm mt-2">
              We&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-semibold text-brand-charcoal mb-1">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-brand-wheat/40 bg-white text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-copper/40"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-semibold text-brand-charcoal mb-1">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-brand-wheat/40 bg-white text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-copper/40"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-brand-charcoal mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-brand-wheat/40 bg-white text-brand-charcoal resize-none focus:outline-none focus:ring-2 focus:ring-brand-copper/40"
                placeholder="Tell us what you're working on..."
              />
            </div>

            {status === "error" && (
              <p className="text-red-600 text-sm">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 bg-brand-copper text-brand-cream rounded-full font-semibold text-lg hover:bg-brand-copper-light transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
}
