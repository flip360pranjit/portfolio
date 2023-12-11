import React from "react";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="bg-darkText dark:bg-lightText p-5 shadow-lg rounded-md duration-300 cursor-pointer hover:scale-90 hover:shadow-actionTo">
      <div className="bg-gradient-to-r from-actionTo to-actionFrom px-5 py-10 rounded-md">
        <img src={project.image} alt={project.title} className="rounded-md" />
      </div>
      <div className="mt-5">
        {project.techStack.map((tech, index) => (
          <div
            key={index}
            className="inline-block rounded-full bg-gradient-to-r from-actionTo to-actionFrom p-0.5 m-1"
          >
            <div className="flex items-center justify-center bg-darkText dark:bg-lightText back py-1 px-2 rounded-full">
              <h1 className="text-[7px] minSm:text-[10px] font-bold bg-gradient-to-r from-actionTo to-actionFrom inline-block text-transparent bg-clip-text">
                {tech}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-3 font-exo">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-xs opacity-80 font-nunito">{project.description}</p>
        <h5 className="flex gap-5 font-semibold text-actionTo">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center hover:underline"
            >
              Demo <MdOutlineOpenInNew />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center hover:underline"
            >
              Github <FaGithub />
            </a>
          )}
        </h5>
      </div>
    </div>
  );
}

export default ProjectCard;
