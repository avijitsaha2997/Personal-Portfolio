import React from "react";
import Skill from "./Skill";
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
        <Skill
          image="https://asher.edu/wp-content/uploads/2018/08/Html5-coding-school.png"
          percentage="90%"
        />{" "}
        {/*html*/}
        <Skill
          image="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
          percentage="80%"
        />{" "}
        {/*css*/}
        <Skill
          image="https://www.citypng.com/public/uploads/small/11662226392uom4gsi9ddb1c81ipfx2u4imargvwq7uskhdui1pj4f6xufjz0jkfzqzduhjuifts0dzcnykgszw6isfutq2nlwb51ef4gm0dt8d.png"
          percentage="90%"
        />{" "}
        {/*js*/}
        <Skill
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqJcgIr0f9yZh8IsgeJGt00ukQzGr6yUP1MR_fB-tOl3KEvShp04QAvYsSBmBn3Z3BZg&usqp=CAU"
          percentage="40%"
        />{" "}
        {/*next js*/}
        <Skill
          image="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
          percentage="85%"
        />{" "}
        {/*react*/}
        <Skill
          image="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png"
          percentage="70%"
        />{" "}
        {/*redux*/}
        <Skill
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
          percentage="65%"
        />{" "}
        {/*tailwind*/}
        <Skill image="https://mui.com/static/logo.png" percentage="60%" />{" "}
        {/*material ui*/}
        <Skill
          image="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
          percentage="80%"
          directionLeft
        />{" "}
        {/*node*/}
        <Skill
          image="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3498663/status-iucn-ex-icon-blank-icon-md.png"
          percentage="80%"
          directionLeft
        />{" "}
        {/*express js*/}
        <Skill
          image="https://icons-for-free.com/download-icon-mongodb+plain-1324760553187258418_512.png"
          percentage="80%"
          directionLeft
        />{" "}
        {/*Mongo db*/}
        <Skill
          image="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
          percentage="60%"
          directionLeft
        />{" "}
        {/*firebase*/}
        <Skill
          image="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png"
          percentage="70%"
          directionLeft
        />{" "}
        {/*sanity*/}
        <Skill
          image="https://img.icons8.com/color/154/git.png"
          percentage="80%"
          directionLeft
        />{" "}
        {/*git*/}
        <Skill
          image="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jest-js-icon.png"
          percentage="50%"
          directionLeft
        />{" "}
        {/*jest*/}
        <Skill
          image="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"
          percentage="75%"
          directionLeft
        />{" "}
        {/*framer motion*/}
      </div>
    </div>
  );
}

export default Skills;
