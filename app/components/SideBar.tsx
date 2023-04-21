"use client";

import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { AiOutlineCloudDownload } from "react-icons/ai";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/goody.jfif"
        alt="goody-pic"
        priority
        width="300"
        height="300"
        className="w-32 h-32 rounded-full"
      />
      <h5 className="tracking-wider text-xl my-4 font-medium">
        <span className="px-2 font-sans">Nwachukwu</span>
        Goodness
      </h5>
      <p className="bg-white rounded-full font-bold    px-6 py-1  my-3 text-blue-400 ">
        Software Developer
      </p>
      <p>
        <a
          href=""
          className="bg-white  rounded-full px-8 py-1  my-3 flex  font-bold  justify-center items-center text-sm text-blue-400 "
        >
          <AiOutlineCloudDownload />
          Download resume
        </a>
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
        className="bg-blue-400  w-3/6  my-3 p-2  rounded-full"
        onClick={() => window.open("mailto:goodyc474@gmail.com")}
      >
        Email me
      </button>
      <button
        className=" p-2 bg-blue-400  w-3/6 
      
      my-3 rounded-full"
      >
        Dark ui
      </button>
    </div>
  );
};

export default SideBar;
