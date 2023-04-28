import { project } from "@/data/page-data";
import { container, item } from "../components/Animation ";
import { motion as m } from "framer-motion";

import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <m.div
      className="grid grid-cols-12 gap-4  content-center  relative  overflow-y-scroll project md:h-[60vh] dark:project2"
      variants={item}
      initial="hidden"
      animate="show"
    >
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
    </m.div>
  );
};

export default Project;
