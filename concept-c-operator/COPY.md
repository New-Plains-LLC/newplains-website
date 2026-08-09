# Concept C — "The Operator" (Terminal / Spec-sheet / technical buyer)

## Positioning
"Here's exactly how the system works. No marketing. Read the spec, browse the stack, then call us if you want to ship."

## Sales format
- **Documentation-first.** The website IS the spec sheet.
- **No price anywhere on the site.** Technical buyers self-qualify.
- **Lead path:** "If you've read this far, you know what we do. Send scope." → reply by next business day
- **AI Consulting:** framed as "delivery stack" with public diagrams
- **GovCon:** framed as "capability matrix" — table-driven, no narrative

## AI Consulting copy — system diagrams (the case studies ARE the diagrams)
1. **Receipt Pipeline (Gmail → Vision → n8n → QuickBooks)**
   - Stage 1: Gmail auto-label driver (5s runtime, 60 labels/run, 0 failures after week 2)
   - Stage 2: Vision OCR + classification (OpenAI Vision)
   - Stage 3: QuickBooks write-back
   - Throughput: 60 emails in 5s · 0% failure rate after stabilization
2. **Lead Triage (n8n → AI scoring → CRM → Telegram)**
   - Inbound → scored → CRM field updated → Telegram alert to assigned owner
   - Latency p95: 90s end-to-end
   - Cost per lead: ~$0.003 (mostly model inference)
3. **Deal Flow Routing (inbox → AI agent → alert)**
   - n8n webhook → Hermes review → Telegram alert (chatId 8555469436)
   - Human-in-the-loop; agent NEVER writes to CRM directly

## GovCon copy — capability matrix (table-driven)
| NAICS | Description | Status | Vehicle |
|-------|-------------|--------|---------|
| 561210 | Facilities Support Services | Active | SAM.gov, OASIS+ |
| 722310 | Food Service Contractors | Active | SAM.gov |
| 561720 | Janitorial Services | Active | SAM.gov |
| 561730 | Landscaping Services | Active | SAM.gov |
| 541512 | Custom Computer Programming | Active | SAM.gov |
| 541511 | Custom Computer Programming (legacy) | Inactive | — |

Plus: HUBZone status, UEI, CAGE, set-asides, bonding capacity (TBD), subcontractors.

## Hero copy
> ## An AI consulting + GovCon delivery stack.
> Spec: every component below is real and runs in production.
> `v0.18.2` · last deploy: today

## Visual spec
- Background: near-black `#0A0A0B`
- Type: JetBrains Mono / IBM Plex Mono everywhere — headings, body, even H1
- Accent: terminal green `#4ADE80` + amber `#F59E0B` for warnings/state
- Layout: terminal-style hero with ASCII box → system diagram (ASCII or actual) → live metrics table (could mock with cached values) → NAICS matrix as monospace table → "Source code" footer
- No stock photos. No project galleries. Diagrams and code blocks.

## Routes
- `/c` — Concept C landing (terminal-style spec)
- `/c/ai-stack` — Full AI pipeline spec
- `/c/govcon` — Capability matrix
