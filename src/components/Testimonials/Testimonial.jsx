import React from "react";

function Testimonial({ testimonial }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center max-w-2xl font-nunito gap-10">
        <img
          src={testimonial.image}
          alt="photo"
          className="w-32 rounded-full"
        />
        <h2 className="text-center text-sm minSm:text-xl sm:text-2xl opacity-80">
          “{testimonial.content}”
        </h2>
        <div className="flex flex-col items-center gap-1">
          <h4 className="text-lg minSm:text-xl font-semibold font-exo">
            {testimonial.name}
          </h4>
          <h5 className="text-sm minSm:text-base">{testimonial.position}</h5>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
