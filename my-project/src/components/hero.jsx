import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Behance from "../assets/behance_icon.jpg";
import LinkedIn from "../assets/linkedin_icon.png";

// Assets
import Me from "../assets/me.jpg";
import Figma from "../assets/fig.png";
import Ae from "../assets/ae.png";
import Ai from "../assets/ai.png";
import Ps from "../assets/ps.png";
import Pr from "../assets/pr.png";
import Xd from "../assets/xd.png";
import Rush from "../assets/rush.png";
import Creatie from "../assets/creatie.png";
import Blender from "../assets/blender.png";
import Spline from "../assets/spline.png";
import ReactLogo from "../assets/react.svg";
import Framer from "../assets/framer.png";
import AwardImg from "../assets/aw.jpg";
import uiux from "../assets/uid.jpg";
import manime from "../assets/manime.jpg";
import threeD from "../assets/3dd.jpg";
import ProjectsIcon from "../assets/projects-icon.png";
import AwardIcon from "../assets/award-icon.png";
import HonestIcon from "../assets/honestt.png";
import holding1 from "../assets/holding.png";
import holding2 from "../assets/holding2.png";
import resume from "../assets/Honest Resume UIUX Design.pdf";

// Project Preview Images - UI/UX
import awalPlastics from "../assets/projects/awal.png";
import caretaker from "../assets/projects/caretaker.png";
import eedu from "../assets/projects/eeducation.png";
import ehos from "../assets/projects/ehospital.png";
import mist from "../assets/projects/mistnov.png";
import algominds from "../assets/projects/algomind.png";
import sports from "../assets/projects/sportsref.png";
import lightup from "../assets/projects/lightup.png";
import kuvi from "../assets/projects/kuvi.png";
import qodora from "../assets/projects/Qodora.png";
import solar from "../assets/projects/solar.png";
import hajj from "../assets/projects/hajj.png";

// Project Preview Images - Motion
import gg from "../assets/projects/gg.png";
import colan from "../assets/projects/colan.png";
import m2a from "../assets/projects/m2a.png";
import rd from "../assets/projects/rd.png";
import bus from "../assets/projects/buses.png";
import ivuniverse from "../assets/projects/ivuniverse.png";
import fivelittlemonkeys from "../assets/projects/fivelittle.png";
import colanlogo from "../assets/projects/colanlogo.png";
import darkdevil from "../assets/projects/darkdevil.png";
import pathuthala from "../assets/projects/pathuthala.png";
import trinity from "../assets/projects/trinity.png";

// Project Preview Images - 3D
import phoneix from "../assets/projects/phoneix.png";
import winter from "../assets/projects/winter.png";

// Themes Config
const themeStyles = {
    win98: {
        desktop: "bg-[#008080] text-black",
        desktopStyle: { backgroundColor: "#008080" },
        windowBg: "bg-[#c0c0c0] border-[3px] border-t-white border-l-white border-b-[#808080] border-r-[#808080]",
        windowTitle: "bg-gradient-to-r from-[#000080] to-[#1084d0] text-white px-2 py-1 flex items-center justify-between font-bold select-none",
        windowTitleActive: "bg-gradient-to-r from-[#000080] to-[#1084d0] text-white",
        windowTitleInactive: "bg-[#808080] text-[#c0c0c0] px-2 py-1 flex items-center justify-between font-bold select-none",
        windowButton: "bg-[#c0c0c0] border border-t-white border-l-white border-b-[#808080] border-r-[#808080] text-black active:border-b-white active:border-r-white active:border-t-[#808080] active:border-l-[#808080] px-1 py-0.5 text-[10px] font-bold cursor-pointer min-w-[16px] text-center flex items-center justify-center",
        iconText: "text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] font-bold font-mono text-xs select-none",
        taskbar: "bg-[#c0c0c0] border-t-[3px] border-t-white text-black",
        startBtn: "bg-[#c0c0c0] border-[2px] border-t-white border-l-white border-b-[#808080] border-r-[#808080] font-black text-xs active:border-b-white active:border-r-white active:border-t-[#808080] active:border-l-[#808080] px-3 py-1 flex items-center gap-1 cursor-pointer select-none",
        startMenu: "bg-[#c0c0c0] border-[3px] border-t-white border-l-white border-b-gray-800 border-r-gray-800 shadow-2xl",
        startMenuBanner: "bg-gradient-to-b from-[#000080] to-[#1084d0] text-white font-black tracking-widest text-center py-2 flex items-center justify-center writing-mode-vertical border-r-2 border-r-white/40",
        activeTab: "bg-[#dfdfdf] border-2 border-b-white border-r-white border-t-[#808080] border-l-[#808080] font-bold text-xs px-3 py-1 cursor-pointer truncate max-w-[120px] md:max-w-[160px]",
        inactiveTab: "bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] text-xs px-3 py-1 cursor-pointer truncate max-w-[120px] md:max-w-[160px] hover:bg-gray-100",
    },
    synthwave: {
        desktop: "bg-[#180924] text-[#00ffff]",
        desktopStyle: {
            backgroundColor: "#180924",
            backgroundImage: "linear-gradient(rgba(255, 74, 125, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 74, 125, 0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
        },
        windowBg: "bg-[#0a0414]/90 border-2 border-[#ff4a7d] shadow-[0_0_15px_rgba(255,74,125,0.4)] backdrop-blur-md",
        windowTitle: "bg-gradient-to-r from-[#ff4a7d] to-[#7928ca] text-white px-2 py-1.5 flex items-center justify-between font-extrabold uppercase tracking-widest select-none text-[11px]",
        windowTitleActive: "bg-gradient-to-r from-[#ff4a7d] to-[#7928ca] text-white",
        windowTitleInactive: "bg-[#150b22] text-[#ff4a7d]/50 px-2 py-1.5 flex items-center justify-between font-extrabold uppercase tracking-widest select-none text-[11px] border-b border-[#ff4a7d]/20",
        windowButton: "bg-[#10061a] border border-[#ff4a7d] hover:bg-[#ff4a7d] hover:text-white text-[#ff4a7d] transition-all duration-150 px-1.5 py-0.5 text-[9px] font-black cursor-pointer rounded flex items-center justify-center min-w-[16px]",
        iconText: "text-[#00ffff] font-extrabold drop-shadow-[0_0_6px_rgba(0,255,255,0.7)] font-mono text-xs select-none tracking-wide",
        taskbar: "bg-[#0b0312]/95 border-t border-[#ff4a7d] text-[#ff4a7d]",
        startBtn: "bg-gradient-to-r from-[#ff4a7d] to-[#7928ca] text-white font-extrabold text-xs shadow-[0_0_10px_rgba(255,74,125,0.7)] border border-transparent rounded hover:scale-105 active:scale-95 px-3 py-1 flex items-center gap-1 cursor-pointer select-none",
        startMenu: "bg-[#08020e]/95 border-2 border-[#ff4a7d] shadow-[0_0_25px_rgba(255,74,125,0.5)] backdrop-blur-md",
        startMenuBanner: "bg-gradient-to-b from-[#7928ca] to-[#ff4a7d] text-white font-extrabold tracking-widest text-center py-2 flex items-center justify-center",
        activeTab: "bg-[#ff4a7d] text-white border border-[#ff4a7d] shadow-[0_0_8px_rgba(255,74,125,0.8)] font-bold text-xs px-3 py-1 cursor-pointer rounded truncate max-w-[120px] md:max-w-[160px]",
        inactiveTab: "bg-[#0a0414] text-[#ff4a7d] border border-[#ff4a7d]/40 text-xs px-3 py-1 cursor-pointer rounded truncate max-w-[120px] md:max-w-[160px] hover:border-[#ff4a7d] hover:text-white hover:bg-[#ff4a7d]/10",
    },
    macOS: {
        desktop: "bg-[#a2a2a2] text-black",
        desktopStyle: {
            backgroundColor: "#a2a2a2",
            backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.04) 50%, transparent 50%), linear-gradient(rgba(0,0,0,0.04) 50%, transparent 50%)",
            backgroundSize: "6px 6px"
        },
        windowBg: "bg-[#f5f5f5] border-[2px] border-black rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        windowTitle: "bg-[#dddddd] border-b-2 border-black px-3 py-1.5 flex items-center justify-between font-black text-xs text-black select-none font-mono relative",
        windowTitleActive: "bg-[#dddddd] text-black",
        windowTitleInactive: "bg-[#e5e5e5] text-gray-400 px-3 py-1.5 flex items-center justify-between font-black text-xs select-none font-mono",
        windowButton: "w-3 h-3 rounded-full border border-black cursor-pointer bg-white transition-all hover:bg-black flex items-center justify-center text-[6px] font-bold",
        iconText: "text-black font-extrabold font-mono text-xs select-none bg-white/70 px-1 border border-black rounded shadow-[1px_1px_0_0_rgba(0,0,0,1)]",
        taskbar: "bg-[#f5f5f5] border-t-2 border-black text-black shadow-[0_-2px_0_0_rgba(0,0,0,1)]",
        startBtn: "bg-white border-2 border-black text-black font-black text-xs hover:bg-gray-100 active:translate-y-[1px] px-3 py-1 flex items-center gap-1 cursor-pointer select-none rounded",
        startMenu: "bg-white border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rounded-md",
        startMenuBanner: "bg-black text-white font-extrabold tracking-widest text-center py-2 flex items-center justify-center font-mono rounded-l-md",
        activeTab: "bg-[#dddddd] border-2 border-black font-extrabold text-xs px-3 py-1 cursor-pointer rounded truncate max-w-[120px] md:max-w-[160px] shadow-[2px_2px_0_0_rgba(0,0,0,1)]",
        inactiveTab: "bg-white border-2 border-black text-black text-xs px-3 py-1 cursor-pointer rounded truncate max-w-[120px] md:max-w-[160px] hover:bg-gray-50 active:translate-y-[1px]",
    }
};

