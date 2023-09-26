import { aboutMe } from "@/data/page-data";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { container, item } from "../components/Animation ";
import { motion as m } from "framer-motion";

interface aboutMeProps {
  data: {
    title: string[];

    experiences: {
      role: string;
      title: string;
      description: string;
    }[];
  };
}

const About = ({ data }: aboutMeProps) => {
  return (
    <m.div
      className=" pt-5"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h4 className="pl-3 pr-3 text-sm dark:text-black ">
        {data.title.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </h4>
      <div className="pl-2 m-2 py-4">
        <span className=" text-xl border-b-4 border-blue-400 dark:text-black dark:border-[#02855a]">
          My Experiences
        </span>
      </div>
      <div className="pl-2 mt-9">
        <ul>
          {data.experiences.map((text, index) => {
            return (
              <m.li
                key={index}
                className="py-4 flex flex-col"
                variants={item}
                initial="hidden"
                animate="show"
              >
                <span className="text-mdl text-blue-400 dark:text-[#02855a] ">
                  {text.role}
                </span>
                <span className="text-sm dark:text-black font-[700] ">
                  {" "}
                  {text.title}
                </span>
                <span className="text-sm dark:text-black">
                  {text.description}
                </span>
              </m.li>
            );
          })}
        </ul>
      </div>
      {/* <div className="pl-3  mb-2 mt-2 w-full">
        <Link href="tel:+234-9068-557-284">
          <button className="bg-blue-400 rounded-md text-white p-2 shadow-md dark:bg-[#02855a]">
            Contact Me
          </button>
        </Link>
        <Link href="/images/Resume Goodness.pdf">
          <button className="bg-blue-400 rounded-md text-white p-2 shadow-md m-2 dark:bg-[#02855a]">
            Download resume
          </button>
        </Link>
      </div> */}
    </m.div>
  );
};

export default About;
