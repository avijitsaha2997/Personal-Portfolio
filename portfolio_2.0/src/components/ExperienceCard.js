import React from 'react'
import { motion } from "framer-motion";
function ExperienceCard({ experienceDetails, experienceName, experienceCardImage, experienceCardProjectImage1, experienceCardProjectImage2, experienceCardProjectImage3, experienceCardProjectImage4 }) {
    return (
        <div>
            <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                <motion.img
                    initial={{
                        y: -100,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className='w-32 h-32 rounded-lg xl:w-[200px] xl:h-[200px] object-cover object-center'
                    src={experienceCardImage}
                />
                <div className='px-0 md:px-10'>
                    <h4 className='text-4xl font-light'>{ }</h4>
                    <p className='font-bold text-2xl mt-1'>{ }</p>
                    <div className='flex space-x-2 my-2 items-center justify-center'>
                        {
                            experienceCardProjectImage1 && <img
                                className='h-10 w-10 rounded-full'
                                src={experienceCardProjectImage1}
                                alt=""

                            />
                        }
                        {
                            experienceCardProjectImage2 && <img
                                className='h-10 w-10 rounded-full'
                                src={experienceCardProjectImage2}
                                alt=""

                            />
                        }
                        {
                            experienceCardProjectImage3 && <img
                                className='h-10 w-10 rounded-full'
                                src={experienceCardProjectImage3}
                                alt=""

                            />
                        }
                        {
                            experienceCardProjectImage4 && <img
                                className='h-10 w-10 rounded-full'
                                src={experienceCardProjectImage4}
                                alt=""

                            />
                        }





                    </div>
                    <p className='uppercase py-5 text-gray-300 flex items-center justify-center'>
                        {experienceName}
                    </p>
                    <div clasname="w-auto" >
                        <p className='px-20 text-center text-lg'>• {experienceDetails}</p>
                    </div>


                </div>
            </article>

        </div>
    )
}

export default ExperienceCard
