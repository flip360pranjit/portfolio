import React from "react";
import TextReveal from "../Reveal/TextReveal";
import AboutWork from "./AboutWork";
import { forwardRef } from "react";

function About({}, ref) {
  return (
    <>
      <div
        ref={ref}
        className="min-h-screen flex flex-col justify-center items-center w-full pb-16 bg-gradient-to-r from-actionTo to-actionFrom px-10 text-[#fff]"
      >
        <TextReveal>
          <h2 className="font-semibold font-exo text-2xl minSm:text-3xl text-center">
            Hi, I’m Pranjit. Nice to meet you.
          </h2>
        </TextReveal>
        <TextReveal>
          <h4 className="max-w-3xl font-nunito text-sm minSm:text-lg sm:text-xl text-center my-10">
            I am a passionate full-stack web developer, proficient in coding and
            design, dedicated to crafting seamless digital experiences. With an
            artist's eye, I create captivating interfaces that harmonize
            technology and artistry, transforming ideas into functional and
            visually appealing web solutions.
          </h4>
        </TextReveal>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center w-full">
        <div className="shadow-lg w-[80%] min-h-screen bg-[#fff] dark:bg-darkPrimary dark:shadow-[#6c17e1] rounded-xl relative -top-40">
          <AboutWork />
        </div>
      </div>
    </>
  );
}

export default forwardRef(About);
