# /a Redesign — Fix Brief (Round 3)

## Shawn's feedback (verbatim, round 3)
1. **/a/ai** — Don't name actual automations running on my Hermes instance (no "Bronco Rig Watch", "Daily Briefing 6:30 AM CT", "MiniMax quota", "Honcho", "Elon/Marcus/JD/Alex/Tony"). Describe the *service being offered* in general terms — what the customer gets and how it saves them time/money. They should be able to imagine themselves in the picture.
2. **/a/ai** — Agents section: add **custom agents for specific needs / job types**, and emphasize that these agents can **analyze and create spreadsheets, Microsoft Office docs (Word, PowerPoint, Excel), and other deliverables**.
3. **/a** (homepage) — Frame the hero as **two ways to help** — more about **building credibility while serving small businesses and our country**. Don't tell them to "pick a side." Ask them to **select the option that lets us serve them**.
4. **/a/govcon** — Each service line card should have a **picture of people doing the work** behind it. Same on the homepage if possible — seeing people on the site builds credibility.
5. Keep all of /a unlisted, don't overwrite `/`, `/blog`, `/privacy`, `/terms`, `/sms-cta`.

## Routes (unchanged from round 2)
- `/a` — credibility-led double hero, people imagery
- `/a/ai` — general AI service descriptions + custom agents + Office doc delivery
- `/a/govcon` — service line cards with people photos

## Image plan (license-clear, free commercial use)
Use **Unsplash** hot-linked photos via `images.unsplash.com/photo-<id>?w=1600&q=80&auto=format&fit=crop`. Add `images.unsplash.com` to `next.config.js` `images.remotePatterns`.

**Verified Unsplash photo IDs** (from live search Aug 2026):
- `/a` hero (left half — small business owner): `photo-1687293233211-6b0cc3beba70` — woman at counter (credibility + small business)
- `/a` hero (right half — contractor / fed work): `photo-1560255976009-417377f57067` — handshake/property keys (credibility)
- `/a/ai` capability imagery (workshop/training): pick "business team at laptops" — `photo-1521737711867-e3b97375f902` (or similar — subagent should pick)
- `/a/govcon` service cards:
  - **Property Services** → `photo-1560255976009-417377f57067` (handing keys — Tierra Mallorca, 7.7k+ saves)
  - **Catering / Food Service** → `photo-1687369595840-e96a912586f1` (food on plate)
  - **Janitorial** → `photo-1764460179254-b1ba36cc8b44` (man mopping floor)
  - **Landscaping / Grounds** → `photo-1689728222087-6984f72460c4` (man mowing)
  - **AI Services for Gov** → `photo-1521737711867-e3b97375f902` (team at laptops) — or any "federal worker / laptop" shot
  - **Training** → `photo-1552664730-d307ca884978` (people at whiteboard) or similar workshop shot

If a specific ID returns 404 when curled, subagent should swap for a fallback (the search-pages above have dozens of alternates — just pick another URL with the same `images.unsplash.com/photo-<id>` pattern).

**Implementation:**
- Use Next.js `<Image>` component where possible (set `width`/`height`, `sizes` attribute, `priority` on hero images)
- For 16:9 aspect ratio hero crops: `?w=1600&h=900&fit=crop&q=80&auto=format`
- For square (400×400) service cards: `?w=600&h=600&fit=crop&q=80&auto=format`

## /a (homepage) — round 3 copy

**H1 (top of hero, big, Playfair italic 5xl→7xl):**
> "Two ways we work. One promise."

**Subhead (small, charcoal/60):**
> "New Plains LLC is a small American firm that helps two kinds of clients: businesses that want to use AI to get their time back, and federal, state, and local agencies that need a registered, reliable contractor. Whichever side needs us, we show up."

**Two cards (still two-column on desktop, stacked mobile):**
- LEFT — "AI for small business" → "Find the money your business is already losing to manual work. Ship the fix. Or build the AI team you've been hiring for."
  - microcopy: "1-hour audit call · $999"
  - CTA: "Book the audit →"
  - Background: subtle photo of small-business owner at desk (`photo-1687293233211-6b0cc3beba70`) with cream overlay
- RIGHT — "Government contracting" → "Property services. Catering. Janitorial. Grounds. And now: AI services for federal, state, and local agencies."
  - microcopy: "SAM.gov · UEI · CAGE assigned · NAICS 561210 · 722310 · 561720 · 561730 · 541512 · 541715"
  - CTA: "Send an RFQ →"
  - Background: subtle photo of handshake/property handoff (`photo-1560255976009-417377f57067`) with slate-navy `#1B2D45` overlay

**Below the cards — single credibility strip:**
> "Service-disabled veteran-owned. American-built. Born in Oklahoma."

## /a/ai — round 3 copy (no Hermes specifics)

**H1 (Playfair 7xl normal):**
> "AI that pays for itself."

**Lead paragraph:**
> "You don't need another chatbot. You need the manual work in your business to stop happening. We audit, design, and build the automation — and we hand you a team that keeps it running."

