import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { HashLink as Link } from "react-router-hash-link";
import pic from "./profilepic.jpg";

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

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <img
        src={pic}
        alt="Logo"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />

      <div className="z-20">
        <h1 className="text-base uppercase text-[#3374FF]/60 pb-2 tracking-[15px]">
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
