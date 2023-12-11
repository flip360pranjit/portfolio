import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import AboutWork from "../components/About/AboutWork";
import Contact from "../components/Contact/Contact";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <div className="mx-[10%] flex justify-center">
        <img
          src="https://mattfarley.ca/img/hero-devices.svg"
          alt=""
          className="max-w-[70vw]"
        />
      </div>
      <About />
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
