import React from "react";
import logos from "./logos.json";
import experiences from "./experiences.json";
import ScaleReveal from "../Reveal/ScaleReveal";
import TextReveal from "../Reveal/TextReveal";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="px-[10%] border-b dark:border-none">
      <div className="flex flex-col items-center w-full pb-16 font-poppins">
        <TextReveal>
          <h2 className="font-semibold text-3xl text-center">Experience</h2>
        </TextReveal>
        <TextReveal>
          <h4 className="font-nunito text-center text-sm minSm:text-lg sm:text-xl opacity-80 my-5">
            Varied roles in esteemed companies molded my skills across web
            development and design, enriching my expertise through impactful
            projects and diverse teams.
          </h4>
        </TextReveal>
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-full mt-5">
          <div className="flex flex-col items-center lg:col-span-2 mt-10">
            <div className="grid grid-cols-2 minSm:grid-cols-3 lg:grid-cols-2 gap-7 mb-7">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className={` ${index === 3 && "col-start-2 col-span-1"}`}
                >
                  <ScaleReveal>
                    <a
                      key={index}
                      href={logo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={logo.image}
                        alt={index}
                        className="rounded-full p-3 minSm:p-5 bg-gradient-to-r from-actionTo to-actionFrom shadow-md hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-actionTo"
                      />
                    </a>
                  </ScaleReveal>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[#fff] lg:col-span-3 lg:ml-16">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                index={index}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
