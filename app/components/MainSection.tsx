"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import Project from "../components/Project";
import Resume from "./Skills";
import About from "./About";
import { aboutMe, skills, language } from "@/data/page-data";
import { motion as m } from "framer-motion";
import { items } from "./Animation ";
import Skills from "./Skills";
// import Skill from "./skill";

const HomeSection = () => {
  const [activeItem, setActiveItem] = useState("About");
  return (
    <m.div className="" variants={items} initial="hidden" animate="show">
      <Nav data={activeItem} setActiveItem={setActiveItem} />
      <div className="relative">
        {activeItem === "About" ? <About data={aboutMe} /> : ""}
        {activeItem === "Skills" ? <Skills /> : ""}
        {activeItem === "Project" ? <Project /> : ""}
        {/* {activeItem === "Skills" ? <Skills data={skills} /> : ""} */}
      </div>
    </m.div>
  );
};

export default HomeSection;
