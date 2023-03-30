import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { HashLink as Link } from "react-router-hash-link";
import pic from "./profilepic.jpg";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Hero() {
  // eslint-disable-next-line no-unused-vars
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Avijit Saha (YAY)",
      "The person who loves COFFEE....",
      "<AlsoLovesToCodeAtNight />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <Particles
        className="z-0"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 300,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#3374FF",
            },
            links: {
              color: "#3374FF",
              distance: 200,
              enable: true,
              opacity: 0,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 18,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <BackgroundCircles />
      <img
        src={pic}
        alt="Logo"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />

      <div className="z-20">
        <h1 className="text-base uppercase text-[#fff]/90 pb-2 tracking-[15px]">
          Software Engineer
        </h1>
        <h1 className="text-1xl sm:text-2xl md:text-4xl lg:text-6xl  font-semibold px-10">
          <span className="mr-3 text-[#fff]/90">{text}</span>
          <Cursor cursorColor="#3374FF" />
        </h1>
        <div className="pt-5">
          <Link to="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link to="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link to="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link to="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
