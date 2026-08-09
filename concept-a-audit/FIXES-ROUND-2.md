# /a Redesign — Fix Brief (Round 2)

## Shawn's feedback (verbatim)
1. $999 = **1-hour audit call**, not 7 days of observation. Anything after that is bid out.
2. Remove **AGCO and CoBank** mentions entirely — doesn't fit. No supplier/creditor names.
3. **Add AI services** as a possible service for the government contracting business (it's not just property/catering).
4. **Email** = **info@newplains.dev** everywhere on /a (and /a/*). Replace `dsskaggs@gmail.com`.
5. **Double hero on /a**: split into two halves side-by-side (or stacked on mobile): "If you want AI consulting, click here" | "If you want government contracting, click here".
6. **Full RFQ submission** on /a/govcon (like /b/rfq, but visually matched to A's design — cream/copper/Playfair).
7. **Add AI capabilities** on the AI consulting pages: real automations from our cron jobs, hosted agent team on a private server, AI Training (web + on-site).
8. **Keep all of /a unlisted**, don't overwrite `/`, `/blog`, `/privacy`, `/terms`, `/sms-cta`.

## Files to keep
- `src/app/a/layout.tsx` — base (update metadata, email)
- `src/app/a/page.tsx` — completely rewrite (double hero)
- `src/app/a/audit/page.tsx` — repurpose → rename + repurpose to **AI consulting capability page** (delete or merge)
- `src/app/a/govcon/page.tsx` — full rewrite with embedded RFQ form
- `src/app/a/ai/page.tsx` — NEW: capabilities + hosted-agent team + training
- `src/app/compare/page.tsx` — update link text to reflect changes (still points to /a)
- `src/app/sitemap.ts` — update route list

## Routes (final)
- `/a` — double hero (AI Consulting | GovCon)
- `/a/ai` — AI consulting capabilities: real Hermes automations, hosted agent team, AI Training
- `/a/govcon` — GovCon credibility + full RFQ submission form (mailto:info@newplains.dev?subject=RFQ)

## $999 copy (everywhere)
**"Book a 1-hour AI audit call. $999. We map the 3 biggest time/money leaks in your business and give you a written short-list of what to fix. Anything after that gets bid out as a separate engagement."**

## Real automation inventory (use these — no faking)

### Hermes cron automations (across all profiles — these are real, running)
- **ops:** Daily Briefing 6:30 AM CT · Inbox Triage 4×/day · Gmail Auto-Label every 15 min · Inbox Auto-Sort to Folders every 15 min · Sunday AM Revenue Check
- **personal:** Daily Decision Log · Weekly Decision Summary · Nightly Dream Vault maintenance · Morning Money Mindset · Evening Money Repattern · Bronco Rig Watch daily
- **marketing:** FirstHomeFix weekly blog draft · LakeTees monthly draft review · ad performance check-in
- **build:** MiniMax token quota monitoring (target: stay under 5.1B/mo)

### n8n workflows (live, real)
- Hermes Gmail auto-label driver (60 emails/run, ~5 sec, 0 failures)
- FirstHomeFix lead intake webhook
- Claude email-to-folder routing
- Daily Morning Briefing voice delivery
- Meeting Prep Agent
- OpenClaw calendar sync
- Weekly NPS survey summary
- Teams channel reader

### Hosted-agent team (the pitch)
"We host a team of personal-assistant AI agents on a private server, customized for your executive. Each agent has persistent memory (Honcho), access to your Notion/Drive/Gmail/Calendar, and runs on a dedicated profile (Elon for building, Marcus for executive reasoning, JD for ops, Alex for marketing). One Telegram chat. Phone-call voice interface. Five specialty personas instead of one chatbot."

### AI Training
- **On-site (OK + surrounding):** 4-hour executive workshop — "How to run your business with an AI team instead of a chatbot." Hands-on: build your first 3 automations live.
- **On the web:** 60-minute Zoom for distributed teams — same content, smaller cohort, screen-share driven.

## Tone
- Outcome-led, concrete numbers, no "transform your business" copy
- Copper `#B87333` accents stay on `Book the audit call` + the AI half of the double hero
- A muted navy `#1B2D45` for the GovCon half (gives it weight without abandoning cream)
- Playfair Display H1 everywhere on /a; Inter body
- All H1s different sizes per page (no same-size-everywhere monotony)

## Visual constraints
- A is cream `#FAF8F5`, charcoal, copper — keep that
- Add `#1B2D45` (deep slate-navy) only as the govcon-half accent — don't invade cream sections
- All routes noindex. Layout metadata updated. Sitemap updated.

## Final check
- All 4 routes (`/a`, `/a/ai`, `/a/govcon`, plus `/compare` text refresh) pass `npm run type-check`, `npm run lint`, `npm run build` with 0 errors.
- Every CTA links to `mailto:info@newplains.dev` (not `dsskaggs@gmail.com`).
- No AGCO, no CoBank, no supplier/creditor names anywhere on /a/*.
- No `dsskaggs@gmail.com` anywhere on /a/*.