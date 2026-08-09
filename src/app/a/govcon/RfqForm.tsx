"use client";

import { useState } from "react";

const NAICS_OPTIONS = [
  "561210",
  "561720",
  "561730",
  "561740",
  "561990",
  "541512",
  "541511",
  "541519",
  "722310",
  "722320",
  "722330",
  "561110",
  "238990",
  "541715",
  "541690",
];

const SERVICE_OPTIONS = [
  "Property Services",
  "Catering",
  "Janitorial",
  "AI Services",
  "Training",
  "Other",
];

const inputClass =
  "w-full rounded-lg border border-brand-charcoal/15 bg-white px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-brand-copper focus:outline-none focus:ring-2 focus:ring-brand-copper/20";

export default function RfqForm() {
  const [agency, setAgency] = useState("");
  const [naics, setNaics] = useState("");
  const [solicitation, setSolicitation] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [estimatedValue, setEstimatedValue] = useState("");
  const [location, setLocation] = useState("");
  const [periodStart, setPeriodStart] = useState("");
  const [periodEnd, setPeriodEnd] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
      `Agency / Org: ${agency}`,
      `Primary NAICS: ${naics || "Not specified"}`,
      `Solicitation #: ${solicitation || "Not specified"}`,
      `Service type: ${services.length > 0 ? services.join(", ") : "Not specified"}`,
      `Estimated value: ${estimatedValue || "Not specified"}`,
      `Performance location: ${location || "Not specified"}`,
      `Performance period: ${periodStart || "?"} to ${periodEnd || "?"}`,
      `Contact: ${contact}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not specified"}`,
      "",
      "SCOPE OF WORK:",
      scope,
    ];

    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent(`RFQ — ${agency} — ${naics || "NAICS TBD"}`);
    window.location.href = `mailto:info@newplains.dev?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="rfq-agency"
            className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/60"
          >
            Agency / Org *
          </label>
          <input
            id="rfq-agency"
            type="text"
            required
            value={agency}
            onChange={(e) => setAgency(e.target.value)}
            placeholder="Acme County Facilities Dept."
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="rfq-naics"
            className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/60"
          >
            Primary NAICS *
          </label>
          <select
            id="rfq-naics"
            required
            value={naics}
            onChange={(e) => setNaics(e.target.value)}
            className={inputClass}
          >
            <option value="">Select a NAICS code…</option>
            {NAICS_OPTIONS.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="rfq-solicitation"
            className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/60"
          >
            Solicitation # <span className="normal-case text-brand-charcoal/40">(optional)</span>
          </label>
          <input
            id="rfq-solicitation"
            type="text"
            value={solicitation}
            onChange={(e) => setSolicitation(e.target.value)}
            placeholder="e.g. RFQ-2026-0814"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="rfq-estimated-value"
            className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/60"
          >
            Estimated value
          </label>
          <input
            id="rfq-estimated-value"
            type="text"
            value={estimatedValue}
            onChange={(e) => setEstimatedValue(e.target.value)}
            placeholder="e.g. $50K – $250K"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/60">
          Service type <span className="normal-case text-brand-charcoal/40">(select all that apply)</span>
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
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  active
                    ? "border-brand-copper bg-brand-copper text-brand-cream"
                    : "border-brand-charcoal/20 bg-white text-brand-charcoal/70 hover:border-brand-copper hover:text-brand-copper"
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
          <label
            htmlFor="rfq-location"
            className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/60"
          >
            Performance location
          </label>
          <input
            id="rfq-location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Tulsa, OK + surrounding sites"
            className={inputClass}
          />
        </div>
        <div>
          <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/60">
            Performance period
          </span>
          <div className="grid grid-cols-2 gap-3">
            <input
              id="rfq-period-start"
              type="date"
              aria-label="Performance period start"
              value={periodStart}
              onChange={(e) => setPeriodStart(e.target.value)}
              className={inputClass}
            />
            <input
              id="rfq-period-end"
              type="date"
              aria-label="Performance period end"
              value={periodEnd}
              onChange={(e) => setPeriodEnd(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="rfq-contact"
            className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/60"
          >
            Contact name *
          </label>
          <input
            id="rfq-contact"
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Jane Doe, Procurement"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="rfq-email"
            className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/60"
          >
            Email *
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
        <div>
          <label
            htmlFor="rfq-phone"
            className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/60"
          >
            Phone
          </label>
          <input
            id="rfq-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(918) 555-0134"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="rfq-scope"
          className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/60"
        >
          Scope of work *
        </label>
        <textarea
          id="rfq-scope"
          rows={6}
          required
          minLength={50}
          value={scope}
          onChange={(e) => setScope(e.target.value)}
          placeholder="Sites, square footage or volume, staffing expectations, term, deliverables — anything a bidder needs to price it. (50+ characters)"
          className={`${inputClass} resize-y`}
        />
        {scope.length > 0 && scope.length < 50 && (
          <p className="mt-2 text-xs text-brand-copper">
            {50 - scope.length} more characters to meet the 50-character minimum.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#1B2D45] px-10 py-4 text-base font-semibold text-white shadow-lg shadow-[#1B2D45]/20 transition-colors hover:bg-[#243C5C]"
        >
          Send RFQ
        </button>
        <p className="text-xs leading-relaxed text-brand-charcoal/50">
          (mailto fallback — no backend) Submitting opens your email client to
          info@newplains.dev with the RFQ pre-filled. Nothing is stored on a server.
        </p>
      </div>
    </form>
  );
}
