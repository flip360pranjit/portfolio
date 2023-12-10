import React from "react";
import TextReveal from "../Reveal/TextReveal";
import skills from "./skills.json";

function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full py-16 font-poppins border-t border-actionTo">
      <TextReveal>
        <h2 className="font-semibold text-5xl text-center">Skills</h2>
      </TextReveal>
      <TextReveal>
        <h4 className="text-center text-[#555555] my-5">
          Encapsulating my proficiency in a wide spectrum of technologies,
          demonstrating a versatile skill set honed through experience. It
          showcases my capability to navigate diverse tools and frameworks,
          empowering me to create innovative solutions and robust applications.
        </h4>
      </TextReveal>
      <div className="grid grid-cols-7 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative cursor-pointer rounded-full w-full flex justify-center items-center p-2 bg-gradient-to-r from-actionTo to-actionFrom"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="rounded-full w-full bg-[#fff] p-2"
            />
            <div className="absolute scale-0 group-hover:scale-100 duration-500 w-[90%] text-center bg-[#fff] shadow-lg shadow-actionTo p-1 rounded-md">
              <h5 className="font-semibold bg-gradient-to-r from-actionTo to-actionFrom inline-block text-transparent bg-clip-text">
                {skill.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
