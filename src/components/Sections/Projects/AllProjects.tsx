import { Link } from "react-router-dom";
import { dataProject } from "../../../data/index"
import Button from "../../ui/Button"
import DarkMode from "../../ui/DarkMode";
import Paragraph from "../../ui/Paragraph"
import ProjectCard from "./ProjectCard"
import { AiOutlineHome } from 'react-icons/ai';
const AllProjects = () => {
    return (
        <>
        <DarkMode  className="hidden" />
        <div className="md:p-[10em] p-[1.2em] pt-[6em]  bg-[var(--project-bg)]">
            <div className="flex md:gap-[38.5em] gap-[2em] text-nowrap mb-[4em]">
                <Paragraph className="!text-3xl md:mt-0 mt-2">all projects</Paragraph>
                <Link  to="/">
                    <Button className="!bg-[var(--btn-all-pro)] hover:!bg-[var(--btn-all-pro-hover)] !text-[var(--text-all-pro)] flex font-semibold !p-[1em]">
                        <AiOutlineHome className="mt-1 mr-2 font-bold text-lg" />
                        back to home
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-12 gap-5">
                {
                    dataProject.map((project, idx) => {
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
        </>
            
    )
}

export default AllProjects