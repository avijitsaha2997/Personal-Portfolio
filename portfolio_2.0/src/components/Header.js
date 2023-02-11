import React from 'react'
import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons";
import { HashLink as Link } from 'react-router-hash-link';

function Header() {

    return (
        <div className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>
                {/* Social Icons */}

                <SocialIcon
                    url='https://www.facebook.com/wwwhite.angelll/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.linkedin.com/in/avijit-saha-209a491a6/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://github.com/avijitsaha2997'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://open.spotify.com/user/31i6qh7wf3r55oy2vpw6r7rc67ui'
                    fgColor='gray'
                    bgColor='transparent'
                />

                <SocialIcon
                    url='https://dsc.bio/whiteangel'

                    bgColor='transparent'
                    fgColor='gray'

                />
            </motion.div>

            <Link to="#contact">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }}

                    className='flex flex-row items-center text-gray-300 cursor-pointer'>
                    <SocialIcon
                        className='cursor-pointer'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                    />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>
                        Get In Touch of yay
                    </p>



                </motion.div>
            </Link>


        </div>
    )
}

export default Header
