"use client";
import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return (
    <div className="w-full h-full">
        <motion.div initial={{opacity: 0}} 
        animate={{
            opacity: 1, 
            transition: {delay: 2, duration: 0.4, ease: "easeIn"}}}>

            <motion.div 
               initial={{opacity: 0}} 
               animate={{
                   opacity: 1, 
                   transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}}}
                   className="w-[260px] h-[260px] xl:w-[475px] xl:h-[400px] mix-blend-lighten absolute right-[113px] top-[110px] xl:right-[210px] xl:top-[192px]">
                   <Image
                   src="/img.png"
                   fill
                   priority
                   quality={100} 
                   alt="Portfolio Image"
                   className="object-contain"
                   />
            </motion.div>

            <motion.svg 
                    className="w-[305px] h-[305px] xl:w-[505px] xl:h-[505px]"
                    fill="transparent"
                    viewBox="0 0 503 503"
                    xmlns="https://www.w3.org/2000/svg"
                         >
                <motion.circle 
                cx="250" 
                cy="250" 
                r="230" 
                stroke="#00ff99" 
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray:"14 10 0 0"}}
                animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",

                }}
                />
            </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo