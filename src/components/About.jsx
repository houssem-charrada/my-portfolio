import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function About() {
  return (
    <div
      name="About"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" pb-8"
        >
          <p className=" text-4xl font-bold inline border-b-4 border-cyan-300">
            About
          </p>
        </motion.div>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" text-xl mt-20"
        >
          Hello, my name is Houssem, and I am a passionate front-end web
          developer. I have always been fascinated by the way websites work, and
          I am thrilled to be pursuing my dream career in this field.
        </motion.p>

        <br />

        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" text-xl"
        >
          Throughout my education and personal projects, I have gained a strong
          understanding of HTML, CSS, and JavaScript. I have also worked with
          various frameworks and libraries, including React. I enjoy learning
          new technologies and staying up to date with the latest trends in
          front-end development.
        </motion.p>

        <br />

        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" text-xl"
        >
          What I find most exciting about front-end development is the ability
          to create beautiful and engaging user experiences. I believe that a
          well-designed website should not only look great but also be intuitive
          and user-friendly. I am committed to creating responsive and
          accessible websites that are both aesthetically pleasing and
          functional.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
