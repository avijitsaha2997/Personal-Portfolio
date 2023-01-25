import React from 'react'
import { motion } from "framer-motion";
import pic from "./profilepic.jpg"
import "./All.css"

function About() {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-7 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={pic}
                className='-mb-32 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10 '>
                <h4 className='text-2xl md:text-4xl font-semibold'>
                    Here is, <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
                    about myself
                </h4>
                <p className='text-base'>
                    I'm a Front-End Developer located in Bangladesh. I have a serious passion for UI effects, animations and creating dynamic user experiences. Well-organised person, problem solver, independent employee with high attention to detail.
                    Completed many e-commerce projects on my own. I've almost 1.5 years of experience in this sector.
                    Extra:
                    Fan of Badminton, outdoor activities and TV series (especially magic and adventure) 👻.


                </p>
            </div>
        </div>
    )
}


export default About
