"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type Project } from "../../lib/projects";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardsProps {
  onProjectClick: (project: Project) => void;
}

function ProjectCard({
  project,
  onProjectClick,
  index,
}: {
  project: Project;
  onProjectClick: (p: Project) => void;
  index: number;
}) {
  return (
    <div
      data-project-card
      className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-brand-wheat/20 bg-brand-cream/80 backdrop-blur-md shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      style={{ "--card-accent": project.color } as React.CSSProperties}
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(180deg, transparent 40%, ${project.color}20 100%)`,
          }}
        />
        {/* Accent bar at top */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
          style={{ backgroundColor: project.color }}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-brand-cream text-sm font-bold shrink-0 shadow-md"
            style={{ backgroundColor: project.color }}
          >
            {project.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-charcoal leading-tight">
              {project.name}
            </h3>
            <p
              className="text-xs sm:text-sm font-semibold"
              style={{ color: project.color }}
            >
              {project.tagline}
            </p>
          </div>
        </div>

        <p className="text-brand-charcoal/70 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto pt-3 flex items-center gap-3">
          <button
            onClick={() => onProjectClick(project)}
            className="flex-1 px-5 py-2.5 rounded-full font-semibold text-sm text-brand-cream transition-all duration-300 hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: project.color }}
          >
            Learn More
          </button>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                borderColor: project.color,
                color: project.color,
              }}
              aria-label={`Visit ${project.name}`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 12L12 4M12 4H6M12 4v6" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectCards({ onProjectClick }: ProjectCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]");

      // Animate section heading
      gsap.from("[data-projects-heading]", {
        scrollTrigger: {
          trigger: "[data-projects-heading]",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      // Stagger-animate cards on scroll
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          duration: 0.7,
          delay: i * 0.15,
          ease: "power3.out",
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-projects-heading className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-copper/10 border border-brand-copper/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-copper animate-pulse" />
            <span className="text-brand-copper text-xs font-semibold uppercase tracking-wider">
              Our Work
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal">
            Projects We&apos;ve Built
          </h2>
          <p className="mt-3 text-brand-charcoal/60 max-w-lg mx-auto text-sm sm:text-base">
            Practical AI innovation and digital solutions that make a real
            difference.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onProjectClick={onProjectClick}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
