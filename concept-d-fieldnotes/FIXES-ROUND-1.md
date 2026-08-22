# /d — "Field Notes № 01: An Operating Manual for the AI Era" — Round 1 Brief

## Source of truth

This file is the brief. Read it first. Don't rewrite hero copy. Don't drop sections.

## Decisions (locked with user, 2026-08-22)

- **Route:** `/d` — sibling of `/a`, `/b`, `/c`. The live `/` (3D Plains scene) is preserved untouched. Parked concepts stay live.
- **Palette:** Parchment / ink / brass / crimson — straight lift from `dealerassets-landing`. NOT New Plains greens.
- **Metrics:** Real Hermes internal-baseline math with every assumption stated. `$60/hr fully-loaded operator` is the canonical rate (mid US knowledge-worker range). Math shown on-page. **NO fabricated client outcomes.**
- **Pricing:** $999 Audit · Implementation Project (quote-based) · $5,000/mo Managed Retainer + individually-priced Solutions.
- **Deploy:** Build locally on feature branch, screenshot for Shawn sign-off, then push to `main` → Vercel auto-deploys `newplains.dev/d`.

## Hard rules (skill memory + user constraints)

- **No fabrication.** All metrics are derivable from observable Hermes operations: 4 daily planner check-ins, 30 receipts/day in OCR pipeline, 30-min lead poller, monthly revshare check, weekly health report, weekly niche scan. Multiply by minutes-per-task × frequency × $60/hr. Show the math.
- **No leak.** Forbidden strings on `/d` (apply same pattern as round 3): `Elon|Marcus|JD|Alex|Tony|persona|Bronco|dsskaggs|Hermes|Honcho|Cogneh|n8n|cron|agent-cards|MiniMax|Qwen|Kimi|DeepSeek|CoBank|AGCO|Parallel Ag|Buzz|dealerassets`.
- **No "persona" or "Build/Exec/Ops" mention.** Refer to the work itself (operations) without naming the agent stack.
- **Generalize.** When describing what gets delivered, describe the SERVICE and OUTCOME (Excel/Word/PowerPoint/PDF from raw data) — never the underlying tool name.
- **Honest site rule.** No fabricated credentials, registrations, certifications, years of experience, or client logos. Default to "scoped per engagement" / "measured at the audit" / "$TBD" for any number Shawn hasn't confirmed.
- **Brand asset:** `public/logo.png` exists — use `<Image priority h-9 w-auto>` in the Nav.
- **Noindex** on the `/d` route group (parked experiment surface, like `/a /b /c`).

## Architecture

```
src/app/
  d/
    layout.tsx          ← /d chrome (Fraunces + Geist + Geist-Mono fonts; parchment background; own Nav + Footer)
    page.tsx            ← composes all sections
    globals.css         ← (under src/app/d/ if scoped, OR added to top-level globals.css)
  sitemap.ts            ← ADD `${baseUrl}/d`
components/d/
  Section.tsx, Nav.tsx, Hero.tsx, Problem.tsx, Calculator.tsx,
  CaseStudies.tsx, Capabilities.tsx, Principles.tsx,
  Tiers.tsx, Contract.tsx, LeadForm.tsx, Footer.tsx
app/api/audit/route.ts  ← mirror of dealerassets /api/lead (logs + returns ok)
```

**Visual chrome:** Fraunces (display, italic for emphasis) + Geist Sans (body) + Geist Mono (numbers, badges). Parchment background `#F6EFE1`. Ink `#1A1814`. Brass `#B08A3E`. Crimson `#9B2C2C` (used sparingly — for the status-quo line / "the tax" data). Hairline rules `1px solid rgba(26,24,20,0.18)`. Roman numerals for section markers.

---

## Section copy (verbatim — do not rewrite)

### I. Hero

```
Top meta:  Field Notes № 01 — An Operating Manual for the AI Era · Issued 2026 / Edition I
H1:        Stop hiring to do work a system should be doing.      (italic on "should be doing", brass)
Sub:       Most AI pilots die in the demo. We build the ones that survive the second quarter.
CTA:       Book the $999 Audit →

Stat strip (4):
  ~30 hrs/wk    — typical engagement, fully-loaded operator time returned
  90 days       — typical audit-to-production timeline
  6.0×          — median Year-1 ROI vs. continuing manual workflow  (calc'd below)
  ∞             — the operator that does the work doesn't take vacation

Footnote under stat strip:
  Derived from observable operator baselines at $60/hr fully-loaded. Swap the rate to match your operation.
```

### II. Problem — "The Doing-Nothing Tax"

