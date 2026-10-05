"use client";

import { useState, useCallback } from "react";

/* ============================================================
   AI Readiness Score — 12 questions, 4 dimensions, weighted.
   Scoring constants live here; results email + PDF print share
   the same numbers (see /tmp spec mirrored in lead-magnet docs).
   ============================================================ */

type Choice = { label: string; points: number };
type Question = { id: string; dim: string; text: string; choices: Choice[] };

const DIMENSIONS = [
  { name: "Process & Data", weight: 0.35 },
  { name: "Tools & Stack", weight: 0.25 },
  { name: "People", weight: 0.25 },
  { name: "Risk & Governance", weight: 0.15 },
] as const;

const QUESTIONS: Question[] = [
  // Process & Data
  {
    id: "q1", dim: "Process & Data",
    text: "Could a new employee follow your core workflow — from job to invoice — using only written documentation?",
    choices: [
      { label: "Yes, it's written and current", points: 0 },
      { label: "Partially — some tribal knowledge", points: 1 },
      { label: "It exists but it's outdated", points: 2 },
      { label: "It lives in people's heads", points: 3 },
    ],
  },
  {
    id: "q2", dim: "Process & Data",
    text: "When the same task is done twice, how consistent is it?",
    choices: [
      { label: "Identical every time", points: 0 },
      { label: "Mostly consistent", points: 1 },
      { label: "Depends who does it", points: 2 },
      { label: "Every day is different", points: 3 },
    ],
  },
  {
    id: "q3", dim: "Process & Data",
    text: "Where does your customer and job data live?",
    choices: [
      { label: "One system, clean", points: 0 },
      { label: "One system, messy", points: 1 },
      { label: "Two or three systems that don't talk", points: 2 },
      { label: "Spreadsheets, email, paper", points: 3 },
    ],
  },
  {
    id: "q4", dim: "Process & Data",
    text: "How much of your operational data is digital rather than paper, fax, or phone-only?",
    choices: [
      { label: "Nearly all", points: 0 },
      { label: "Most", points: 1 },
      { label: "About half", points: 2 },
      { label: "Mostly paper", points: 3 },
    ],
  },
  // Tools & Stack
  {
    id: "q5", dim: "Tools & Stack",
    text: "What software runs the business day to day?",
    choices: [
      { label: "A modern cloud stack (CRM, scheduling, accounting)", points: 0 },
      { label: "Industry software plus some spreadsheets", points: 1 },
      { label: "Mostly spreadsheets", points: 2 },
      { label: "Phone, email, and memory", points: 3 },
    ],
  },
  {
    id: "q6", dim: "Tools & Stack",
    text: "Do your systems connect to each other or to automation tools?",
    choices: [
      { label: "Yes — we already run some integrations", points: 0 },
      { label: "Probably — we've never checked", points: 1 },
      { label: "Some, but locked down or limited", points: 2 },
      { label: "No idea, or none", points: 3 },
    ],
  },
  {
    id: "q7", dim: "Tools & Stack",
    text: "Who maintains your current software?",
    choices: [
      { label: "A named person or vendor owns each system", points: 0 },
      { label: "Whoever set it up — and they're still around", points: 1 },
      { label: "It evolved. Nobody owns it", points: 2 },
      { label: "We avoid touching it", points: 3 },
    ],
  },
  // People
  {
    id: "q8", dim: "People",
    text: "Has your team used AI tools (ChatGPT, Copilot, etc.) for real work?",
    choices: [
      { label: "Yes, regularly", points: 0 },
      { label: "A few have tried it", points: 1 },
      { label: "Barely at all", points: 2 },
      { label: "We discourage or ban it", points: 3 },
    ],
  },
  {
    id: "q9", dim: "People",
    text: "When a new process or tool is introduced, how does adoption go?",
    choices: [
      { label: "Smooth with a little training", points: 0 },
      { label: "Works after a rough month", points: 1 },
      { label: "Half the team quietly reverts to old ways", points: 2 },
      { label: "New tools get abandoned", points: 3 },
    ],
  },
  {
    id: "q10", dim: "People",
    text: "Who would own an AI project internally?",
    choices: [
      { label: "A named ops or office lead with time for it", points: 0 },
      { label: "An owner or manager with some bandwidth", points: 1 },
      { label: "Everyone is fully loaded", points: 2 },
      { label: "No one — that's why nothing changes", points: 3 },
    ],
  },
  // Risk & Governance
  {
    id: "q11", dim: "Risk & Governance",
    text: "Do you have rules about what company data can go into AI tools?",
    choices: [
      { label: "Yes, a written policy", points: 0 },
      { label: "An informal understanding", points: 1 },
      { label: "Nothing defined", points: 2 },
      { label: "Data already goes in with no policy", points: 3 },
    ],
  },
  {
    id: "q12", dim: "Risk & Governance",
    text: "If a tool showed clear ROI at $200–800/month, could you get budget approval?",
    choices: [
      { label: "Yes — we decide fast on proof", points: 0 },
      { label: "Yes, but it takes a budget cycle", points: 1 },
      { label: "Major hesitancy on any software spend", points: 2 },
      { label: "There's no budget mechanism", points: 3 },
    ],
  },
];

