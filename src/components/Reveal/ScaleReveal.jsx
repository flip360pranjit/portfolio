import { useInView } from "framer-motion";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const mainVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

function ScaleReveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-full">
      <motion.div
        variants={mainVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ScaleReveal;
