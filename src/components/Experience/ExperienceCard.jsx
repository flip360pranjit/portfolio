import React from "react";

function ExperienceCard({ experience, index }) {
  return (
    <div
      className={`w-full bg-transparent cursor-pointer group perspective mt-7 ${
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
          <div className="flex items-center gap-10 w-full">
            <img
              src={experience.logo}
              alt={experience.designation}
              className="w-20 h-20 rounded-full"
            />
            <div className="w-full">
              <h4 className="text-xl font-bold">{experience.designation}</h4>
              <div className="flex justify-between text-gray-50 mt-2 w-full">
                <p className="">{experience.type}</p>
                <p className="">{experience.period}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div
            key={index}
            className="absolute flex items-center bg-gradient-to-r from-actionTo to-actionFrom w-full h-full mb-7 px-10 py-5 rounded-md shadow-md"
          >
            <ul className="text-sm list-disc">
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
