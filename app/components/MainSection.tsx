"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import Project from "../components/Project";
import Resume from "../components/Resume";
import About from "./About";
import { aboutMe, skills } from "@/data/page-data";
import Skills from "./Skills";

const HomeSection = () => {
  const [activeItem, setActiveItem] = useState("About");
  return (
    <div className="">
      <Nav data={activeItem} setActiveItem={setActiveItem} />
      <div>
        {activeItem === "About" ? <About data={aboutMe} /> : ""}
        {activeItem === "Resume" ? <Resume /> : ""}
        {activeItem === "Project" ? <Project /> : ""}
        {activeItem === "Skills" ? <Skills data={skills} /> : ""}
      </div>
    </div>
  );
};

export default HomeSection;
