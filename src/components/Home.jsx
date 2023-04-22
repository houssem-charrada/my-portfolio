import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="text-center order-2 flex flex-col justify-center h-full md:text-left md:w-3/5 md:order-1">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" mb-6 text-4xl md:text-7xl font-bold text-white"
          >
            I am{" "}
            <TypeAnimation
              sequence={[
                "Houssem Charrada",
                2000,
                "a Developer",
                2000,
                "a Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className=" text-cyan-300"
            />
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" text-gray-500 py-4 max-w-md"
          >
            A passionate, enthusiastic and creative front-end web developer and
            thrilled to be pursuing his dream career in this field.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" flex justify-center md:justify-start"
          >
            <Link
              to="Portfolio"
              smooth
              duration={600}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-cyan-500 cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowRightCircle size={23} className=" ml-1" />
              </span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" order-1 mt-28 md:w-2/5 md:order-2 md:mt-0"
        >
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 border-cyan-300 border-4 md:w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
