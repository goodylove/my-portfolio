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
  hidden: { y: "60px" },
  show: { y: "0", transition: { duration: 0.5 } },
};

// skill animation
