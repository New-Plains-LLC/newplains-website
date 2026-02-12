export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "herm-chat",
    name: "Herm.Chat",
    tagline: "AI-Powered Conversations",
    description:
      "An intelligent chatbot platform that brings natural AI conversations to any website. Herm.Chat makes it easy to deploy custom AI assistants that understand your business and delight your customers.",
    url: "https://herm.chat",
    image: "/projects/herm-chat.png",
    color: "#B87333",
  },
  {
    id: "pillbuddy-ai",
    name: "PillBuddy.AI",
    tagline: "Your Personal Medication Assistant",
    description:
      "An AI-powered medication management tool that helps users understand their prescriptions, track dosages, and get reliable answers about drug interactions — all in plain language.",
    url: "https://pillbuddy.ai",
    image: "/projects/pillbuddy.png",
    color: "#7A8B5C",
  },
];
