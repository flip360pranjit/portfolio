import React from "react";
import { BsMailbox2 } from "react-icons/bs";
import { motion } from "framer-motion";
import ScaleReveal from "../components/Reveal/ScaleReveal";
import TextReveal from "../components/Reveal/TextReveal";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="px-[10%]">
      <div className="h-[85vh] flex justify-center items-center">
        <div className="flex flex-col gap-7 items-center font-exo">
          <div className="text-6xl mobileSm:text-7xl minSm:text-8xl text-[#4c17e1] dark:text-[#fff]">
            <ScaleReveal>
              <BsMailbox2 />
            </ScaleReveal>
          </div>
          <TextReveal>
            <h1 className="text-center text-3xl mobileSm:text-4xl minSm:text-5xl">
              Message received. Thanks!
            </h1>
          </TextReveal>
          <TextReveal>
            <h3 className="text-center mobileSm:text-xl minSm:text-2xl opacity-80">
              I'll be in touch with you shortly.
            </h3>
          </TextReveal>
          <TextReveal>
            <div className="flex justify-center">
              <Link to="/">
                <motion.button
                  initial={{
                    backgroundImage:
                      "linear-gradient(to bottom right, #8e2de2, #4a00e0)",
                    color: "#fff",
                  }}
                  whileHover={{
                    backgroundImage:
                      "linear-gradient(to bottom right, #5e1d9c, #2c0085)",
                    color: "#fff",
                  }}
                  transition={{ duration: 0.5 }}
                  className="px-5 minSm:px-16 py-3 m-1 rounded-full flex gap-2 items-center text-sm minSm:text-2xl"
                >
                  Back to home
                </motion.button>
              </Link>
            </div>
          </TextReveal>
        </div>
      </div>
    </div>
  );
}

export default Success;
