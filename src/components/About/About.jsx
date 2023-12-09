import React from "react";
import skillLinks from "./skillLinks.json";
import Reveal from "../Reveal/Reveal";

function About() {
  return (
    <div className="flex flex-col items-center w-full py-16 px-10 font-poppins">
      <Reveal>
        <h2 className="font-semibold text-5xl text-center">What I do</h2>
      </Reveal>
      <Reveal>
        <h4 className="text-center text-[#555555] mt-5 mb-10">
          I am a passionate full-stack web developer, proficient in coding and
          design, dedicated to crafting seamless digital experiences. With an
          artist's eye, I create captivating interfaces that harmonize
          technology and artistry, transforming ideas into functional and
          visually appealing web solutions.
        </h4>
      </Reveal>
      {skillLinks.map((skill, index) => (
        <div
          key={index}
          className="bg-[#fff] w-full mt-7 px-10 py-5 rounded-md shadow-md flex gap-10"
        >
          <img
            src={skill.icon}
            alt={skill.title}
            className="w-20 h-20 rounded-full"
          />
          <div className="">
            <h4 className="text-2xl font-bold">{skill.title}</h4>
            <p className="text-gray-700 mt-2">{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
