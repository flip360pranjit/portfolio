import React from "react";
import { MdOutlineChat } from "react-icons/md";

function Contact() {
  return (
    <div className="min-h-[50vh] bg-gradient-to-r from-actionTo to-actionFrom flex justify-center items-center text-[#fff] p-[10%]">
      <div className="flex flex-col items-center">
        <h3 className="font-exo font-semibold text-2xl minSm:text-3xl text-center">
          Let's get in touch
        </h3>
        <p className="font-nunito text-sm minSm:text-lg sm:text-xl mt-5 max-w-[80%] text-center">
          Feel free to reach out for project collaborations, design
          consultations, or any other inquiries. I'm excited to connect and
          explore potential opportunities together!
        </p>
        <div className="bg-[#fff] p-0.5 mt-12 rounded-full font-exo">
          <button className="transition ease-in-out delay-150 text-sm minSm:text-base flex items-center gap-2 bg-[#6c17e1] px-5 minSm:px-10 py-3 rounded-full hover:bg-[#fff] hover:text-[#6c17e1] duration-50">
            <MdOutlineChat className="text-2xl" />
            Start a conversation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
