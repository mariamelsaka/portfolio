import type { ProjectTypes } from "../../../interfaces/index";

// import Image from "../../ui/Image"
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CircleSkills from "./CircleSkills";
import Paragraph from "../../ui/Paragraph";

const ProjectCard = ({
  title,
  image,
  description,
  category,
  githubLink,
  liveDemoLink,
  skills,
}: ProjectTypes) => {
  return (
    <div className="bg-[var(--card-color)] w-full h-full rounded-lg shadow col-span-12 md:col-span-4 hover:shadow-2xl group">
      {/* <div className="relative"> */}
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          className="w-full h-full object-cover rounded-t-lg group z-2"
          alt={title}
        />
        {/* <img src={image} className="w-full h-1/2 object-cover rounded-t-lg group z-2" alt={title} /> */}
        {/* not mine */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
          <div className="flex gap-3  group-hover:opacity-100">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="github"
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30  w-5 h-5 p-3 rounded-full transition-colors">
            <FaGithub className="text-white relative bottom-2 right-2 " />
          </a>
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" aria-label="live demo"
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors w-5 h-5 p-3 rounded-full">
            <FaExternalLinkAlt className="text-white relative bottom-[0.55em] right-[0.45em] text-xs" />
          </a>
        </div>
        </div> */}
        <div
          className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                        opacity-0 group-hover:opacity-100 group-active:opacity-100 
                        transition-opacity  items-end justify-start p-4"
        >
          <div className="flex gap-3 group-hover:opacity-100 group-active:opacity-100">
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
    {/* Category */}
    <p className="text-sm text-gray-500">{category}</p>

    {/* Icons - only small screens */}
    <div className="flex gap-2 lg:hidden">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 active:bg-white/30 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
      >
        <FaGithub size={14} />
      </a>
      <a
        href={liveDemoLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="live demo"
        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 active:bg-white/30 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
      >
        <FaExternalLinkAlt size={12} />
      </a>
    </div>
  </div>

  {/* Title */}
  <Paragraph className="font-semibold">{title}</Paragraph>

  {/* Description */}
  <p className="text-gray-500">{description}</p>

  {/* Skills */}
  <CircleSkills skill={skills} />
</div>

    </div>
  );
};

export default ProjectCard;
