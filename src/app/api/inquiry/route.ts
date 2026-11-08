import { NextRequest, NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import { INQUIRY_PAGE, INQUIRY_TO, MAX_BODY, inquiryEmail, parseInquiry } from "@/../lib/inquiry";
import { ownPage, readCapped } from "@/../lib/inquiry-route";

// Website inquiry form -> one email to the Hermes assistant's AgentMail inbox.
// The email is sent from a dedicated AgentMail inbox (AGENTMAIL_FORM_INBOX)
// with Reply-To set to the visitor. The assistant takes it from there; see
// docs/hermes-inquiry-assistant.md.
//
// Env (Vercel, server only):
//   AGENTMAIL_API_KEY    AgentMail API key
//   AGENTMAIL_FORM_INBOX inbox ID of the sending inbox (new_plains_website_inbox@agentmail.to)
//   AGENTMAIL_API_BASE   optional, for tests against a local mock

const API = process.env.AGENTMAIL_API_BASE ?? "https://api.agentmail.to/v0";
const ok = () => NextResponse.json({ ok: true });
const fail = (status: number, error: string, field?: string) => NextResponse.json({ ok: false, error, field }, { status });

export async function POST(req: NextRequest) {
  // Vercel BotID: the browser check set up in src/instrumentation-client.ts.
  // Scripts and headless clients fail here. In `next dev` it reports a
  // human unless BOTID_DEV_BYPASS=BAD-BOT; production ignores that option.
  // If the check itself errors, refuse rather than send unverified mail.
  let isBot: boolean;
  try {
    ({ isBot } = await checkBotId({
      developmentOptions: { bypass: process.env.BOTID_DEV_BYPASS === "BAD-BOT" ? "BAD-BOT" : "HUMAN" },
    }));
  } catch (e) {
    console.error("[inquiry] BotID check failed", String(e));
    return fail(503, "We could not verify this browser.");
  }
  if (isBot) return fail(403, "We could not verify this browser.");

  const key = process.env.AGENTMAIL_API_KEY;
  const inbox = process.env.AGENTMAIL_FORM_INBOX;
  if (!key || !inbox) return fail(503, "The form is not set up yet.");

  // Refuse oversized bodies before parsing: early on content-length, and
  // while reading for chunked uploads that don't send one.
  if (Number(req.headers.get("content-length") ?? 0) > MAX_BODY) return fail(413, "Request too large");
  let textBody: string | null;
  try {
    textBody = await readCapped(req.body, MAX_BODY);
  } catch {
    // Client hung up mid-body: answer in the route's own JSON shape.
    return fail(400, "Invalid request");
  }
  if (textBody === null) return fail(413, "Request too large");
  let raw: Record<string, unknown>;
  try {
    const body = JSON.parse(textBody);
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error();
    raw = body;
  } catch {
    return fail(400, "Invalid request");
  }

  const parsed = parseInquiry(raw);
  if (!parsed.ok) return fail(400, parsed.error, parsed.field);

  // Referer is client-controlled: keep it only if it is one of our own
  // pages, and only its path, so it cannot add lines to the email.
  const page = ownPage(req.headers.get("referer"), req.nextUrl.origin, INQUIRY_PAGE);
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
