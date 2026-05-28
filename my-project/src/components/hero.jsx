import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from "react-fast-marquee";
import HireMeForm from './mail';
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
import designui from "../assets/designui.png"
import cartoonPencil from "../assets/cartoon_pencil.png"
import cartoonPaintPen from "../assets/cartoon_paint_pen.png"
import cartoonEraser from "../assets/cartoon_eraser.png"
import cartoonPaintTool from "../assets/cartoon_paint_tool.png"
import cartoonRuler from "../assets/cartoon_ruler.png"
import htwo from "../assets/htwo.png"
import ttre from "../assets/ttre.avif"

export default function Hero() {
    const [isTyping, setIsTyping] = useState(true);
    const [open, setOpen] = useState(false);

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
        <section className="w-full flex flex-col items-center justify-start pt-[96px]">
            {/* Top Black Section */}
            <div className="w-full bg-black flex flex-col items-center pt-10 pb-16 px-4 md:px-8 relative z-10 border-t-4 border-black">
                <div className="max-w-[1280px] w-full flex flex-col items-start gap-8">
                    <h1 className='font-black text-6xl md:text-[9rem] leading-none text-[#f2efe9] uppercase w-full text-center tracking-tighter'>
                        Product Designer
                    </h1>
                    <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 text-[#f2efe9] text-sm md:text-base font-medium max-w-4xl mx-auto mt-8">
                        <p className="max-w-xs">
                            I'm currently orchestrating experiences for fast-moving startups and scalable businesses.
                        </p>
                        <p className="max-w-xs">
                            I'm a passionate designer with many years of experience who uses research, data, and thoughtful design to create delightful products that scale.
                        </p>
                        <button onClick={() => setOpen(true)} className="neo-button">
                            Get In Touch ➔
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Grid Section with Stickers */}
            <div className="w-full bg-grid relative overflow-hidden min-h-[600px] flex items-center justify-center border-t-4 border-black">
                {/* Center Portrait Placeholder */}
                <div className="relative z-20 h-full flex items-end justify-center pt-10">
                    <img src={designui} alt="Profile" className="h-[300px] md:h-[400px] w-auto object-cover grayscale mix-blend-multiply" />
                </div>

                {/* Stickers */}
                <div className="absolute top-[5%] md:top-1/4 left-[10%] md:left-[20%] -translate-x-1/2 -rotate-12 bg-[#3bdfd9] text-black px-6 py-4 rounded-full neo-sticker text-center z-30 scale-[0.55] md:scale-100 origin-center">
                    <p className="text-xl leading-tight">DESIGN</p>
                    <p className="text-xl leading-tight">STRATEGY</p>
                    <p className="text-[10px] tracking-wider mt-1">ALIGNING BUSINESS</p>
                    <p className="text-[10px] tracking-wider">& USER NEEDS</p>
                </div>

                <div className="absolute bottom-[25%] md:bottom-[20%] left-[-5%] md:left-[10%] -rotate-6 bg-[#ffcc00] text-black px-6 py-3 rounded-md neo-sticker z-30 scale-[0.55] md:scale-100 origin-center">
                    <p className="text-lg leading-tight">E-COMM. WWW.*</p>
                    <p className="text-lg leading-tight">EXPERIENCES</p>
                </div>

                <div className="absolute bottom-[5%] md:bottom-[10%] left-[10%] md:left-[30%] -rotate-12 bg-[#ff7300] text-white px-6 py-3 rounded-md neo-sticker z-30 scale-[0.55] md:scale-100 origin-center">
                    <p className="text-lg leading-tight">MOTION &</p>
                    <p className="text-lg leading-tight">INTERACTION</p>
                    <p className="text-lg leading-tight">➔ DESIGN</p>
                </div>

                <div className="absolute top-[15%] md:top-1/3 right-[-5%] md:right-[25%] rotate-[10deg] bg-[#ff4a7d] text-white px-6 py-3 rounded-md neo-sticker z-30 scale-[0.55] md:scale-100 origin-center">
                    <p className="text-lg leading-tight">USER</p>
                    <p className="text-lg leading-tight">EXPER-IENCE</p>
                    <p className="text-lg leading-tight">DESIGN ©</p>
                </div>
                
                <div className="absolute bottom-[35%] md:bottom-[40%] right-[0%] md:right-[10%] -rotate-12 bg-[#3bdfd9] text-black px-6 py-3 rounded-md neo-sticker z-30 scale-[0.55] md:scale-100 origin-center">
                    <p className="text-lg leading-tight">BRANDING &</p>
                    <p className="text-lg leading-tight">IDENTITY</p>
                    <p className="text-lg leading-tight">©'22 *</p>
                </div>

                <div className="absolute bottom-[5%] md:bottom-[10%] right-[5%] md:right-[25%] rotate-[15deg] bg-[#b1e847] text-black w-36 h-36 rounded-full neo-sticker flex flex-col items-center justify-center z-30 scale-[0.55] md:scale-100 origin-center">
                    <p className="text-center font-bold text-[10px] uppercase">Usability</p>
                    <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center my-1">
                        <span className="text-lg">🌐</span>
                    </div>
                    <p className="text-center font-bold text-[10px] uppercase">Testing</p>
                </div>
            </div>

            {/* Bottom Marquee */}
            <div className="w-full border-b-4 border-black bg-black py-4 z-40 relative">
                <Marquee gradient={false} speed={80}>
                    <div className="flex items-center gap-12 text-white font-black text-3xl md:text-5xl uppercase px-6 tracking-wide">
                        <span>Branding</span>
                        <span className="text-[#3bdfd9] text-2xl md:text-4xl">✦</span>
                        <span>Visual Design</span>
                        <span className="text-[#ffcc00] text-2xl md:text-4xl">✦</span>
                        <span>Animation</span>
                        <span className="text-[#ff4a7d] text-2xl md:text-4xl">✦</span>
                        <span>Video Editing</span>
                        <span className="text-[#b1e847] text-2xl md:text-4xl mr-12">✦</span>
                    </div>
                </Marquee>
            </div>

            <AnimatePresence>
                {open && <HireMeForm key="hire-me-modal" onClose={() => setOpen(false)} />}
            </AnimatePresence>
        </section>
    )
}

const RealisticTypewriter = ({ text, speed = 50, variance = 50 }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        let timeout;

        const typeChar = () => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
                const randomDelay = speed + (Math.random() * variance);
                timeout = setTimeout(typeChar, randomDelay);
            } else {
                // Loop back after delay
                timeout = setTimeout(() => {
                    setDisplayedText("");
                    i = 0;
                    typeChar();
                }, 3000)
            }
        };

        typeChar();

        return () => clearTimeout(timeout);
    }, [text, speed, variance]);

    return (
        <span className="inline-block relative text-sm md:text-lg font-medium">
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
            />
        </span>
    );
};

const FlipHeading = ({ children, hiddenText }) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden cursor-pointer"
        >
            <motion.div
                variants={{
                    initial: { y: 0 },
                    hovered: { y: "-100%" }
                }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
                {children}
            </motion.div>
            <motion.div
                className="absolute inset-0 flex items-center justify-center w-full h-full"
                variants={{
                    initial: { y: "100%" },
                    hovered: { y: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
                <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-wrap justify-center items-center gap-2 md:gap-4 text-[#FF4D00]'>
                    {hiddenText}
                </h1>
            </motion.div>
        </motion.div>
    )
}