import React from "react";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">
              {" "}
              About me{" "}
            </h2>
            <p className="text-base lg:text-lg">
              I am an aspiring MERN stack developer with a passion for
              transforming innovative ideas into interactive web experiences.
              With a solid foundation in HTML, CSS, and JavaScript, he is
              dedicated to mastering the MERN stack, which includes MongoDB,
              Express.js, React.js, and Node.js. thrives on building real-world
              projects that not only showcase his technical skills but also
              enhance user engagement. His creativity and problem-solving
              abilities drive him to continuously learn and adapt in the
              ever-evolving tech landscape, making him a valuable asset in the
              field of web development.
            </p>
          </div>
        </div>

        <img
          src={aboutImg}
          width={300}
          height={300}
          className="mx-auto rounded-3xl py-8 md:py-0"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
