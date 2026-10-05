import type { Metadata } from "next";
import ReadinessQuiz from "./ReadinessQuiz";

export const metadata: Metadata = {
  title: "AI Readiness Score — New Plains LLC",
  description:
    "Answer 12 questions about how your business actually runs. Get your AI Readiness Score, your weakest foundation, and what to fix first — free, in 3 minutes.",
  robots: { index: true, follow: true },
};

export default function AiReadinessPage() {
  return (
    <main className="min-h-screen bg-brand-cream px-4 py-12 sm:px-6 sm:py-16 print:px-0 print:py-0">
      <ReadinessQuiz />
    </main>
  );
}
