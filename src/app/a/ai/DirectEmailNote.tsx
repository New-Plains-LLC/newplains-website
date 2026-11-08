export const CONTACT_EMAIL = "info@newplains.dev";

// Single builder for every mailto CTA on the /a/ai pages. Body line breaks
// are sent as CRLF (%0D%0A) per RFC 6068; Outlook desktop can collapse a bare
// %0A into one line.
export const mailto = (subject: string, body?: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body.replace(/\r?\n/g, "\r\n"))}` : ""
  }`;

// Visible fallback for mailto-only CTAs: webmail users with no mail handler
// can copy the address instead of a click that silently does nothing.
export default function DirectEmailNote() {
  return (
    <p>
      If your email app doesn&apos;t open, write to{" "}
      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
    </p>
  );
}
