import React from "react";
import { motion } from "framer-motion";
import ToggleButton from "../ToggleButton/ToggleButton";
import { AnimatePresence } from "framer-motion";

const logoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Navbar({ theme, handleThemeSwitch }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-70px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="w-full h-[15vh] max-h-20 md:max-h-auto py-1 flex justify-between items-center relative px-[8%]"
    >
      {/* <div className="mx-5 font-poppins font-semibold">
        <button className="bg-gradient-to-r from-actionTo to-actionFrom text-white px-5 py-3 rounded-md hover:from-actionToDark hover:to-actionFromDark">
          Download CV
        </button>
      </div> */}
      <div className="flex justify-center h-full">
        <AnimatePresence>
          {theme === "light" ? (
            <motion.img
              // src="https://i.postimg.cc/RhzjBJF9/Frame-4.png"
              src="https://i.postimg.cc/B6xKhbwR/Frame-1-removebg-preview.png"
              alt="logo"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1 }}
              className="rounded-full"
            />
          ) : (
            <motion.img
              // src="https://i.postimg.cc/RhzjBJF9/Frame-4.png"
              src="https://i.postimg.cc/4NsnX9vy/Frame-3-1-removebg-preview.png"
              alt="logo"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1 }}
              className="rounded-full"
            />
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-center w-fit h-full py-1">
        <ToggleButton theme={theme} handleThemeSwitch={handleThemeSwitch} />
      </div>
    </motion.div>
  );
}

export default Navbar;
