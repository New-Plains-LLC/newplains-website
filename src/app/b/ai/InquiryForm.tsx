"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { INTERESTS, PROMPTS, SIZES, isInterest, type Interest } from "@/../lib/inquiry";
import s from "./b.module.css";

const CONTACT_EMAIL = "info@newplains.dev";
export const INQUIRY_EVENT = "np:inquiry";
export type InquiryDetail = { interest: Interest; message?: string };

// Jump to the form with an interest (and optionally a first answer) filled in.
export function openInquiry(detail: InquiryDetail) {
  window.dispatchEvent(new CustomEvent<InquiryDetail>(INQUIRY_EVENT, { detail }));
}

type Status = { kind: "idle" | "sending" } | { kind: "sent"; name: string; email: string } | { kind: "error"; error: string; field?: string };

export default function InquiryForm() {
  const [interest, setInterest] = useState<Interest>("workshop");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const startedAt = useRef(0);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
    const go = (d: InquiryDetail, scroll: boolean) => {
      setInterest(d.interest);
      if (d.message) setMessage(d.message);
      const el = document.getElementById("contact");
      if (scroll) el?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      form.current?.querySelector<HTMLInputElement>("#inq-name")?.focus({ preventScroll: true });
    };
    const onEvent = (e: Event) => go((e as CustomEvent<InquiryDetail>).detail, true);
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

  const send = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, startedAt: startedAt.current }),
      });
      const out = await res.json().catch(() => ({}));
      if (res.ok && out.ok) setStatus({ kind: "sent", name: String(f.name).trim().split(/\s+/)[0], email: String(f.email).trim() });
      else setStatus({ kind: "error", error: out.error ?? "Could not send right now.", field: out.field });
    } catch {
      setStatus({ kind: "error", error: "Could not send right now." });
    }
  };

  if (status.kind === "sent") {
    return (
      <div className={s.inquiry} role="status">
        <p className={s.sentTitle}>Thanks, {status.name}.</p>
        <p>Your inquiry is in. Shawn’s assistant will email <strong>{status.email}</strong> shortly to confirm, then follow up to find a time that works.</p>
      </div>
    );
  }

  const err = status.kind === "error" ? status : null;
  const invalid = (k: string) => (err?.field === k ? { "aria-invalid": true, "aria-describedby": "inq-error" } : {});

  return (
    <form ref={form} className={s.inquiry} onSubmit={send}>
      <div className={s.row}>
        <label className={s.field}>
          <span>Name</span>
          <input id="inq-name" name="name" autoComplete="name" required maxLength={120} {...invalid("name")} />
        </label>
        <label className={s.field}>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={254} {...invalid("email")} />
        </label>
      </div>
      <div className={s.row}>
        <label className={s.field}>
          <span>Company</span>
          <input name="company" autoComplete="organization" required maxLength={160} {...invalid("company")} />
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
        <textarea name="message" rows={4} required maxLength={4000} value={message} onChange={(e) => setMessage(e.target.value)} {...invalid("message")} />
      </label>
      {/* Hidden from people; bots that fill every field give themselves away. */}
      <div className={s.trap} aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
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