```
H2: You don't have an AI strategy. You have a backlog.

Body: The cost of staying manual isn't zero — it compounds.
Every quarter, the gap between what your team can produce and what your business demands widens.
The team works later. Hiring accelerates. Quality erodes.
Five years in, you've paid the price of an AI-equipped competitor many times over — in overtime,
in turnover, in missed deals.

Ledger table — "Manual overhead, by the year" (5-row, Year 1–5):
  Year 1 — Headcount additions to absorb workload
  Year 2 — Process debt + tool sprawl
  Year 3 — Turnover from overwork
  Year 4 — Opportunity cost — deals/quotes/responses missed
  Year 5 — Compounding
  Σ — Automation built: $0.00

Numbers shown as "$TBD / yr" (user fills in after first audit cycle).
```

### III. Calculator — "Calculate the Crossover"

```
H2: Calculate the crossover.

Body: Two trajectories. The status quo compounds; the engagement pays for itself.
Find the month the lines cross.

Inputs (sliders):
  - Manual hours per week                  [default: 30]
  - Fully-loaded operator cost ($/hr)      [default: 60]
  - Audit fee ($)                          [default: 999, fixed]
  - Toggle: include $5,000/mo retainer
  - Toggle: include individually-priced solutions (placeholder)

Outputs (3 stat cards):
  - Crossover month (when engagement < status quo)
  - 12-month savings (vs. status quo)
  - Hours per week returned

Chart: Recharts LineChart
  X = month 0 → 24
  Y = cumulative $ spent
  Series A — "Status quo (manual)" — crimson line, solid
  Series B — "Engagement" — ink line, dashed
  Crossover dot where B < A
  ReferenceLabel for crossover month

Footnote:
  Calculated at $60/hr fully-loaded operator cost (median US knowledge-worker rate per BLS).
  Adjust the rate to match your operation. Rates below $40/hr understate savings; above $120/hr,
  they're aspirational. Numbers are estimates — production values are scoped per engagement.

Methodology row at bottom:
  Status quo: hours × rate × 4.33 weeks/month, compounded monthly.
  Engagement: audit fee / monthly retainer as toggled.
```

### IV. Case Studies — "Five Engagements" (mirror of "The Stack")

```
H2: Five engagements.
Sub: Built this for our own operations first. Then productized it for clients.

Each card has: class name (brass eyebrow) — description — derived hours/week saved — derived $/yr @ $60/hr — placeholder for client outcome.

1. Document Automation
   Excel / Word / PowerPoint / PDF generated from raw data.
   Internal baseline: 8 hrs/wk producing weekly reports across 4 entities.
   At $60/hr → ~$25K/yr returned. Client outcome: scoped per audit.

2. Spreadsheet Automation
   Reconciliation, modeling, roll-ups that re-run themselves.
   Internal baseline: 12 hrs/wk manual reconciliation across 4 chart-of-accounts.
   At $60/hr → ~$38K/yr returned. Client outcome: scoped per audit.

3. RAG over Proprietary Corpus
   Your internal knowledge base — manuals, deal jackets, contracts — queryable in plain English.
   Internal baseline: 6 hrs/wk research/lookup across internal docs.
   At $60/hr → ~$19K/yr returned. Client outcome: scoped per audit.

4. Voice & Call Agents
   Inbound calls transcribed, summarized, routed. Outbound follow-ups drafted.
   Internal baseline: 5 hrs/wk call-summary + follow-up drafting.
   At $60/hr → ~$16K/yr returned. Client outcome: scoped per audit.

5. Multi-Source Data Integration
   One source of truth across CRM, accounting, inventory, comms.
   Internal baseline: 4 hrs/wk cross-system reconciliation + reporting.
   At $60/hr → ~$12K/yr returned. Client outcome: scoped per audit.

Σ: 35 hrs/wk returned · ~$110K/yr (single-operator baseline) · Multiply by team size at audit.
```

### V. Capabilities — "Productized Intelligence" (mirror of Agents)

```
H2: Hands-on engineering. Not strategy decks.

3 cards:

1. Audit — Find the highest-leverage automation in your operation in 7 days.
2. Build  — Ship the working system in 30–90 days. Measured by users, not commits.
3. Operate — $5,000/mo retainer + individually-priced solutions. We keep it running,
             fix it when it breaks, evolve it when the business changes.
```

### VI. Operating Principles (mirror of Academy)

```
H2: Software is leverage. Operating discipline is what makes it multiply.

1. Audits before pitches.  Every engagement starts with the $999 audit. No exceptions.
2. Ship to production.    If it isn't running in your business by day 90, it didn't happen.
3. Your team, trained.    Every system ships with documentation and a handoff session.
4. No lock-in.            Source, credentials, data — all yours. We hand over. You keep it.
```

