// import { stagger } from "framer-motion";

export const container = {
  hidden: {
    opacity: 0,
    y: "60px",
  },
  show: {
    opacity: 1,
    y: "0px",
    duration: 0.2,

    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const item = {
  hidden: { y: "10px", opacity: 0 },
  show: { y: "0", opacity: 1 },
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
export const pro = {
  show: {
    rotate: 360,
  },
};
// skill animation
