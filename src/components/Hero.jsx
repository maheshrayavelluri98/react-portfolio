import React from "react";

import heroimage from "../assets/profile.jpg";

import CV from "../assets/cv.pdf";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px]  md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="hero" className="size-80 mx-5" />
        {/* <img
          src={heroimage}
          alt="hero"
          className="w-full h-auto max-w-screen-lg mx-2 sm:mx-5 lg:mx-10"
        /> */}

        {/* <img
          src={heroimage}
          alt="hero"
          className="w-full h-auto max-w-screen-lg mx-2 sm:mx-5 lg:mx-10 object-cover"
        /> */}
      </div>
      <div className="col-span-2 px-5">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a</span>
          <br />
          <TypeAnimation
            sequence={["Frontend Dev", 1000, "Web Dev", 1000, "MERN Dev", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My Name is Mahesh I Completed MERN Stack @ NXTwave
        </p>
        <div className="my-8">
          <a
            href="/"
            download={CV}
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl  border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
