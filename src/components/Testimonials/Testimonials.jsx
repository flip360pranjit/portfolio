import React from "react";
import TextReveal from "../Reveal/TextReveal";
import Testimonial from "./Testimonial";

function Testimonials() {
  return (
    <div className="px-[10%] border-b">
      <div className="flex flex-col items-center w-full py-16 font-poppins">
        <TextReveal>
          <h2 className="font-semibold text-4xl text-center font-exo">
            Testimonials
          </h2>
          <TextReveal>
            <h4 className="font-nunito text-center text-xl text-[#141c3a] my-5">
              People I've worked with have said some nice things...
            </h4>
          </TextReveal>
        </TextReveal>
        <div className="flex justify-center mt-16">
          <Testimonial />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
