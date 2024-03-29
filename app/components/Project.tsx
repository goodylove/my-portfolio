import { projects } from "@/data/page-data";
import { container, item, pro, stagger } from "../components/Animation ";
import { motion as m } from "framer-motion";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <m.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grid grid-cols-12 gap-4  p-[3px] content-center  md:pt-[12rem]  relative  justify-items-center  md:mt-5  md:overflow-y-scroll project  md:h-[89vh] dark:project2 md:p-2"
    >
      {projects.map((projects, index) => {
        return (
          <m.div
            className="col-span-12 sm:col-span-6 md:col-span-4"
            key={index}
          >
            <ProjectCard data={projects} key={projects.name} />
          </m.div>
        );
      })}
    </m.div>
  );
};

export default Projects;
