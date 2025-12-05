import PlayForWorkIcon from '@mui/icons-material/PlayForWork';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Design from "../assets/designui.png"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Works() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        }
        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        }
    }, []);

    const variants = {
        default: {
            width: 0,
            height: 0,
            opacity: 0
        },
        hover: {
            width: 120,
            height: 120,
            opacity: 1,
            backgroundColor: "#fff",
            mixBlendMode: "difference"
        }
    }

    const projects = [
        {
            title: "Web Design",
            image: Design,
            bgColor: "bg-blue-100",
            buttonColor: "bg-blue-500",
            link: "/designworks"
        },
        {
            title: "Motion Graphic Design",
            image: Design,
            bgColor: "bg-yellow-100",
            buttonColor: "bg-yellow-500",
            link: "/designworks"
        },
        {
            title: "3D Animation",
            image: Design,
            bgColor: "bg-cyan-100",
            buttonColor: "bg-cyan-500",
            link: "/designworks"
        }
    ];

    return (
        <section className="w-full min-h-screen mx-auto px-4 md:px-8 py-12 relative">
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
                variants={variants}
                animate={cursorVariant}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
            />

            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-16">
                    <h6 className="text-2xl font-semibold tracking-tight">Works</h6>
                    <PlayForWorkIcon className="text-gray-600" />
                </div>

                <div className='flex flex-col items-center gap-24'>
                    {projects.map((project, index) => (
                        <div key={index} className='w-full flex flex-col items-center gap-8 group'>
                            <h6 className="text-sm uppercase tracking-wider font-medium text-gray-500 px-4 py-1.5 border border-gray-200 rounded-full bg-white">
                                {project.title}
                            </h6>

                            <div
                                className={`w-full max-w-5xl ${project.bgColor} p-8 md:p-12 rounded-[2.5rem] cursor-none relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]`}
                                onMouseEnter={() => setCursorVariant("hover")}
                                onMouseLeave={() => setCursorVariant("default")}
                            >
                                <div className="flex flex-col items-center gap-8">
                                    <img
                                        className='w-full h-auto max-h-[600px] object-contain drop-shadow-2xl'
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <Link
                                        className={`${project.buttonColor} text-white px-8 py-4 rounded-full text-xl font-medium flex items-center gap-2 transition-all hover:gap-4 hover:shadow-lg active:scale-95`}
                                        to={project.link}
                                    >
                                        View Project <NavigateNextIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
