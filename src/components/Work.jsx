import React from "react";
import Jobby from "../assets/Jobby.png";
import StopWatch from "../assets/stopwatch.png";
import Ecommerce from "../assets/e-commerce.png";
import Games from "../assets/games.png";
import Portfolio from "../assets/portfolio.png";
import Passwordmanager from "../assets/passwordmanager.png";

const Work = () => {
  return (
    <div className="max-w-[1200] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400"> Check out Some of my recent Works </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={Ecommerce} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="font-bold text-white tracking-wider text-xs overflow-hidden">
              A fully Responsive E-Commerce Website Built with React and API
              Integration XML CSS Javascript
            </span>
            <div className="pt-8 text-center">
              <a href="https://rmaheshapsrcrip.ccbp.tech">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={Jobby} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="font-bold text-white tracking-wider text-xs overflow-hidden">
              Constructed an all-in-one job searching platform, Jobby App. Built
              pages for Login, Home, Jobs, and Job item details with React
              components, form inputs, and event handlers. Ensured secure
              authentication with JWT tokens and REST API calls. Persisted login
              state with local storage and protected routes with React Router
            </span>
            <div className="pt-8 text-center">
              <a href="https://rmahesh17.ccbp.tech/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={Games} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="font-bold text-white tracking-wider text-xs overflow-hidden">
              Created a Mini Games app featuring an assortment of memory games
              like Emoji Game, Rock Paper Scissors, Memory Matrix, and Card Flip
              Game, complete with game instructions. Employed React and
              JavaScript to develop captivating games utilising components,
              Props, State, Arrays, and Objects. Established rules modals for
              each game using React Modal and developed visually striking React
              components based on Figma mockups. Facilitated smooth navigation
              between games and the home route with all games using React Router
              components
            </span>
            <div className="pt-8 text-center">
              <a href="https://rmahesh98.ccbp.tech/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={StopWatch} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="font-bold text-white tracking-wider text-xs overflow-hidden">
              Developed a functional StopWatch application using React,
              leveraging foundational web development principles and libraries.
              Demonstrated proficiency in state management, event handling, and
              user in terface design. Project honed skills in JavaScript, HTML,
              and CSS, contributing to a responsive and user-friendly experience
            </span>
            <div className="pt-8 text-center">
              <a href="https://rmaheshstpwtch.ccbp.tech">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={Portfolio} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="font-bold text-white tracking-wider text-xs overflow-hidden">
              Developed a dynamic and visually appealing portfolio website using
              React.js for efficient component-based architecture and Tailwind
              CSS for modern, responsive design.
            </span>
            <div className="pt-8 text-center">
              <a href="https://react-portfolio-brown-zeta.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={Passwordmanager} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="font-bold text-white tracking-wider text-xs overflow-hidden">
              Built a secure and user-friendly password manager using React.js,
              featuring encrypted password storage and efficient state
              management. The application allows users to safely store,
              generate, and manage passwords with a clean and responsive
              interface, ensuring accessibility and ease of use.
            </span>
            <div className="pt-8 text-center">
              <a href="https://rmaheshpasswrds.ccbp.tech">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
