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
    tagline: "Intelligence Terminal",
    description:
      "A specialized AI strategy archive designed for leadership teams. Grounded in your unique company data, it provides an exportable, auditable, and fast way to stay aligned with corporate goals and SOPs.",
    url: "",
    image: "/projects/compass.png",
    color: "#D4B87A",
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
  {
    id: "project-yj",
    name: "Project YJ",
    tagline: "Custom Hobby Build Showcase",
    description:
      "A personal hobby site for a 1992 Jeep Wrangler rock crawler, designed to present the build with a bold visual system, strong storytelling, and a focused single-page experience.",
    url: "https://projectyj-rockcrawler.netlify.app/",
    image: "/projects/project-yj-rockcrawler.png",
    color: "#C4825A",
  },
  {
    id: "first-home-fix",
    name: "First Home Fix",
    tagline: "Autonomous AI Home Care",
    description:
      "An experimental home improvement platform built and maintained entirely by an autonomous AI agent. From initial planning to daily content creation and maintenance, this site operates independently to help homeowners fix smarter and spend less.",
    url: "https://firsthomefix.com",
    image: "/projects/first-home-fix.png",
    color: "#B87333",
  },
  {
    id: "stoic-goal-planner",
    name: "Stoic Goal Planner",
    tagline: "Stoic Philosophy & Productivity",
    description:
      "An open-source personal goal-planning and daily productivity app. Structured around Stoic philosophy, it connects your long-term vision to your daily actions through a hierarchy of goals, daily habits, and a weekly review practice.",
    url: "https://github.com/New-Plains-LLC/stoic-goal-planner",
    image: "/projects/stoic-planner.png",
    color: "#2D2A26",
  },
];
