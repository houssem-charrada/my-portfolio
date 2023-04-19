import React from "react";

function About() {
  return (
    <div
      name="About"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium
          odio lectus, eu feugiat felis sagittis nec. Morbi sed elit a eros
          condimentum consequat. Cras sodales lacus eget dui commodo volutpat.
          Nullam ut auctor ipsum. Nulla placerat at massa eu posuere. Mauris
          eget vehicula sem.
        </p>

        <br />

        <p className=" text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro culpa
          aut quisquam? Sit expedita, doloribus laborum neque aspernatur maxime
          esse ex ullam. Quae dolor esse quam, facilis deserunt reprehenderit
          consequatur vel alias quisquam dolore, adipisci amet dignissimos,
          error rem dolorum quibusdam! Vitae odio sint fugiat voluptatum sed
          incidunt saepe dignissimos.
        </p>
      </div>
    </div>
  );
}

export default About;
