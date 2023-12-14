import React from "react";
import TextReveal from "../components/Reveal/TextReveal";
import projects from "../components/Projects/projects.json";
import ProjectCard from "../components/Projects/ProjectCard";
import ScaleReveal from "../components/Reveal/ScaleReveal";

function ProjectsPage() {
  return (
    <div className="px-5 sm:px-16">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-7 py-16">
          <div className="">
            <ScaleReveal>
              <img
                src="https://i.postimg.cc/NF0kGHZ2/Untitled-design-4.jpg"
                alt="icon"
                className="w-32 rounded-full"
              />
            </ScaleReveal>
          </div>
          <TextReveal>
            <h1 className="text-center font-exo text-2xl minSm:text-4xl md:text-5xl opacity-80">
              My Portfolio
            </h1>
          </TextReveal>
          <div className="grid md:grid-cols-2 maxLg:grid-cols-3 gap-10 bg-gradient-to-r from-actionTo to-actionFrom px-7 py-16 rounded-md w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
