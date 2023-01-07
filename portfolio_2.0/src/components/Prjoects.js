import React from 'react'
import { motion } from "framer-motion";
import spotify from "./porfolio projects pics/3.png"
import ecomerce from "./porfolio projects pics/2.png"
import Food_Store_1 from "./porfolio projects pics/1.png"
import Food_Store_2 from "./porfolio projects pics/4.png"
import portfolio from "./porfolio projects pics/5.png"

function Prjoects({ projectName, projectDetails }) {
    const projects = [{
        name: "Gadget Store",
        details: "This is a full stack web app with firebase authentication. Implemented full payment process with stripe payment.",
        imgSrc: ecomerce
    },
    {
        name: "Food Store 1",
        details: "Simply created UI with react js. And manage the full single page application using with react router.",
        imgSrc: Food_Store_1
    },
    {
        name: "Food Store 2",
        details: "It's an amazing project where i used context_api for managing state. And this project is connected with firebase hosting.",
        imgSrc: Food_Store_2
    },
    {
        name: "Spotify Clone",
        details: "I worked on only user interface in this project. Also used original spotify authentication and spotify API.",
        imgSrc: spotify
    },
    {
        name: "Sample Portfolio",
        details: "This is a sample portfolio using with html, css and javascript only. Worked with form validation at contact section.",
        imgSrc: portfolio
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
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-[#F7AB0A]'>
                {projects.map((project, i) => (
                    <div
                        key={Math.random()}
                        className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
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

                            className=''
                            src={project.imgSrc}
                            alt='code image'
                            width={1000}
                            height={1000}
                        />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className=' text-2xl md:text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Project {i + 1} of {projects.length}:
                                </span>{" "}
                                {project.name}
                            </h4>
                            <p className=' text-lg text-center md:text-left'>
                                {project.details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
        </motion.div>
    )
}

export default Prjoects
