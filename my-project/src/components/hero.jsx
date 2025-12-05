import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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

export default function Hero() {
    const icons = [figma, ae, ai, ps, pr, xd, rush, spline, creatie, blender, react];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % icons.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [icons.length]);

    return (
        <section className="max-w-[1280px] h-screen mx-auto px-4 md:px-8">
            <p className="text-base md:text-[20px] leading-relaxed">Highly driven UIUX Designer with 3+ years of hands-on experience in designing intuitive and scalable digital solutions for complex
                enterprise systems (ERP and HRMS). Proven expertise in applying user-centered design principles to analyze target user needs, translate
                research findings into optimized design solutions, and enhance product usability and satisfaction. I completed 10+projects with
                the client's satisfaction.
            </p><br className="hidden md:block" /><br className="hidden md:block" />
            <h1 className="font-yaro text-5xl md:text-7xl lg:text-9xl text-black font-semibold flex flex-wrap items-center gap-4 md:gap-12 my-8 md:my-0">HONESTRAJ <span className="text-lg md:text-xl px-4 py-1.5 rounded-4xl bg-linear-to-r from-blue-500 to-pink-500 text-white">UIUX Designer</span>
                <span className='h-[80px] w-20 bg-amber-200 overflow-hidden inline-flex items-center justify-center relative rounded-xl align-middle'>
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={index}
                            src={icons[index]}
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -80, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className='w-16 absolute'
                            alt=""
                        />
                    </AnimatePresence>
                </span>
            </h1><br className="hidden md:block" /><br className="hidden md:block" />

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 bg-black p-6 md:p-4 items-center justify-between rounded-lg md:rounded-none">
                <p className="text-white text-center md:text-left">Web Design</p>
                <div className="w-full md:w-[160px] h-px bg-white/50 md:bg-white"></div>
                <p className="text-white text-center md:text-left">Motion Graphic design</p>
                <div className="w-full md:w-[160px] h-px bg-white/50 md:bg-white"></div>
                <p className="text-white text-center md:text-left">3D Animation</p>
                <div className="w-full md:w-[160px] h-px bg-white/50 md:bg-white"></div>
                <p className="text-white text-center md:text-left">Visual Deign</p>
            </div><br className="hidden md:block" /><br className="hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:mt-0">
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <h6 className="text-1xl w-32 text-center font-medium text-gray-600 transition-colors px-2 py-1 border border-gray-300">Understand</h6>
                    <p className="w-full md:w-[300px] text-center md:text-left">I begin by understanding your goals, brand identity, target audience, and project requirements. This helps set a clear direction from the start.</p>
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <h6 className="text-1xl w-18 text-center font-medium text-gray-600 transition-colors px-2 py-1 border border-gray-300">Plan</h6>
                    <p className="w-full md:w-[300px] text-center md:text-left">I analyze competitors, explore visual directions, and plan the structure. This ensures the creative output is purposeful and aligned with your objectives.</p>
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <h6 className="text-1xl w-22 text-center font-medium text-gray-600 transition-colors px-2 py-1 border border-gray-300">Design</h6>
                    <p className="w-full md:w-[300px] text-center md:text-left">I develop initial concepts, wireframes, moodboards, or storyboards depending on the project. This stage defines the visual language and overall approach.</p>
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <h6 className="text-1xl w-22 text-center font-medium text-gray-600 transition-colors px-2 py-1 border border-gray-300">Refine</h6>
                    <p className="w-full md:w-[300px] text-center md:text-left">You will receive previews or drafts for feedback. I refine details based on your inputs and ensure everything meets the quality benchmark.</p>
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <h6 className="text-1xl w-22 text-center font-medium text-gray-600 transition-colors px-2 py-1 border border-gray-300">Deliver</h6>
                    <p className="w-full md:w-[300px] text-center md:text-left">Once approved, I prepare optimized files, assets, or build-ready deliverables. I ensure a smooth handoff that works across platforms and devices..</p>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                    <h6 className="cursor-pointer text-1xl w-34 flex items-center justify-center h-10 text-center font-medium text-gray-600 transition-colors px-2 py-1 border border-gray-300 hover-gradient-fill">See Works <KeyboardArrowRightIcon /></h6>
                </div>
            </div>
        </section>
    )
}