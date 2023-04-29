import { skillProps } from "./Skills";
import { motion as m } from "framer-motion";
import { container, item } from "../components/Animation ";

const Bar = ({ data: { name, Icon, level } }: skillProps) => {
  const widthValue = `${level}`;
  const variants = {
    hidden: {
      width: 0,
      transition: {
        ease: "easeInOut",
      },
    },

    show: {
      width: widthValue,

      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,

        stiffness: 100,
      },
    },
  };
  return (
    <m.div
      className="m-5 text-white bg-slate-800  rounded-full dark:bg-gray-200"
      variants={item}
      initial="hidden"
      animate="show"
    >
      <m.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-blue-900 to-blue-100 dark:bg-gradient-to-r dark:from-[#02855a] dark:to-green-100"
        variants={variants}
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
