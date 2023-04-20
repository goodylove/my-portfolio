"use client";

import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// const NavItem: FunctionComponent<{
//   activeItem: string;
//   setActiveItem: Function;
//   route: string;
//   name: string;
// }> = ({ activeItem, setActiveItem, name, route }) => {
//   return activeItem !== name ? (
//     <Link href={route}>
//       <span onClick={() => setActiveItem("about")}>{activeItem}</span>
//     </Link>
//   ) : null;
// };
const Nav = () => {
  const [activeItem, setActiveItem] = useState("About");
  // const { pathname } = useRouter();

  useEffect(() => {
    // if (pathname === "/") setActiveItem("about");
    // if (pathname === "/#project") setActiveItem("project");
    // if (pathname === "/#resume") setActiveItem("resume");
  }, []);
  return (
    <div className="flex justify-between items-center p-3 font-bold ">
      <span className="cursor-pointer">{activeItem}</span>
      <div className="flex justify-evenly">
        <Link href="">
          <span onClick={() => setActiveItem("About")}>
            {activeItem === "About" ? "" : <span>About</span>}
          </span>
        </Link>
        <Link href="">
          <span onClick={() => setActiveItem("Project")}>
            {activeItem === "Project" ? "" : <span>Project</span>}
          </span>
        </Link>
        <Link href="">
          <span onClick={() => setActiveItem("Resume")}>
            {activeItem === "Resume" ? "" : <span>Resume</span>}
          </span>
        </Link>
        {/* <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="about"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="project"
          route="/#resume"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="resume"
          route="/#resume"
        /> */}
      </div>
    </div>
  );
};

export default Nav;