/* ---------- scoring ---------- */

type Answers = Record<string, number | undefined>;

function dimPercent(answers: Answers, dim: string): number {
  const qs = QUESTIONS.filter((q) => q.dim === dim);
  const raw = qs.reduce((s, q) => s + (answers[q.id] ?? 0), 0);
  const max = qs.length * 3;
  return Math.round((raw / max) * 100);
}

function readinessScore(answers: Answers): number {
  const friction = DIMENSIONS.reduce(
    (s, d) => s + dimPercent(answers, d.name) * d.weight,
    0
  );
  return Math.round(100 - friction);
}

function bandFor(score: number): { name: string; headline: string } {
  if (score >= 80)
    return { name: "AI-Ready", headline: "You could deploy an automation this month." };
  if (score >= 60)
    return { name: "Nearly Ready", headline: "One or two foundations to fix first, then you're clear." };
  if (score >= 40)
    return { name: "Foundation Stage", headline: "Real opportunity — process and data cleanup comes before AI." };
  return { name: "Pre-Ready", headline: "AI isn't your bottleneck yet. Here's what is." };
}

const DIM_PRESCRIPTION: Record<string, string> = {
  "Process & Data":
    "Write down your core workflow, step by step, before buying any AI tool. AI amplifies whatever process you feed it — including a broken one.",
  "Tools & Stack":
    "Get your customer and job data into one system before automating around it. Scattered data makes every AI project more expensive.",
  "People":
    "Name one person to own AI adoption and give them two hours a week for it. Tools without an owner get abandoned.",
  "Risk & Governance":
    "Write a one-page policy on what company data may go into AI tools. It takes an hour and removes the biggest source of regret.",
};

/* ---------- component ---------- */

