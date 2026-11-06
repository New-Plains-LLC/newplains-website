import styles from "./services.module.css";

export const CONTACT_EMAIL = "info@newplains.dev";

// Single builder for every mailto CTA on the /a/ai pages.
export const mailto = (subject: string, body?: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

// Visible fallback for mailto-only CTAs: webmail users with no mail handler
// can copy the address instead of a click that silently does nothing.
export default function DirectEmailNote() {
  return (
    <p className={styles.direct}>
      If your email app doesn&apos;t open, write to{" "}
      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
    </p>
  );
}
