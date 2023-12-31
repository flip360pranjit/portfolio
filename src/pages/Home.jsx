import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import AboutWork from "../components/About/AboutWork";
import Contact from "../components/Contact/Contact";
import Testimonials from "../components/Testimonials/Testimonials";
import { useRef } from "react";
import { useEffect } from "react";

function Home({ setSent }) {
  const aboutRef = useRef(null);

  useEffect(() => {
    setSent(false); // Setting sent to false on component mount
  }, []);

  function handleClick() {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Hero handleClick={handleClick} />
      <div className="mx-[10%] flex justify-center">
        <img
          src="https://mattfarley.ca/img/hero-devices.svg"
          alt=""
          className="max-w-[70vw]"
        />
      </div>
      <About ref={aboutRef} />
      {/* <AboutWork /> */}
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Testimonials />
    </>
  );
}

export default Home;