### Section: Services (general — no specific tool names)
Each card: title, 1-sentence promise, 1-line "what it saves you"
- **$999 Audit Call** — "1-hour video call. We map the 3 biggest leaks in your business and put a dollar figure on each. Anything after that gets bid out as a separate engagement." (CTA: Book the call)
- **Workflow Automation** — "We replace the manual stuff — invoice coding, lead routing, data rekeying, weekly reports — with software that runs while you sleep." (saves: ~10–20 hrs/wk)
- **AI Team Setup** — "A small group of specialized AI agents on a private server, each tuned to a different job (ops, finance, sales, admin). They share memory, learn your business, and act without prompting." (saves: ~one FTE of administrative time)
- **Custom Agents** — "Built for one job. Sales-call summarizer. Contract red-liner. RFP drafter. Field-tech dispatcher. You name it, we build it." (saves: ~50% of one role's time)
- **Document & Spreadsheet Automation** — "Your agents can read, analyze, and create Excel workbooks, Word docs, PowerPoint decks, and PDFs from raw data — on demand, in your formatting." (saves: ~6 hrs/wk of reporting)
- **AI Training** — "4-hour on-site workshop (OK + surrounding) or 60-min Zoom cohort for distributed teams. 'How to run your business with an AI team instead of a chatbot.' Hands-on: build your first 3 automations live."

### CTA strip at bottom
> "Tell us what's manual. We'll tell you if we can automate it."
> mailto:info@newplains.dev?subject=AI%20Audit

## /a/govcon — round 3 copy

**H1 (Playfair 6xl display tracking):**
> "Built to deliver. Registered to bid."

**Lead:**
> "New Plains LLC is a registered service-disabled veteran-owned small business. We hold active registrations on SAM.gov and we bid work across property services, food service, janitorial, grounds, and — as of this year — AI services and training for federal, state, and local agencies."

### Service Line Cards (each: photo + title + description + NAICS)
Grid of 6 cards (3 cols desktop, 2 tablet, 1 mobile). Each card has a 4:3 photo on top.

1. **Property Services** · "Facility maintenance, custodial oversight, landscaping, repair services for federal buildings and installations." · NAICS 561210 · photo: `photo-1560255976009-417377f57067`
2. **Catering & Food Service** · "Event catering, full-service kitchen operations, meal program delivery for government facilities and conferences." · NAICS 722310, 722320, 722330 · photo: `photo-1687369595840-e96a912586f1`
3. **Janitorial** · "Day and night janitorial services for federal offices, depots, and field sites. Bondable, insured, cleared staff." · NAICS 561720, 561740 · photo: `photo-1764460179254-b1ba36cc8b44`
4. **Grounds & Landscaping** · "Lawn care, irrigation, snow removal, and grounds maintenance for installations and federal parks." · NAICS 561730 · photo: `photo-1689728222087-6984f72460c4`
5. **AI Services for Government** · "Workflow automation, document processing, AI agents, and Microsoft Office (Excel, Word, PowerPoint) generation for federal and state programs. NAICS 541512." · NAICS 541512 · photo: `photo-1521737711867-e3b97375f902`
6. **Training** · "On-site or virtual AI literacy workshops for federal and state employees. NAICS 541715." · NAICS 541715 · photo: `photo-1552664730-d307ca884978`

**Below cards:** existing RFQ form (unchanged from round 2 — still works on the form spec)

## Implementation constraints (unchanged)
- Stack unchanged. Next.js 16.1.6 + React 19.2.3 + Tailwind v4. TS strict.
- Don't touch `/`, `/b/*`, `/c/*`, `/blog`, `/privacy`, `/terms`, `/sms-cta`, `lib/projects.ts`, `tailwind.config.ts`, `src/app/layout.tsx`.
- All routes noindex.
- Email everywhere = `info@newplains.dev`.
- Pass `npm run type-check`, `npm run lint` (on new files), `npm run build` with 0 errors.
- Don't commit or push.

## Forbidden strings (run final grep)
- No mention of "Bronco", "Daily Briefing", "6:30 AM", "Inbox Triage", "FirstHomeFix", "MiniMax", "5.1B", "Honcho", "Elon/Build", "Marcus/Exec", "JD/Ops", "Alex/Marketing", "Tony/Personal", "AGCO", "CoBank", "dsskaggs@gmail.com", "dsskaggs"

## Verification (must pass before reporting done)
- `npm run build` → 0 errors, all 3 routes (plus /compare update) compiled
- `curl https://newplains.dev/a` (or local equivalent) — confirm Unsplash images load (HEAD check at least 3 of the 6 image URLs)
- Final grep: 0 forbidden strings across `/a/page.tsx`, `/a/ai/page.tsx`, `/a/govcon/page.tsx`
- All 3 routes have `<meta name="robots" content="noindex">`
- All mailto links = `info@newplains.dev`
- next.config.js updated with `images.remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]`