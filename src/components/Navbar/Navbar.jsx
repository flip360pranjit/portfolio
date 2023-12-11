import React from "react";
import { motion } from "framer-motion";
import ToggleButton from "../ToggleButton/ToggleButton";

function Navbar({ theme, handleThemeSwitch }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-70px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="w-full bg-[#f8f8f8] py-3 flex justify-between items-center relative z-[999] px-[8%]"
    >
      {/* <div className="mx-5 font-poppins font-semibold">
        <button className="bg-gradient-to-r from-actionTo to-actionFrom text-white px-5 py-3 rounded-md hover:from-actionToDark hover:to-actionFromDark">
          Download CV
        </button>
      </div> */}
      <div className="flex justify-center">
        <img
          // src="https://i.postimg.cc/RhzjBJF9/Frame-4.png"
          src="https://i.postimg.cc/B6xKhbwR/Frame-1-removebg-preview.png"
          alt="logo"
          className="w-20 dark:shadow-[#8e2de2_0px_3px_8px] rounded-full transition duration-1000"
        />
      </div>
      <div className="mx-5">
        <ToggleButton theme={theme} handleThemeSwitch={handleThemeSwitch} />
      </div>
    </motion.div>
  );
}

export default Navbar;
