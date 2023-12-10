import { useInView } from "framer-motion";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const textVariants = {
  hidden: {
    opacity: 0,
    y: "75px",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const slideVariants = {
  hidden: {
    left: 0,
  },
  visible: {
    left: "100%",
  },
};

function TextReveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-4 bottom-4 left-0 right-0 bg-gradient-to-r from-actionTo to-actionFrom z-20"
      />
    </div>
  );
}

export default TextReveal;
