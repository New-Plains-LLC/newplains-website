import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Plains | AI that gets to work",
  description:
    "AI consulting, automations and managed agents for small businesses. Start with a $999 audit.",
  robots: { index: false },
};

export default function ConceptEPage() {
  return (
    <iframe
      title="New Plains — AI that gets to work"
      src="/e/index.html"
      className="e-concept-frame"
    />
  );
}
