// import img from "/hm.jpeg";
// import img1 from "/react.png";
// import img2 from "/next.svg";
// import img3 from "/js.png";
import { Iprojects } from "@/types";

import { BsCircleFill } from "react-icons/bs";

export const skills = {
  skills: [
    { img: "/./hm.jpeg", name: "HTML5" },
    { img: "/./images.png", name: "Tailwind Css" },
    { img: "/./js.png", name: "JavaScript" },
    { img: "/./typescript.png", name: "TypeScript" },
    { img: "/./react.png", name: "React js" },
    { img: "/./next.svg", name: "Next js" },
  ],
};
export const aboutMe = {
  title: [
    "Hi, I'm  Goodness",
    "Frontend Developer Driven by a love for aesthetics and user-centric design, my journey in web  development has been thrilling! ,I possess a talent for creating functional and visually pleasing applications and I aim to provide users with outstanding experiences.No matter how complex, i'll make them love it🥰.",
  ],
  experiences: [
    {
      role: "Frontend Developer Intern ",
      title: "Florintech Computer College ",
      description: "April 2022 - August 2023",
    },

    {
      role: "FrontEnd Developer Intern",
      title: "Zuri HNG",
      description: "September 2023 - Present.",
    },
  ],
};

export const language = [
  { name: "Html", level: "100%", Icon: BsCircleFill },
  { name: "Css", level: "100%", Icon: BsCircleFill },
  { name: "javascript", level: "99%", Icon: BsCircleFill },
  { name: "tailwind css", level: "100%", Icon: BsCircleFill },
  { name: "React", level: "95%", Icon: BsCircleFill },
  { name: "Typescript", level: "90%", Icon: BsCircleFill },
  { name: "ReduxToolkit", level: "80%", Icon: BsCircleFill },

  { name: "Next js", level: "90%", Icon: BsCircleFill },
];
export const tools = [
  { name: "Git", level: "95%", Icon: BsCircleFill },
  { name: "GitHub", level: "95%", Icon: BsCircleFill },
  { name: "Figma", level: "90%", Icon: BsCircleFill },
  { name: "Sass", level: "90%", Icon: BsCircleFill },
];

export const projects: Iprojects[] = [
  {
    name: "florintech college  website",
    description:
      "Florintech Computer College is a cutting-edge institution dedicated to providing top-tier education and training in the field of computer science and technology. ",
    img: "/images/florintechimg.JPG",
    technology: ["html", "sass", "next js"],

    pageLink: "https://www.florintechcomputercollege.com/",
  },
  {
    name: "uber app",
    description:
      "The Uber app is a user-friendly  application that revolutionized the transportation . It allows users to easily request rides from a network of drivers using their smartphones. Users can input their destination, view fare estimates, and select from various ride options,  depending on their preferences and budget.",
    img: "/images/uber.JPG",
    technology: [
      "html",
      "tailwind css",
      "react",
      "react-router",
      "firebase",
      "tomtom map api",
    ],

    pageLink: "https://uber-app-hazel.vercel.app/",
  },

  {
    name: "vintage vision",
    description:
      "An e-commerce webiste where furniture and homedecor are sold ,i also implemented payment integration.",
    img: "/images/vintage.png",
    technology: ["react", "tailwind css", "react-router", "reduxtoolkit"],

    pageLink: "https://vintage-vision.vercel.app/",
  },
  {
    name: "Admin-dashboard",
    description: "i used this site to learn and understand how sass works",
    img: "/images/admin-dashboard.JPG",
    technology: ["react", "sass"],

    pageLink: "https://admin-dashboard-flame-ten.vercel.app/",
  },

  {
    name: "Birthday reminder app",
    description:
      "This is a birthday  reminder app which i built solely to help remind us of our love ones birthdays",

    img: "/images/birth.JPG",
    technology: ["html", "tailwind css", "javascript"],
    pageLink:
      "https://birthday-reminder-mobile-2reqony1m-goodyc474-gmailcom.vercel.app/",
  },
  {
    name: "Tracker",
    description:
      "A simple react app that keeps track of expenses and income of the user",
    img: "/images/tracker.JPG",
    technology: ["react", "css"],

    pageLink: "https://tracker-indol-omega.vercel.app/",
  },
  {
    name: "Netflix clone",
    description:
      "This is a simple neftlix clone website,which includes sigin page and login page",
    img: "/images/netflix.JPG",
    technology: ["html", "css", "javascript"],

    pageLink: "https://netflix-clone-demo-ten.vercel.app/",
  },

  {
    name: "Fintech landing page",
    description:
      "A fintech landing page which includes a functional  testimonals  and FAQ",
    img: "/images/fintech.JPG",
    technology: ["react", "tailwind css"],

    pageLink: "https://fintech-landing-page-9d1snvnvo-goodyc474.vercel.app/",
  },

  {
    name: "Silon",
    description: "This is a mini-shop website where ladies wears are sold",
    img: "/images/silon.JPG",
    technology: ["html", "css", "javascript"],
    github: "https://goodylove.github.io/silion/",
    pageLink: "https://silion.vercel.app/",
  },

  // {
  //   name: "My-resume",
  //   description:
  //     "my reumes which i built with next js typescript and tailwind css",
  //   img: "/images/resume.JPG",
  //   technology: ["next js", "typescript", "tailwind css"],

  //   pageLink: "https://my-resume-eye2zys1q-goodyc474-gmailcom.vercel.app/",
  // },
  {
    name: "Real estate website",
    description:
      "A simple real estate webiste which show different properties with different prices",
    img: "/images/funiture.JPG",
    technology: ["html", "css", "javascript"],
    github: "https://goodylove.github.io/real-estate-simple-home-page/",
    pageLink: "https://real-estate-simple-home-page.vercel.app/",
  },

  // {
  //   name: "Quiz app",
  //   description: "A quiz app which has both English and Mathematics qestions.",
  //   img: "/images/quiz.JPG",
  //   technology: ["html", "css", "javascript"],
  //   github: "https://goodylove.github.io/quiz-app/",
  //   pageLink: "https://quiz-app-seven-lac.vercel.app/",
  // },
];
