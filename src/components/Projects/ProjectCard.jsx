import React from "react";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoGitNetwork } from "react-icons/io5";

function ProjectCard({ project }) {
  return (
    <div className="bg-darkText dark:bg-lightText p-5 shadow-lg rounded-md duration-300 cursor-pointer hover:scale-90 hover:shadow-actionTo">
      <div className="bg-gradient-to-r from-actionTo to-actionFrom px-1 py-3 rounded-md">
        <img src={project.image} alt={project.title} className="rounded-md" />
      </div>
      <div className="mt-5">
        {project.techStack.map((tech, index) => (
          <div
            key={index}
            className="inline-block rounded-full bg-gradient-to-r from-actionTo to-actionFrom p-0.5 m-1"
          >
            <div className="flex items-center justify-center bg-darkText dark:bg-lightText back py-1 px-2 rounded-full">
              <h1 className="text-xs font-bold bg-gradient-to-r from-actionTo to-actionFrom inline-block text-transparent bg-clip-text">
                {tech}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-3 font-exo">
        <h2 className="text-2xl font-bold">{project.title}</h2>

        {project.status && (
          <div className="flex">
            <p className="bg-gray-200 text-gray-700 font-semibold px-5 py-1 rounded-md flex gap-1 items-center">
              <IoGitNetwork />
              In Development
            </p>
          </div>
        )}
        <p className="text-sm opacity-80 font-nunito">{project.description}</p>
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
        {project.people.length !== 0 && (
          <div className="flex gap-3">
            {project.people.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={"Person " + `${index}`}
                className="w-10 rounded-full"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
