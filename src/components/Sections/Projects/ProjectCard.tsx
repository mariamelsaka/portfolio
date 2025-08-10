import type { ProjectTypes } from "../../../interfaces/index";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CircleSkills from "./CircleSkills";
import Paragraph from "../../ui/Paragraph";
import { useCallback, useEffect, useRef, useState } from "react";

const ProjectCard = ({
  title,
  image,
  description,
  category,
  githubLink,
  liveDemoLink,
  skills,
}: ProjectTypes) => {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const clearHideTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearHideTimeout();
    setHovered(true);
  };

  const handleMouseLeave = () => {
    clearHideTimeout();
    // Start 2-second timer to hide overlay
    timeoutRef.current = window.setTimeout(() => {
      setHovered(false);
      timeoutRef.current = null;
      // Remove global listener once overlay hidden
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    }, 2000);

    // Add global mousemove listener to detect if user moves mouse outside card during delay
    window.addEventListener("mousemove", handleGlobalMouseMove);
  };

  // Global mouse move handler: if mouse is outside card before 2 seconds, hide immediately
  const handleGlobalMouseMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current) return;

    const isInsideCard = cardRef.current.contains(e.target as Node);

    if (!isInsideCard) {
      clearHideTimeout();
      setHovered(false);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    }
  }, []);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      clearHideTimeout();
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [handleGlobalMouseMove]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-[var(--card-color)] w-full h-full rounded-lg shadow col-span-12 md:col-span-4 hover:shadow-2xl group"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          className="w-full h-full object-cover rounded-t-lg group z-2"
          alt={title}
        />
        <div
          className={`md:flex absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
                      items-end justify-start p-4 transition-opacity duration-500
                      ${hovered ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex gap-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 active:bg-white/30 w-5 h-5 p-3 rounded-full transition-colors"
            >
              <FaGithub className="text-white relative bottom-2 right-2" />
            </a>
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="live demo"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 active:bg-white/30 transition-colors w-5 h-5 p-3 rounded-full"
            >
              <FaExternalLinkAlt className="text-white relative bottom-[0.55em] right-[0.45em] text-xs" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">{category}</p>
        </div>

        <Paragraph className="font-semibold">{title}</Paragraph>
        <p className="text-gray-500">{description}</p>
        <CircleSkills skill={skills} />
      </div>
    </div>
  );
};

export default ProjectCard;
