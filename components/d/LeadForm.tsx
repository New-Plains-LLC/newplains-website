"use client";

import { useState } from "react";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [workflow, setWorkflow] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, workflow }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed");
    }
  }

  return (
    <section
      id="claim"
      className="relative bg-[#F6EFE1] text-[#1A1814] px-6 md:px-12 lg:px-16 py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline gap-4 md:gap-6 mb-12 md:mb-16">
          <span className="marker text-[#B08A3E]">IX.</span>
          <span className="flex-1 h-px bg-[rgba(26,24,20,0.18)]" />
          <span className="marker text-[#5B6470]">Claim the Audit</span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="[font-family:var(--font-fraunces)] text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.01em] text-[#1A1814] mb-8">
              Book the audit.
              <br />
              <span className="italic text-[#B08A3E]">
                See the math yourself.
              </span>
            </h2>
            <p className="text-lg text-[#1A1814]/75 leading-relaxed max-w-xl mb-8">
              Tell us about one workflow that should be running itself. We’ll
              scope the diagnostic and send back the written findings — with
              the time and cost math laid out on the page.
            </p>
            <div className="space-y-3 [font-family:var(--font-geist-mono)] text-xs text-[#5B6470] uppercase tracking-widest">
              <div className="flex items-center gap-3">
                <span className="text-[#B08A3E]">✦</span> No demos, no sales
                call cycle
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#B08A3E]">✦</span> Direct response
                within two business days
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#B08A3E]">✦</span> Your data, your
                inbox, full stop
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:pl-6 lg:border-l border-[rgba(26,24,20,0.18)]">
            {status === "success" ? (
              <div className="py-12">
                <div className="[font-family:var(--font-fraunces)] italic text-3xl text-[#B08A3E] mb-4">
                  Thank you.
                </div>
                <p className="text-lg text-[#1A1814]/75 leading-relaxed max-w-md">
                  We’ve received your request. A New Plains principal will
                  respond directly to{" "}
                  <span className="[font-family:var(--font-geist-mono)] text-base text-[#1A1814]">
                    {email}
                  </span>{" "}
                  within two business days.
                </p>
                <div className="mt-8 eyebrow text-[#5B6470]">
                  In the meantime — re-run the calculator with different
                  inputs. The crossover month is the most useful number on this
                  page.
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8 pt-2">
                <div>
                  <label className="eyebrow text-[#5B6470] block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="field"
                  />
                </div>
                <div>
                  <label className="eyebrow text-[#5B6470] block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="field-email"
                  />
                </div>
                <div>
                  <label className="eyebrow text-[#5B6470] block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Optional"
                    className="field"
                  />
                </div>
                <div>
                  <label className="eyebrow text-[#5B6470] block mb-2">
                    One workflow you wish ran itself
                  </label>
                  <textarea
                    required
                    value={workflow}
                    onChange={(e) => setWorkflow(e.target.value)}
                    placeholder="e.g. monthly financial close, invoice reconciliation, proposal drafting, call follow-ups…"
                    className="field-area"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group w-full inline-flex items-center justify-between gap-6 bg-[#1A1814] text-[#F6EFE1] px-7 py-5 hover:bg-[#B08A3E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-4"
                >
                  <span className="[font-family:var(--font-fraunces)] text-2xl tracking-tight">
                    {status === "submitting" ? "Sending…" : "Book the $999 Audit"}
                  </span>
                  <span className="[font-family:var(--font-geist-mono)] text-sm group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
                {status === "error" && (
                  <p className="[font-family:var(--font-geist-mono)] text-xs text-[#9B2C2C]">
                    {errorMsg || "Something went wrong. Try again."}
                  </p>
                )}
                <div className="space-y-2 [font-family:var(--font-geist-mono)] text-xs text-[#5B6470] uppercase tracking-widest leading-relaxed">
                  <p>
                    $999 — invoiced on submission. Refunded if we can’t deliver
                    the diagnostic in 7 days.
                  </p>
                  <p>
                    Direct:{" "}
                    <a
                      href="mailto:info@newplains.dev"
                      className="text-[#1A1814] hover:text-[#B08A3E] transition-colors underline underline-offset-4"
                    >
                      info@newplains.dev
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
