import React from "react";
import { FaRegHandPeace } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Collaborate() {
  return (
    <div className="px-[5%]">
      <div className="bg-[#141c3a] text-[#fff] grid md:grid-cols-3 items-center gap-10 px-[5%] py-10 rounded-lg font-exo relative -bottom-20">
        <div className="text-2xl minSm:text-3xl font-semibold text-center md:text-left">
          Start a project
        </div>
        <div className="text-sm minSm:text-xl text-center">
          Interested in working together? We should queue up a time to chat.
          I’ll buy the coffee.
        </div>
        <div className="text-center md:text-right">
          <div className="bg-gradient-to-r from-actionTo to-actionFrom inline-block rounded-full">
            <Link to={"/project-planner"}>
              <motion.button
                initial={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #141c3a, #141c3a)",
                  color: "#fff",
                }}
                whileHover={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #8e2de2, #4a00e0)",
                  color: "#fff",
                }}
                transition={{ duration: 0.5 }}
                className="px-5 minSm:px-12 py-2 m-1 rounded-full flex gap-2 items-center text-sm minSm:text-xl"
              >
                <FaRegHandPeace />
                Let's do this
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaborate;
