import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import GamesIcon from '@mui/icons-material/Games';
import { motion } from "framer-motion";

export default function Hero2() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            opacity: 0,
        },
        project: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "#FF4D00",
            border: "0px solid #000",
            opacity: 1,
        }
    };

    return (
        <section className="w-full py-10 bg-[#f0f0f0] my-20 relative cursor-default">
            {/* Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />

            <Marquee gradient={false} speed={100} className="overflow-hidden rotate-4">
                <div className="flex items-center gap-12 px-6 bg-black py-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Web Design</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Visual Design</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">UI/UX Design</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Branding</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Animation</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Video Editing</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Photo Editing</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00] mr-12" />
                </div>
            </Marquee>
            <Marquee gradient={false} speed={100} className="overflow-hidden rotate-[-4deg]">
                <div className="flex items-center gap-12 px-6 bg-[#FF4D00] py-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Senior Designer</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">3+ Years of Experience</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Satisfied Clients</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Branding</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Animation</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Video Editing</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Photo Editing</h1>
                    <GamesIcon fontSize="large" className="text-white mr-12" />
                </div>
            </Marquee>
            <div className="my-20 md:my-40 w-full max-w-[1280px] mx-auto px-4 md:px-8">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-600 text-center leading-tight">“We help fast-moving digital startups build sharper brands and websites with clarity, speed, and zero friction."</h1>
                <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
                    <p className="text-sm md:text-base font-bold text-[#FF4D00] text-center py-2 px-4 rounded-full border border-[#FF4D00] bg-[#FF4D00]/10 hover:bg-[#FF4D00]/20 transition-colors">Branding</p>
                    <p className="text-sm md:text-base font-bold text-[#FF4D00] text-center py-2 px-4 rounded-full border border-[#FF4D00] bg-[#FF4D00]/10 hover:bg-[#FF4D00]/20 transition-colors">Animation</p>
                    <p className="text-sm md:text-base font-bold text-[#FF4D00] text-center py-2 px-4 rounded-full border border-[#FF4D00] bg-[#FF4D00]/10 hover:bg-[#FF4D00]/20 transition-colors">Logo Design</p>
                    <p className="text-sm md:text-base font-bold text-[#FF4D00] text-center py-2 px-4 rounded-full border border-[#FF4D00] bg-[#FF4D00]/10 hover:bg-[#FF4D00]/20 transition-colors">Video Editing</p>
                    <p className="text-sm md:text-base font-bold text-[#FF4D00] text-center py-2 px-4 rounded-full border border-[#FF4D00] bg-[#FF4D00]/10 hover:bg-[#FF4D00]/20 transition-colors">Photo Editing</p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4">
                <Link to="/uidesigns">UI/UX Design</Link>
                <Link to="/motiondesigns">Motion Graphics</Link>
                <Link to="/3ddesigns">3D Animation</Link>
            </div>

        </section>
    )
}