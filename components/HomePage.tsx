"use client";

import { useState } from "react";
import SceneLoader from "./scene/SceneLoader";
import Hero from "./hero/Hero";
import FlipBook from "./hero/FlipBook";
import Navigation from "./ui/Navigation";
import ProjectModal from "./modals/ProjectModal";
import ContactModal from "./modals/ContactModal";
import type { Project } from "../lib/projects";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  function handleProjectClick(project: Project) {
    setSelectedProject(project);
    setProjectModalOpen(true);
  }

  function handleContactClick() {
    setContactModalOpen(true);
  }

  return (
    <>
      <SceneLoader />
      <Navigation onContactClick={handleContactClick} />
      <div className="hero-overlay">
        <Hero onContactClick={handleContactClick} />
        <FlipBook onProjectClick={handleProjectClick} />
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