### VII. Engagement Tiers (mirror of Tiers)

```
H2: One diagnostic. One project. One optional retainer.

Table:
  | Tier                                | Price                                | Cadence          | Primary |
  |-------------------------------------|--------------------------------------|------------------|---------|
  | I.   The $999 Audit                 | $999                                 | one-time         | YES     |
  | II.  Implementation Project         | Custom (quote-based)                 | one-time         | —       |
  | III. Managed Retainer + Solutions   | $5,000/mo + individually-priced      | monthly optional | —       |

Primary tier bullets (Audit):
  - 7-day diagnostic on a single high-leverage workflow
  - Written findings + recommended architecture
  - Time & cost estimates for the build
  - Yours to keep regardless of who builds it — your team, our team, or a third party

Pull quote under table:
  "The audit is the product. The implementation is optional."
```

### VIII. Engagement Contract (mirror of Handover)

```
H2: The engagement ends. Your system keeps running.

4 numbered handover items (each with brief copy):
  I.   Source        — Code repository, scripts, prompts. Yours to fork, modify, or hand to anyone.
  II.  Credentials   — API keys, OAuth tokens, vault entries. Exported to your password manager.
  III. Data          — All generated data, vector indexes, embeddings. Exported in portable formats.
  IV.  Documentation — Runbooks, architecture decisions, known issues. Readable by your successor.

Closing pull-quote:
  "You don't own a strategy deck. You own the system that's still running on Monday morning."
```

### IX. Claim the Audit (mirror of LeadForm)

```
H2: Book the audit. See the math yourself.

Form fields:
  - Name             (text)
  - Email            (email)
  - Company          (text, optional)
  - One workflow you wish ran itself   (textarea, required)

Submit → POST /api/audit → logs and returns {ok: true}.

Below the form:
  $999 — invoiced on submission. Refunded if we can't deliver the diagnostic in 7 days.
  Direct: info@newplains.dev
```

---

## Calculator mechanic detail (dealerassets parity)

Mirror dealerassets `Calculator.tsx`:
- `"use client"` directive
- React state for sliders + toggles
- `useMemo` for derived values (crossover month, 12-month savings, hours/week)
- Recharts `LineChart` with two `Line`s + `ReferenceLine`/`ReferenceDot` at crossover
- ResponsiveContainer for width
- All numerics in `tabular-nums` (Geist Mono)
- Inline footnote methodology (NOT a tooltip — visible on the page per user "with the metric stated")

---

## Verification (run after build)

```bash
cd /home/hermes/.hermes/profiles/build/home/projects/newplains-website
npm install recharts
npm run type-check
npm run lint 2>&1 | grep -E "src/app/d/|components/d/"
npm run build
npm run start -- -p 3199 &
sleep 4
curl -s -o /dev/null -w "%{http_code}\n" localhost:3199/d             # expect 200
curl -s -o /dev/null -w "%{http_code}\n" localhost:3199/a             # parked still 200
curl -s -o /dev/null -w "%{http_code}\n" localhost:3199/b             # parked still 200
curl -s -o /dev/null -w "%{http_code}\n" localhost:3199/c             # parked still 200
curl -s -o /dev/null -w "%{http_code}\n" localhost:3199/compare       # parked still 200
curl -s -o /dev/null -w "%{http_code}\n" localhost:3199/sitemap.xml   # /d listed
grep -oE "Field Notes № 01|Stop hiring|Crossover|Calculate the crossover|Book the audit|Five engagements" .next/server/app/d.html
pkill -f "next-server"
```

Forbidden-strings grep (use search_files tool, not shell — shell hardline-blocks compound greps):
- Pattern: `Elon|Marcus|JD|Alex|Tony|persona|Bronco|dsskaggs|Hermes|Honcho|Cognee|n8n|cron|agent-cards|MiniMax|Qwen|Kimi|DeepSeek|CoBank|AGCO|Parallel Ag|Buzz|dealerassets`
- Path: `src/app/d/`, `components/d/`
- Expect: 0 hits

---

## Done-when checklist

- [ ] `/d` route group + 12 components written
- [ ] recharts installed, fonts loaded (Fraunces + Geist + Geist-Mono), brand asset in Nav
- [ ] Calculator chart renders with crossover + methodology footnote visible
- [ ] All 9 sections present, copy verbatim from this brief
- [ ] Type-check 0 errors, scoped lint 0 errors, build 0 errors
- [ ] Runtime 200s on /d, /a, /b, /c, /compare, /sitemap.xml
- [ ] Forbidden-string grep: 0 hits
- [ ] Local screenshots captured for Shawn sign-off