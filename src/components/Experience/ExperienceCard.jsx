import React from "react";

function ExperienceCard({ experience, index }) {
  return (
    <div
      className={`w-full bg-transparent cursor-pointer group perspective mt-7 h-[50vh] minSm${
        index === 0 || index === 3
          ? "h-[130px]"
          : index === 1
          ? "h-[200px]"
          : "h-[170px]"
      }`}
    >
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div
          key={index}
          className="absolute flex items-center bg-gradient-to-r from-actionTo to-actionFrom w-full h-full mb-7 px-10 py-5 rounded-md shadow-md"
        >
          <div className="flex flex-col minSm:flex-row items-center gap-10 w-full">
            <img
              src={experience.logo}
              alt={experience.designation}
              className="w-20 h-20 rounded-full"
            />
            <div className="w-full">
              <h4 className="text-lg maxLg:text-xl font-bold text-center minSm:text-left">
                {experience.designation}
              </h4>
              <div className="flex flex-col minSm:flex-row items-center justify-between opacity-80 mt-2 w-full text-sm xl:text-base text-center minSm:text-left">
                <p>{experience.type}</p>
                <p>{experience.period}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-md">
          <div
            key={index}
            className="absolute flex items-center bg-gradient-to-r from-actionTo to-actionFrom w-full h-full mb-7 px-10 py-5 rounded-md shadow-md"
          >
            <ul className="text-xs maxLg:text-sm list-disc">
              {experience.description.map((des, i) => (
                <li className="mt-3">{des}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
