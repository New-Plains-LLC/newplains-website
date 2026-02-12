"use client";

import { useRef, useCallback, forwardRef } from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import { projects, type Project } from "../../lib/projects";

interface FlipBookProps {
  onProjectClick: (project: Project) => void;
}

const PageContent = forwardRef<HTMLDivElement, { project: Project; onProjectClick: (p: Project) => void }>(
  function PageContent({ project, onProjectClick }, ref) {
    return (
      <div ref={ref} className="flipbook-page h-full overflow-hidden">
        <div className="w-full h-full flex flex-col items-center gap-3 p-5 pb-6">
          <div className="w-full shrink-0" style={{ height: "38%" }}>
            <div className="w-full h-full relative rounded-lg overflow-hidden border border-brand-wheat/40">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 300px, 480px"
              />
            </div>
          </div>
          <h3 className="font-heading text-xl font-bold text-brand-charcoal leading-tight shrink-0">
            {project.name}
          </h3>
          <p className="text-brand-copper font-semibold text-sm shrink-0">
            {project.tagline}
          </p>
          <p className="text-brand-charcoal/70 text-sm text-center leading-relaxed line-clamp-4 min-h-0">
            {project.description}
          </p>
          <button
            onClick={() => onProjectClick(project)}
            className="shrink-0 mt-auto px-6 py-2.5 rounded-full font-semibold text-sm text-brand-cream transition-colors hover:opacity-90"
            style={{ backgroundColor: project.color }}
          >
            Learn More
          </button>
        </div>
      </div>
    );
  }
);

const CoverPage = forwardRef<HTMLDivElement>(function CoverPage(_props, ref) {
  return (
    <div ref={ref} className="flipbook-page h-full">
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-copper flex items-center justify-center text-brand-cream text-2xl sm:text-3xl font-bold">
          NP
        </div>
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-charcoal">
          Our Projects
        </h2>
        <p className="text-brand-charcoal/60 text-xs sm:text-sm text-center">
          Flip through to explore what we&apos;re building
        </p>
        <div className="flex gap-1.5 mt-1 sm:mt-2">
          <span className="w-2 h-2 rounded-full bg-brand-wheat" />
          <span className="w-2 h-2 rounded-full bg-brand-copper" />
          <span className="w-2 h-2 rounded-full bg-brand-green" />
        </div>
      </div>
    </div>
  );
});

export default function FlipBook({ onProjectClick }: FlipBookProps) {
  const flipBookRef = useRef<typeof HTMLFlipBook>(null);

  const handleProjectClick = useCallback(
    (project: Project) => {
      onProjectClick(project);
    },
    [onProjectClick]
  );

  return (
    <div className="mt-6 sm:mt-8 flex justify-center px-4">
      <HTMLFlipBook
        ref={flipBookRef}
        width={420}
        height={500}
        size="stretch"
        minWidth={340}
        maxWidth={550}
        minHeight={420}
        maxHeight={620}
        maxShadowOpacity={0.4}
        showCover={true}
        mobileScrollSupport={true}
        className="flipbook-container"
        style={{}}
        startPage={0}
        drawShadow={true}
        flippingTime={600}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        <CoverPage />
        {projects.map((project) => (
          <PageContent
            key={project.id}
            project={project}
            onProjectClick={handleProjectClick}
          />
        ))}
      </HTMLFlipBook>
    </div>
  );
}
