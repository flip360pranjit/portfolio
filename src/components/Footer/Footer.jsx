import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

const icons = [
  <FaInstagram key="instagram" />,
  <FaLinkedinIn key="linkedin" />,
  <FaGithub key="github" />,
  <FaRegEnvelope key="envelope" />,
  <FaPhoneAlt key="phone" />,
];

function Footer() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-actionTo to-actionFrom flex justify-center items-center text-[#fff]">
      <div className="flex flex-col items-center m-10">
        <Link to="/">
          <img
            src="https://i.postimg.cc/4NsnX9vy/Frame-3-1-removebg-preview.png"
            alt=""
            className="w-16 sm:w-24"
          />
        </Link>
        <h2 className="font-exo text-sm minSm:text-xl sm:text-2xl opacity-80 text-center">
          Living, learning, & leveling up one day at a time.
        </h2>
        <div className="w-full flex justify-center gap-3 sm:gap-5 mt-10 text-sm minSm:text-lg sm:text-xl">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="border-2 border-[#fff] hover:bg-[#fff] hover:text-[#6c17e1] cursor-pointer rounded-full p-2 sm:p-3"
            >
              {icon}
            </div>
          ))}
        </div>
        <h4 className="font-nunito text-center text-sm minSm:text-lg mt-16 opacity-80">
          Developed by me @flip360pranjit
        </h4>
        <h3 className="flex gap-3 items-center text-2xl minSm:text-4xl mt-2 font-exo opacity-80">
          <span className="text-xs minSm:text-sm">Made with</span>{" "}
          <SiTailwindcss />
        </h3>
      </div>
    </div>
  );
}

export default Footer;
