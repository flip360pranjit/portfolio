import React from "react";
import TextReveal from "../Reveal/TextReveal";
import projects from "./projects.json";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col items-center w-full py-16 font-poppins border-t border-actionTo">
      <TextReveal>
        <h2 className="font-semibold text-5xl text-center">My Portfolio</h2>
      </TextReveal>
      <TextReveal>
        <h4 className="text-center text-[#555555] my-5">
          Showcasing a collection of my diverse works, including web
          applications, platforms, and software solutions, highlighting
          innovative tech stacks and problem-solving skills across various
          domains.
        </h4>
      </TextReveal>
      <div className="grid grid-cols-3 gap-10 w-full mt-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
