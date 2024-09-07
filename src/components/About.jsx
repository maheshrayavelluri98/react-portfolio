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
              As a MERN stack developer, I'm passionate about turning creative
              ideas into engaging web experiences. With a strong background in
              HTML, CSS, and JavaScript, I am committed to advancing my skills
              in the MERN stack—MongoDB, Express.js, React.js, and Node.js. I
              enjoy working on real-world projects that not only highlight my
              technical abilities but also improve user interaction. My drive
              for creativity and problem-solving keeps me learning and adapting
              in the fast-paced tech world, making me eager to contribute to
              innovative web development projects.I am dedicated to delivering
              excellence in every project.
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
