import { project } from "@/data/page-data";
import { container, item, stagger } from "../components/Animation ";
import { motion as m } from "framer-motion";

import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <m.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-12 gap-4  content-center  md:pt-[12rem]  relative  overflow-y-scroll project  md:h-[80vh] dark:project2"
    >
      {project.map((project, index) => {
        return (
          <m.div
            className="col-span-12 sm:col-span-6 md:col-span-4"
            key={index}
            // animate={{ rotate: 360, scale: 1 }}
            // transition={{
            //   type: "spring",
            //   stiffness: 260,
            //   damping: 20,
            // }}
          >
            <ProjectCard data={project} key={project.name} />
          </m.div>
        );
      })}
    </m.div>
  );
};

export default Project;
