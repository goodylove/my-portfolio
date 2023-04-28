import { project } from "@/data/page-data";

import projectProps from "./ProjectCard";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="grid grid-cols-12 gap-4  relative  overflow-y-scroll project md:h-[60vh]">
      {project.map((project, index) => {
        return (
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 p-2"
            key={index}
          >
            <ProjectCard data={project} key={project.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Project;
