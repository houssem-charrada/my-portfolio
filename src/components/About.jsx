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
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium
          odio lectus, eu feugiat felis sagittis nec. Morbi sed elit a eros
          condimentum consequat. Cras sodales lacus eget dui commodo volutpat.
          Nullam ut auctor ipsum. Nulla placerat at massa eu posuere. Mauris
          eget vehicula sem.
        </motion.p>

        <br />

        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" text-xl"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro culpa
          aut quisquam? Sit expedita, doloribus laborum neque aspernatur maxime
          esse ex ullam. Quae dolor esse quam, facilis deserunt reprehenderit
          consequatur vel alias quisquam dolore, adipisci amet dignissimos,
          error rem dolorum quibusdam! Vitae odio sint fugiat voluptatum sed
          incidunt saepe dignissimos.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
