"use client";

import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface navProps {
  data: string;
  setActiveItem: Function;
}
const Nav = ({ data, setActiveItem }: navProps) => {
  return (
    <div className="flex justify-between items-center p-3 font-bold">
      <span className="cursor-pointer md:text-xl border-b-4 border-blue-400 hover:text-blue-400 ">
        {data}
      </span>
      <div className="flex justify-evenly md:w-[30%] w-[50%] text-md">
        <Link href="">
          <span
            onClick={() => setActiveItem("About")}
            className="hover:text-blue-400"
          >
            {data === "About" ? "" : <span>About</span>}
          </span>
        </Link>
        <Link href="">
          <span
            onClick={() => setActiveItem("Project")}
            className="hover:text-blue-400"
          >
            {data === "Project" ? "" : <span>Project</span>}
          </span>
        </Link>
        <Link href="">
          <span
            onClick={() => setActiveItem("Resume")}
            className="hover:text-blue-400"
          >
            {data === "Resume" ? "" : <span>Resume</span>}
          </span>
        </Link>
        <Link href="">
          <span
            onClick={() => setActiveItem("Skills")}
            className="hover:text-blue-400"
          >
            {data === "Skills" ? "" : <span>Skills</span>}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
