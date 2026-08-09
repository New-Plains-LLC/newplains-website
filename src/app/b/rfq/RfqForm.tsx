"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Property Services",
  "Catering / Food Service",
  "Janitorial",
  "Landscaping",
  "AI Implementation",
  "Other / Not Sure",
];

export default function RfqForm() {
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [deadline, setDeadline] = useState("");
  const [scope, setScope] = useState("");

  function toggleService(service: string) {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      "RFQ — NEW PLAINS LLC",
      "--------------------",
      `Company: ${company}`,
      `Contact: ${contact}`,
      `Email: ${email}`,
      `Services: ${services.length > 0 ? services.join(", ") : "Not specified"}`,
      `Bid deadline: ${deadline || "Not specified"}`,
      "",
      "SCOPE / SOLICITATION:",
      scope || "Not provided",
    ];
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:dsskaggs@gmail.com?subject=${encodeURIComponent("RFQ")}&body=${body}`;
  }

  const inputClass =
    "w-full border border-white/15 bg-[#0E1B2C] px-4 py-3 text-sm text-white placeholder:text-[#8FA1B7]/60 focus:border-[#F5C518] focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label htmlFor="rfq-company" className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">
            Company / Agency
          </label>
          <input
            id="rfq-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme County Facilities"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="rfq-contact" className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">
            Contact Name
          </label>
          <input
            id="rfq-contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Jane Doe, Procurement"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="rfq-email" className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">
            Email
          </label>
          <input
            id="rfq-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@agency.gov"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">
          Services of interest
        </p>
        <div className="flex flex-wrap gap-3">
          {SERVICE_OPTIONS.map((service) => {
            const active = services.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                aria-pressed={active}
                className={`border px-4 py-2 text-xs font-black uppercase tracking-[0.15em] transition-colors ${
                  active
                    ? "border-[#F5C518] bg-[#F5C518] text-[#0E1B2C]"
                    : "border-white/15 bg-[#0E1B2C] text-[#8FA1B7] hover:border-[#F5C518]/60 hover:text-white"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="rfq-deadline" className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">
            Bid deadline
          </label>
          <input
            id="rfq-deadline"
            type="text"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            placeholder="e.g. 30 days from issue"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="rfq-naics" className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">
            NAICS (if known)
          </label>
          <input
            id="rfq-naics"
            type="text"
            placeholder="e.g. 561720"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="rfq-scope" className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">
          Scope / Solicitation summary
        </label>
        <textarea
          id="rfq-scope"
          rows={6}
          required
          value={scope}
          onChange={(e) => setScope(e.target.value)}
          placeholder="Sites, square footage or volume, staffing expectations, term, anything a bidder needs to price it."
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center bg-[#F5C518] px-10 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#0E1B2C] transition-colors hover:bg-white"
        >
          Send RFQ
        </button>
        <p className="text-xs leading-relaxed text-[#8FA1B7]">
          Submitting opens your email client with the RFQ pre-filled — nothing is stored.
        </p>
      </div>
    </form>
  );
}
