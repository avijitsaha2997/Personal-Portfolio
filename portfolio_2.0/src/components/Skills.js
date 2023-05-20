import React from "react";
import Skill from "./Skill";
import html from "./skill image/html.png";
import css from "./skill image/css.png";
import js from "./skill image/js.png";
import nextjs from "./skill image/nextjs.png";
import react from "./skill image/react.png";
import redux from "./skill image/redux.png";
import tailwind from "./skill image/tailwind.png";
import mui from "./skill image/mui.png";
import nodejs from "./skill image/nodejs.png";
import express from "./skill image/express.png";
import mongodb from "./skill image/mongodb.png";
import firebase from "./skill image/firebase.png";
import sanity from "./skill image/sanity.png";
import git from "./skill image/git.png";
import jest from "./skill image/jest.png";
import framermotion from "./skill image/framermotion.png";
function Skills() {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[900px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-4 mt-24">
        <Skill image={html} percentage="90%" /> {/*html*/}
        <Skill image={css} percentage="80%" /> {/*css*/}
        <Skill image={js} percentage="90%" /> {/*js*/}
        <Skill image={nextjs} percentage="40%" /> {/*next js*/}
        <Skill image={react} percentage="85%" /> {/*react*/}
        <Skill image={redux} percentage="70%" /> {/*redux*/}
        <Skill image={tailwind} percentage="65%" /> {/*tailwind*/}
        <Skill image={mui} percentage="60%" /> {/*material ui*/}
        <Skill image={nodejs} percentage="80%" directionLeft /> {/*node*/}
        <Skill image={express} percentage="80%" directionLeft />{" "}
        {/*express js*/}
        <Skill image={mongodb} percentage="80%" directionLeft /> {/*Mongo db*/}
        <Skill image={firebase} percentage="60%" directionLeft /> {/*firebase*/}
        <Skill image={sanity} percentage="70%" directionLeft /> {/*sanity*/}
        <Skill image={git} percentage="80%" directionLeft /> {/*git*/}
        <Skill image={jest} percentage="50%" directionLeft /> {/*jest*/}
        <Skill image={framermotion} percentage="75%" directionLeft />{" "}
        {/*framer motion*/}
      </div>
    </div>
  );
}

export default Skills;
