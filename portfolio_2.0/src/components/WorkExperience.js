import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';
function WorkExperience() {
    return (
        <div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                transition={{
                    duration: 1.5,
                }}
                whileInView={{
                    opacity: 1,
                }}
                className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                    Experience
                </h3>
                <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-[#F7AB0A]'>

                    <ExperienceCard
                        experienceName="Web Development"
                        experienceDetails="Working on web development."
                        experienceCardImage="https://www.freeiconspng.com/thumbs/website-icon/website-icon-11.png"
                        experienceCardProjectImage1="https://asher.edu/wp-content/uploads/2018/08/Html5-coding-school.png"
                        experienceCardProjectImage2="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                        experienceCardProjectImage3="https://www.citypng.com/public/uploads/small/11662226392uom4gsi9ddb1c81ipfx2u4imargvwq7uskhdui1pj4f6xufjz0jkfzqzduhjuifts0dzcnykgszw6isfutq2nlwb51ef4gm0dt8d.png"
                        experienceCardProjectImage4="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"

                    />

                    <ExperienceCard
                        experienceName="Mobile Development"
                        experienceDetails="Learning native mobile app devlopment."
                        experienceCardImage="https://www.freeiconspng.com/thumbs/mobile-icon-png/file-mobile-smartphone-icon--wikimedia-commons-0.png"
                        experienceCardProjectImage1="https://asher.edu/wp-content/uploads/2018/08/Html5-coding-school.png"
                        experienceCardProjectImage2="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                        experienceCardProjectImage3="https://www.citypng.com/public/uploads/small/11662226392uom4gsi9ddb1c81ipfx2u4imargvwq7uskhdui1pj4f6xufjz0jkfzqzduhjuifts0dzcnykgszw6isfutq2nlwb51ef4gm0dt8d.png"
                        experienceCardProjectImage4="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />

                    <ExperienceCard
                        experienceName="Game Development"
                        experienceDetails="I've a lot of interest on game development."
                        experienceCardImage="https://www.freepnglogos.com/uploads/games-png/vector-graphic-controller-gamepad-video-games-22.png"
                        experienceCardProjectImage1="https://asher.edu/wp-content/uploads/2018/08/Html5-coding-school.png"
                        experienceCardProjectImage2="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                        experienceCardProjectImage3="https://www.citypng.com/public/uploads/small/11662226392uom4gsi9ddb1c81ipfx2u4imargvwq7uskhdui1pj4f6xufjz0jkfzqzduhjuifts0dzcnykgszw6isfutq2nlwb51ef4gm0dt8d.png"
                        experienceCardProjectImage4="https://resources.finalsite.net/images/f_auto,q_auto/v1626285808/gisdorg/odtuwwbycmpnl8usgdnl/canvasstudent.png" />

                </div>
            </motion.div>

        </div>
    )
}

export default WorkExperience
