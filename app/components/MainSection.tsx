"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import Project from "../components/Project";
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
      <div>
        {activeItem === "About" ? <About data={aboutMe} /> : ""}
        {activeItem === "Skills" ? <Skills /> : ""}
        {activeItem === "Project" ? <Project /> : ""}
        {/* {activeItem === "Skills" ? <Skills data={skills} /> : ""} */}
      </div>
    </div>
  );
};

export default HomeSection;
