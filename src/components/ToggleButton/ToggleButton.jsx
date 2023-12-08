import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import "./ToggleButton.css"; // Import CSS file

const ToggleButton = ({ theme, handleThemeSwitch }) => {
  const [rotation, setRotation] = useState(false);

  const handleClick = () => {
    setRotation(true);
    setTimeout(() => setRotation(false), 1000); // Reset rotation after 1s
    handleThemeSwitch(); // Handle theme switch
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center"
      >
        {theme === "dark" ? (
          <FaMoon
            className={`text-gray-700 text-2xl z-30 scale-0 ${
              rotation ? "rotate-[360deg]" : ""
            }`}
          />
        ) : (
          <IoSunnySharp
            className={`text-gray-700 text-2xl z-30 scale-100 ${
              rotation ? "rotate-[360deg]" : ""
            }`}
          />
        )}
        <span className="absolute block w-[50px] h-[50px] bg-[#f8f8f8] dark:bg-[#2b2b2b] rounded-full shadow-inner transition duration-1000"></span>
      </button>
    </div>
  );
};

export default ToggleButton;
