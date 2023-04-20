"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import Project from "../components/Project";
import Resume from "../components/Resume";
import About from "./About";

const HomeSection = () => {
  const [activeItem, setActiveItem] = useState("About");
  return (
    <div>
      <Nav data={activeItem} setActiveItem={setActiveItem} />
      <div>
        {activeItem === "About" ? <About /> : ""}
        {activeItem === "Resume" ? <Resume /> : ""}
        {activeItem === "Project" ? <Project /> : ""}
      </div>
    </div>
  );
};

export default HomeSection;
