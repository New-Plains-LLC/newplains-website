// Request helpers for src/app/api/inquiry/route.ts, kept free of Next.js
// imports so lib/inquiry-route.test.mjs can test them directly.

// Reads a body stream but stops at max bytes, so a chunked upload with no
// content-length can't make the function buffer more than that. Returns
// null when the body is too large; rejects if the client hangs up.
export async function readCapped(body: ReadableStream<Uint8Array> | null, max: number): Promise<string | null> {
  if (!body) return "";
  const reader = body.getReader();
  const parts: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    // Too large either way; a failed cancel must not turn this into an error.
    if (size > max) { await reader.cancel().catch(() => {}); return null; }
    parts.push(value);
  }
  const all = new Uint8Array(size);
  let at = 0;
  for (const p of parts) { all.set(p, at); at += p.byteLength; }
  return new TextDecoder().decode(all);
}

// The Referer is client-controlled: keep it only if it is one of our own
// pages, and only its path, so it cannot add lines to the email.
export function ownPage(referer: string | null, origin: string, fallbackPath: string) {
  try {
    const u = new URL(referer ?? "");
    // Host, not full origin, like sameHost: a proxy reporting http for an
    // https page must not mislabel it. Dots are fine in a path label.
    if (u.host === new URL(origin).host && /^\/[\w\-/.]{0,100}$/.test(u.pathname)) return origin + u.pathname;
  } catch {}
  return origin + fallbackPath;
}

// True when there is no Origin header (same-origin GETs, server tools) or
// when Origin names this host. A cross-site browser POST always sends one.
export function sameHost(origin: string | null, host: string | null) {
  if (!origin) return true;
  try { return !!host && new URL(origin).host === host; } catch { return false; }
}
