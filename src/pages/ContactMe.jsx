import React from "react";
import TextReveal from "../components/Reveal/TextReveal";
import { motion } from "framer-motion";

function ContactMe() {
  return (
    <div className="px-[10%]">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-16 max-w-[800px]">
          <img
            src="https://i.postimg.cc/NF0kGHZ2/Untitled-design-4.jpg"
            alt="icon"
            className="w-32 rounded-full"
          />
          <TextReveal>
            <h1 className="text-center font-exo text-5xl opacity-80">
              Thanks for taking the time to reach out. How can I help you today?
            </h1>
          </TextReveal>
          <div className="w-full font-nunito">
            <form action="" className="">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                <div className="">
                  <input
                    required
                    type="text"
                    name="fullName"
                    id="fullName"
                    autoComplete="name"
                    placeholder="Full Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#822efe] sm:leading-6 text-2xl"
                  />
                </div>
                <div className="">
                  <input
                    required
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#822efe] sm:leading-6 text-2xl"
                  />
                </div>
                <div className="col-span-2">
                  <textarea
                    required
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows={10}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#822efe] sm:leading-6 text-2xl"
                  />
                </div>
              </div>
              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-actionTo to-actionFrom inline-block rounded-full">
                  <motion.button
                    initial={{
                      backgroundImage:
                        "linear-gradient(to bottom right, #fff, #fff)",
                      color: "#4c17e1",
                    }}
                    whileHover={{
                      backgroundImage:
                        "linear-gradient(to bottom right, #8e2de2, #4a00e0)",
                      color: "#fff",
                    }}
                    transition={{ duration: 0.5 }}
                    className="px-5 minSm:px-12 py-2 m-1 rounded-full flex gap-2 items-center text-sm minSm:text-xl"
                  >
                    Submit
                  </motion.button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
