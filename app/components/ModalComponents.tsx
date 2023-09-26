import React from "react";
import { Iprojects } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { container, item, stagger } from "../components/Animation ";
import { motion as m } from "framer-motion";
import { AiFillGitlab, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { LinkComponent } from "./LinkComponent";
interface dataProps {
  name: string;
  description: string;
  img: string;
  technology: string[];
  github?: string | undefined;
  pageLink: string;
  showDetails: boolean;
  closed: (value: false) => void;
}
const ModalComp = ({
  name,
  description,
  img,
  technology,
  pageLink,
  github,
  showDetails,
  closed,
}: dataProps) => {
  if (typeof github === "undefined") {
    pageLink;
  }
  return (
    <m.div
      className="md:w-[50%] md:h-[50%] bg-gray-50  fixed md:top-[20%]  md:right-[8rem] p-3 rounded-md z-50 w-[80%] top-[25%] right-[3rem] 
  "
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="grid md:grid-cols-2 p-3  h-full  gap-x-12  bg-gray-900 dark:bg-[#02855a]  content-center rounded-md">
        <div>
          <Image
            src={img}
            alt="project-image"
            width={250}
            height={90}
            priority
          />
          <div className="flex justify-center my-2  space-x-3">
            {/* <Link
              href={typeof github === "undefined" ? pageLink : github}
              className="flex items-center px-4 py-2 space-x-3 "
              target="_blank"
            >
              <AiFillGitlab /> <span>GitHub</span>
            </Link> */}
            {/* <LinkComponent
              github={github}
              pageLink=""
              icon={<AiFillGitlab />}
              text="Github"
            /> */}
            <Link
              href={pageLink}
              className="flex items-center px-4 py-1 space-x-3 "
              target="blank"
            >
              <AiFillProject /> <span>Demo</span>
            </Link>
            {/* <LinkComponent
              pageLink={pageLink}
              icon={<AiFillProject />}
              text="Project"
            /> */}
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-xl  font-medium">{name}</h2>
          <p className="mb-1 text-[9px]">{description}</p>
          <div className="  grid grid-cols-3  gap-[3px]  tracking-wider">
            {technology.map((technology, index) => {
              return (
                <span
                  key={index}
                  className="mx-1  bg-black rounded-sm text-[6px] px-1 py-1  max-w-[100px] font-[400]"
                >
                  {technology}
                </span>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => closed(false)}
          className="absolute p-2 mb-2 rounded-full focus:outline-none top-2  right-3 text-xl"
        >
          <MdClose />
        </button>
      </div>
    </m.div>
  );
};

export default ModalComp;
