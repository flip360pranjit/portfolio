import React from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const modeVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 360,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    scale: 0,
    rotate: 0,
    transition: { ease: "easeInOut" },
  },
};

const ToggleButton = ({ theme, handleThemeSwitch }) => {
  return (
    <div>
      <button
        onClick={handleThemeSwitch}
        className="w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center"
      >
        <AnimatePresence mode="wait">
          {theme === "dark" && (
            <motion.div
              variants={modeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[#e8e1f2] text-2xl z-30"
            >
              <FaMoon />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {theme === "light" && (
            <motion.div
              variants={modeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-gray-700 text-2xl z-30"
            >
              <IoSunnySharp />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="absolute block w-[50px] h-[50px] bg-[#e8e1f2] dark:bg-[#1b1129] rounded-full shadow-inner dark:shadow-white transition duration-1000"></span>
      </button>
    </div>
  );
};

export default ToggleButton;
