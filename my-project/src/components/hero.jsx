import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Marquee from "react-fast-marquee";
import ae from "../assets/ae.png"
import ai from "../assets/ai.png"
import ps from "../assets/ps.png"
import pr from "../assets/pr.png"
import xd from "../assets/xd.png"
import rush from "../assets/rush.png"
import figma from "../assets/fig.png"
import spline from "../assets/spline.png"
import creatie from "../assets/creatie.png"
import blender from "../assets/blender.png"
import react from "../assets/react.svg"
import hone from "../assets/hone.svg"
import htwo from "../assets/htwo.avif"
import ttre from "../assets/ttre.avif"

export default function Hero() {
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTyping((prev) => !prev);
        }, 3000); // Toggle every 3 seconds (adjust based on text length + read time)
        return () => clearInterval(interval);
    }, []);

    const text = "Successfully Completed 10+ Projects";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                ease: "linear",
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                when: "afterChildren",
                ease: "linear",
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.1, ease: "linear" }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.1, ease: "linear" }
        }
    };

    return (
        <section className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col items-center justify-start pt-28 md:pt-32">
            <div className='text-center flex flex-col items-center justify-center gap-3 w-full'>
                <div className="h-8 flex items-center justify-center"> {/* Fixed height container to prevent layout shift */}
                    <AnimatePresence mode="wait">
                        {isTyping && (
                            <motion.h5
                                key="text"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="text-sm md:text-lg font-medium"
                            >
                                {text.split("").map((char, index) => (
                                    <motion.span key={index} variants={childVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h5>
                        )}
                    </AnimatePresence>
                </div>

                <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-wrap justify-center items-end gap-2 md:gap-4'>
                    Effortless
                    <span className="inline-flex items-center">
                        <img className='rounded-full w-10 h-8 md:w-16 md:h-12 lg:w-[81px] lg:h-[64px] object-cover' src={hone} alt="" />
                    </span>
                    Design
                </h1>

                <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-wrap justify-center items-end gap-2 md:gap-4'>
                    for
                    <span className="inline-flex items-center">
                        <img className='rounded-full w-10 h-8 md:w-16 md:h-12 lg:w-[81px] lg:h-[64px] object-cover' src={htwo} alt="" />
                    </span>
                    Design Startups
                </h1>

                <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-wrap justify-center items-end gap-2 md:gap-4'>
                    based in Tamilnadu
                    <span className="inline-flex items-center">
                        <img className='rounded-full w-10 h-8 md:w-16 md:h-12 lg:w-[81px] lg:h-[64px] object-cover' src={ttre} alt="" />
                    </span>
                    India
                </h1>

                <br className="hidden md:block" />

                <p className='text-base md:text-xl text-gray-600 w-full max-w-[600px] px-2'>
                    We make it easy for startups to launch, grow, and scale with clean, conversion focused designs —no delays, no drama.
                </p>

                <button className='bg-[#FF4D00] shadow-lg shadow-[#FF4D00]/50 text-white px-5 py-3 md:px-6 rounded-full mt-4 flex items-center gap-2 text-sm md:text-base cursor-pointer hover:bg-[#e64600] transition-colors'>
                    Get Started <NavigateNextIcon fontSize="small" />
                </button>
            </div>
            <div className="w-full mt-8 md:mt-12 overflow-hidden">
                <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-4 overflow-visible">
                    {[
                        { src: figma, name: "Figma" },
                        { src: ae, name: "Adobe After Effects" },
                        { src: ai, name: "Adobe Illustrator" },
                        { src: ps, name: "Adobe Photoshop" },
                        { src: pr, name: "Adobe Premiere Pro" },
                        { src: xd, name: "Adobe XD" },
                        { src: rush, name: "Adobe Premiere Rush" },
                        { src: creatie, name: "Creatie" },
                        { src: blender, name: "Blender" },
                        { src: spline, name: "Spline" },
                        { src: react, name: "React" }
                    ].map((tool, index) => (
                        <div key={index} className="relative group mx-6 md:mx-10 cursor-pointer flex flex-col items-center justify-center pt-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-50">
                                <div className="bg-black/80 backdrop-blur-sm text-white text-xs md:text-sm py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap">
                                    {tool.name}
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
                                </div>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <img className='w-12 h-12 md:w-16 md:h-16 object-contain hover:grayscale-0 transition-all duration-300' src={tool.src} alt={tool.name} />
                            </motion.div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}