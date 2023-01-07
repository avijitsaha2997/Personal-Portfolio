import React from 'react'
import Skill from './Skill'
function Skills() {
    return (
        <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[900px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                Hover over a skill for current proficiency
            </h3>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-4 mt-24'>

                <Skill image="https://icon-library.com/images/html5-icon/html5-icon-13.jpg" percentage="90%" /> {/*html*/}
                <Skill image="https://www.shareicon.net/download/2016/08/01/639873_internet.svg" percentage="80%" /> {/*css*/}
                <Skill image="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" percentage="90%" /> {/*js*/}
                <Skill image="https://cdn.worldvectorlogo.com/logos/react-1.svg" percentage="85%" /> {/*react*/}
                <Skill image="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png" percentage="70%" /> {/*redux*/}
                <Skill image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" percentage="65%" /> {/*tailwind*/}
                <Skill image="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" percentage="50%" /> {/*bootstarp*/}
                <Skill image="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" percentage="75%" /> {/*framer motion*/}
                <Skill image="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" percentage="30%" /> {/*query*/}
                <Skill image="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" percentage="60%" /> {/*firebase*/}
                <Skill image="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png" percentage="70%" /> {/*sanity*/}
                <Skill image="https://cdn-icons-png.flaticon.com/512/25/25231.png" percentage="80%" /> {/*github*/}


            </div>
        </div>
    )
}

export default Skills
