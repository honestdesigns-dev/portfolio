import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export default function Cursor() {
    const { cursorVariant } = useCursor();
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

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
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            opacity: 0,
            scale: 0,
            backgroundColor: "transparent",
        },
        project: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            height: 80,
            width: 80,
            backgroundColor: "#FF4D00",
            opacity: 1,
            scale: 1,
            borderRadius: "50%",
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        link: {
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            height: 100,
            width: 100,
            backgroundColor: "#FF4D00",
            opacity: 1,
            scale: 1,
            borderRadius: "50%",
            transition: {
                type: "spring",
                mass: 0.6
            }
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none hidden md:flex items-center justify-center text-white z-9999"
            variants={variants}
            animate={cursorVariant}
        >
            {cursorVariant === 'link' && (
                <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-xs font-bold tracking-widest">VIEW</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 rotate-45">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            )}
        </motion.div>
    );
}
