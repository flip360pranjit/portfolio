import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaUserAlt } from "react-icons/fa";
import socialMediaLinks from "./socialMediaLinks.json";

function Socials() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: "350px", y: "350px" }}
        animate={{
          x: isActive ? 0 : "350px",
          y: isActive ? 0 : "350px",
          opacity: isActive ? 1 : 0,
          transition: { duration: 0.5 },
        }}
        className="fixed bottom-0 right-0 bg-gradient-to-r from-actionTo to-actionFrom z-[100] w-[350px] h-[350px] rounded-tl-full shadow-[#8e2de2_0px_9px_20px]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: "70px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="fixed bottom-5 right-5 flex justify-center z-[999]"
      >
        <motion.button
          onClick={() => setIsActive(!isActive)}
          animate={{
            rotate: isActive ? 360 : 0,
            backgroundImage: isActive
              ? "linear-gradient(to bottom right, #fff, #fff)"
              : "linear-gradient(to bottom right, #8e2de2, #4a00e0)",
            color: isActive ? "#4c17e1" : "#fff",
          }}
          transition={{ duration: 1 }}
          className="rounded-full p-5 text-2xl z-[999] shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-actionTo"
        >
          {isActive ? <FaTimes /> : <FaUserAlt />}
        </motion.button>
        {socialMediaLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-4 bg-[#fff] shadow-[#8e2de2_0px_9px_20px] absolute bottom-2"
            initial={{ x: 0, scale: 0 }}
            animate={{
              x: isActive ? link.x : 0,
              y: isActive ? link.y : 0,
              scale: isActive ? 1 : 0,
              transition: { duration: 1, type: "spring", stiffness: 50 },
            }}
            whileHover={{
              scale: 1.2,
            }}
          >
            <img src={link.icon} alt={link.name} className="w-8" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Socials;
