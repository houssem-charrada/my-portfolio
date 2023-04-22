import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Experience = () => {
  const tools = [
    {
      id: 1,
      src: html,
      child: <>HTML</>,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      child: <>CSS</>,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      child: <>JavaScript</>,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      child: <>React</>,
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: tailwind,
      child: <>Tailwind</>,
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      child: <>GitHub</>,
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: figma,
      child: <>Figma</>,
      style: "shadow-purple-400",
    },
  ];

  let boxVariants = {};
  const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
  if (!isMobile) {
    boxVariants = fadeIn("right", 0.2);
  }

  return (
    <div
      name="Experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <motion.div
        variants={boxVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
      >
        <div>
          <p className=" text-4xl font-bold border-b-4 border-cyan-300 p-2 inline">
            Experience
          </p>
          <p className=" py-6">These are the tools that I am familiar with!</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`shadow-md duration-500 hover:scale-110 py-2 rounded-lg ${tool.style}`}
            >
              <img src={tool.src} alt="" className=" w-20 mx-auto" />
              <p className=" mt-4">{tool.child}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
