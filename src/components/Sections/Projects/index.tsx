import Paragraph from "../../ui/Paragraph"
import { dataProject } from "../../../data/index"
import ProjectCard from "./ProjectCard";
import Button from "../../ui/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", "js-app", "web-app", "landing-page", "react-app"];
  let counter=0;
  const filteredProjects = dataProject.filter(project =>
    activeCategory === "all" ? true : project.category === activeCategory
  );
  // console.log(filteredProjects)
  return (
    <div id="Projects" className="pt-[2em] md:mt-0 mt-15 bg-[var(--project-bg)]">
      <Paragraph className="!text-3xl text-center">my projects</Paragraph>
      <p className="text-center mt-4">Explore some of my latest work and see what I've been creating.</p>
      <div className="bg-[var(--card-pro-color)] md:w-fit w-full overflow-x-auto   mb-[2em] p-[0.6em] rounded-lg md:relative md:left-[22.9em] mt-[2em]">
        <ul className="flex flex-1/4 md:gap-3 text-nowrap w-full">
          {categories.map((item) => {
            return <li key={item}
              onClick={() => setActiveCategory(item)}
              className={`cursor-pointer px-4 py-2 rounded-lg capitalize transition-all
        ${activeCategory === item
                  ? "bg-[var(--body_background)] text-[var(--text-gray)] shadow"
                  : "bg-transparent text-[var(--text-gray)]"}
      `}
            >{item}</li>

          })}

        </ul>
      </div>

      <div className="grid grid-cols-12 gap-7 md:p-[4em] p-[1em]">
        {
          filteredProjects.map((project, idx) => {
            counter++;
            if (counter > 6) {
              return <Link to="/projects" key={idx}>
                <Button className="text-nowrap relative md:left-[31em] left-[6em]   md:top-[2em]">
                  view all projects
                </Button>
              </Link>
            }
            return <ProjectCard
              key={idx}
              title={project.title}
              image={project.image}
              description={project.description}
              category={project.category}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
              skills={project.skills}
            />

          })

        }
      </div>


    </div>
  )
}

export default Projects