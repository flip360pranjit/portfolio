import React, { useState, useRef } from "react";
import TextReveal from "../Reveal/TextReveal";
import Testimonial from "./Testimonial";
import testimonials from "./testimonials.json";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Testimonials() {
  return (
    <div className="px-[10%] border-b dark:border-none">
      <div className="flex flex-col items-center w-full py-16 font-poppins">
        <TextReveal>
          <h2 className="font-semibold text-2xl minSm:text-3xl text-center font-exo">
            Testimonials
          </h2>
          <TextReveal>
            <h4 className="font-nunito text-center text-sm minSm:text-lg sm:text-xl opacity-80 my-5">
              People I've worked with have said some nice things...
            </h4>
          </TextReveal>
        </TextReveal>
        {/* <div className="flex justify-center mt-16"> */}

        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={2000}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="h-full w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              pagination={{ clickable: true }}
              className="my-16"
            >
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Testimonials;
