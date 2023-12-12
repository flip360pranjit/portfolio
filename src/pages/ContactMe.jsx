import React from "react";
import TextReveal from "../components/Reveal/TextReveal";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactMe({ setSent }) {
  const formRef = useRef();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_CONTACT_ME_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log(result);
          // console.log(result.text);
          setLoading(false);
          setSent(true);
          navigate("/success");
        },
        (error) => {
          // console.log(error);
          // console.log(error.text);
          setLoading(false);
        }
      );
  }

  return (
    <div className="px-[10%]">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-16 max-w-[800px] py-16">
          <img
            src="https://i.postimg.cc/NF0kGHZ2/Untitled-design-4.jpg"
            alt="icon"
            className="w-32 rounded-full"
          />
          <TextReveal>
            <h1 className="text-center font-exo text-2xl minSm:text-4xl md:text-5xl opacity-80">
              Thanks for taking the time to reach out. How can I help you today?
            </h1>
          </TextReveal>
          <div className="w-full font-nunito">
            <form ref={formRef} onSubmit={handleSubmit} className="">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="">
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Full Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-[#4c17e1] placeholder:text-gray-400 dark:placeholder:text-[#fff] focus:ring-2 focus:ring-inset focus:ring-[#822efe] sm:leading-6 text-2xl dark:bg-[#6c6675]"
                  />
                </div>
                <div className="">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-[#4c17e1] placeholder:text-gray-400 dark:placeholder:text-[#fff] focus:ring-2 focus:ring-inset focus:ring-[#822efe] sm:leading-6 text-2xl dark:bg-[#6c6675]"
                  />
                </div>
                <div className="md:col-span-2">
                  <textarea
                    required
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows={10}
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-[#4c17e1] placeholder:text-gray-400 dark:placeholder:text-[#fff] focus:ring-2 focus:ring-inset focus:ring-[#822efe] sm:leading-6 text-2xl dark:bg-[#6c6675]"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-12">
                <motion.button
                  disabled={loading}
                  type="submit"
                  initial={{
                    backgroundImage:
                      "linear-gradient(to bottom right, #8e2de2, #4a00e0)",
                    color: "#fff",
                  }}
                  whileHover={{
                    backgroundImage:
                      "linear-gradient(to bottom right, #5e1d9c, #2c0085)",
                    color: "#fff",
                  }}
                  transition={{ duration: 0.5 }}
                  className="px-16 py-3 m-1 rounded-full flex gap-2 items-center text-2xl"
                >
                  {loading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <>Submit</>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
