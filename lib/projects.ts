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
  {
    id: "newplains-properties",
    name: "New Plains Properties",
    tagline: "Modern Real Estate Solutions",
    description:
      "A streamlined real estate platform connecting buyers and sellers across the plains. Featuring intuitive property search, virtual tours, and AI-powered market insights to make your next move effortless.",
    url: "https://www.newplainsproperties.com",
    image: "/projects/newplains-properties.png",
    color: "#C4A265",
  },
  {
    id: "compass",
    name: "Compass",
    tagline: "Private Strategy AI",
    description:
      "A private Strategy AI tool built to help leadership teams make better decisions and stay aligned with company strategies, training, SOPs, and goals.",
    url: "",
    image: "/projects/compass.png",
    color: "#3B6BF5",
  },
  {
    id: "schedule-board-pro",
    name: "Schedule Board Pro",
    tagline: "Intelligent Job Scheduling",
    description:
      "A scheduling tool built to connect to ERPs that simplifies assigning jobs to technicians, creating workorders, and prioritizing scheduling. Gives service teams real-time visibility into technician locations and proximity to new job requests.",
    url: "",
    image: "/projects/schedule-board-pro.png",
    color: "#E05A33",
  },
];