// Skills Database embedded inside honest_me.doc
const SKILLS_DATA = [
    { src: Figma, name: "Figma", level: "Expert (4+ yrs)", desc: "Design Systems, Auto-Layout, Tokens, Interactive Prototypes" },
    { src: Ae, name: "After Effects", level: "Advanced", desc: "UI Motion, Lottie Animations, Micro-interactions & Visual Effects" },
    { src: Ai, name: "Illustrator", level: "Expert", desc: "Vector Design, Iconography, Brand Systems & Visual Typography" },
    { src: Ps, name: "Photoshop", level: "Advanced", desc: "High-res Graphics, Texture Rendering & Raster Composition" },
    { src: Pr, name: "Premiere Pro", level: "Advanced", desc: "Product Launch Videos, Audio Timing & Motion Narrative" },
    { src: Blender, name: "Blender 3D", level: "Advanced", desc: "Low-Poly Meshes, 3D Product Modeling, Materials & Lighting" },
    { src: Spline, name: "Spline 3D", level: "Advanced", desc: "Real-time Interactive 3D Web Scenes & State Triggers" },
    { src: Creatie, name: "Creatie AI", level: "Advanced", desc: "AI-Assisted Layout Exploration & Prototyping Workflows" },
    { src: Xd, name: "Adobe XD", level: "Intermediate", desc: "Component Architecture & Wireframe Prototypes" },
    { src: Rush, name: "Premiere Rush", level: "Intermediate", desc: "Rapid Mobile Edits & Sequence Assembly" },
    { src: ReactLogo, name: "React", level: "Advanced", desc: "Modern Component Architecture, Tailwind, State & Hooks" },
    { src: Framer, name: "Framer", level: "Advanced", desc: "Dynamic Layouts, Micro-Animations & Interactive Production" }
];

// Center Rotating Titles / Roles List
const ROLES = [
    "UI/UX Designer",
    "Product Designer",
    "Motion Animator",
    "AI Front End Dev"
];

