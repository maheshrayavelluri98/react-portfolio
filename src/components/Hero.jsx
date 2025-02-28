import React from "react";

import heroimage from "../assets/profile.jpg";

import CV from "../assets/cv.pdf";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1200px] min-h-[80vh] mx-auto py-8 px-4 md:px-8 bg-black">
      <div className="col-span-1 flex justify-center items-center">
        <img
          src={heroimage}
          width={150}
          height={150}
          className="w-full max-w-[300px] md:max-w-[400px] rounded-3xl object-cover"
          alt="hero"
        />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold">
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
          My Name is Mahesh. I completed MERN Stack @ NXTwave.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={CV}
            download
            className="px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
