import { skillProps } from "./Skills";
import { motion as m } from "framer-motion";
import { container, item } from "../components/Animation ";

const Bar = ({ data: { name, Icon, level } }: skillProps) => {
  const skillAnimation = {
    hidden: { x: "30px", opacity: 0 },

    show: {
      x: 0,
      opacity: 1,
      duration: 0.1,

      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <m.div
      className="m-3 text-white bg-slate-800  rounded-full dark:bg-gray-200"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <m.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-blue-900 to-blue-100 dark:bg-gradient-to-r dark:from-[#02855a] dark:to-green-100"
        style={{ width: level, transition: "0.5s" }}
        variants={skillAnimation}
        initial="hidden"
        animate="show"
      >
        <Icon className="" />
        <span className=" ml-2">{name}</span>
      </m.div>
    </m.div>
  );
};

export default Bar;
