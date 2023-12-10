import React from "react";
import logos from "./logos.json";
import experiences from "./experiences.json";
import ScaleReveal from "../Reveal/ScaleReveal";
import TextReveal from "../Reveal/TextReveal";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="flex flex-col items-center w-full py-16 font-poppins">
      <TextReveal>
        <h2 className="font-semibold text-5xl text-center">Experience</h2>
      </TextReveal>
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-full mt-5">
        <div className="flex flex-col items-center lg:col-span-2 mt-10">
          <div className="grid grid-cols-3 lg:grid-cols-2 gap-7 mb-7">
            {logos.map((logo, index) => (
              <div className={` ${index === 3 && "col-start-2 col-span-1"}`}>
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
                      className="rounded-full p-5 bg-gradient-to-r from-actionTo to-actionFrom shadow-md hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-actionTo"
                    />
                  </a>
                </ScaleReveal>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[#fff] lg:col-span-3 ml-16">
          {experiences.map((experience, index) => (
            <ExperienceCard index={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
