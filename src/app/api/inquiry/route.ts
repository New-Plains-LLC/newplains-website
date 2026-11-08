import { NextRequest, NextResponse } from "next/server";
import { INQUIRY_TO, MIN_FILL_MS, inquiryEmail, parseInquiry } from "@/../lib/inquiry";

// Website inquiry form -> one email to the Hermes assistant's AgentMail inbox.
// The email is sent from a dedicated AgentMail inbox (AGENTMAIL_FORM_INBOX)
// with Reply-To set to the visitor. The assistant takes it from there; see
// docs/hermes-inquiry-assistant.md.
//
// Env (Vercel, server only):
//   AGENTMAIL_API_KEY    AgentMail API key
//   AGENTMAIL_FORM_INBOX inbox ID of the sending inbox, e.g. newplains-site@agentmail.to
//   AGENTMAIL_API_BASE   optional, for tests against a local mock

const API = process.env.AGENTMAIL_API_BASE ?? "https://api.agentmail.to/v0";
const ok = () => NextResponse.json({ ok: true });
const fail = (status: number, error: string, field?: string) => NextResponse.json({ ok: false, error, field }, { status });

export async function POST(req: NextRequest) {
  // Only the site's own pages may post here.
  if (req.headers.get("origin") !== req.nextUrl.origin) return fail(403, "Forbidden");

  let raw: Record<string, unknown>;
  try {
    const body = await req.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error();
    raw = body;
  } catch {
    return fail(400, "Invalid request");
  }

  // Bots: a filled hidden field, or a form sent faster than a person could
  // fill it. They get a normal-looking success and no email is sent.
  const elapsed = Date.now() - Number(raw.startedAt);
  if (raw.website || !(elapsed >= MIN_FILL_MS)) return ok();

  const parsed = parseInquiry(raw);
  if (!parsed.ok) return fail(400, parsed.error, parsed.field);

  const key = process.env.AGENTMAIL_API_KEY;
  const inbox = process.env.AGENTMAIL_FORM_INBOX;
  if (!key || !inbox) return fail(503, "The form is not set up yet.");

  const page = req.headers.get("referer") ?? `${req.nextUrl.origin}/b/ai`;
  const { subject, text } = inquiryEmail(parsed.value, { page, at: new Date() });

  try {
    const res = await fetch(`${API}/inboxes/${encodeURIComponent(inbox)}/messages/send`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        to: INQUIRY_TO,
        reply_to: parsed.value.email,
        subject,
        text,
        labels: ["website-inquiry", `interest-${parsed.value.interest}`],
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("[inquiry] AgentMail send failed", res.status, (await res.text()).slice(0, 300));
      return fail(502, "Could not send right now.");
    }
  } catch (e) {
    console.error("[inquiry] AgentMail send error", String(e));
    return fail(502, "Could not send right now.");
  }
  return ok();
}
