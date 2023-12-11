import React from "react";
import skillLinks from "./skillLinks.json";
import TextReveal from "../Reveal/TextReveal";

function AboutWork() {
  return (
    <div className="flex flex-col items-center w-full pt-7 pb-16 px-10 font-poppins">
      <TextReveal>
        <h2 className="font-semibold font-exo text-5xl text-center">
          What I do
        </h2>
      </TextReveal>
      {skillLinks.map((skill, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-[#e2bbff] to-[#f0dfff] w-full mt-7 px-10 py-5 rounded-md shadow-md flex gap-10"
        >
          <img
            src={skill.icon}
            alt={skill.title}
            className="w-20 h-20 rounded-full"
          />
          <div className="">
            <h4 className="text-2xl font-bold font-exo">{skill.title}</h4>
            <p className="text-gray-700 mt-2 font-nunito">
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutWork;
