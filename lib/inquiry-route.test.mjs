// Tests for the inquiry route's request guards. Run: npm test (Node 22.7+).
import { test } from "node:test";
import assert from "node:assert/strict";
import { ownPage, readCapped, sameHost } from "./inquiry-route.ts";

const stream = (chunks, failAfter) => new ReadableStream({
  pull(c) {
    if (failAfter !== undefined && failAfter-- === 0) return c.error(new Error("client hung up"));
    const next = chunks.shift();
    if (next === undefined) return c.close();
    c.enqueue(new TextEncoder().encode(next));
  },
});

test("readCapped returns the body under the cap, across chunks and multibyte text", async () => {
  assert.equal(await readCapped(stream(['{"a":', '"漢字"}']), 100), '{"a":"漢字"}');
  assert.equal(await readCapped(null, 100), "");
});

test("readCapped stops at the byte cap, not the character count", async () => {
  assert.equal(await readCapped(stream(["x".repeat(60), "x".repeat(60)]), 100), null);
  // 40 CJK characters are 120 bytes: over a 100-byte cap.
  assert.equal(await readCapped(stream(["漢".repeat(40)]), 100), null);
});

test("readCapped rejects invalid UTF-8", async () => {
  const bad = new ReadableStream({ start(c) { c.enqueue(new Uint8Array([0x7b, 0xff, 0xfe, 0x7d])); c.close(); } });
  await assert.rejects(readCapped(bad, 100));
});

test("readCapped rejects when the client hangs up mid-body", async () => {
  await assert.rejects(readCapped(stream(["abc", "def"], 1), 100));
});

test("ownPage keeps only our own page paths", () => {
  const o = "https://newplains.dev";
  assert.equal(ownPage("https://newplains.dev/b/ai?utm=x#contact", o, "/b/ai"), "https://newplains.dev/b/ai");
  // URL parsing resolves dot segments (encoded too), so ".." never reaches the label.
  assert.equal(ownPage("https://newplains.dev/b/ai/../../x", o, "/b/ai"), "https://newplains.dev/x");
  assert.equal(ownPage("https://newplains.dev/b/ai/%2e%2e/x", o, "/b/ai"), "https://newplains.dev/b/x");
  assert.equal(ownPage("https://evil.example/b/ai", o, "/b/ai"), "https://newplains.dev/b/ai");
  assert.equal(ownPage("https://newplains.dev/b/ai%0AEmail:%20x", o, "/b/ai"), "https://newplains.dev/b/ai");
  assert.equal(ownPage(null, o, "/b/ai"), "https://newplains.dev/b/ai");
  assert.equal(ownPage("not a url", o, "/b/ai"), "https://newplains.dev/b/ai");
  // Same host over https while the server sees http behind a proxy.
  assert.equal(ownPage("https://newplains.dev/b/ai", "http://newplains.dev", "/b/ai"), "http://newplains.dev/b/ai");
  assert.equal(ownPage("https://newplains.dev/docs/v2.0", o, "/b/ai"), "https://newplains.dev/docs/v2.0");
});

test("readCapped still reports too-large when cancel() fails", async () => {
  const body = new ReadableStream({
    pull(c) { c.enqueue(new TextEncoder().encode("x".repeat(80))); },
    cancel() { throw new Error("cancel failed"); },
  });
  assert.equal(await readCapped(body, 100), null);
});

test("sameHost allows only our own host; a missing Origin is refused", () => {
  assert.equal(sameHost("https://newplains.dev", "newplains.dev"), true);
  assert.equal(sameHost("http://localhost:3125", "localhost:3125"), true);
  assert.equal(sameHost(null, "newplains.dev"), false);
  assert.equal(sameHost("https://newplains.dev", null), false);
  assert.equal(sameHost("https://evil.example", "newplains.dev"), false);
  assert.equal(sameHost("https://newplains.dev.evil.example", "newplains.dev"), false);
  assert.equal(sameHost("null", "newplains.dev"), false);
});