// SUB-COMPONENT: Smooth Text Counter Animation (Small font, pure white text, no glitch)
const RoleTextCounter = ({ theme }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ROLES.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative pointer-events-none select-none inline-flex items-center gap-2.5 font-mono text-white  p-1.5">
            {/* Animated Number Counter */}
            <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-black tracking-widest text-[#ffffff] border-r border-white/25 pr-2.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff] animate-pulse" />
                <div className="h-4 overflow-hidden inline-flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.22 }}
                            className="inline-block"
                        >
                            0{index + 1}
                        </motion.span>
                    </AnimatePresence>
                </div>
                <span className="opacity-40 text-white font-normal">/</span>
                <span className="opacity-60 text-white font-normal">0{ROLES.length}</span>
            </div>

            {/* Smooth Animated Title */}
            <div className="h-5 overflow-hidden flex items-center min-w-[150px] md:min-w-[180px]">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 9, filter: "blur(2px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -9, filter: "blur(2px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-xs md:text-sm font-bold tracking-wider uppercase text-white truncate block"
                    >
                        {ROLES[index]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    );
};

// Center Auto-Changing Wallpaper Images
const WALLPAPER_IMAGES = [holding1, holding2];

// SUB-COMPONENT: Center Auto Changing Wallpaper (Instant Glitch, width: auto, height: 400px)
const CenterWallpaper = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            // Instant image swap in the middle of glitch burst
            setTimeout(() => {
                setImgIndex((prev) => (prev + 1) % WALLPAPER_IMAGES.length);
            }, 80);
            setTimeout(() => {
                setIsGlitching(false);
            }, 240);
        }, 3600);
        return () => clearInterval(interval);
    }, []);

    const currentImg = WALLPAPER_IMAGES[imgIndex];

    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 select-none overflow-hidden">
            <div className="relative inline-block" style={{ height: "400px", width: "auto" }}>
                {/* Main Instant Wallpaper Image */}
                <img
                    src={currentImg}
                    alt="Center Workspace Wallpaper"
                    style={{ height: "400px", width: "auto" }}
                    className={`max-h-[80vh] max-w-[90vw] object-contain drop-shadow-2xl pointer-events-none transition-transform duration-75 ${
                        isGlitching ? "scale-[1.02] skew-x-[-1.5deg] brightness-125 contrast-125" : "scale-100"
                    }`}
                />

                {/* Instant Glitch Burst Slices */}
                {isGlitching && (
                    <>
                        {/* Cyan RGB Shift Layer */}
                        <img
                            src={currentImg}
                            alt=""
                            aria-hidden="true"
                            style={{
                                height: "400px",
                                width: "auto",
                                clipPath: "polygon(0 15%, 100% 15%, 100% 45%, 0 45%)",
                                transform: "translate(-5px, 2px)",
                                filter: "drop-shadow(3px 0 0 #00ffff)",
                            }}
                            className="absolute inset-0 max-h-[80vh] max-w-[90vw] object-contain pointer-events-none opacity-90 mix-blend-screen"
                        />

                        {/* Magenta RGB Shift Layer */}
                        <img
                            src={currentImg}
                            alt=""
                            aria-hidden="true"
                            style={{
                                height: "400px",
                                width: "auto",
                                clipPath: "polygon(0 55%, 100% 55%, 100% 85%, 0 85%)",
                                transform: "translate(5px, -2px)",
                                filter: "drop-shadow(-3px 0 0 #ff0055)",
                            }}
                            className="absolute inset-0 max-h-[80vh] max-w-[90vw] object-contain pointer-events-none opacity-90 mix-blend-screen"
                        />

                        {/* White Scanline Jitter Flash */}
                        <div
                            className="absolute inset-0 pointer-events-none bg-white/20 mix-blend-overlay"
                            style={{
                                clipPath: "polygon(0 30%, 100% 30%, 100% 38%, 0 38%)",
                                transform: "translate(4px, 0)",
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default function Hero() {
    const [theme, setTheme] = useState("win98");
    const [wallpaperPattern, setWallpaperPattern] = useState("grid");
    const [crtScanlines, setCrtScanlines] = useState(true);
    const [crtStrength, setCrtStrength] = useState(0.25);
    const [isShutDown, setIsShutDown] = useState(false);

    // Desktop & Mobile Windows Control
    const [openWindows, setOpenWindows] = useState({
        bio: true,
        projects: false,
        awards: false,
        projDetail: false,
        gallery: false,
    });

    const [minimizedWindows, setMinimizedWindows] = useState({
        bio: false,
        projects: false,
        awards: false,
        projDetail: false,
        gallery: false,
    });

    const [maximizedWindows, setMaximizedWindows] = useState({
        bio: false,
        projects: false,
        awards: false,
        projDetail: false,
        gallery: false,
    });

    const [activeWindow, setActiveWindow] = useState("bio");
    const [selectedProjCat, setSelectedProjCat] = useState(null);
    const [zoomImage, setZoomImage] = useState(null);
    const [zoomTitle, setZoomTitle] = useState("");

    const [zIndices, setZIndices] = useState({
        bio: 10,
        projects: 10,
        awards: 10,
        projDetail: 12,
        gallery: 13,
    });

    const [highestZ, setHighestZ] = useState(12);
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
    const desktopRef = useRef(null);

    // Focus utility
    const focusWindow = (winName) => {
        if (activeWindow === winName) return;
        const newZ = highestZ + 1;
        setHighestZ(newZ);
        setZIndices((prev) => ({ ...prev, [winName]: newZ }));
        setActiveWindow(winName);
        setIsStartMenuOpen(false);
    };

    const openApp = (winName) => {
        setOpenWindows((prev) => ({ ...prev, [winName]: true }));
        setMinimizedWindows((prev) => ({ ...prev, [winName]: false }));
        focusWindow(winName);
    };

    const closeApp = (winName, e) => {
        if (e) e.stopPropagation();
        setOpenWindows((prev) => ({ ...prev, [winName]: false }));
    };

    const toggleMinimize = (winName, e) => {
        if (e) e.stopPropagation();
        setMinimizedWindows((prev) => ({ ...prev, [winName]: !prev[winName] }));
        if (minimizedWindows[winName]) {
            focusWindow(winName);
        }
    };

    const toggleMaximize = (winName, e) => {
        if (e) e.stopPropagation();
        setMaximizedWindows((prev) => ({ ...prev, [winName]: !prev[winName] }));
        focusWindow(winName);
    };

    const cycleTheme = () => {
        const themes = ["win98", "synthwave", "macOS"];
        const nextIdx = (themes.indexOf(theme) + 1) % themes.length;
        setTheme(themes[nextIdx]);
    };

    // Get active layout styling
    const activeStyles = themeStyles[theme];

    // Assemble responsive desktop style overrides
    const getResponsiveDesktopStyle = () => {
        const defaultStyles = { ...activeStyles.desktopStyle };
        if (theme === "win98" && wallpaperPattern === "solid") {
            defaultStyles.backgroundColor = "#008080";
            defaultStyles.backgroundImage = "none";
        } else if (theme === "win98" && wallpaperPattern === "grid") {
            defaultStyles.backgroundColor = "#007f7f";
            defaultStyles.backgroundImage = `
        linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
      `;
            defaultStyles.backgroundSize = "20px 20px";
        } else if (theme === "synthwave" && wallpaperPattern === "solid") {
            defaultStyles.backgroundColor = "#0d0414";
            defaultStyles.backgroundImage = "none";
        } else if (theme === "macOS" && wallpaperPattern === "solid") {
            defaultStyles.backgroundColor = "#888888";
            defaultStyles.backgroundImage = "none";
        }
        return defaultStyles;
    };

    // Check if any window is currently open on mobile
    const isAnyMobileWindowOpen = Object.entries(openWindows).some(([k, v]) => v && !minimizedWindows[k]);

    if (isShutDown) {
        return (
            <div className="fixed inset-0 bg-[#000000] z-[9999] flex flex-col items-center justify-center text-white font-mono p-4 select-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
                <div className="w-16 h-1 bg-white mb-8 animate-pulse rounded-full" />
                <h1 className="text-xl md:text-2xl font-bold tracking-widest text-[#ff4a7d] mb-2 text-center uppercase">
                    SYSTEM SHUT DOWN SUCCESSFUL
                </h1>
                <p className="text-xs text-gray-500 text-center max-w-sm mb-8 leading-relaxed">
                    The HonestOS workstation has entered sleep mode. scanlines and micro-processors offline.
                </p>
                <button
                    onClick={() => setIsShutDown(false)}
                    className="border-2 border-white px-6 py-2 text-sm uppercase hover:bg-white hover:text-black transition-all cursor-pointer font-black shadow-[4px_4px_0_0_rgba(255,255,255,0.3)] hover:shadow-none active:translate-x-1 active:translate-y-1"
                >
                    Reboot Workstation 🎾
                </button>
            </div>
        );
    }

    return (
        <section
            ref={desktopRef}
            className={`fixed w-full h-[calc(100vh-80px)] h-[calc(100dvh-80px)] top-20 left-0 right-0 overflow-hidden flex flex-col transition-all duration-300 border-t-4 border-b-4 border-x-0 border-black rounded-none shadow-2xl p-0`}
            style={getResponsiveDesktopStyle()}
            onClick={() => setIsStartMenuOpen(false)}
        >
            {/* CRT Scanline Filter */}
            {crtScanlines && (
                <div
                    className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.18)_50%)] bg-[size:100%_3px] opacity-75"
                    style={{ opacity: crtStrength }}
                />
            )}

            {/* DESKTOP WORKSPACE (Desktop View) */}
            <div className="flex-1 w-full p-4 md:p-6 relative hidden md:flex flex-col flex-wrap content-start items-start justify-start gap-4 md:gap-8 z-10 overflow-y-auto">
                {/* Center Auto-Changing Wallpaper */}
                <CenterWallpaper />

                {/* Desktop Icons */}
                <DesktopIcon
                    label="honest_me.doc"
                    icon={<img src={HonestIcon} alt="Honest Bio" className="w-10 h-10 object-contain drop-shadow-md" />}
                    themeStyles={activeStyles}
                    onClick={() => openApp("bio")}
                    desktopRef={desktopRef}
                />
                <DesktopIcon
                    label="projects"
                    icon={<img src={ProjectsIcon} alt="Projects" className="w-10 h-10 object-contain drop-shadow-md" />}
                    themeStyles={activeStyles}
                    onClick={() => openApp("projects")}
                    desktopRef={desktopRef}
                />
                <DesktopIcon
                    label="awards"
                    icon={<img src={AwardIcon} alt="Awards" className="w-10 h-10 object-contain drop-shadow-md" />}
                    themeStyles={activeStyles}
                    onClick={() => openApp("awards")}
                    desktopRef={desktopRef}
                />
                <DesktopIcon
                    label="linkedin"
                    icon={<img src={LinkedIn} alt="LinkedIn" className="w-10 h-10" />}
                    themeStyles={activeStyles}
                    onClick={() => window.open("https://www.linkedin.com/in/honestraj-vijay/", "_blank")}
                    desktopRef={desktopRef}
                />
                <DesktopIcon
                    label="behance"
                    icon={<img src={Behance} alt="Behance" className="w-10 h-10" />}
                    themeStyles={activeStyles}
                    onClick={() => window.open("https://www.behance.net/honestrhonestr1", "_blank")}
                    desktopRef={desktopRef}
                />

                {/* Top-Right Fixed Animated Role Counter */}
                <div className="absolute top-4 right-6 pointer-events-none z-30 select-none hidden md:flex items-center">
                    <RoleTextCounter theme={theme} />
                </div>

                {/* DRAGGABLE APP WINDOWS (Desktop view) */}
                <div className="absolute inset-0 pointer-events-none z-20">

                    {/* WINDOW 2: PORTFOLIO PROJECTS EXPLORER */}
                    <AnimateWindow
                        isOpen={openWindows.projects && !minimizedWindows.projects}
                        isMaximized={maximizedWindows.projects}
                        zIndex={zIndices.projects}
                        title="C:\\WINDOWS\\DESKTOP\\PORTFOLIO_PROJECTS"
                        winName="projects"
                        activeWindow={activeWindow}
                        activeStyles={activeStyles}
                        desktopRef={desktopRef}
                        focusWindow={focusWindow}
                        toggleMinimize={toggleMinimize}
                        toggleMaximize={toggleMaximize}
                        closeApp={closeApp}
                        initialX={200}
                        initialY={80}
                        width="550px"
                    >
                        <div className="p-4 flex flex-col h-full bg-[#f8f8f8] text-black">
                            <div className="flex justify-between items-center text-xs font-mono border-b border-gray-300 pb-2 mb-4 select-none">
                                <span>Select a portfolio category directory to open previews</span>
                                <span className="text-gray-400">3 folders found</span>
                            </div>

                            <div className="grid grid-cols-3 gap-4 overflow-y-auto p-1 flex-1">
                                <ProjectFolderIcon
                                    label="UI_UX_Design"
                                    imgSrc={uiux}
                                    onClick={() => {
                                        setSelectedProjCat("uiux");
                                        openApp("projDetail");
                                    }}
                                />
                                <ProjectFolderIcon
                                    label="Motion_Graphics"
                                    imgSrc={manime}
                                    onClick={() => {
                                        setSelectedProjCat("motion");
                                        openApp("projDetail");
                                    }}
                                />
                                <ProjectFolderIcon
                                    label="3D_Animation"
                                    imgSrc={threeD}
                                    onClick={() => {
                                        setSelectedProjCat("threeD");
                                        openApp("projDetail");
                                    }}
                                />
                            </div>

                            <div className="mt-4 p-3 bg-gray-100 border border-gray-300 font-mono text-[10px] rounded text-gray-600 select-none">
                                ℹ️ Double-click or click any folder icon above to launch a responsive in-browser previews screen.
                            </div>
                        </div>
                    </AnimateWindow>

                    {/* APP WINDOW 2.5: PROJECT PREVIEW DETAILS */}
                    <AnimateWindow
                        isOpen={openWindows.projDetail && !minimizedWindows.projDetail}
                        isMaximized={maximizedWindows.projDetail}
                        zIndex={zIndices.projDetail}
                        title={selectedProjCat ? `Folder Explorer - ${selectedProjCat.toUpperCase()}` : "Folder Preview"}
                        winName="projDetail"
                        activeWindow={activeWindow}
                        activeStyles={activeStyles}
                        desktopRef={desktopRef}
                        focusWindow={focusWindow}
                        toggleMinimize={toggleMinimize}
                        toggleMaximize={toggleMaximize}
                        closeApp={closeApp}
                        initialX={280}
                        initialY={140}
                        width="580px"
                    >
                        <ProjectDetailsView
                            cat={selectedProjCat}
                            onClose={() => closeApp("projDetail")}
                            onOpenGallery={(catName) => {
                                setSelectedProjCat(catName);
                                openApp("gallery");
                                closeApp("projDetail");
                            }}
                            onExpandImage={(img, title) => {
                                setZoomImage(img);
                                setZoomTitle(title);
                            }}
                        />
                    </AnimateWindow>

                    {/* APP WINDOW 2.6: CATEGORY GALLERY EXPLORER */}
                    <AnimateWindow
                        isOpen={openWindows.gallery && !minimizedWindows.gallery}
                        isMaximized={maximizedWindows.gallery}
                        zIndex={zIndices.gallery}
                        title={selectedProjCat ? `Category Gallery - ${selectedProjCat.toUpperCase()}` : "Category Gallery"}
                        winName="gallery"
                        activeWindow={activeWindow}
                        activeStyles={activeStyles}
                        desktopRef={desktopRef}
                        focusWindow={focusWindow}
                        toggleMinimize={toggleMinimize}
                        toggleMaximize={toggleMaximize}
                        closeApp={closeApp}
                        initialX={240}
                        initialY={120}
                        width="640px"
                    >
                        <CategoryGalleryView
                            cat={selectedProjCat}
                            onClose={() => closeApp("gallery")}
                            onExpandImage={(img, title) => {
                                setZoomImage(img);
                                setZoomTitle(title);
                            }}
                        />
                    </AnimateWindow>

                    {/* WINDOW 3: ABOUT ME & INTEGRATED TOOLS (honest_me.doc) */}
                    <AnimateWindow
                        isOpen={openWindows.bio && !minimizedWindows.bio}
                        isMaximized={maximizedWindows.bio}
                        zIndex={zIndices.bio}
                        title="honest_me.doc - WordPad"
                        winName="bio"
                        activeWindow={activeWindow}
                        activeStyles={activeStyles}
                        desktopRef={desktopRef}
                        focusWindow={focusWindow}
                        toggleMinimize={toggleMinimize}
                        toggleMaximize={toggleMaximize}
                        closeApp={closeApp}
                        initialX={80}
                        initialY={40}
                        width="620px"
                    >
                        <div className="p-4 overflow-y-auto h-full text-black leading-relaxed font-sans text-sm bg-white space-y-5">
                            {/* Profile Bio Header */}
                            <div className="flex flex-col md:flex-row gap-5 pb-4 border-b border-gray-300">
                                <div className="shrink-0 flex flex-col items-center">
                                    <div className="relative group w-36 h-auto rounded-lg overflow-hidden border-2 border-black bg-white p-1 shadow-[3px_3px_0_0_#000]">
                                        <img
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                            src={Me}
                                            alt="Honestraj"
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_50%,transparent_50%)] bg-[size:100%_4px] pointer-events-none opacity-40" />
                                    </div>
                                    <div className="mt-2 text-center">
                                        <span className="bg-black text-white text-[9px] font-black uppercase px-2 py-0.5 font-mono rounded tracking-wider">
                                            UI/UX | Motion | 3D
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-start">
                                    <h2 className="text-xl font-black font-mono border-b-2 border-black pb-1 mb-2 flex items-center justify-between">
                                        <span>Honestraj Vijay</span>
                                        <span className="text-gray-400 text-xs font-normal">v4.0.0</span>
                                    </h2>
                                    <div className="font-mono text-xs text-gray-500 mb-1.5">
                                        JOB_TITLE: <span className="text-[#FF4D00] font-black">LEAD UI/UX PRODUCT DESIGNER</span>
                                    </div>
                                    <p className="mb-2 text-xs md:text-sm text-gray-800">
                                        Highly driven <span className="text-[#FF4D00] font-bold font-mono">UI/UX Designer</span> with 4+ years of experience in designing intuitive, scalable digital solutions for complex enterprise systems [ERP] and next-gen start-ups.
                                    </p>
                                    <div className="border border-dashed border-gray-400 p-2 bg-gray-50 font-mono text-[10px] leading-normal text-gray-600 rounded">
                                        📌 WORKSTATION CORE: Chennai, India • <a href="https://colaninfotech.com/" target="_blank" rel="noopener noreferrer" className="text-[#FF4D00] font-bold font-mono underline hover:text-blue-600">Colan Infotech Pvt Ltd</a> • 10+ Delivered Case Studies
                                    </div>
                                </div>
                            </div>

                            {/* Integrated Tools & Software Arsenal */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-black flex items-center gap-1.5">
                                        🧰 Design Arsenal & Tools Stack ({SKILLS_DATA.length} Tools)
                                    </h3>
                                    <span className="text-[10px] font-mono text-gray-400">Hover for metadata</span>
                                </div>

                                <div className="grid grid-cols-4 gap-3 bg-[#f8f8f8] p-3 rounded border border-gray-200">
                                    {SKILLS_DATA.map((s, idx) => (
                                        <SkillItem key={idx} src={s.src} name={s.name} level={s.level} desc={s.desc} />
                                    ))}
                                </div>
                            </div>

                            {/* Action Row */}
                            <div className="flex gap-3 pt-2 border-t border-gray-200">
                                <button
                                    onClick={() => openApp("awards")}
                                    className="flex-1 bg-black text-white hover:bg-gray-800 text-xs font-bold py-2 px-3 font-sans rounded border shadow-[2px_2px_0_0_#ccc] active:shadow-none cursor-pointer flex items-center justify-center gap-1.5"
                                >
                                    <img src={AwardIcon} alt="" className="w-3.5 h-3.5 object-contain" /> View Awards & Merits ➔
                                </button>
                                <button
                                    onClick={() => openApp("projects")}
                                    className="flex-1 bg-white hover:bg-gray-100 text-black text-xs font-bold py-2 px-3 font-sans rounded border-2 border-black shadow-[2px_2px_0_0_#000] active:shadow-none cursor-pointer flex items-center justify-center gap-1.5"
                                >
                                    <img src={ProjectsIcon} alt="" className="w-3.5 h-3.5 object-contain" /> Browse Projects ➔
                                </button>
                            </div>
                        </div>
                    </AnimateWindow>

                    {/* WINDOW 5: AWARDS DATABASE */}
                    <AnimateWindow
                        isOpen={openWindows.awards && !minimizedWindows.awards}
                        isMaximized={maximizedWindows.awards}
                        zIndex={zIndices.awards}
                        title="AWARDS_REGISTRY.EXE"
                        winName="awards"
                        activeWindow={activeWindow}
                        activeStyles={activeStyles}
                        desktopRef={desktopRef}
                        focusWindow={focusWindow}
                        toggleMinimize={toggleMinimize}
                        toggleMaximize={toggleMaximize}
                        closeApp={closeApp}
                        initialX={160}
                        initialY={140}
                        width="600px"
                    >
                        <div className="p-4 flex flex-col md:flex-row gap-6 overflow-y-auto h-full bg-[#f3efe9] text-black">
                            <div className="flex-1 flex flex-col gap-4 font-mono text-xs">
                                <h3 className="text-base font-bold font-sans border-b-2 border-black pb-1 uppercase tracking-wider flex items-center gap-1.5">
                                    <img src={AwardIcon} alt="" className="w-4 h-4 object-contain" /> Professional Merits
                                </h3>
                                <p className="text-gray-600 text-[11px] leading-relaxed">
                                    Hover or select an item on the registry to project its credential certificate on the CRT output receiver.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <AwardRegistryRow
                                        year="Quarter IV - March 2024"
                                        title="Outstanding Performance and Lasting Contribution"
                                        company="Colan Infotech Private Limited"
                                    />
                                    <AwardRegistryRow
                                        year="Quarter IV - March 2025"
                                        title="Solid Delivery Performance"
                                        company="Colan Infotech Private Limited"
                                    />
                                    <AwardRegistryRow
                                        year="Quarter I - July 2025"
                                        title="Best Performance and Lasting Contribution"
                                        company="Colan Infotech Private Limited"
                                    />
                                </div>
                            </div>

                            {/* CRT Projection Monitor */}
                            <div className="shrink-0 flex flex-col items-center justify-center">
                                <div className="w-[180px] h-[160px] bg-[#1a1c1e] border-4 border-gray-400 shadow-[inset_0_0_12px_#000] rounded-xl relative overflow-hidden flex flex-col items-center justify-center text-[10px] text-green-500 font-mono p-1">
                                    <div className="absolute top-1 right-2 w-2 h-2 bg-green-500 rounded-full animate-ping pointer-events-none" />
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[size:100%_3px] pointer-events-none z-10 opacity-70" />
                                    <img
                                        src={AwardImg}
                                        alt="Registry Projection"
                                        className="w-full h-full object-contain filter brightness-90 contrast-125"
                                    />
                                    <div className="absolute bottom-1 left-0 right-0 text-center bg-black/60 py-0.5 text-[8px] tracking-tighter">
                                        CRT RECEIVER: ONLINE
                                    </div>
                                </div>
                                <div className="text-[10px] text-gray-500 font-mono mt-1 flex items-center gap-1">
                                    <span>Monitor model: CRT-2026</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </AnimateWindow>
                </div>
            </div>

            {/* MOBILE APPLICATION INTERFACE (Screens < 768px) */}
            <div className="flex-1 w-full md:hidden flex flex-col relative z-10 overflow-hidden select-none">

                {/* Top Mobile Status Header */}
                <div className="px-3 py-1.5 bg-black text-white flex items-center justify-between text-[10px] font-mono border-b border-black">
                    <span className="flex items-center gap-1.5 text-green-400 font-bold">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        HonestOS Mobile
                    </span>
                    <span className="text-gray-400 uppercase">{theme} Skin</span>
                </div>

                {/* Scrollable Mobile Container */}
                <div className="flex-1 overflow-y-auto p-3 space-y-4 pb-16">

                    {/* Mobile Top-Right Animated Role Counter */}
                    <div className="flex justify-end select-none pr-1">
                        <RoleTextCounter theme={theme} />
                    </div>

                    {/* Active Window Display on Mobile (Slide-in App Screen) */}
                    <AnimatePresence mode="wait">
                        {openWindows.bio && !minimizedWindows.bio && (
                            <motion.div
                                key="mobile-bio"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                className={`w-full overflow-hidden ${activeStyles.windowBg} rounded-md shadow-xl`}
                            >
                                <div className={activeStyles.windowTitle}>
                                    <div className="flex items-center gap-1.5">
                                        <button onClick={() => closeApp("bio")} className="text-[11px] font-bold pr-1 hover:underline">← Back</button>
                                        <span className="flex items-center gap-1"><img src={HonestIcon} alt="" className="w-3.5 h-3.5 object-contain inline-block" /> honest_me.doc</span>
                                    </div>
                                    <button onClick={(e) => closeApp("bio", e)} className={activeStyles.windowButton}>✕</button>
                                </div>
                                <div className="p-3.5 bg-white text-black leading-relaxed font-sans text-xs space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-20 h-24 rounded border border-black bg-white p-0.5 shrink-0 shadow-[2px_2px_0_0_#000]">
                                            <img className="w-full h-full object-cover grayscale" src={Me} alt="Honestraj" />
                                        </div>
                                        <div>
                                            <h2 className="text-base font-black font-mono">Honestraj Vijay</h2>
                                            <p className="text-[10px] font-bold text-[#FF4D00] uppercase font-mono">Lead UI/UX Product Designer</p>
                                            <p className="text-[10px] text-gray-500 mt-1">4+ yrs experience in ERP, enterprise systems & motion design.</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 leading-relaxed text-[11px] bg-gray-50 p-2.5 rounded border border-gray-200 font-mono">
                                        Specialising in transforming intricate user needs into neat, satisfying interfaces that elevate complex enterprise workflows.
                                    </p>

                                    {/* Integrated Tools in Mobile */}
                                    <div>
                                        <div className="font-mono font-bold text-[11px] uppercase tracking-wide border-b border-gray-200 pb-1 mb-2.5 flex items-center justify-between">
                                            <span>🧰 Design Arsenal ({SKILLS_DATA.length} Tools)</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 max-h-[220px] overflow-y-auto p-0.5">
                                            {SKILLS_DATA.map((s, idx) => (
                                                <SkillItemMobile key={idx} src={s.src} name={s.name} level={s.level} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-2 border-t border-gray-200">
                                        <button
                                            onClick={() => openApp("awards")}
                                            className="flex-1 bg-black text-white text-center font-bold font-sans py-2 text-[10px] rounded"
                                        >
                                            🏆 Awards & Merits
                                        </button>
                                        <button
                                            onClick={() => openApp("projects")}
                                            className="flex-1 bg-white border border-black text-black text-center font-bold font-sans py-2 text-[10px] rounded"
                                        >
                                            📁 Projects Folder
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {openWindows.projects && !minimizedWindows.projects && (
                            <motion.div
                                key="mobile-projects"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                className={`w-full overflow-hidden ${activeStyles.windowBg} rounded-md shadow-xl`}
                            >
                                <div className={activeStyles.windowTitle}>
                                    <div className="flex items-center gap-1.5">
                                        <button onClick={() => closeApp("projects")} className="text-[11px] font-bold pr-1 hover:underline">← Back</button>
                                        <span className="flex items-center gap-1"><img src={ProjectsIcon} alt="" className="w-3.5 h-3.5 object-contain inline-block" /> PORTFOLIO_PROJECTS</span>
                                    </div>
                                    <button onClick={(e) => closeApp("projects", e)} className={activeStyles.windowButton}>✕</button>
                                </div>
                                <div className="p-3 bg-[#f8f8f8] text-black">
                                    <div className="text-[10px] font-mono border-b border-gray-300 pb-1.5 mb-3 flex justify-between">
                                        <span>Select category directory:</span>
                                        <span className="text-gray-400">3 folders</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2.5">
                                        <ProjectFolderIcon
                                            label="UI_UX"
                                            imgSrc={uiux}
                                            onClick={() => {
                                                setSelectedProjCat("uiux");
                                                openApp("projDetail");
                                            }}
                                        />
                                        <ProjectFolderIcon
                                            label="Motion"
                                            imgSrc={manime}
                                            onClick={() => {
                                                setSelectedProjCat("motion");
                                                openApp("projDetail");
                                            }}
                                        />
                                        <ProjectFolderIcon
                                            label="3D_Anim"
                                            imgSrc={threeD}
                                            onClick={() => {
                                                setSelectedProjCat("threeD");
                                                openApp("projDetail");
                                            }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {openWindows.awards && !minimizedWindows.awards && (
                            <motion.div
                                key="mobile-awards"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                className={`w-full overflow-hidden ${activeStyles.windowBg} rounded-md shadow-xl`}
                            >
                                <div className={activeStyles.windowTitle}>
                                    <div className="flex items-center gap-1.5">
                                        <button onClick={() => closeApp("awards")} className="text-[11px] font-bold pr-1 hover:underline">← Back</button>
                                        <span className="flex items-center gap-1"><img src={AwardIcon} alt="" className="w-3.5 h-3.5 object-contain inline-block" /> awards.exe</span>
                                    </div>
                                    <button onClick={(e) => closeApp("awards", e)} className={activeStyles.windowButton}>✕</button>
                                </div>
                                <div className="p-3.5 bg-white text-black flex flex-col gap-3 font-mono text-[10px]">
                                    <div className="flex flex-col gap-2">
                                        <div className="border border-gray-300 p-2 bg-gray-50 rounded">
                                            <span className="font-bold text-[#FF4D00] block">Quarter IV - March 2024:</span>
                                            Outstanding Performance & Lasting Contribution (Colan Infotech)
                                        </div>
                                        <div className="border border-gray-300 p-2 bg-gray-50 rounded">
                                            <span className="font-bold text-[#FF4D00] block">Quarter IV - March 2025:</span>
                                            Solid Delivery Performance (Colan Infotech)
                                        </div>
                                        <div className="border border-gray-300 p-2 bg-gray-50 rounded">
                                            <span className="font-bold text-[#FF4D00] block">Quarter I - July 2025:</span>
                                            Best Performance & Lasting Contribution (Colan Infotech)
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2 bg-black border border-gray-400 rounded">
                                        <img src={AwardImg} alt="Certificate" className="h-28 object-contain" />
                                        <span className="text-[8px] text-green-400 mt-1 uppercase">CRT Receiver Projection</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {openWindows.projDetail && !minimizedWindows.projDetail && (
                            <motion.div
                                key="mobile-projDetail"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                className={`w-full overflow-hidden ${activeStyles.windowBg} rounded-md shadow-xl`}
                            >
                                <div className={activeStyles.windowTitle}>
                                    <div className="flex items-center gap-1.5">
                                        <button onClick={() => closeApp("projDetail")} className="text-[11px] font-bold pr-1 hover:underline">← Back</button>
                                        <span>📂 {selectedProjCat ? selectedProjCat.toUpperCase() : "Preview"}</span>
                                    </div>
                                    <button onClick={(e) => closeApp("projDetail", e)} className={activeStyles.windowButton}>✕</button>
                                </div>
                                <div className="bg-white">
                                    <ProjectDetailsView
                                        cat={selectedProjCat}
                                        onClose={() => closeApp("projDetail")}
                                        onOpenGallery={(catName) => {
                                            setSelectedProjCat(catName);
                                            openApp("gallery");
                                            closeApp("projDetail");
                                        }}
                                        onExpandImage={(img, title) => {
                                            setZoomImage(img);
                                            setZoomTitle(title);
                                        }}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {openWindows.gallery && !minimizedWindows.gallery && (
                            <motion.div
                                key="mobile-gallery"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                className={`w-full overflow-hidden ${activeStyles.windowBg} rounded-md shadow-xl`}
                            >
                                <div className={activeStyles.windowTitle}>
                                    <div className="flex items-center gap-1.5">
                                        <button onClick={() => closeApp("gallery")} className="text-[11px] font-bold pr-1 hover:underline">← Back</button>
                                        <span>🎛️ {selectedProjCat ? selectedProjCat.toUpperCase() : "Gallery"}</span>
                                    </div>
                                    <button onClick={(e) => closeApp("gallery", e)} className={activeStyles.windowButton}>✕</button>
                                </div>
                                <div className="bg-white">
                                    <CategoryGalleryView
                                        cat={selectedProjCat}
                                        onClose={() => closeApp("gallery")}
                                        onExpandImage={(img, title) => {
                                            setZoomImage(img);
                                            setZoomTitle(title);
                                        }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Mobile App Grid Launcher (Home Screen) */}
                    <div className="bg-white/90 backdrop-blur border-2 border-black rounded-lg p-3 shadow-[3px_3px_0_0_#000]">
                        <div className="font-mono text-[11px] font-bold border-b border-gray-300 pb-1.5 mb-3 flex items-center justify-between text-black">
                            <span>📱 Application Launcher</span>
                            <span className="text-gray-400 text-[9px]">Tap to open</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                            <button
                                onClick={() => openApp("bio")}
                                className="flex items-center gap-2.5 p-2.5 bg-gray-50 hover:bg-yellow-50 border-2 border-black rounded-md text-left active:scale-95 transition-transform cursor-pointer shadow-[2px_2px_0_0_#000]"
                            >
                                <img src={HonestIcon} alt="About" className="w-7 h-7 object-contain shrink-0" />
                                <div>
                                    <span className="font-mono text-xs font-black block text-black">About & Tools</span>
                                    <span className="text-[9px] text-gray-500 leading-tight block">Bio & Software Stack</span>
                                </div>
                            </button>

                            <button
                                onClick={() => openApp("projects")}
                                className="flex items-center gap-2.5 p-2.5 bg-gray-50 hover:bg-yellow-50 border-2 border-black rounded-md text-left active:scale-95 transition-transform cursor-pointer shadow-[2px_2px_0_0_#000]"
                            >
                                <img src={ProjectsIcon} alt="Projects" className="w-7 h-7 object-contain shrink-0" />
                                <div>
                                    <span className="font-mono text-xs font-black block text-black">Projects</span>
                                    <span className="text-[9px] text-gray-500 leading-tight block">UI/UX, Motion, 3D</span>
                                </div>
                            </button>

                            <button
                                onClick={() => openApp("awards")}
                                className="flex items-center gap-2.5 p-2.5 bg-gray-50 hover:bg-yellow-50 border-2 border-black rounded-md text-left active:scale-95 transition-transform cursor-pointer shadow-[2px_2px_0_0_#000]"
                            >
                                <img src={AwardIcon} alt="Awards" className="w-7 h-7 object-contain shrink-0" />
                                <div>
                                    <span className="font-mono text-xs font-black block text-black">Awards</span>
                                    <span className="text-[9px] text-gray-500 leading-tight block">Company Recognition</span>
                                </div>
                            </button>

                            <a
                                href="https://www.linkedin.com/in/honestraj-vijay/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 p-2.5 bg-gray-50 hover:bg-blue-50 border-2 border-black rounded-md text-left active:scale-95 transition-transform cursor-pointer no-underline text-black shadow-[2px_2px_0_0_#000]"
                            >
                                <img src={LinkedIn} alt="LinkedIn" className="w-7 h-7 object-contain shrink-0" />
                                <div>
                                    <span className="font-mono text-xs font-black block text-black">LinkedIn</span>
                                    <span className="text-[9px] text-gray-500 leading-tight block">Professional Profile</span>
                                </div>
                            </a>

                            <a
                                href="https://www.behance.net/honestrhonestr1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 p-2.5 bg-gray-50 hover:bg-blue-50 border-2 border-black rounded-md text-left active:scale-95 transition-transform cursor-pointer no-underline text-black shadow-[2px_2px_0_0_#000]"
                            >
                                <img src={Behance} alt="Behance" className="w-7 h-7 object-contain shrink-0 rounded" />
                                <div>
                                    <span className="font-mono text-xs font-black block text-black">Behance</span>
                                    <span className="text-[9px] text-gray-500 leading-tight block">Design Portfolio</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Quick Category Jump Section */}
                    <div className="bg-white/90 backdrop-blur border-2 border-black rounded-lg p-3 shadow-[3px_3px_0_0_#000]">
                        <div className="font-mono text-[11px] font-bold border-b border-gray-300 pb-1.5 mb-2.5 text-black">
                            ⚡ Quick Case Studies
                        </div>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => {
                                    setSelectedProjCat("uiux");
                                    openApp("projDetail");
                                }}
                                className="flex items-center justify-between p-2 bg-gray-50 hover:bg-gray-100 border border-black rounded text-left"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="w-8 h-8 rounded overflow-hidden border border-black shrink-0">
                                        <img src={uiux} alt="UI/UX" className="w-full h-full object-cover" />
                                    </span>
                                    <div>
                                        <span className="font-bold text-xs block text-black">UI/UX Design Projects</span>
                                        <span className="text-[9px] text-gray-500">12 Enterprise & SaaS Layouts</span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-[#FF4D00]">Open ➔</span>
                            </button>

                            <button
                                onClick={() => {
                                    setSelectedProjCat("motion");
                                    openApp("projDetail");
                                }}
                                className="flex items-center justify-between p-2 bg-gray-50 hover:bg-gray-100 border border-black rounded text-left"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="w-8 h-8 rounded overflow-hidden border border-black shrink-0">
                                        <img src={manime} alt="Motion" className="w-full h-full object-cover" />
                                    </span>
                                    <div>
                                        <span className="font-bold text-xs block text-black">Motion Graphics</span>
                                        <span className="text-[9px] text-gray-500">11 Promo Flows & Video Clips</span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-[#FF4D00]">Open ➔</span>
                            </button>

                            <button
                                onClick={() => {
                                    setSelectedProjCat("threeD");
                                    openApp("projDetail");
                                }}
                                className="flex items-center justify-between p-2 bg-gray-50 hover:bg-gray-100 border border-black rounded text-left"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="w-8 h-8 rounded overflow-hidden border border-black shrink-0">
                                        <img src={threeD} alt="3D" className="w-full h-full object-cover" />
                                    </span>
                                    <div>
                                        <span className="font-bold text-xs block text-black">3D Animation Works</span>
                                        <span className="text-[9px] text-gray-500">Blender Meshes & Scenes</span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-[#FF4D00]">Open ➔</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* TASKBAR (Desktop & Mobile) */}
            <div className={`w-full h-12 shrink-0 flex items-center justify-between px-3 relative z-30 select-none ${activeStyles.taskbar}`}>
                <div className="flex items-center gap-2">
                    {/* Start Menu Trigger Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsStartMenuOpen(!isStartMenuOpen);
                        }}
                        className={activeStyles.startBtn}
                    >
                        <span>💻</span>
                        <span>Start</span>
                    </button>

                    {/* Running Tabs on Taskbar (Desktop) */}
                    <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-[500px]">
                        {openWindows.bio && (
                            <button
                                onClick={() => toggleMinimize("bio")}
                                className={minimizedWindows.bio ? activeStyles.inactiveTab : activeStyles.activeTab}
                            >
                                <span className="flex items-center gap-1"><img src={HonestIcon} alt="" className="w-3.5 h-3.5 object-contain inline-block" /> honest_me.doc</span>
                            </button>
                        )}
                        {openWindows.projects && (
                            <button
                                onClick={() => toggleMinimize("projects")}
                                className={minimizedWindows.projects ? activeStyles.inactiveTab : activeStyles.activeTab}
                            >
                                <span className="flex items-center gap-1"><img src={ProjectsIcon} alt="" className="w-3.5 h-3.5 object-contain inline-block" /> portfolio_projects</span>
                            </button>
                        )}
                        {openWindows.awards && (
                            <button
                                onClick={() => toggleMinimize("awards")}
                                className={minimizedWindows.awards ? activeStyles.inactiveTab : activeStyles.activeTab}
                            >
                                <span className="flex items-center gap-1"><img src={AwardIcon} alt="" className="w-3.5 h-3.5 object-contain inline-block" /> awards.exe</span>
                            </button>
                        )}
                        {openWindows.gallery && (
                            <button
                                onClick={() => toggleMinimize("gallery")}
                                className={minimizedWindows.gallery ? activeStyles.inactiveTab : activeStyles.activeTab}
                            >
                                🎛️ gallery.exe
                            </button>
                        )}
                    </div>
                </div>

                {/* Dynamic clock widget */}
                <SystemClock theme={theme} />

                {/* START MENU DIALOG */}
                <AnimatePresence>
                    {isStartMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            className={`absolute bottom-13 left-2 w-64 md:w-72 flex z-50 ${activeStyles.startMenu}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Vertical Side Stripe Banner */}
                            <div className={`w-10 shrink-0 ${activeStyles.startMenuBanner} flex flex-col justify-end pb-4 font-mono text-xs font-bold leading-none`}>
                                <span className="-rotate-90 origin-bottom-left translate-x-5 -translate-y-4 whitespace-nowrap tracking-widest">
                                    HONEST_OS v1.0
                                </span>
                            </div>

                            {/* Start Menu Link Options */}
                            <div className="flex-1 flex flex-col bg-white text-black p-1 text-xs">

                                {/* Theme Switch Selector inside Start Menu */}
                                <div className="p-2 border-b border-gray-200">
                                    <span className="font-bold block text-gray-500 font-mono text-[9px] mb-1">WORKSPACE THEME</span>
                                    <button
                                        onClick={cycleTheme}
                                        className="w-full text-left font-bold py-1 px-2 border hover:bg-gray-100 flex items-center justify-between cursor-pointer border-gray-300 rounded"
                                    >
                                        <span>🎨 Switch Skin</span>
                                        <span className="bg-[#ff4a7d]/10 text-[#ff4a7d] px-1.5 py-0.5 rounded text-[10px] uppercase font-mono font-black">
                                            {theme}
                                        </span>
                                    </button>
                                </div>

                                <div className="py-1">
                                    <StartMenuLink
                                        icon={<img src={HonestIcon} alt="About" className="w-4 h-4 object-contain inline-block" />}
                                        label="honest_me.doc (About & Tools)"
                                        onClick={() => { openApp("bio"); setIsStartMenuOpen(false); }}
                                    />
                                    <StartMenuLink
                                        icon={<img src={ProjectsIcon} alt="Projects" className="w-4 h-4 object-contain inline-block" />}
                                        label="portfolio_projects (Folders)"
                                        onClick={() => { openApp("projects"); setIsStartMenuOpen(false); }}
                                    />
                                    <StartMenuLink
                                        icon={<img src={AwardIcon} alt="Awards" className="w-4 h-4 object-contain inline-block" />}
                                        label="awards.exe (Merits & Awards)"
                                        onClick={() => { openApp("awards"); setIsStartMenuOpen(false); }}
                                    />
                                    <StartMenuLink
                                        icon={<img src={LinkedIn} alt="LinkedIn" className="w-4 h-4 object-contain inline-block" />}
                                        label="linkedin_profile.lnk"
                                        onClick={() => { window.open("https://www.linkedin.com/in/honestraj-vijay/", "_blank"); setIsStartMenuOpen(false); }}
                                    />
                                    <StartMenuLink
                                        icon={<img src={Behance} alt="Behance" className="w-4 h-4 object-contain inline-block rounded-xs" />}
                                        label="behance_portfolio.lnk"
                                        onClick={() => { window.open("https://www.behance.net/honestrhonestr1", "_blank"); setIsStartMenuOpen(false); }}
                                    />
                                </div>

                                <hr className="border-gray-200 my-1" />

                                <div className="py-1 font-bold">
                                    {/* View Resume App route link */}
                                    <Link
                                        to="/resume"
                                        className="flex items-center gap-2.5 py-1.5 px-3 hover:bg-black hover:text-white transition-all cursor-pointer font-sans"
                                    >
                                        <span>👀</span>
                                        <span>View CV / Resume</span>
                                    </Link>

                                    {/* CV file download anchor */}
                                    <a
                                        href={resume}
                                        download="Honest Resume UIUX Design.pdf"
                                        className="flex items-center gap-2.5 py-1.5 px-3 hover:bg-black hover:text-white transition-all cursor-pointer font-sans"
                                    >
                                        <span>💾</span>
                                        <span>Download CV / Resume</span>
                                    </a>

                                    {/* Workstation shutdown toggle */}
                                    <button
                                        onClick={() => setIsShutDown(true)}
                                        className="w-full text-left flex items-center gap-2.5 py-1.5 px-3 hover:bg-red-500 hover:text-white transition-all cursor-pointer font-sans"
                                    >
                                        <span>🔌</span>
                                        <span>Shut Down Workstation</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Dynamic Image Zoom Overlay */}
            <AnimatePresence>
                {zoomImage && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 bg-black/85 z-40 flex flex-col justify-between select-none pointer-events-auto p-3"
                        onClick={() => setZoomImage(null)}
                    >
                        {/* Window Shell Header for the Zoom Viewer */}
                        <div
                            className={`w-full overflow-hidden ${activeStyles.windowBg} max-w-3xl mx-auto mt-6 flex flex-col shadow-2xl rounded-t border-b-0`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={activeStyles.windowTitle}>
                                <span className="truncate select-none font-mono pr-2">🖼️ Image_Viewer.exe - [{zoomTitle}]</span>
                                <button
                                    onClick={() => setZoomImage(null)}
                                    className={`${activeStyles.windowButton} hover:bg-red-500 hover:text-white`}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Expanded Image Body */}
                        <div
                            className="flex-1 w-full max-w-3xl mx-auto flex items-center justify-center bg-black/60 border-2 border-black border-t-0 p-3 select-none"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={zoomImage}
                                alt={zoomTitle}
                                className="max-h-[460px] md:max-h-[500px] w-auto object-contain border-2 border-white shadow-2xl rounded bg-white"
                            />
                        </div>

                        {/* Bottom info label */}
                        <div className="text-center font-mono text-[9px] text-gray-400 mt-2">
                            ℹ️ Click outside or tap close button to return to workstation.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

// SUB-COMPONENT: DesktopIcon (Drag on desktop)
const DesktopIcon = ({ label, icon, onClick, themeStyles, desktopRef }) => {
    const isDragging = useRef(false);

    return (
        <motion.div
            drag
            dragMomentum={false}
            dragElastic={0.05}
            dragConstraints={desktopRef}
            onDragStart={() => {
                isDragging.current = true;
            }}
            onDragEnd={() => {
                setTimeout(() => {
                    isDragging.current = false;
                }, 50);
            }}
            onClick={(e) => {
                if (isDragging.current) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                if (onClick) onClick(e);
            }}
            className="flex flex-col items-center justify-center p-2 rounded cursor-pointer w-20 hover:bg-white/10 active:scale-95 transition-all text-center select-none z-10 touch-none"
        >
            <div className="text-3xl filter drop-shadow-md leading-none mb-1.5">{icon}</div>
            <span className={themeStyles.iconText}>{label}</span>
        </motion.div>
    );
};

// SUB-COMPONENT: ProjectFolderIcon (Explorer style folder links)
const ProjectFolderIcon = ({ label, imgSrc, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="flex flex-col items-center justify-center p-3 hover:bg-blue-100 hover:outline hover:outline-1 hover:outline-blue-400 rounded cursor-pointer select-none group bg-white border border-gray-200"
        >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-300 rounded p-1 shadow-sm mb-2 relative overflow-hidden group-hover:scale-105 transition-transform flex items-center justify-center">
                {imgSrc ? (
                    <img src={imgSrc} alt={label} className="w-full h-full object-cover rounded" />
                ) : (
                    <img src={ProjectsIcon} alt={label} className="w-8 h-8 object-contain" />
                )}
                <div className="absolute inset-0 bg-yellow-500/10 group-hover:opacity-0 transition-opacity" />
            </div>
            <span className="font-mono text-[9px] md:text-[10px] font-bold tracking-tight text-center leading-tight truncate w-full text-black">
                {label}
            </span>
        </div>
    );
};

// SUB-COMPONENT: Draggable Window Shell frame container (Desktop)
const AnimateWindow = ({
    isOpen,
    isMaximized,
    zIndex,
    title,
    winName,
    activeWindow,
    activeStyles,
    desktopRef,
    focusWindow,
    toggleMinimize,
    toggleMaximize,
    closeApp,
    initialX,
    initialY,
    width = "500px",
    children
}) => {
    if (!isOpen) return null;

    const isActive = activeWindow === winName;
    const dragConstraints = isMaximized ? { left: 0, right: 0, top: 0, bottom: 0 } : desktopRef;

    return (
        <motion.div
            drag={!isMaximized}
            dragMomentum={false}
            dragElastic={0}
            dragConstraints={dragConstraints}
            onPointerDown={() => focusWindow(winName)}
            initial={
                isMaximized
                    ? { left: 0, top: 0, width: "100%", height: "100%" }
                    : { x: initialX, y: initialY, scale: 0.95, opacity: 0 }
            }
            animate={
                isMaximized
                    ? { x: 0, y: 0, left: 0, top: 0, width: "100%", height: "calc(100% - 48px)", scale: 1, opacity: 1 }
                    : { scale: 1, opacity: 1 }
            }
            style={{
                zIndex,
                width: isMaximized ? "100%" : width,
                position: "absolute",
            }}
            className={`pointer-events-auto flex flex-col overflow-hidden max-h-[510px] ${activeStyles.windowBg} ${isMaximized ? "max-h-[calc(100%-48px)] h-[calc(100%-48px)] rounded-none" : "rounded-t"
                }`}
        >
            {/* Title Bar block */}
            <div className={isActive ? activeStyles.windowTitle : activeStyles.windowTitleInactive}>
                <span className="truncate select-none max-w-[70%] font-mono pr-2">{title}</span>

                <div className="flex items-center gap-1.5 shrink-0 pointer-events-auto">
                    {/* Minimize button */}
                    <button
                        onClick={(e) => toggleMinimize(winName, e)}
                        className={activeStyles.windowButton}
                        title="Minimize"
                    >
                        _
                    </button>

                    {/* Maximize button */}
                    <button
                        onClick={(e) => toggleMaximize(winName, e)}
                        className={activeStyles.windowButton}
                        title={isMaximized ? "Restore Window" : "Maximize Window"}
                    >
                        {isMaximized ? "❐" : "▢"}
                    </button>

                    {/* Close button */}
                    <button
                        onClick={(e) => closeApp(winName, e)}
                        className={`${activeStyles.windowButton} hover:bg-red-500 hover:text-white`}
                        title="Close application"
                    >
                        ✕
                    </button>
                </div>
            </div>

            {/* Window Body workspace */}
            <div className="flex-1 overflow-auto pointer-events-auto select-text">
                {children}
            </div>
        </motion.div>
    );
};

// SUB-COMPONENT: Live Clock with Time Scheme support
const SystemClock = ({ theme }) => {
    const [timeStr, setTimeStr] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const d = new Date();
            let hours = d.getHours();
            const minutes = d.getMinutes().toString().padStart(2, "0");
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12;
            setTimeStr(`${hours}:${minutes} ${ampm}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const clockStyles = {
        win98: "bg-[#dfdfdf] border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white px-2.5 py-0.5 text-xs font-mono font-bold text-black",
        synthwave: "bg-[#0c0517] border border-[#ff4a7d]/40 shadow-[0_0_5px_rgba(255,74,125,0.4)] px-2.5 py-0.5 text-xs font-mono font-black text-[#ff4a7d] rounded",
        macOS: "bg-white border-2 border-black px-2.5 py-0.5 text-xs font-mono font-black text-black rounded"
    };

    return (
        <div className="flex items-center gap-1.5 select-none">
            <div className={clockStyles[theme]}>
                <span>🕒</span> <span className="ml-1 select-none">{timeStr}</span>
            </div>
        </div>
    );
};

// SUB-COMPONENT: Start Menu link
const StartMenuLink = ({ icon, label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full text-left flex items-center gap-2.5 py-1.5 px-3 hover:bg-black hover:text-white transition-all cursor-pointer font-medium font-sans border-none rounded"
        >
            <span className="text-sm filter drop-shadow-sm select-none">{icon}</span>
            <span className="font-mono text-xs">{label}</span>
        </button>
    );
};

// SUB-COMPONENT: SkillItem file inside Explorer (Desktop)
const SkillItem = ({ src, name, level, desc }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="flex flex-col items-center justify-center p-2 bg-white border border-gray-200 hover:border-black rounded cursor-pointer relative select-none group transition-all"
        >
            <div className="w-9 h-9 flex items-center justify-center p-1 bg-white rounded mb-1.5 group-hover:scale-105 transition-transform">
                <img src={src} alt={name} className="w-full h-full object-contain" />
            </div>
            <span className="font-mono text-[10px] font-bold tracking-tight text-center leading-tight truncate w-full text-black">
                {name}
            </span>

            {/* Retro style Tooltip block */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 5 }}
                        className="absolute bottom-full mb-2 bg-[#ffffe1] border border-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)] p-2.5 z-50 text-[10px] text-black w-48 rounded-md font-mono pointer-events-none"
                    >
                        <span className="font-bold text-[#FF4D00] block mb-0.5">{name}</span>
                        <div className="text-[9px] text-gray-500 font-bold mb-1">PROFICIENCY: {level}</div>
                        <p className="text-[9px] leading-tight text-gray-700">{desc}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// SUB-COMPONENT: Skill Item for Mobile
const SkillItemMobile = ({ src, name, level }) => {
    return (
        <div className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded shadow-xs">
            <div className="w-7 h-7 flex items-center justify-center p-0.5 bg-gray-50 border border-gray-100 rounded shrink-0">
                <img src={src} alt={name} className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 font-mono text-[9px] min-w-0">
                <span className="font-bold block text-black truncate">{name}</span>
                <span className="text-gray-500 font-medium truncate block">{level}</span>
            </div>
        </div>
    );
};

// SUB-COMPONENT: Award Registry Item
const AwardRegistryRow = ({ year, title, company }) => {
    return (
        <div className="flex items-center justify-between border-b border-black/10 py-2 hover:bg-black/5 hover:px-1.5 transition-all group cursor-help">
            <div className="flex flex-col">
                <span className="font-bold text-[#FF4D00] text-[11px] leading-none mb-0.5">{year}</span>
                <span className="font-bold text-gray-800 text-[11px]">{title}</span>
                <span className="text-[10px] text-gray-500 leading-none">{company}</span>
            </div>
            <ArrowOutwardIcon className="text-[14px] text-gray-400 group-hover:text-[#FF4D00] group-hover:rotate-45 transition-all" />
        </div>
    );
};

// SUB-COMPONENT: Project Preview Details Window Content
const ProjectDetailsView = ({ cat, onClose, onOpenGallery, onExpandImage }) => {
    if (!cat) return null;

    const data = {
        uiux: {
            title: "UI/UX Design Projects",
            desc: "Intuitive, clean, and system-driven interface case designs built mainly for enterprise-grade ERP architectures and dashboards.",
            cover: uiux,
            items: [
                { name: "Ramachandran Hospitality", type: "Hospitality Website Case Study", url: "https://www.behance.net/gallery/254825315/Hospitality" },
                { name: "Ramachandran Education", type: "University Web Portal UI Layouts", url: "https://www.behance.net/gallery/254783717/Education-Website" },
                { name: "Good Fellows (Healthcare)", type: "High-Fidelity Social UI / Healthcare", url: "https://www.behance.net/gallery/254562389/Healthcare" },
                { name: "Travel Guide (HAJJ Travel)", type: "Travel & Tourism App", url: "https://www.behance.net/gallery/254786435/Travel-Tourism" },
                { name: "QODORA (Medical Insurance)", type: "Medical Insurance App Prototype", url: "https://www.behance.net/gallery/250527775/Qodora" },
                { name: "Solar Energy Management", type: "Energy Management Dashboard", url: "https://www.behance.net/gallery/254784961/Solar-Energy-Management" },
                { name: "Signex (Enterprise)", type: "Enterprise ERP Dashboard Case", url: "https://www.behance.net/gallery/237202087/Signex-ERP-App-UIUX-Product-Design-Case-Study" },
                { name: "Sports Reform", type: "Sports Performance Web Wires", url: "https://www.behance.net/gallery/205963977/Sports-Reform-website-ui-design" },
                { name: "Guvi Learning Platform", type: "EdTech Learning Platform", url: "https://www.behance.net/gallery/240490215/Learning-Course-Landing-Page" },
                { name: "Lightup Temple (Booking Pooja)", type: "SaaS Temple Booking Portal", url: "https://www.behance.net/gallery/205956803/Lightup-Temples-website-ui-design" },
                { name: "Mistnov (Hotel Booking) - Freelance", type: "Hotel Booking Software UI", url: "https://www.behance.net/gallery/205870419/Mistnov" },
                { name: "Algominds (Code learning platform)", type: "Developer Code Learning Platform", url: "https://www.behance.net/gallery/208198007/Algominds" }
            ]
        },
        motion: {
            title: "Motion Graphics Showcase",
            desc: "Smooth interaction animations, vector motion graphics, and animated UI storytelling flow designs that bring interfaces to life.",
            cover: manime,
            items: [
                { name: "RD Vault", type: "Business Portfolio Promo Clip", url: "https://drive.google.com/file/d/1xhBDm_9E7inj9u2i5SKas1tiVPWBe_cn/view?usp=sharing" },
                { name: "GG Excel", type: "Business Portfolio Promo Clip", url: "https://drive.google.com/file/d/1zNEISufevJQYwiYWM5kY3ppGqL0E33KF/view" }
            ]
        },
        threeD: {
            title: "3D Animation Work",
            desc: "Detailed static modeling meshes, dynamic low-poly environments, and interactive Web3 3D visual setups developed via Blender and Spline.",
            cover: threeD,
            items: [
                { name: "Winter Falls", type: "Low poly animation ", url: "https://drive.google.com/file/d/1bY_IJ9-j5qRLcUO70GuiEmp907Z-wI4F/view" },
                { name: "Phoneix Bird", type: "Low poly animation ", url: "https://drive.google.com/file/d/1fvthm8s8gaUEzqzAE-cF-PADXcgndxEi/view" }
            ]
        }
    };

    const project = data[cat];

    return (
        <div className="flex flex-col bg-white text-black font-sans text-xs select-text h-full">
            {/* Top Banner Cover */}
            <div
                className="h-28 overflow-hidden relative select-none cursor-zoom-in group"
                onClick={() => onExpandImage && onExpandImage(project.cover, project.title)}
                title="Click to expand full screen in workstation canvas"
            >
                <img src={project.cover} alt="Cover" className="w-full h-full object-cover grayscale brightness-90 filter contrast-125 group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/25 transition-colors" />
                <div className="absolute bottom-2.5 left-3 text-white font-bold text-base drop-shadow-md tracking-wide">
                    {project.title}
                </div>
                <div className="absolute top-2 right-2 bg-black/75 text-white text-[8px] font-mono px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    🔍 Click to Zoom
                </div>
            </div>

            <div className="p-4 flex flex-col flex-1 leading-normal select-text">
                <p className="text-gray-600 mb-4 select-text">{project.desc}</p>

                <h4 className="font-mono font-bold text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-1.5 mb-2.5 select-none">
                    📋 Available Project Files
                </h4>

                <div className="flex-1 flex flex-col gap-2 select-text max-h-[160px] overflow-y-auto mb-4 pr-1">
                    {project.items.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200 hover:border-black rounded transition-all group"
                        >
                            <div className="flex flex-col">
                                <span className="font-bold text-black group-hover:text-[#FF4D00]">{item.name}</span>
                                <span className="text-[9px] text-gray-400 leading-none mt-0.5">{item.type}</span>
                            </div>
                            <span className="text-[10px] font-bold text-[#FF4D00] flex items-center gap-0.5 group-hover:underline">
                                Launch File <ArrowOutwardIcon className="text-[12px]" />
                            </span>
                        </a>
                    ))}
                </div>

                <div className="flex gap-2 select-none border-t border-gray-200 pt-3">
                    <button
                        onClick={() => onOpenGallery && onOpenGallery(cat)}
                        className="flex-1 bg-black text-white hover:bg-gray-800 font-bold py-2 text-center text-[10px] tracking-wide active:translate-y-[1px] cursor-pointer shadow-[2px_2px_0_0_#ccc] active:shadow-none transition-all rounded"
                    >
                        Open Category Gallery ➔
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-black hover:bg-gray-100 font-bold text-black text-center text-[10px] cursor-pointer rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

// SUB-COMPONENT: Dedicated Category Gallery Explorer Window inside Workspace
const CategoryGalleryView = ({ cat, onClose, onExpandImage }) => {
    if (!cat) return null;

    const projectCollections = {
        uiux: {
            title: "UI/UX Design Projects",
            desc: "Intuitive, clean, and system-driven interface case designs built mainly for enterprise-grade ERP architectures and dashboards.",
            items: [
                { name: "Ramachandran Hospitality", type: "Hospitality Website Case Study", url: "https://www.behance.net/gallery/254825315/Hospitality", img: ehos, tag: "Hospitality" },
                { name: "Ramachandran Education", type: "University Web Portal UI Layouts", url: "https://www.behance.net/gallery/254783717/Education-Website", img: eedu, tag: "Academic" },
                { name: "Good Fellows (Healthcare)", type: "High-Fidelity Social UI / Healthcare", url: "https://www.behance.net/gallery/254562389/Healthcare", img: caretaker, tag: "Social" },
                { name: "Travel Guide (HAJJ Travel)", type: "Travel & Tourism App", url: "https://www.behance.net/gallery/254786435/Travel-Tourism", img: hajj, tag: "Travel" },
                { name: "QODORA (Medical Insurance)", type: "Medical Insurance App Prototype", url: "https://www.behance.net/gallery/250527775/Qodora", img: qodora, tag: "Medical" },
                { name: "Solar Energy Management", type: "Energy Management Dashboard", url: "https://www.behance.net/gallery/254784961/Solar-Energy-Management", img: solar, tag: "Dashboard" },
                { name: "Signex (Enterprise)", type: "Enterprise ERP Dashboard Case", url: "https://www.behance.net/gallery/237202087/Signex-ERP-App-UIUX-Product-Design-Case-Study", img: awalPlastics, tag: "ERP" },
                { name: "Sports Reform", type: "Sports Performance Web Wires", url: "https://www.behance.net/gallery/205963977/Sports-Reform-website-ui-design", img: sports, tag: "Sports" },
                { name: "Guvi Learning Platform", type: "EdTech Learning Platform", url: "https://www.behance.net/gallery/240490215/Learning-Course-Landing-Page", img: kuvi, tag: "EdTech" },
                { name: "Lightup Temple (Booking Pooja)", type: "SaaS Temple Booking Portal", url: "https://www.behance.net/gallery/205956803/Lightup-Temples-website-ui-design", img: lightup, tag: "SaaS" },
                { name: "Mistnov (Hotel Booking) - Freelance", type: "Hotel Booking Software UI", url: "https://www.behance.net/gallery/205870419/Mistnov", img: mist, tag: "Travel" },
                { name: "Algominds (Code learning platform)", type: "Developer Code Learning Platform", url: "https://www.behance.net/gallery/208198007/Algominds", img: algominds, tag: "EdTech" }
            ]
        },
        motion: {
            title: "Motion Graphics Collection",
            desc: "Smooth interaction animations, vector motion graphics, and animated UI storytelling flow designs that bring interfaces to life.",
            items: [
                { name: "GG Excel Promo Clip", type: "Business Portfolio Video Clip", url: "https://drive.google.com/file/d/1zNEISufevJQYwiYWM5kY3ppGqL0E33KF/view?usp=sharing", img: gg, tag: "Portfolio" },
                { name: "Colan Motion Flow", type: "Business Portfolio Promo Flow", url: "https://drive.google.com/file/d/1q805u7svkQXsZR1X0vNXLi_e3qXpRtqT/view?usp=sharing", img: colan, tag: "Corporate" },
                { name: "M2A Media Campaign", type: "High Engagement Social Clip", url: "https://drive.google.com/file/d/1nX0Pn4Au9s7_j11pEC66QcJ8Nmkef1G6/view?usp=sharing", img: m2a, tag: "Social" },
                { name: "RDvault Promo Clip", type: "Business Portfolio Promo Clip", url: "https://drive.google.com/file/d/1xhBDm_9E7inj9u2i5SKas1tiVPWBe_cn/view?usp=sharing", img: rd, tag: "Corporate" },
                { name: "Wheels On The Busses", type: "Interactive 2D Animation Series", url: "https://drive.google.com/file/d/1LzvYdjfIV-uUuX97nLvMvMVRNmqdyrYl/view?usp=sharing", img: bus, tag: "2D Anim" },
                { name: "IV Universe Brand Wires", type: "Corporate Brand Portfolio Wires", url: "https://drive.google.com/file/d/1GWDEJwW-luKzvyvPJsOicAsp_W3-9n5u/view?usp=sharing", img: ivuniverse, tag: "Corporate" },
                { name: "Five Little Monkeys", type: "Children's Song 2D Animation", url: "https://drive.google.com/file/d/1m4KZ86zVMJi3U5enJihjhKunSr3KBzuY/view?usp=sharing", img: fivelittlemonkeys, tag: "2D Anim" },
                { name: "Colan Logo Intro", type: "Chiptune Logo Micro Interaction", url: "https://drive.google.com/file/d/1cEn-GYOkmVdHkFMEHbAW9piKeb-OJoJL/view?usp=sharing", img: colanlogo, tag: "Logo Anim" },
                { name: "Dark Devil Title Flow", type: "Dramatic Movie Title Animation", url: "https://drive.google.com/file/d/1yQBwTf8HCnYoCfcBGhfTPUwvWQ0lTAIm/view?usp=sharing", img: darkdevil, tag: "Movie" },
                { name: "Pathu Thala Title Flow", type: "Recreated Title Flow Concept", url: "https://drive.google.com/file/d/1eJxCFqKyss8TSSJU7FV_pXPuj0DZdRxe/view?usp=sharing", img: pathuthala, tag: "Movie" },
                { name: "Trinity Title Flow", type: "Isometric 3D Title Flow Concept", url: "https://drive.google.com/file/d/1plZcVTHX5Z3dYmx45b0gJKq6J4tdMzyk/view?usp=sharing", img: trinity, tag: "3D Anim" }
            ]
        },
        threeD: {
            title: "3D Animation Works",
            desc: "Detailed static modeling meshes, dynamic low-poly environments, and interactive Web3 3D visual setups developed via Blender.",
            items: [
                { name: "Phoneix Bird", type: "Blender Asset Pack Modeling", url: "https://drive.google.com/file/d/1fvthm8s8gaUEzqzAE-cF-PADXcgndxEi/view?usp=sharing", img: phoneix, tag: "3D Mesh" },
                { name: "Winter Scene", type: "Low-Poly Environment Scene", url: "https://drive.google.com/file/d/1bY_IJ9-j5qRLcUO70GuiEmp907Z-wI4F/view?usp=sharing", img: winter, tag: "Renders" }
            ]
        }
    };

    const project = projectCollections[cat];

    return (
        <div className="flex flex-col bg-[#dfdfdf] text-black font-sans text-xs select-text h-full border-t border-t-white">
            {/* Top Banner Control Panel info */}
            <div className="bg-black text-[#39ff14] font-mono text-[9px] px-3.5 py-1.5 flex justify-between items-center select-none shadow-[inset_0_0_4px_#000] border-b border-gray-600">
                <span>COLLECTION EXPLORER: {cat.toUpperCase()}_PROJECTS</span>
                <span className="animate-pulse">● {project.items.length} OBJECTS LOADED</span>
            </div>

            {/* Description Panel */}
            <div className="bg-[#f0f0f0] border-b border-gray-400 p-3 select-text leading-relaxed">
                <p className="text-gray-700 font-mono text-[10px] mb-0.5 uppercase font-bold tracking-tight select-none">📌 DIRECTORY STATEMENT:</p>
                <p className="text-gray-900 select-text text-[11px] font-sans">{project.desc}</p>
            </div>

            {/* Scrollable Project Cards Grid */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#c0c0c0]" style={{ maxHeight: "100%" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pb-2">
                    {project.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 hover:border-black rounded p-2 flex flex-col justify-between gap-2 shadow-[2px_2px_0_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-transform group"
                        >
                            <div className="flex flex-col gap-1.5">
                                {/* Image Thumbnail */}
                                <div
                                    className="w-full h-24 overflow-hidden rounded border border-gray-200 relative select-none cursor-zoom-in group-hover:brightness-105 transition-all"
                                    onClick={() => onExpandImage && onExpandImage(item.img, item.name)}
                                    title="Click to zoom fullscreen in workstation canvas"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-300"
                                    />
                                    <div className="absolute top-1 right-1 bg-black/85 text-white font-mono text-[7px] px-1 py-0.5 rounded tracking-wide border border-white/20 select-none uppercase">
                                        {item.tag}
                                    </div>
                                </div>

                                <div className="px-0.5">
                                    <h3 className="font-bold text-black text-xs group-hover:text-[#FF4D00] truncate leading-tight select-text">
                                        {item.name}
                                    </h3>
                                    <p className="text-[9px] text-gray-500 font-medium truncate select-text">
                                        {item.type}
                                    </p>
                                </div>
                            </div>

                            {/* Action Button */}
                            {item.isRouter ? (
                                <Link
                                    to={item.url}
                                    className="w-full py-1.5 bg-[#dfdfdf] border border-t-white border-l-white border-b-gray-700 border-r-gray-700 text-center font-bold text-[9px] text-[#FF4D00] flex items-center justify-center gap-0.5 select-none hover:bg-gray-100 active:border-b-white active:border-r-white active:border-t-gray-700 active:border-l-gray-700 rounded"
                                >
                                    Open Machine Page <ArrowOutwardIcon className="text-[10px]" />
                                </Link>
                            ) : item.url ? (
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-1.5 bg-[#dfdfdf] border border-t-white border-l-white border-b-gray-700 border-r-gray-700 text-center font-bold text-[9px] text-black flex items-center justify-center gap-0.5 select-none group-hover:bg-[#FF4D00] group-hover:text-white hover:border-black active:border-b-white active:border-r-white active:border-t-gray-700 active:border-l-gray-700 rounded"
                                >
                                    Launch Project Wires <ArrowOutwardIcon className="text-[10px]" />
                                </a>
                            ) : (
                                <div className="w-full py-1.5 bg-[#dfdfdf] border border-gray-300 text-center font-mono text-[9px] text-gray-400 select-none rounded">
                                    FILE OFFLINE: LOCAL ONLY
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer operations bar */}
            <div className="p-3 bg-[#c0c0c0] border-t-2 border-t-white flex gap-2 select-none justify-end">
                <button
                    onClick={onClose}
                    className="px-6 py-1.5 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 font-bold text-[10px] cursor-pointer hover:bg-gray-200 active:border-b-white active:border-r-white active:border-t-gray-800 active:border-l-gray-800 rounded"
                >
                    ✕ Close File
                </button>
            </div>
        </div>
    );
};