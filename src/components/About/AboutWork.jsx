import React from "react";
import skillLinks from "./skillLinks.json";
import TextReveal from "../Reveal/TextReveal";

function AboutWork() {
  return (
    <div className="flex flex-col items-center w-full pt-7 pb-16 px-5 sm:px-10 font-exo">
      <TextReveal>
        <h2 className="font-semibold font-exo text-3xl text-center">
          What I do
        </h2>
      </TextReveal>
      {skillLinks.map((skill, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-[#e2bbff] to-[#f0dfff] dark:from-actionTo dark:to-actionFrom w-full mt-7 px-5 sm:px-10 py-5 rounded-md shadow-md flex flex-col sm:flex-row items-center gap-5 sm:gap-10"
        >
          <img
            src={skill.icon}
            alt={skill.title}
            className="w-20 h-20 rounded-full"
          />
          <div className="">
            <h4 className="text-xl sm:text-2xl font-bold font-exo text-center sm:text-left">
              {skill.title}
            </h4>
            <p className="opacity-80 mt-2 font-nunito text-center text-xs minSm:text-sm sm:text-left sm:text-base">
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutWork;
