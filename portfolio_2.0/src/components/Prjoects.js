import React from "react";
import { motion } from "framer-motion";
import spotify from "./porfolio projects pics/3.png";
import ecomerce from "./porfolio projects pics/2.png";
import Food_Store_1 from "./porfolio projects pics/1.png";
import Food_Store_2 from "./porfolio projects pics/4.png";
import portfolio from "./porfolio projects pics/5.png";
import airbnb from "./porfolio projects pics/6.png";
import netflix from "./porfolio projects pics/7.png";
import social from "./porfolio projects pics/9.png";
import itApp from "./porfolio projects pics/10.png";
import disnep from "./porfolio projects pics/11.png";
import codeeditor from "./porfolio projects pics/12.png";

function Prjoects({ projectName, projectDetails }) {
  const projects = [
    {
      name: "Gadget Store",
      details: "This is a full stack web app with firebase authentication.",
      imgSrc: ecomerce,
      github: "https://github.com/avijitsaha2997/Project-My-E_commerce",
      liveDemo: "https://e-commerce-2fac1.web.app/",
    },
    {
      name: "Social Media App",
      details:
        "Full stack Social Media App. This web app has all required functionality.",
      imgSrc: social,
      github: "https://github.com/avijitsaha2997/social-media-app-client",
      liveDemo: "https://social-media-app-one-iota.vercel.app/",
    },

    {
      name: "IT Shop",
      details:
        "A fully responsive store web app. This project has almost everything that I know about animations.",
      imgSrc: itApp,
      github: "https://github.com/avijitsaha2997/IT-Business-App",
      liveDemo: "https://it-business-app.vercel.app/",
    },
    {
      name: "Boooking App",
      details:
        "This is a Next.js project. In this project i used Date-Picker, MapBox Studio, Middleware function.",
      imgSrc: airbnb,
      github: "https://github.com/avijitsaha2997/Project-Airbnb",
      liveDemo: "https://project-airbnb-pi.vercel.app/",
    },
    {
      name: "Code editor",
      details: "A simple html, css and javascript code editor.",
      imgSrc: codeeditor,
      github: "https://github.com/avijitsaha2997/Code-Editor",
      liveDemo: "https://code-editor-git-master-avijitsaha2997.vercel.app/",
    },
    {
      name: "Food Store 1",
      details:
        "Simply created UI with react js. And manage the full single page application using with react router.",
      imgSrc: Food_Store_1,
      github: "https://github.com/avijitsaha2997/Project-Food-Delivery-App-1",
      liveDemo: "https://food-delivey-app-71f77.web.app/",
    },
    {
      name: "Food Store 2",
      details:
        "It's an amazing project where i used context_api for managing state. And this project is connected with firebase hosting.",
      imgSrc: Food_Store_2,
      github: "https://github.com/avijitsaha2997/Project-Food-Delivery-App-2",
      liveDemo: "https://project-food-delivery-app-2.vercel.app/",
    },
    {
      name: "Disnep Clone",
      details:
        "This project was bootstrapped with Create React App, using the Redux and Redux Toolkit template.",
      imgSrc: disnep,
      github: "https://github.com/avijitsaha2997/Disney-clone",
      liveDemo: "https://disney-clone-jade.vercel.app/",
    },
    {
      name: "Netflix Clone",
      details:
        "Netflix clone 2.0. Fully functional netflix clone using with Redux and Stripe payment. Managed all UI information with TMDB api.",
      imgSrc: netflix,
      github: "https://github.com/avijitsaha2997/netflix-clone",
      liveDemo: "https://netflix-clone-eight-weld.vercel.app/",
    },
    {
      name: "Spotify Clone",
      details:
        "I worked on only user interface in this project. Also used original spotify authentication and spotify API.",
      imgSrc: spotify,
      github: "https://github.com/avijitsaha2997/Project-Spotify",
      liveDemo: "https://spotify-clone-cdad8.web.app/",
    },
    {
      name: "Core JS Portfolio",
      details:
        "This is a sample portfolio using with html, css and javascript only. Worked with form validation at contact section.",
      imgSrc: portfolio,
      github: "https://github.com/avijitsaha2997/Portfolio-Core-JS",
      liveDemo: "https://portfolio-core-js.vercel.app/",
    },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-[#3374FF]/30">
        {projects.map((project, i) => (
          <div
            key={Math.random()}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              className=""
              src={project.imgSrc}
              alt="code image"
              width={1000}
              height={1000}
            />
            <div className="space-y-6 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#3374FF]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>
              <div className="flex justify-evenly">
                <a
                  href={project.github}
                  className="cursor-pointer font-semibold text-2xl underline decoration-[#3374FF]/50"
                >
                  Github
                </a>
                <a
                  href={project.liveDemo}
                  className="cursor-pointer font-semibold text-2xl underline decoration-[#3374FF]/50"
                >
                  Live Demo
                </a>
              </div>
              <p className=" text-lg text-center md:text-left">
                {project.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#3374FF]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Prjoects;
