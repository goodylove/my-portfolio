"use client";

import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { AiOutlineCloudDownload } from "react-icons/ai";
import DarkMode from "./DarkMode";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Image
        src="/goody.jfif"
        alt="goody-pic"
        priority
        width="300"
        height="300"
        className="w-32 h-32 rounded-full"
      />
      <h5 className="tracking-wider text-xl my-4 font-medium">
        <span className="px-2 font-sans dark:text-white">Nwachukwu</span>
        <span className="dark:text-white"> Goodness</span>
      </h5>
      <p className="bg-white rounded-full font-bold    px-6 py-1  my-3 text-blue-400 dark:bg-white dark:text-black ">
        Software Developer
      </p>
      <p>
        <Link
          href="/images/Resume Goodness.pdf"
          className="bg-white  rounded-full dark:bg-white  px-8 py-1  my-3 flex  font-bold  justify-center items-center text-sm text-blue-400 dark:text-black "
        >
          <AiOutlineCloudDownload />
          Download resume
        </Link>
      </p>
      <div className="">
        <SocialIcon
          url="https://www.instagram.com/goodylove475"
          bgColor="black"
          fgColor="white"
          style={{ width: 40, height: 30 }}
        />
        <SocialIcon
          url="https://github.com/goodylove"
          bgColor="black"
          fgColor="white"
          style={{ width: 40, height: 30 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/nwachukwu goodness"
          bgColor="black"
          fgColor="white"
          style={{ width: 40, height: 30 }}
        />
        <SocialIcon
          url="https://www.twitter.com/goodlove474"
          bgColor="black"
          fgColor="white"
          style={{ width: 40, height: 30 }}
        />
      </div>
      {/* <div className="bg-gray-200 w-full p-3 text-black font-bold rounded-md">
        <p>goodyc474@gmail.com</p>
        <p>+2349068557284</p>
      </div> */}
      <button
        className="bg-blue-400  w-3/6  my-3 p-2  rounded-full dark:bg-black dark:text-white"
        onClick={() => window.open("mailto:goodyc474@gmail.com")}
      >
        Email me
      </button>
      <button
        className=" p-2 bg-blue-400  
      
      my-3 rounded-full dark:bg-black"
      >
        <DarkMode />
      </button>
    </div>
  );
};

export default SideBar;
