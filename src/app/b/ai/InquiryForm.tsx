"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { INQUIRY_PATH, INTERESTS, MAX, PROMPTS, SIZES, firstName, isInterest, type Interest } from "@/../lib/inquiry";
import { CONTACT_EMAIL } from "./links";
import s from "./b.module.css";

export const INQUIRY_EVENT = "np:inquiry";
export type InquiryDetail = { interest: Interest; message?: string };

// Jump to the form with an interest (and optionally a first answer) filled in.
export function openInquiry(detail: InquiryDetail) {
  window.dispatchEvent(new CustomEvent<InquiryDetail>(INQUIRY_EVENT, { detail }));
}

// The form replaces mailto CTAs, which MailtoTracker counted as
// contact_email_click. A sent inquiry is the stronger signal: GA4's
// recommended generate_lead event, with no name or email attached. Sent to
// GTM and straight to GA4, like MailtoTracker: the GTM container has no GA4
// tag for it. If one is added there, drop the gtag line to avoid doubles.
function trackLead(interest: string, size: string) {
  const params = { inquiry_interest: interest, company_size: size, page_path: location.pathname };
  sendGTMEvent({ event: "generate_lead", ...params });
  (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "generate_lead", params);
}

// What /api/inquiry answers, success or not.
type Reply = { ok?: boolean; error?: string; field?: string };

type Status = { kind: "idle" | "sending" } | { kind: "sent"; name: string; email: string } | { kind: "error"; error: string; field?: string };

