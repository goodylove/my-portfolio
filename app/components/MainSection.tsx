"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import Projects from "../components/Project";
import Resume from "./Skills";
import About from "./About";
import { aboutMe, skills, language } from "@/data/page-data";
import Skills from "./Skills";
// import Skill from "./skill";

const HomeSection = () => {
  const [activeItem, setActiveItem] = useState("About");
  return (
    <div className="">
      <Nav data={activeItem} setActiveItem={setActiveItem} />
      <div className="relative">
        {activeItem === "About" ? <About data={aboutMe} /> : ""}
        {activeItem === "Skills" ? <Skills /> : ""}
        {activeItem === "Project" ? <Projects /> : ""}
        {/* {activeItem === "Skills" ? <Skills data={skills} /> : ""} */}
      </div>
    </div>
  );
};

export default HomeSection;
