import React from "react";
import { Typewriter } from "react-simple-typewriter";
import TextReveal from "../Reveal/TextReveal";
import ScaleReveal from "../Reveal/ScaleReveal";

function Hero() {
  const words = ["Full Stack Developer", "Programmer", "Creative Artist"];

  return (
    <div className="px-[10%] border-b">
      <div className="min-h-[88vh] flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 h-full flex flex-col mt-16 sm:mt-28 z-10">
          <TextReveal>
            <h1 className="text-6xl font-nunito font-black">
              Hey, I am Pranjit
              <span className="bg-gradient-to-r from-actionTo to-actionFrom inline-block text-transparent bg-clip-text">
                .
              </span>
            </h1>
          </TextReveal>
          <TextReveal>
            <h3 className="font-exo text-3xl text-gray-600 mt-5 font-bold">
              <span>I'm a </span>
              <span className="bg-gradient-to-r from-actionTo to-actionFrom block sm:inline-block text-transparent bg-clip-text">
                <Typewriter
                  words={words}
                  loop={false}
                  typeSpeed={120}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </h3>
          </TextReveal>
          <TextReveal>
            <p className="font-nunito mt-10 text-[#0a0a0ae6]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </TextReveal>
          <TextReveal>
            <button className="bg-gradient-to-r from-actionTo to-actionFrom px-10 py-3 mt-5 rounded-full text-white text-xl font-poppins font-bold hover:from-actionToDark hover:to-actionFromDark">
              Hire Me
            </button>
          </TextReveal>
        </div>
        <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
          <ScaleReveal>
            <div className="">
              <img
                src="https://i.postimg.cc/zvGPp8yC/profile.png"
                // src="https://i.postimg.cc/vTp0GMNd/vector-profile.png"
                alt="Profile"
                className=""
              />
            </div>
          </ScaleReveal>
        </div>
      </div>
    </div>
  );
}

export default Hero;
