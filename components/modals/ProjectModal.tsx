"use client";

import Image from "next/image";
import type { Project } from "../../lib/projects";
import Modal from "../ui/Modal";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-brand-cream text-xl font-bold shrink-0"
            style={{ backgroundColor: project.color }}
          >
            {project.name.charAt(0)}
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-charcoal">
              {project.name}
            </h2>
            <p className="text-sm font-semibold" style={{ color: project.color }}>
              {project.tagline}
            </p>
          </div>
        </div>

        <div className="w-full h-48 relative rounded-lg overflow-hidden border border-brand-wheat/30">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 90vw, 500px"
          />
        </div>

        <p className="text-brand-charcoal/80 leading-relaxed">
          {project.description}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-brand-cream transition-opacity hover:opacity-90"
          style={{ backgroundColor: project.color }}
        >
          Visit {project.name}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 12L12 4M12 4H6M12 4v6" />
          </svg>
        </a>
      </div>
    </Modal>
  );
}
