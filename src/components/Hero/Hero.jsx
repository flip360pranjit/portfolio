import React from "react";
import Reveal from "../Reveal/Reveal";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const words = [
    "Full Stack Developer",
    "Programmer",
    "Artist",
    "Creative Designer",
  ];

  return (
    <div className="h-[88vh] flex border-b">
      <div className="w-1/2 h-full flex flex-col mt-32 z-10">
        <Reveal>
          <h1 className="text-6xl font-poppins font-black">
            Hey, I am Pranjit
            <span className="bg-gradient-to-r from-actionTo to-actionFrom inline-block text-transparent bg-clip-text">
              .
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <h3 className="font-poppins text-3xl text-gray-600 mt-5 font-bold">
            I'm a{" "}
            <span className="bg-gradient-to-r from-actionTo to-actionFrom inline-block text-transparent bg-clip-text">
              <Typewriter
                words={words}
                loop={false}
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
          </h3>
        </Reveal>
        <Reveal>
          <p className="font-open-sans mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Reveal>
        <Reveal>
          <button className="bg-gradient-to-r from-actionTo to-actionFrom px-10 py-3 mt-5 rounded-full text-white text-xl font-poppins font-bold hover:from-actionToDark hover:to-actionFromDark">
            Hire Me
          </button>
        </Reveal>
      </div>
      <div className="w-1/2 h-full"></div>
    </div>
  );
}

export default Hero;
