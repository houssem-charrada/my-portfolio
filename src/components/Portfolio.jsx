import React from "react";
import comingSoon from "../assets/portfolio/comingSoon.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Portfolio() {
  const cards = [
    {
      id: 1,
      src: reactWeather,
      demo: "https://sparkly-babka-b30701.netlify.app/",
      code: "https://github.com/houssem-charrada/my-weather-app",
      title: "My Weather App",
    },
    {
      id: 2,
      src: comingSoon,
      demo: "https://static.vecteezy.com/ti/gratis-vektor/p3/4243615-kreativ-kommt-bald-teaser-hintergrund-kostenlos-vektor.jpg",
      code: "https://static.vecteezy.com/ti/gratis-vektor/p3/4243615-kreativ-kommt-bald-teaser-hintergrund-kostenlos-vektor.jpg",
      title: "Work in progress",
    },
    {
      id: 3,
      src: comingSoon,
      demo: "https://static.vecteezy.com/ti/gratis-vektor/p3/4243615-kreativ-kommt-bald-teaser-hintergrund-kostenlos-vektor.jpg",
      code: "https://static.vecteezy.com/ti/gratis-vektor/p3/4243615-kreativ-kommt-bald-teaser-hintergrund-kostenlos-vektor.jpg",
      title: "Work in progress",
    },
    {
      id: 4,
      src: comingSoon,
      demo: "https://static.vecteezy.com/ti/gratis-vektor/p3/4243615-kreativ-kommt-bald-teaser-hintergrund-kostenlos-vektor.jpg",
      code: "https://static.vecteezy.com/ti/gratis-vektor/p3/4243615-kreativ-kommt-bald-teaser-hintergrund-kostenlos-vektor.jpg",
      title: "Work in progress",
    },
    {
      id: 5,
      src: comingSoon,
      demo: "https://static.vecteezy.com/ti/gratis-vektor/p3/4243615-kreativ-kommt-bald-teaser-hintergrund-kostenlos-vektor.jpg",
      code: "https://static.vecteezy.com/ti/gratis-vektor/p3/4243615-kreativ-kommt-bald-teaser-hintergrund-kostenlos-vektor.jpg",
      title: "Work in progress",
    },
    {
      id: 6,
      src: comingSoon,
      demo: "https://static.vecteezy.com/ti/gratis-vektor/p3/4243615-kreativ-kommt-bald-teaser-hintergrund-kostenlos-vektor.jpg",
      code: "https://static.vecteezy.com/ti/gratis-vektor/p3/4243615-kreativ-kommt-bald-teaser-hintergrund-kostenlos-vektor.jpg",
      title: "Work in progress",
    },
  ];

  let boxVariants = {};
  const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
  if (!isMobile) {
    boxVariants = fadeIn("right", 0.2);
  }

  return (
    <div
      name="Portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <motion.div
        variants={boxVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-cyan-300">
            Portfolio
          </p>
          <p className=" py-4">Check out my work!</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {cards.map((card) => (
            <div
              key={card.id}
              className=" shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105"
            >
              <img className=" rounded-md" src={card.src} alt="" />
              <p className=" border-b-2 border-cyan-300 text-center py-2 text-white font-bold">
                {card.title}
              </p>
              <div className="flex items-center justify-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={card.demo}
                  className=" w-1/2 px-6 m-3 py-1 duration-300 hover:scale-110 text-center hover:text-cyan-300"
                >
                  Demo
                </a>
                <p className=" text-cyan-300">|</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={card.code}
                  className=" w-1/2 px-6 m-3 py-1 duration-300 hover:scale-110 text-center hover:text-cyan-300"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Portfolio;
