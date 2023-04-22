import { skills } from "@/data/page-data";
import Image, { StaticImageData } from "next/image";
import { motion as m } from "framer-motion";
import { container, item } from "../components/Animation ";

interface skillsProps {
  data: {
    // title: string[];
    skills: {
      name: string;
      img: string;
    }[];
  };
}

const Skills = ({ data }: skillsProps) => {
  return (
    <m.div className="" variants={container} initial="hidden" animate="show">
      <div className="m-4">
        {/* <h2 className="text-xl p-3">My Skills</h2> */}
        <m.ul
          className="grid md:grid-cols-3 gap-6 content-center pl-2 sm:grid-cols-2 grid-col-1 justify-center"
          variants={item}
          initial="hidden"
          animate="show"
        >
          {data.skills.map((item, index) => {
            return (
              <li key={index} className=" ">
                <div className="w-[200px] h-[100px] border-[1px] rounded-md overflow-hidden bg-blue-400 ">
                  <Image
                    src={item.img}
                    priority
                    width={200}
                    height={200}
                    alt="image"
                    className=""
                  />
                </div>
                <p>{item.name}</p>
              </li>
            );
          })}
        </m.ul>
        <h2 className="pl-2">Other Skills</h2>
        <ol type="i" className="flex justify-start pl-2 text-md ">
          <li> GIT</li>
          <li className="pl-2 pr-3"> GITHUB</li>
          <li> SCSS</li>
        </ol>
      </div>
    </m.div>
  );
};

export default Skills;