export default function InquiryForm() {
  const [interest, setInterest] = useState<Interest>("workshop");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const thanks = useRef<HTMLDivElement>(null);
  // The form, and the button that had focus, are gone once it sends: move
  // focus to the thank-you so keyboard and screen-reader users keep their place.
  useEffect(() => { if (status.kind === "sent") thanks.current?.focus(); }, [status.kind]);
  // Bumped to ask for focus on the name field. The effect runs after React
  // has committed (so the form exists even if it just replaced the
  // thank-you); the frame delay lets a link click's own hash navigation
  // finish first, which would otherwise take the focus back.
  const [focusName, setFocusName] = useState(0);
  useEffect(() => {
    if (!focusName) return;
    const id = requestAnimationFrame(() => document.getElementById("inq-name")?.focus({ preventScroll: true }));
    return () => cancelAnimationFrame(id);
  }, [focusName]);

  // The note the hero last put in the form, so an empty hero submit can
  // clear the hero's own text without erasing a note typed in the form.
  const heroNote = useRef("");
  useEffect(() => {
    const go = (d: InquiryDetail, scroll: boolean) => {
      setInterest(d.interest);
      // The hero always sends its tab's text, even empty. Empty clears only
      // text the hero itself put there, so an earlier tab's answer never
      // sits under a different interest and a typed note is never lost.
      if (d.message) { heroNote.current = d.message; setMessage(d.message); }
      else if (d.message === "") setMessage((m) => (m === heroNote.current ? "" : m));
      // A CTA means a fresh start: bring the form back after a send, and drop
      // an error left from an earlier attempt.
      setStatus((st) => (st.kind === "sent" || st.kind === "error" ? { kind: "idle" } : st));
      const el = document.getElementById("contact");
      if (scroll) el?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      setFocusName((n) => n + 1);
    };
    const onEvent = (e: Event) => {
      const d = (e as CustomEvent<Partial<InquiryDetail> | null>).detail;
      if (d && isInterest(d.interest)) go({ interest: d.interest, message: typeof d.message === "string" ? d.message : undefined }, true);
    };
    // Links like <a href="#contact" data-interest="audit"> scroll on their
    // own; this only sets the interest and focus.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest?.("a[data-interest]");
      const v = a?.getAttribute("data-interest");
      if (isInterest(v)) go({ interest: v }, false);
    };
    window.addEventListener(INQUIRY_EVENT, onEvent);
    document.addEventListener("click", onClick);
    return () => { window.removeEventListener(INQUIRY_EVENT, onEvent); document.removeEventListener("click", onClick); };
  }, []);

  // One request at a time, even if a submit slips past the disabled button
  // before the "sending" render lands; a second POST would be a second email.
  const inFlight = useRef(false);
  const send = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inFlight.current) return;
    inFlight.current = true;
    const f = Object.fromEntries(new FormData(e.currentTarget));
    setStatus({ kind: "sending" });
    // The route gives AgentMail 10s; never leave the button on "Sending…".
    // A plain AbortController works where AbortSignal.timeout doesn't.
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 20_000);
    try {
      const res = await fetch(INQUIRY_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
        signal: ctrl.signal,
      });
      const out: Reply = await res.json().catch(() => ({}));
      if (res.ok && out.ok) {
        // Analytics must never turn a sent inquiry into an error message.
        try { trackLead(String(f.interest), String(f.size)); } catch {}
        // Sent: clear the note, unless a CTA clicked mid-send already put a
        // new one in its place.
        const sentNote = String(f.message ?? "");
        setMessage((m) => (m === sentNote ? "" : m));
        setStatus({ kind: "sent", name: firstName(f.name), email: String(f.email).trim() });
      } else setStatus({ kind: "error", error: out.error ?? "Could not send right now.", field: out.field });
    } catch {
      setStatus({ kind: "error", error: "Could not send right now." });
    } finally {
      clearTimeout(timer);
      inFlight.current = false;
    }
  };

  if (status.kind === "sent") {
    return (
      <div ref={thanks} tabIndex={-1} className={s.inquiry} role="status">
        <p className={s.sentTitle}>{status.name ? `Thanks, ${status.name}.` : "Thanks."}</p>
        <p>Your inquiry is in. Shawn’s assistant will email <strong>{status.email}</strong> shortly to confirm, then follow up to find a time that works.</p>
        <button type="button" className={s.again} onClick={() => {
          setStatus({ kind: "idle" });
          setFocusName((n) => n + 1); // this button is about to disappear
        }}>Send another note</button>
      </div>
    );
  }

  const err = status.kind === "error" ? status : null;
  const invalid = (k: string) => (err?.field === k ? { "aria-invalid": true, "aria-describedby": "inq-error" } : {});

  return (
    <form className={s.inquiry} onSubmit={send}>
      <div className={s.row}>
        <label className={s.field}>
          <span>Name</span>
          <input id="inq-name" name="name" autoComplete="name" required maxLength={MAX.name} {...invalid("name")} />
        </label>
        <label className={s.field}>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={MAX.email} {...invalid("email")} />
        </label>
      </div>
      <div className={s.row}>
        <label className={s.field}>
          <span>Company</span>
          <input name="company" autoComplete="organization" required maxLength={MAX.company} {...invalid("company")} />
        </label>
        <label className={s.field}>
          <span>Company size</span>
          <select name="size" required defaultValue="" {...invalid("size")}>
            <option value="" disabled>Employees</option>
            {SIZES.map((z) => <option key={z} value={z}>{z} employees</option>)}
          </select>
        </label>
      </div>
      <label className={s.field}>
        <span>Interested in</span>
        <select name="interest" value={interest} onChange={(e) => setInterest(e.target.value as Interest)} {...invalid("interest")}>
          {(Object.keys(INTERESTS) as Interest[]).map((k) => <option key={k} value={k}>{INTERESTS[k]}</option>)}
        </select>
      </label>
      <label className={s.field}>
        <span>{PROMPTS[interest]}</span>
        <textarea name="message" rows={4} required maxLength={MAX.message} value={message} onChange={(e) => setMessage(e.target.value)} {...invalid("message")} />
      </label>
      {err && (
        <p id="inq-error" className={s.formError} role="alert">
          {err.error}{" "}
          {!err.field && <>You can also write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</>}
        </p>
      )}
      <button type="submit" className={s.button} disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : "Send inquiry"}
      </button>
      <p className={s.formNote}>
        Shawn’s assistant confirms by email, then follows up to find a time. We use your details only to reply.
        Prefer email? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </form>
  );
}
