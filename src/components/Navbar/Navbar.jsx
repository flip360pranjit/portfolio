import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import ToggleButton from "../ToggleButton/ToggleButton";

function Navbar({ theme, handleThemeSwitch }) {
  return (
    <div className="w-full bg-white dark:bg-black px-10 py-2 flex justify-between items-center">
      <div className="">
        <h1 className="text-3xl font-semibold font-poppins">flip360</h1>
      </div>
      <div className="flex gap-5">
        <h2 className="">Home</h2>
        <h2 className="">Contact</h2>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2">
          <FaInstagram />
          <FaFacebook />
        </div>
        <div className="">
          <ToggleButton theme={theme} handleThemeSwitch={handleThemeSwitch} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
