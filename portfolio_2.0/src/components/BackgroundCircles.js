import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute border border-[#fff]/30 rounded-full h-[200px] w-[200px] mt-52 animate-ping"></div>
        <div className="rounded-full border border-[#fff]/30 h-[300px] w-[300px] absolute mt-52"></div>
        <div className="rounded-full border border-[#3374FF]/30 h-[500px] w-[500px] absolute mt-52 "></div>

        <div className="rounded-full border border-[#fff]/40  h-[650px] w-[650px] absolute mt-52 animate-pulse"></div>
        <div className="rounded-full border border-[#3374FF]/30 h-[800px] w-[800px] absolute mt-52 "></div>
      </motion.div>
    </div>
  );
}

export default BackgroundCircles;
