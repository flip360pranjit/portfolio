import React from "react";
import { Typewriter } from "react-simple-typewriter";
import TextReveal from "../Reveal/TextReveal";
import ScaleReveal from "../Reveal/ScaleReveal";
import ScrollDown from "./ScrollDown";

function Hero({ handleClick }) {
  const words = ["Full Stack Developer", "Programmer", "Creative Artist"];

  return (
    <div className="px-[10%] border-b dark:border-none">
      <div className="min-h-[85vh] flex flex-col md:flex-row items-center md:gap-7">
        <div className="w-full md:w-1/2 h-[90vh] flex flex-col items-center justify-center md:items-start z-10 pb-16 relative">
          <TextReveal>
            <h1 className="text-4xl maxMd:text-5xl maxLg:text-6xl font-nunito font-black text-center md:text-left">
              Hey, I am Pranjit
              <span className="bg-gradient-to-r from-actionTo to-actionFrom inline-block text-transparent bg-clip-text">
                .
              </span>
            </h1>
          </TextReveal>
          <TextReveal>
            <h3 className="font-exo text-xl maxMd:text-2xl maxLg:text-3xl mt-5 font-bold text-center md:text-left">
              <span className="opacity-80">I'm a </span>
              <span className="bg-gradient-to-r from-actionTo to-actionFrom text-transparent bg-clip-text">
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
            <p className="font-nunito mt-10 opacity-80 text-xs maxMd:text-sm maxLg:text-base text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </TextReveal>
          <TextReveal>
            <button className="bg-gradient-to-r from-actionTo to-actionFrom px-7 maxLg:px-10 py-2 maxLg:py-3 mt-5 rounded-full text-white text-base maxLg:text-xl font-poppins font-bold hover:from-actionToDark hover:to-actionFromDark">
              Hire Me
            </button>
          </TextReveal>
          <div className="absolute bottom-10">
            <ScrollDown handleClick={handleClick} />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center pb-24">
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
