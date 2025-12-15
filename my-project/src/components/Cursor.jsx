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
            backgroundColor: "transparent",
            border: "0px solid transparent"
        },
        project: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            height: 60,
            width: 60,
            backgroundColor: "#FF4D00",
            border: "1px solid #FF4D00",
            borderRadius: "50%",
            transition: {
                type: "spring",
                mass: 0.6
            }
        }
    };

    // Only render the custom cursor when in 'project' mode to avoid interfering with normal usage,
    // or render it always if we want a custom cursor everywhere. 
    // Given the user specifically asked for "offset circle" on hover, and the container has "cursor-none",
    // we probably only need it visible or robust when in that mode.
    // However, "cursor-none" on the container means system cursor is gone. 
    // So we need a custom cursor to be visible there.

    if (cursorVariant === 'default') {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none"
            variants={variants}
            animate={cursorVariant}
            style={{
                pointerEvents: "none",
                zIndex: 9999
            }}
        />
    );
}
