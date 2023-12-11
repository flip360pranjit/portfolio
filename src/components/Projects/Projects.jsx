import React from "react";
import TextReveal from "../Reveal/TextReveal";
import projects from "./projects.json";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="border-b dark:border-none">
      <div className="flex flex-col items-center w-full py-16 font-poppins z-[100] px-[10%] relative">
        <div className="bg-gradient-to-r from-actionTo to-actionFrom w-full h-1/2 absolute top-0 z-0"></div>
        <TextReveal>
          <h2 className="font-semibold text-3xl text-center font-exo text-[#fff]">
            My Portfolio
          </h2>
        </TextReveal>
        <TextReveal>
          <h4 className="font-nunito text-center text-sm minSm:text-lg sm:text-xl opacity-80 my-5 text-[#fff]">
            Showcasing a collection of my diverse works, including web
            applications, platforms, and software solutions, highlighting
            innovative tech stacks and problem-solving skills across various
            domains.
          </h4>
        </TextReveal>
        <div className="grid md:grid-cols-2 maxLg:grid-cols-3 gap-10 w-full mt-5 z-[100]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