export default function ReadinessQuiz() {
  const [step, setStep] = useState(0); // 0..11 questions, 12 = gate, 13 = results
  const [answers, setAnswers] = useState<Answers>({});
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [ emailed, setEmailed ] = useState(false);

  const answer = useCallback((qid: string, points: number) => {
    setAnswers((a) => ({ ...a, [qid]: points }));
    setStep((s) => s + 1);
  }, []);

  const score = readinessScore(answers);
  const band = bandFor(score);
  const dims = DIMENSIONS.map((d) => ({ ...d, pct: dimPercent(answers, d.name) }));
  const weakest = [...dims].sort((a, b) => a.pct - b.pct)[0];

  async function submit() {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("https://n8n.newplains.cloud/webhook/ai-readiness-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone,
          company_website: company,
          score,
          band: band.name,
          weakest_dimension: weakest.name,
          dims: Object.fromEntries(dims.map((d) => [d.name, d.pct])),
        }),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
      setEmailed(true);
    } catch {
      // Results still show even if delivery fails — never trap the visitor.
      setSubmitError(
        "We couldn't email your results automatically. Your score is below — you can print this page or screenshot it."
      );
      setEmailed(true);
    } finally {
      setSubmitting(false);
    }
  }

  /* GA4 — same pattern as MailtoTracker: GA4 loads directly, no GTM forwarding */
  function track(event: string, params: Record<string, unknown> = {}) {
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
    };
    w.gtag?.("event", event, params);
  }

  const total = QUESTIONS.length;
  const progress = Math.min(step, total);

  /* ---------- render ---------- */

  return (
    <div className="mx-auto max-w-2xl">
      {/* progress */}
      {step > 0 && step <= total && (
        <div className="mb-8" aria-hidden>
          <div className="h-1 w-full rounded-full bg-brand-charcoal/10">
            <div
              className="h-1 rounded-full bg-brand-copper transition-all duration-300"
              style={{ width: `${(progress / total) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-right text-xs text-brand-charcoal/50">
            {progress} / {total}
          </p>
        </div>
      )}

      {/* intro */}
      {step === 0 && (
        <div className="text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-copper">
            Free · 3 minutes · 12 questions
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-brand-charcoal sm:text-5xl">
            What&apos;s your AI Readiness Score?
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brand-charcoal/70">
            Most AI projects don&apos;t fail because of the technology. They fail
            because the business wasn&apos;t ready. Answer 12 questions about how
            your business actually runs — get your score, your weakest
            foundation, and what to fix first.
          </p>
          <button
            onClick={() => { setStep(1); track("readiness_start"); }}
            className="mt-8 rounded-full bg-brand-copper px-8 py-3 font-semibold text-brand-cream transition hover:bg-brand-copper-light"
          >
            Start the assessment
          </button>
          <p className="mt-4 text-xs text-brand-charcoal/50">
            No cost. You&apos;ll get your results by email.
          </p>
        </div>
      )}

      {/* questions */}
      {step >= 1 && step <= total && (
        <div>
          {(() => {
            const q = QUESTIONS[step - 1];
            return (
              <div key={q.id}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-copper/80">
                  {q.dim}
                </p>
                <h2 className="font-heading text-2xl font-bold leading-snug text-brand-charcoal sm:text-3xl">
                  {q.text}
                </h2>
                <div className="mt-6 space-y-3">
                  {q.choices.map((c) => (
                    <button
                      key={c.label}
                      onClick={() => answer(q.id, c.points)}
                      className="w-full rounded-2xl border border-brand-wheat/30 bg-brand-cream/80 px-5 py-4 text-left text-[15px] text-brand-charcoal shadow-sm transition hover:-translate-y-0.5 hover:border-brand-copper/50 hover:shadow-md"
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* email gate */}
      {step === total + 1 && (
        <div>
          <h2 className="font-heading text-2xl font-bold text-brand-charcoal sm:text-3xl">
            Where should we send your score?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-brand-charcoal/70">
            You&apos;ll get your AI Readiness Score, your four dimension
            breakdowns, and the two things to fix first — by email, in about a
            minute.
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="rq-email" className="mb-1 block text-sm font-medium text-brand-charcoal">
                Email <span className="text-brand-copper">*</span>
              </label>
              <input
                id="rq-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourbusiness.com"
                className="w-full rounded-xl border border-brand-wheat/40 bg-brand-cream px-4 py-3 text-brand-charcoal outline-none focus:border-brand-copper"
              />
            </div>
            <div>
              <label htmlFor="rq-phone" className="mb-1 block text-sm font-medium text-brand-charcoal">
                Mobile number <span className="text-sm font-normal text-brand-charcoal/50">(optional)</span>
              </label>
              <input
                id="rq-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 555-5555"
                className="w-full rounded-xl border border-brand-wheat/40 bg-brand-cream px-4 py-3 text-brand-charcoal outline-none focus:border-brand-copper"
              />
              <p className="mt-1 text-xs text-brand-charcoal/50">
                Text your results too, if email is easier to miss.
              </p>
            </div>
            {/* honeypot — hidden from humans */}
            <input
              type="text"
              name="company_website"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
          </div>

          <p className="mt-5 text-xs leading-relaxed text-brand-charcoal/60">
            By clicking below, you&apos;ll also get <em>More From Less</em> — our
            free Sunday email breaking down one real AI workflow with the
            actual math behind it. Only want the score? Unsubscribe anytime
            with one click — no hard feelings.
          </p>

          <button
            disabled={!email || submitting}
            onClick={() => { submit(); track("readiness_complete", { band: band.name, weakest_dimension: weakest.name }); }}
            className="mt-6 w-full rounded-full bg-brand-copper px-8 py-3 font-semibold text-brand-cream transition hover:bg-brand-copper-light disabled:cursor-not-allowed disabled:opacity-40"
          >
            {submitting ? "Scoring…" : "Show my score"}
          </button>
          {submitError && (
            <p className="mt-3 text-sm text-brand-charcoal/70">{submitError}</p>
          )}
        </div>
      )}

      {/* results */}
      {step > total + 1 && (
        <div>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-copper">
              Your AI Readiness Score
            </p>
            <p className="mt-3 text-7xl font-bold text-brand-charcoal">{score}</p>
            <p className="mt-1 text-sm text-brand-charcoal/50">out of 100</p>
            <p className="mt-4 inline-block rounded-full border border-brand-copper/30 bg-brand-copper/10 px-5 py-1.5 font-semibold text-brand-copper">
              {band.name}
            </p>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-brand-charcoal/70">
              {band.headline}
            </p>
            {emailed && !submitError && (
              <p className="mt-4 text-sm text-brand-charcoal/60">
                A copy is on its way to <strong>{email}</strong>.
              </p>
            )}
          </div>

          {/* dimension bars */}
          <div className="mt-10 space-y-5">
            {dims.map((d) => (
              <div key={d.name}>
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-brand-charcoal">{d.name}</span>
                  <span className="text-sm text-brand-charcoal/60">{d.pct}% ready</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-brand-charcoal/10">
                  <div
                    className={`h-2.5 rounded-full ${d.name === weakest.name ? "bg-brand-copper" : "bg-brand-wheat"}`}
                    style={{ width: `${d.pct}%` }}
                  />
                </div>
                <p className="mt-1 text-xs leading-relaxed text-brand-charcoal/60">
                  {d.name === weakest.name ? DIM_PRESCRIPTION[d.name] : `\u2713 ${d.name} won't block an AI project.`}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 rounded-2xl border border-brand-wheat/30 bg-brand-cream/80 p-6 text-center shadow-sm">
            <h3 className="font-heading text-xl font-bold text-brand-charcoal">
              Want your real numbers instead of ranges?
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-brand-charcoal/70">
              Book a free 30-minute AI business consulting call. We&apos;ll map
              one of your actual workflows and put dollar figures on what
              it&apos;s costing you — you approve everything before anything
              goes live.
            </p>
            <a
              href={`mailto:info@newplains.dev?subject=${encodeURIComponent(
                "AI Readiness follow-up — scored " + score
              )}&body=${encodeURIComponent(
                `Hi New Plains,\n\nI just scored ${score}/100 (${band.name}) on your AI Readiness assessment. My weakest area was ${weakest.name}. I'd like to book the free 30-minute workflow assessment.\n\n`
              )}`}
              onClick={() => track("readiness_cta_click", { band: band.name })}
              className="mt-4 inline-block rounded-full bg-brand-copper px-8 py-3 font-semibold text-brand-cream transition hover:bg-brand-copper-light"
            >
              Book the free assessment
            </a>
            <p className="mt-4 text-xs text-brand-charcoal/50">
              Get one real AI workflow with the math each Sunday:{" "}
              <a
                href="https://morefromless.substack.com?utm_source=readiness-quiz&utm_medium=results-page&utm_campaign=lead-magnet"
                className="underline hover:text-brand-copper"
              >
                More From Less
              </a>
            </p>
          </div>

          {/* print */}
          <div className="mt-6 text-center print:hidden">
            <button
              onClick={() => { track("readiness_pdf_print"); window.print(); }}
              className="rounded-full border border-brand-charcoal/20 px-6 py-2 text-sm font-medium text-brand-charcoal/70 transition hover:border-brand-copper hover:text-brand-copper"
            >
              Print / save as PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
