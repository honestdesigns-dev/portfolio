import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

// Assets from existing structure
import Figma from "../assets/fig.png";
import Ae from "../assets/ae.png";
import Ai from "../assets/ai.png";
import Ps from "../assets/ps.png";
import Pr from "../assets/pr.png";
import Blender from "../assets/blender.png";
import Spline from "../assets/spline.png";
import ReactLogo from "../assets/react.svg";
import designui from "../assets/designui.png";
import uiux from "../assets/uid.jpg";
import manime from "../assets/manime.jpg";
import threeD from "../assets/3dd.jpg";
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
import courtyardApocalypse from "../assets/projects/courtyard_apocalypse.mp3";

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

export default function Hero() {
    const [theme, setTheme] = useState("win98");
    const [wallpaperPattern, setWallpaperPattern] = useState("grid");
    const [crtScanlines, setCrtScanlines] = useState(true);
    const [crtStrength, setCrtStrength] = useState(0.25);
    const [isShutDown, setIsShutDown] = useState(false);

    // Desktop Windows Control
    const [openWindows, setOpenWindows] = useState({
        readme: true,
        projects: false,
        winamp: false,
        settings: false,
        terminal: false,
        projDetail: false,
        gallery: false,
    });

    const [minimizedWindows, setMinimizedWindows] = useState({
        readme: false,
        projects: false,
        winamp: false,
        settings: false,
        terminal: false,
        projDetail: false,
        gallery: false,
    });

    const [maximizedWindows, setMaximizedWindows] = useState({
        readme: false,
        projects: false,
        winamp: false,
        settings: false,
        terminal: false,
        projDetail: false,
        gallery: false,
    });

    const [activeWindow, setActiveWindow] = useState("readme");
    const [selectedProjCat, setSelectedProjCat] = useState(null);
    const [zoomImage, setZoomImage] = useState(null);
    const [zoomTitle, setZoomTitle] = useState("");

    const [zIndices, setZIndices] = useState({
        readme: 10,
        projects: 10,
        winamp: 10,
        settings: 10,
        terminal: 10,
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
            className={`fixed w-full h-[calc(100vh-80px)] top-20 left-0 right-0 mt-0 mb-0 overflow-hidden flex flex-col transition-all duration-300 border-t-4 border-b-4 border-x-0 border-black rounded-none shadow-2xl p-0`}
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

            {/* DESKTOP WORKSPACE */}
            <div className="flex-1 w-full p-4 md:p-6 relative flex flex-row md:flex-col flex-wrap content-start items-start justify-start gap-4 md:gap-8 z-10 overflow-y-auto">
                {/* Folder / File Icons */}
                <DesktopIcon
                    label="welcome_readme.txt"
                    icon="📄"
                    themeStyles={activeStyles}
                    onClick={() => openApp("readme")}
                />
                <DesktopIcon
                    label="portfolio_projects"
                    icon="📂"
                    themeStyles={activeStyles}
                    onClick={() => openApp("projects")}
                />
                <DesktopIcon
                    label="retro_winamp.exe"
                    icon="📻"
                    themeStyles={activeStyles}
                    onClick={() => openApp("winamp")}
                />
                <DesktopIcon
                    label="linkedin_profile.lnk"
                    icon="🔗"
                    themeStyles={activeStyles}
                    onClick={() => window.open("https://www.linkedin.com/in/honestraj-vijay/", "_blank")}
                />
                <DesktopIcon
                    label="terminal_prompt.exe"
                    icon="📟"
                    themeStyles={activeStyles}
                    onClick={() => openApp("terminal")}
                />
                <DesktopIcon
                    label="settings_control.exe"
                    icon="⚙️"
                    themeStyles={activeStyles}
                    onClick={() => openApp("settings")}
                />

                {/* DRAGGABLE APP WINDOWS (Large screens / Desktop view) */}
                <div className="absolute inset-0 pointer-events-none hidden md:block z-20">

                    {/* WINDOW 1: README NOTEPAD */}
                    <AnimateWindow
                        isOpen={openWindows.readme && !minimizedWindows.readme}
                        isMaximized={maximizedWindows.readme}
                        zIndex={zIndices.readme}
                        title="welcome_readme.txt - Notepad"
                        winName="readme"
                        activeWindow={activeWindow}
                        activeStyles={activeStyles}
                        desktopRef={desktopRef}
                        focusWindow={focusWindow}
                        toggleMinimize={toggleMinimize}
                        toggleMaximize={toggleMaximize}
                        closeApp={closeApp}
                        initialX={60}
                        initialY={40}
                        width="560px"
                    >
                        <div className="p-5 bg-white text-black h-full overflow-y-auto leading-relaxed select-text font-mono text-xs md:text-sm">
                            <div className="border-b-2 border-black pb-2 mb-4">
                                <h1 className="text-xl md:text-2xl font-black text-black">Welcome to HonestOS v1.0!</h1>
                                <p className="text-gray-500 text-[10px] mt-1 font-bold">CREATED BY: HONESTRAJ // PRODUCT DESIGNER</p>
                            </div>

                            <p className="mb-4">
                                I'm a passionate <span className="text-[#FF4D00] font-extrabold uppercase">UI/UX Product Designer</span> with 4+ years of hands-on experience, specialising in translating intricate user needs into neat, satisfying interfaces that elevate complex enterprise workflows.
                            </p>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4 font-sans text-xs text-gray-700">
                                <p className="font-bold mb-1">💡 Interactive Workstation Instructions:</p>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li>Double-click or tap icons on the desktop to launch apps.</li>
                                    <li>Click and drag window title bars to move them around the workspace.</li>
                                    <li>Open <span className="font-bold underline cursor-pointer text-[#FF4D00]" onClick={() => openApp("projects")}>portfolio_projects</span> to easily browse custom designs!</li>
                                    <li>Play 8-bit chip tunes and visualize the spectrum using <span className="font-bold underline cursor-pointer text-[#FF4D00]" onClick={() => openApp("winamp")}>retro_winamp.exe</span>.</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-2 p-3 bg-gray-50 border border-gray-300 font-mono text-xs rounded mb-4">
                                <div>🌐 SYSTEM CORE INFORMATION:</div>
                                <div className="text-gray-600">Location: Chennai, India</div>
                                <div className="text-gray-600">Primary Focus: UI/UX Designs, Branding, Video Animation</div>
                                <div className="text-gray-600">Active Workstation status: Online & Ready for start-ups</div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => openApp("projects")}
                                    className="bg-black text-white hover:bg-gray-800 transition-all font-sans font-bold px-4 py-2 border-2 border-black active:translate-y-[1px] text-xs shadow-[3px_3px_0_0_#ccc] active:shadow-none"
                                >
                                    Browse Projects ➔
                                </button>
                                <Link
                                    to="/resume"
                                    className="bg-white text-black hover:bg-gray-100 transition-all font-sans font-bold px-4 py-2 border-2 border-black active:translate-y-[1px] text-xs shadow-[3px_3px_0_0_#000] active:shadow-none"
                                >
                                    View My Resume ➔
                                </Link>
                            </div>
                        </div>
                    </AnimateWindow>

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
                                ℹ️ Double-click or click any folder icon above to launch a responsive in-browser previews screen. You will have a fast-loading workspace designed for premium project handling.
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

                    {/* WINDOW 3: RETRO WINAMP AUDIO PLAYER */}
                    <AnimateWindow
                        isOpen={openWindows.winamp && !minimizedWindows.winamp}
                        isMaximized={maximizedWindows.winamp}
                        zIndex={zIndices.winamp}
                        title="Winamp v2.76 - Retro Media Player"
                        winName="winamp"
                        activeWindow={activeWindow}
                        activeStyles={activeStyles}
                        desktopRef={desktopRef}
                        focusWindow={focusWindow}
                        toggleMinimize={toggleMinimize}
                        toggleMaximize={toggleMaximize}
                        closeApp={closeApp}
                        initialX={360}
                        initialY={100}
                        width="380px"
                    >
                        <SoundboardWinamp />
                    </AnimateWindow>



                    {/* WINDOW 5: RETRO CMD TERMINAL PROMPT */}
                    <AnimateWindow
                        isOpen={openWindows.terminal && !minimizedWindows.terminal}
                        isMaximized={maximizedWindows.terminal}
                        zIndex={zIndices.terminal}
                        title="C:\\WINDOWS\\SYSTEM32\\CMD.EXE"
                        winName="terminal"
                        activeWindow={activeWindow}
                        activeStyles={activeStyles}
                        desktopRef={desktopRef}
                        focusWindow={focusWindow}
                        toggleMinimize={toggleMinimize}
                        toggleMaximize={toggleMaximize}
                        closeApp={closeApp}
                        initialX={110}
                        initialY={210}
                        width="550px"
                    >
                        <RetroTerminal activeTheme={theme} />
                    </AnimateWindow>

                    {/* WINDOW 6: WORKSTATION SETTINGS CONTROL */}
                    <AnimateWindow
                        isOpen={openWindows.settings && !minimizedWindows.settings}
                        isMaximized={maximizedWindows.settings}
                        zIndex={zIndices.settings}
                        title="Workstation Control Panel"
                        winName="settings"
                        activeWindow={activeWindow}
                        activeStyles={activeStyles}
                        desktopRef={desktopRef}
                        focusWindow={focusWindow}
                        toggleMinimize={toggleMinimize}
                        toggleMaximize={toggleMaximize}
                        closeApp={closeApp}
                        initialX={320}
                        initialY={60}
                        width="450px"
                    >
                        <div className="p-4 bg-[#f0f0f0] text-black h-full overflow-y-auto text-xs font-mono select-none">
                            <div className="border-b border-gray-400 pb-2 mb-4">
                                <h3 className="text-sm font-bold flex items-center gap-1.5">🛠️ Workstation Configuration Panel</h3>
                            </div>

                            <div className="space-y-4">
                                {/* Theme Cycler */}
                                <div className="p-3 border border-gray-400 bg-white shadow-[1px_1px_0_0_#000]">
                                    <span className="font-bold block text-gray-700 font-mono text-[9px] mb-1.5">VISUAL WORKSPACE SKIN</span>
                                    <div className="flex gap-2">
                                        {["win98", "synthwave", "macOS"].map((t) => (
                                            <button
                                                key={t}
                                                onClick={() => setTheme(t)}
                                                className={`px-3 py-1 cursor-pointer font-bold border transition-all ${theme === t
                                                    ? "bg-black text-white border-black"
                                                    : "bg-[#e0e0e0] border-gray-400 text-black hover:bg-gray-200"
                                                    }`}
                                            >
                                                {t.toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Wallpaper Scheme */}
                                <div className="p-3 border border-gray-400 bg-white shadow-[1px_1px_0_0_#000]">
                                    <span className="font-bold block text-gray-700 font-mono text-[9px] mb-1.5">DESKTOP WALLPAPER STYLE</span>
                                    <div className="flex gap-2">
                                        {["grid", "solid"].map((styleOpt) => (
                                            <button
                                                key={styleOpt}
                                                onClick={() => setWallpaperPattern(styleOpt)}
                                                className={`px-3 py-1 cursor-pointer font-bold border transition-all ${wallpaperPattern === styleOpt
                                                    ? "bg-black text-white border-black"
                                                    : "bg-[#e0e0e0] border-gray-400 text-black hover:bg-gray-200"
                                                    }`}
                                            >
                                                {styleOpt.toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* CRT Scanline Filter Controls */}
                                <div className="p-3 border border-gray-400 bg-white shadow-[1px_1px_0_0_#000]">
                                    <span className="font-bold block text-gray-700 font-mono text-[9px] mb-1.5">CRT TUBE SCANLINES FILTER</span>
                                    <div className="flex flex-col gap-2.5">
                                        <label className="flex items-center gap-2 font-bold cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={crtScanlines}
                                                onChange={() => setCrtScanlines(!crtScanlines)}
                                                className="cursor-pointer"
                                            />
                                            <span>Enable CRT Phosphor Tube Overlay</span>
                                        </label>

                                        {crtScanlines && (
                                            <div className="flex items-center gap-2">
                                                <span>Opacity:</span>
                                                <input
                                                    type="range"
                                                    min="0.05"
                                                    max="0.65"
                                                    step="0.05"
                                                    value={crtStrength}
                                                    onChange={(e) => setCrtStrength(Number(e.target.value))}
                                                    className="flex-1 cursor-pointer"
                                                />
                                                <span className="w-10 text-right">{(crtStrength * 100).toFixed(0)}%</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 border-t border-gray-300 pt-3 text-[10px] text-gray-500 flex justify-between items-center">
                                <span>Kernel version: 1.0.1998</span>
                                <span>Workstation diagnostic: OPTIMAL</span>
                            </div>
                        </div>
                    </AnimateWindow>
                </div>

                {/* MOBILE LAYOUT STACKED PANELS (Visible on mobile/tablet screens) */}
                <div className="w-full md:hidden flex flex-col gap-6 mt-4 z-10 select-none">

                    {/* Mobile Folder Navigation */}
                    <div className={`p-4 ${activeStyles.windowBg} rounded text-black`}>
                        <div className="font-mono text-xs font-bold border-b border-gray-300 pb-2 mb-3">📁 Workstation Folder Explorer</div>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => {
                                    setSelectedProjCat("uiux");
                                    openApp("projDetail");
                                }}
                                className="flex items-center gap-2 p-2 bg-white border border-gray-300 rounded text-left active:scale-95 cursor-pointer"
                            >
                                <span>📂</span>
                                <span className="font-mono text-[10px] font-bold">UI/UX</span>
                            </button>
                            <button
                                onClick={() => {
                                    setSelectedProjCat("motion");
                                    openApp("projDetail");
                                }}
                                className="flex items-center gap-2 p-2 bg-white border border-gray-300 rounded text-left active:scale-95 cursor-pointer"
                            >
                                <span>📂</span>
                                <span className="font-mono text-[10px] font-bold">Motion</span>
                            </button>
                            <button
                                onClick={() => {
                                    setSelectedProjCat("threeD");
                                    openApp("projDetail");
                                }}
                                className="flex items-center gap-2 p-2 bg-white border border-gray-300 rounded text-left active:scale-95 cursor-pointer"
                            >
                                <span>📂</span>
                                <span className="font-mono text-[10px] font-bold">3D Anim</span>
                            </button>
                            <a
                                href="https://www.linkedin.com/in/honestraj-vijay/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 p-2 bg-white border border-gray-300 rounded text-left active:scale-95 cursor-pointer no-underline text-black"
                            >
                                <span>🔗</span>
                                <span className="font-mono text-[10px] font-bold">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Welcome Screen - Notepad */}
                    {openWindows.readme && (
                        <div className={`w-full overflow-hidden ${activeStyles.windowBg}`}>
                            <div className={activeStyles.windowTitle}>
                                <span>📄 welcome_readme.txt</span>
                                <button onClick={(e) => closeApp("readme", e)} className={activeStyles.windowButton}>✕</button>
                            </div>
                            <div className="p-4 bg-white text-black leading-relaxed font-mono text-xs flex flex-col gap-3">
                                <h2 className="text-sm font-black border-b border-black pb-1">Honestraj // UI/UX Designer</h2>
                                <p>
                                    I'm a responsive Product Designer with 4+ years of expertise. I build scalable digital solutions for start-ups and ERP databases.
                                </p>
                                <div className="bg-gray-100 p-2.5 border border-dashed border-gray-400 rounded text-[10px] text-gray-600">
                                    ⚡ Chennai, India. Active in building motion graphics, creative scripts, and 3D modeling interfaces.
                                </div>
                                <div className="flex gap-2 mt-1">
                                    <button
                                        onClick={() => openApp("projects")}
                                        className="flex-1 bg-black text-white text-center font-bold font-sans py-2 text-[10px]"
                                    >
                                        Projects Folder
                                    </button>
                                    <Link
                                        to="/resume"
                                        className="flex-1 bg-white border border-black text-black text-center font-bold font-sans py-2 text-[10px]"
                                    >
                                        View Resume
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Project Previews Detail Mobile */}
                    {openWindows.projDetail && (
                        <div className={`w-full overflow-hidden ${activeStyles.windowBg}`}>
                            <div className={activeStyles.windowTitle}>
                                <span>📂 {selectedProjCat ? selectedProjCat.toUpperCase() : "Preview"}</span>
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
                        </div>
                    )}

                    {/* Project Gallery Mobile */}
                    {openWindows.gallery && (
                        <div className={`w-full overflow-hidden ${activeStyles.windowBg}`}>
                            <div className={activeStyles.windowTitle}>
                                <span>🎛️ Category Gallery - {selectedProjCat ? selectedProjCat.toUpperCase() : "Gallery"}</span>
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
                        </div>
                    )}

                    {/* Mobile Winamp */}
                    {openWindows.winamp && (
                        <div className={`w-full overflow-hidden ${activeStyles.windowBg}`}>
                            <div className={activeStyles.windowTitle}>
                                <span>📻 retro_winamp.exe</span>
                                <button onClick={(e) => closeApp("winamp", e)} className={activeStyles.windowButton}>✕</button>
                            </div>
                            <div className="bg-[#1c1c22]">
                                <SoundboardWinamp />
                            </div>
                        </div>
                    )}



                    {/* Mobile Settings */}
                    {openWindows.settings && (
                        <div className={`w-full overflow-hidden ${activeStyles.windowBg}`}>
                            <div className={activeStyles.windowTitle}>
                                <span>⚙️ settings.exe</span>
                                <button onClick={(e) => closeApp("settings", e)} className={activeStyles.windowButton}>✕</button>
                            </div>
                            <div className="p-4 bg-white text-black flex flex-col gap-3 font-mono text-[10px]">
                                <div className="font-bold text-[#FF4D00]">Workstation Themes:</div>
                                <div className="flex gap-2">
                                    {["win98", "synthwave", "macOS"].map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setTheme(t)}
                                            className={`flex-1 font-bold py-1 border text-center ${theme === t ? "bg-black text-white" : "bg-[#f0f0f0] border-gray-300"
                                                }`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                                <label className="flex items-center gap-1.5 font-bold cursor-pointer mt-2">
                                    <input
                                        type="checkbox"
                                        checked={crtScanlines}
                                        onChange={() => setCrtScanlines(!crtScanlines)}
                                    />
                                    <span>Enable CRT Scanline Filter</span>
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* TASKBAR */}
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

                    {/* Running Tabs on Taskbar (large screens only) */}
                    <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-[500px]">
                        {openWindows.readme && (
                            <button
                                onClick={() => toggleMinimize("readme")}
                                className={minimizedWindows.readme ? activeStyles.inactiveTab : activeStyles.activeTab}
                            >
                                📄 welcome_readme.txt
                            </button>
                        )}
                        {openWindows.projects && (
                            <button
                                onClick={() => toggleMinimize("projects")}
                                className={minimizedWindows.projects ? activeStyles.inactiveTab : activeStyles.activeTab}
                            >
                                📂 portfolio_projects
                            </button>
                        )}
                        {openWindows.winamp && (
                            <button
                                onClick={() => toggleMinimize("winamp")}
                                className={minimizedWindows.winamp ? activeStyles.inactiveTab : activeStyles.activeTab}
                            >
                                📻 retro_winamp.exe
                            </button>
                        )}

                        {openWindows.terminal && (
                            <button
                                onClick={() => toggleMinimize("terminal")}
                                className={minimizedWindows.terminal ? activeStyles.inactiveTab : activeStyles.activeTab}
                            >
                                📟 terminal.exe
                            </button>
                        )}
                        {openWindows.settings && (
                            <button
                                onClick={() => toggleMinimize("settings")}
                                className={minimizedWindows.settings ? activeStyles.inactiveTab : activeStyles.activeTab}
                            >
                                ⚙️ settings.exe
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
                                    <span className="font-bold block text-gray-500 font-mono text-[9px] mb-1">WALLPAPER SCHEME</span>
                                    <button
                                        onClick={cycleTheme}
                                        className="w-full text-left font-bold py-1 px-2 border hover:bg-gray-100 flex items-center justify-between cursor-pointer border-gray-300"
                                    >
                                        <span>🎨 Change Workspace Skin</span>
                                        <span className="bg-[#ff4a7d]/10 text-[#ff4a7d] px-1.5 py-0.5 rounded text-[10px] uppercase font-mono font-black">
                                            {theme}
                                        </span>
                                    </button>
                                </div>

                                <div className="py-1">
                                    <StartMenuLink
                                        icon="📄"
                                        label="welcome_readme.txt"
                                        onClick={() => { openApp("readme"); setIsStartMenuOpen(false); }}
                                    />
                                    <StartMenuLink
                                        icon="📂"
                                        label="portfolio_projects (Folders)"
                                        onClick={() => { openApp("projects"); setIsStartMenuOpen(false); }}
                                    />
                                    <StartMenuLink
                                        icon="📻"
                                        label="retro_winamp.exe (Player)"
                                        onClick={() => { openApp("winamp"); setIsStartMenuOpen(false); }}
                                    />
                                    <StartMenuLink
                                        icon="🔗"
                                        label="linkedin_profile.lnk"
                                        onClick={() => { window.open("https://www.linkedin.com/in/honestraj-vijay/", "_blank"); setIsStartMenuOpen(false); }}
                                    />
                                    <StartMenuLink
                                        icon="📟"
                                        label="terminal_prompt.exe (CMD)"
                                        onClick={() => { openApp("terminal"); setIsStartMenuOpen(false); }}
                                    />
                                    <StartMenuLink
                                        icon="⚙️"
                                        label="settings_control.exe"
                                        onClick={() => { openApp("settings"); setIsStartMenuOpen(false); }}
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
                            ℹ️ Click outside or tap close button to return to workspace workstation.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

// SUB-COMPONENT: DesktopIcon
const DesktopIcon = ({ label, icon, onClick, themeStyles }) => {
    return (
        <div
            onClick={onClick}
            className="flex flex-col items-center justify-center p-2 rounded cursor-pointer w-20 hover:bg-white/10 active:scale-95 transition-all text-center select-none z-10"
        >
            <div className="text-3xl filter drop-shadow-md leading-none mb-1.5">{icon}</div>
            <span className={themeStyles.iconText}>{label}</span>
        </div>
    );
};

// SUB-COMPONENT: ProjectFolderIcon (Explorer style folder links)
const ProjectFolderIcon = ({ label, imgSrc, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="flex flex-col items-center justify-center p-3 hover:bg-blue-100 hover:outline hover:outline-1 hover:outline-blue-400 rounded cursor-pointer select-none group"
        >
            <div className="w-14 h-14 bg-white border border-gray-300 rounded p-1 shadow-sm mb-2 relative overflow-hidden group-hover:scale-105 transition-transform flex items-center justify-center">
                {imgSrc ? (
                    <img src={imgSrc} alt={label} className="w-full h-full object-cover rounded" />
                ) : (
                    <span className="text-3xl">📁</span>
                )}
                <div className="absolute inset-0 bg-yellow-500/10 group-hover:opacity-0 transition-opacity" />
            </div>
            <span className="font-mono text-[9px] font-bold tracking-tight text-center leading-tight truncate w-full text-black">
                {label}
            </span>
        </div>
    );
};

// SUB-COMPONENT: Draggable Window Shell frame container
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
            hours = hours ? hours : 12; // 0 should be 12
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

// SUB-COMPONENT: Canvas Pixel Drawing Paint widget
const RetroPaint = () => {
    const canvasRef = useRef(null);
    const [color, setColor] = useState("#000000");
    const [brushSize, setBrushSize] = useState(4);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Set height correctly
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width || 420;
        canvas.height = rect.height || 260;

        // Fill background
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, []);

    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();

        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);

        if (!clientX || !clientY) return;

        const x = clientX - rect.left;
        const y = clientY - rect.top;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
        setIsDrawing(true);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();

        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);

        if (!clientX || !clientY) return;

        const x = clientX - rect.left;
        const y = clientY - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    return (
        <div className="flex flex-col h-full bg-[#f0f0f0] p-1.5 font-mono text-[10px] text-black">
            {/* Paint Toolbar buttons */}
            <div className="flex items-center gap-2 pb-2 mb-1.5 border-b border-gray-400 flex-wrap">
                <span className="font-bold">Palette:</span>
                <div className="flex gap-1 border border-gray-300 p-0.5 bg-white">
                    {["#000000", "#ff0000", "#0000ff", "#00ff00", "#ffff00", "#ffffff"].map((c) => (
                        <button
                            key={c}
                            onClick={() => setColor(c)}
                            style={{ backgroundColor: c }}
                            className={`w-4 h-4 border cursor-pointer ${color === c ? "border-2 border-black outline outline-1 outline-blue-500" : "border-gray-400"
                                }`}
                            title={c === "#ffffff" ? "Eraser Tool" : c}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-1">
                    <span>Brush:</span>
                    <select
                        value={brushSize}
                        onChange={(e) => setBrushSize(Number(e.target.value))}
                        className="bg-white border border-gray-300 text-[10px] py-0.5 px-1 outline-none cursor-pointer"
                    >
                        <option value={2}>Small (2px)</option>
                        <option value={4}>Medium (4px)</option>
                        <option value={8}>Large (8px)</option>
                        <option value={15}>Extra (15px)</option>
                    </select>
                </div>
                <button
                    onClick={clearCanvas}
                    className="ml-auto px-2.5 py-0.5 border border-gray-500 bg-white hover:bg-gray-100 active:bg-gray-200 cursor-pointer shadow-[1px_1px_0px_0px_#000]"
                >
                    Clear
                </button>
            </div>

            {/* Paint Canvas Sheet grid */}
            <div className="flex-1 bg-white border border-gray-400 overflow-hidden relative" style={{ minHeight: "220px" }}>
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="w-full h-full cursor-crosshair touch-none select-none bg-white"
                />
            </div>
        </div>
    );
};

// SUB-COMPONENT: Soundboard Winamp retro MP3 audio synth player
const SoundboardWinamp = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [trackIndex, setTrackIndex] = useState(0);
    const [visualizerMode, setVisualizerMode] = useState("bars"); // bars or waves

    const canvasRef = useRef(null);
    const audioCtxRef = useRef(null);
    const loopTimerRef = useRef(null);
    const gainNodeRef = useRef(null);
    const analyserRef = useRef(null);
    const audioElRef = useRef(null);
    const audioSourceRef = useRef(null);

    const [playlist, setPlaylist] = useState([
        { title: "Courtyard Apocalypse", fileUrl: courtyardApocalypse, type: "file" }
    ]);

    // Initialize Web Audio Engine
    const initAudioEngine = () => {
        if (audioCtxRef.current) return audioCtxRef.current;

        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const analyser = ctx.createAnalyser();
        analyser.fftSize = 64;
        analyserRef.current = analyser;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(volume / 100, ctx.currentTime);
        gainNodeRef.current = gainNode;

        // Route: Gain -> Analyser -> Output
        gainNode.connect(analyser);
        analyser.connect(ctx.destination);

        return ctx;
    };

    // Start synthesizing simple 8-bit retro loops
    const startSynthEngine = (index = trackIndex) => {
        const ctx = initAudioEngine();

        if (loopTimerRef.current) return;

        // Play a basic synth melody loop
        let beatStep = 0;
        const track = playlist[index];
        const beatDuration = 60 / track.tempo / 2; // eighth notes

        const playMelodyNote = () => {
            if (ctx.state === "suspended") {
                ctx.resume();
            }

            const time = ctx.currentTime;

            // Basic synthesizer oscillator node
            const osc = ctx.createOscillator();
            const oscGain = ctx.createGain();

            // Triangular wave for custom vintage game console sound
            osc.type = "triangle";

            // Melody note selection
            const notes = track.scale;
            const selectFreq = notes[Math.floor(Math.random() * notes.length)];
            osc.frequency.setValueAtTime(selectFreq, time);

            // Simple amplitude envelope
            oscGain.gain.setValueAtTime(0.01, time);
            oscGain.gain.linearRampToValueAtTime(0.15, time + 0.05);
            oscGain.gain.exponentialRampToValueAtTime(0.001, time + beatDuration - 0.02);

            osc.connect(oscGain);
            oscGain.connect(gainNodeRef.current);
            osc.start(time);
            osc.stop(time + beatDuration);

            // Occasional retro bass synth note
            if (beatStep % 4 === 0) {
                const bassOsc = ctx.createOscillator();
                const bassGain = ctx.createGain();
                bassOsc.type = "sawtooth";
                bassOsc.frequency.setValueAtTime(notes[0] / 2, time); // Octave lower

                bassGain.gain.setValueAtTime(0.01, time);
                bassGain.gain.linearRampToValueAtTime(0.2, time + 0.02);
                bassGain.gain.exponentialRampToValueAtTime(0.001, time + beatDuration * 2 - 0.05);

                bassOsc.connect(bassGain);
                bassGain.connect(gainNodeRef.current);
                bassOsc.start(time);
                bassOsc.stop(time + beatDuration * 2);
            }

            beatStep = (beatStep + 1) % 16;
            loopTimerRef.current = setTimeout(playMelodyNote, beatDuration * 1000);
        };

        playMelodyNote();
    };

    // Play uploaded/custom audio files
    const startAudioFileEngine = (url) => {
        const ctx = initAudioEngine();

        if (ctx.state === "suspended") {
            ctx.resume();
        }

        // Initialize Audio Element if not exists
        if (!audioElRef.current) {
            const audio = new Audio();
            audio.crossOrigin = "anonymous";
            audioElRef.current = audio;

            const source = ctx.createMediaElementSource(audio);
            audioSourceRef.current = source;
            source.connect(gainNodeRef.current);

            // Play next track automatically on end
            audio.onended = () => {
                changeTrack(1);
            };
        }

        audioElRef.current.src = url;
        audioElRef.current.play().catch((err) => {
            console.warn("Audio playback failed to start:", err);
        });
    };

    const stopSynthEngine = () => {
        if (loopTimerRef.current) {
            clearTimeout(loopTimerRef.current);
            loopTimerRef.current = null;
        }
    };

    const handlePlayToggle = () => {
        const track = playlist[trackIndex];
        if (isPlaying) {
            if (track.type === "file" && audioElRef.current) {
                audioElRef.current.pause();
            } else {
                stopSynthEngine();
            }
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            if (track.type === "file") {
                startAudioFileEngine(track.fileUrl);
            } else {
                startSynthEngine(trackIndex);
            }
        }
    };

    const handleVolumeChange = (e) => {
        const val = Number(e.target.value);
        setVolume(val);
        if (gainNodeRef.current && audioCtxRef.current) {
            gainNodeRef.current.gain.setValueAtTime(val / 100, audioCtxRef.current.currentTime);
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const fileUrl = URL.createObjectURL(file);
        const newTrack = {
            title: file.name.replace(/\.[^/.]+$/, ""), // remove extension
            fileUrl: fileUrl,
            type: "file"
        };

        // Stop current playing track
        if (audioElRef.current) {
            audioElRef.current.pause();
        }
        stopSynthEngine();

        setPlaylist((prev) => {
            const nextPlaylist = [...prev, newTrack];
            const newIndex = nextPlaylist.length - 1;
            setTrackIndex(newIndex);

            setIsPlaying(true);
            setTimeout(() => {
                startAudioFileEngine(fileUrl);
            }, 100);

            return nextPlaylist;
        });
    };

    // Visualizer spectrum rendering animation
    useEffect(() => {
        let animId;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const canvasCtx = canvas.getContext("2d");

        const drawVisualizer = () => {
            animId = requestAnimationFrame(drawVisualizer);

            const width = canvas.width;
            const height = canvas.height;

            // Dark solid background with glowing border line
            canvasCtx.fillStyle = "#0c0d12";
            canvasCtx.fillRect(0, 0, width, height);

            if (analyserRef.current && isPlaying) {
                const bufferLength = analyserRef.current.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);
                analyserRef.current.getByteFrequencyData(dataArray);

                if (visualizerMode === "bars") {
                    // Render classic spectrum frequency bars
                    const barWidth = (width / bufferLength) * 1.5;
                    let barHeight;
                    let x = 0;

                    for (let i = 0; i < bufferLength; i++) {
                        barHeight = dataArray[i] / 2;

                        // Gradients from green to orange
                        canvasCtx.fillStyle = `rgb(${barHeight + 50}, 220, 50)`;
                        canvasCtx.fillRect(x, height - barHeight, barWidth - 2, barHeight);

                        x += barWidth;
                    }
                } else {
                    // Render waveforms
                    canvasCtx.lineWidth = 2;
                    canvasCtx.strokeStyle = "#39ff14";
                    canvasCtx.beginPath();

                    const sliceWidth = width / bufferLength;
                    let x = 0;

                    for (let i = 0; i < bufferLength; i++) {
                        const v = dataArray[i] / 128.0;
                        const y = (v * height) / 2;

                        if (i === 0) {
                            canvasCtx.moveTo(x, y);
                        } else {
                            canvasCtx.lineTo(x, y);
                        }

                        x += sliceWidth;
                    }

                    canvasCtx.lineTo(width, height / 2);
                    canvasCtx.stroke();
                }
            } else {
                // Inactive flat green scanning line
                canvasCtx.strokeStyle = "#005500";
                canvasCtx.lineWidth = 1.5;
                canvasCtx.beginPath();
                canvasCtx.moveTo(0, height / 2);
                canvasCtx.lineTo(width, height / 2);
                canvasCtx.stroke();

                // Overlay text
                canvasCtx.fillStyle = "#008800";
                canvasCtx.font = "8px monospace";
                canvasCtx.fillText("SPECTRUM ANALYSER: STANDBY", 10, height - 8);
            }
        };

        drawVisualizer();

        return () => {
            cancelAnimationFrame(animId);
        };
    }, [isPlaying, visualizerMode]);

    // Clean engine on unmount
    useEffect(() => {
        return () => {
            if (loopTimerRef.current) {
                clearTimeout(loopTimerRef.current);
            }
            if (audioElRef.current) {
                audioElRef.current.pause();
                audioElRef.current = null;
            }
            if (audioCtxRef.current) {
                audioCtxRef.current.close();
                audioCtxRef.current = null;
            }
        };
    }, []);

    const changeTrack = (direction) => {
        setTrackIndex((prevIndex) => {
            const nextIdx = (prevIndex + direction + playlist.length) % playlist.length;

            // Stop current playing
            if (audioElRef.current) {
                audioElRef.current.pause();
            }
            stopSynthEngine();

            if (isPlaying) {
                // Short delay before rebooting oscillator/playback
                setTimeout(() => {
                    const nextTrack = playlist[nextIdx];
                    if (nextTrack.type === "file") {
                        startAudioFileEngine(nextTrack.fileUrl);
                    } else {
                        startSynthEngine(nextIdx);
                    }
                }, 100);
            }
            return nextIdx;
        });
    };

    return (
        <div className="flex flex-col bg-[#1c1d22] text-[#00ff00] font-mono text-[10px] p-3 border-2 border-black select-none">
            {/* Player Header LCD Panel */}
            <div className="bg-[#0b0c10] border border-gray-700 p-2.5 mb-2.5 rounded flex flex-col gap-1 shadow-[inset_0_0_8px_#000]">
                <div className="flex justify-between items-center text-gray-400 text-[8px] uppercase tracking-wide">
                    <span>Track #{trackIndex + 1}</span>
                    <span className="text-[#39ff14] animate-pulse">
                        {isPlaying
                            ? (playlist[trackIndex]?.type === "file" ? "● PLAYING AUDIO" : "● PLAYING CHIPTUNE")
                            : "■ STOPPED"}
                    </span>
                </div>
                <div className="text-white text-xs font-bold truncate leading-tight select-text">
                    {playlist[trackIndex]?.title}
                </div>
                <div className="text-[9px] text-[#39ff14]/70 mt-0.5">
                    {playlist[trackIndex]?.type === "file"
                        ? (playlist[trackIndex]?.title === "Courtyard Apocalypse" ? "Source: OST Track // 44.1 kHz Stereo" : "Source: Local File // Stereo Channel")
                        : `Tempo: ${playlist[trackIndex]?.tempo} BPM // Synth Wave`}
                </div>
            </div>

            {/* Spectrum Visualizer Canvas */}
            <div className="h-16 border border-gray-700 bg-black overflow-hidden mb-3.5 relative rounded">
                <canvas ref={canvasRef} width="350" height="64" className="w-full h-full block" />
                <button
                    onClick={() => setVisualizerMode(visualizerMode === "bars" ? "waves" : "bars")}
                    className="absolute top-1 right-1 bg-black/80 hover:bg-gray-800 border border-gray-700 text-[8px] text-gray-400 px-1 py-0.5 rounded cursor-pointer transition-all"
                >
                    MODE: {visualizerMode.toUpperCase()}
                </button>
            </div>

            {/* Winamp Controls */}
            <div className="flex items-center justify-between gap-3 mb-2 flex-wrap sm:flex-nowrap">
                {/* Playback Buttons */}
                <div className="flex items-center gap-1 border border-gray-700 p-0.5 bg-[#2a2b30] rounded">
                    <button
                        onClick={() => changeTrack(-1)}
                        className="px-2 py-1 bg-black/40 hover:bg-[#ff4a7d] text-white border border-gray-800 rounded font-bold cursor-pointer transition-colors active:scale-95 text-[9px]"
                        title="Previous Track"
                    >
                        ◀◀
                    </button>
                    <button
                        onClick={handlePlayToggle}
                        className={`px-3 py-1 font-bold border border-gray-800 rounded cursor-pointer transition-colors active:scale-95 text-[9px] ${isPlaying ? "bg-[#ff0000] text-white" : "bg-[#00ff00] text-black"
                            }`}
                        title={isPlaying ? "Pause Synth" : "Play Synth"}
                    >
                        {isPlaying ? "PAUSE" : "PLAY"}
                    </button>
                    <button
                        onClick={() => changeTrack(1)}
                        className="px-2 py-1 bg-black/40 hover:bg-[#ff4a7d] text-white border border-gray-800 rounded font-bold cursor-pointer transition-colors active:scale-95 text-[9px]"
                        title="Next Track"
                    >
                        ▶▶
                    </button>
                    {/* Eject / Load Custom File */}
                    <label
                        htmlFor="winamp-file-upload"
                        className="px-2.5 py-1 bg-black/40 hover:bg-[#39ff14] hover:text-black text-white border border-gray-800 rounded font-bold cursor-pointer transition-colors active:scale-95 text-[9px] flex items-center justify-center gap-1"
                        title="Load Custom MP3/Audio File"
                    >
                        <span>⏏</span>
                        <span>LOAD</span>
                    </label>
                    <input
                        type="file"
                        id="winamp-file-upload"
                        accept="audio/*"
                        onChange={handleFileUpload}
                        className="hidden"
                    />
                </div>

                {/* Volume controls */}
                <div className="flex items-center gap-2 border border-gray-700 py-1 px-2.5 rounded bg-[#2a2b30] flex-1">
                    {volume === 0 ? <VolumeOffIcon className="text-sm text-gray-500" /> : <VolumeUpIcon className="text-sm text-gray-400" />}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-full accent-[#39ff14] bg-black/50 h-1.5 rounded cursor-pointer"
                        title={`Volume: ${volume}%`}
                    />
                    <span className="w-6 text-right font-mono text-[9px] text-[#39ff14]">{volume}%</span>
                </div>
            </div>

            <div className="text-[8px] text-gray-500 text-center font-mono leading-relaxed mt-1">
                {playlist[trackIndex]?.type === "file"
                    ? "🎵 PLAYING CUSTOM AUDIO FILE VIA WEB AUDIO API DECODE & SPECTRAL ANALYSER."
                    : "🔊 GENERATED DYNAMICALLY USING WEB AUDIO OSCILLATORS. NO STATIC FILES REQUIRED."}
            </div>
        </div>
    );
};

// SUB-COMPONENT: RetroTerminal CLI Shell prompt
const RetroTerminal = ({ activeTheme }) => {
    const [history, setHistory] = useState([
        { text: "HONEST_OS Workstation [Version 1.0.1998]", type: "system" },
        { text: "(c) 1998-2026 Honestraj Corp. All rights reserved.", type: "system" },
        { text: "Type 'help' for a list of active terminal commands.", type: "system" },
        { text: "", type: "system" }
    ]);
    const [inputVal, setInputVal] = useState("");
    const [showMatrix, setShowMatrix] = useState(false);
    const terminalEndRef = useRef(null);

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommandSubmit = (e) => {
        e.preventDefault();
        const cmd = inputVal.trim().toLowerCase();
        if (!cmd) return;

        const newHistory = [...history, { text: `C:\\WINDOWS\\DESKTOP>${inputVal}`, type: "input" }];

        if (cmd === "clear") {
            setHistory([]);
            setInputVal("");
            return;
        }

        if (cmd === "help") {
            newHistory.push({
                text: "Available commands:\n  help      - Show this documentation\n  about     - Learn more about Honestraj\n  projects  - Read portfolio listings\n  system    - Display OS configuration info\n  matrix    - Toggle green phosphor digital rain\n  clear     - Wipe command screen log",
                type: "output"
            });
        } else if (cmd === "about") {
            newHistory.push({
                text: "Honestraj is a lead UI/UX Product Designer with 4+ years of expertise. He designs intuitive, scalable solutions for start-ups and enterprise ERP databases.",
                type: "output"
            });
        } else if (cmd === "projects" || cmd === "portfolio") {
            newHistory.push({
                text: "ACTIVE PORTFOLIO DIRECTORIES:\n  [Folder] UI_UX_Design\n  [Folder] Motion_Graphics\n  [Folder] 3D_Animation\n  [Folder] Image_Processing\n\nDouble-click folder icons on the desktop workspace to open previews.",
                type: "output"
            });
        } else if (cmd === "system" || cmd === "neofetch") {
            newHistory.push({
                text: `
  ██████╗ ███╗   ██╗███████╗███████╗████████╗
  ██╔═══██╗████╗  ██║██╔════╝██╔════╝╚══██╔══╝
  ██║   ██║██╔██╗ ██║█████╗  ███████╗   ██║   
  ██║   ██║██║╚██╗██║██╔══╝  ╚════██║   ██║   
  ╚██████╔╝██║ ╚████║███████╗███████║   ██║   
   ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝   ╚═╝   
  -----------------------------------------
  OS: HonestOS v1.0 x86_64
  Active Workspace: Home Page Dashboard
  Active Theme Scheme: ${activeTheme.toUpperCase()}
  Creative Engine Uptime: OPTIMAL UPTIME
  `,
                type: "output"
            });
        } else if (cmd === "matrix") {
            setShowMatrix(!showMatrix);
            newHistory.push({
                text: showMatrix ? "Matrix falling phosphor deactivated." : "Matrix falling phosphor activated.",
                type: "output"
            });
        } else {
            newHistory.push({
                text: `'${cmd}' is not recognized as an internal command. Type 'help' for instructions.`,
                type: "error"
            });
        }

        setHistory(newHistory);
        setInputVal("");
    };

    return (
        <div className="flex flex-col h-full bg-[#000000] text-[#33ff33] font-mono text-[10px] md:text-xs p-2.5 overflow-hidden relative select-text" style={{ minHeight: "220px" }}>
            {showMatrix && <MatrixRain />}

            <div className="flex-1 overflow-y-auto mb-2 flex flex-col gap-1.5 z-10 pr-1 select-text">
                {history.map((h, i) => (
                    <pre
                        key={i}
                        className={`whitespace-pre-wrap select-text ${h.type === "input" ? "text-white font-bold" :
                            h.type === "error" ? "text-red-500 font-bold" :
                                h.type === "system" ? "text-green-500/80" : "text-[#33ff33]"
                            }`}
                    >
                        {h.text}
                    </pre>
                ))}
                <div ref={terminalEndRef} />
            </div>

            <form onSubmit={handleCommandSubmit} className="flex items-center gap-1 border-t border-green-950 pt-2 shrink-0 z-10 select-none">
                <span className="shrink-0 text-white">C:\WINDOWS\DESKTOP&gt;</span>
                <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="flex-1 bg-transparent text-white outline-none border-none p-0 select-text font-mono text-[10px] md:text-xs caret-green-500"
                    placeholder="Type 'help'..."
                />
            </form>
        </div>
    );
};

// Falling Code Matrix Rain canvas component
const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight || 220;

        const cols = Math.floor(canvas.width / 14) + 1;
        const ypos = Array(cols).fill(0);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#0f0";
            ctx.font = "10pt monospace";

            ypos.forEach((y, ind) => {
                const text = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
                const x = ind * 14;
                ctx.fillText(text, x, y);
                if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
                else ypos[ind] = y + 14;
            });
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            if (!canvas) return;
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight || 220;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0 bg-transparent" />;
};

// SUB-COMPONENT: Start Menu link
const StartMenuLink = ({ icon, label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full text-left flex items-center gap-2.5 py-1.5 px-3 hover:bg-black hover:text-white transition-all cursor-pointer font-medium font-sans border-none"
        >
            <span className="text-sm filter drop-shadow-sm select-none">{icon}</span>
            <span className="font-mono text-xs">{label}</span>
        </button>
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
                        className="flex-1 bg-black text-white hover:bg-gray-800 font-bold py-2 text-center text-[10px] tracking-wide active:translate-y-[1px] cursor-pointer shadow-[2px_2px_0_0_#ccc] active:shadow-none transition-all"
                    >
                        Open Category Gallery ➔
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-black hover:bg-gray-100 font-bold text-black text-center text-[10px] cursor-pointer"
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
                                    className="w-full py-1.5 bg-[#dfdfdf] border border-t-white border-l-white border-b-gray-700 border-r-gray-700 text-center font-bold text-[9px] text-[#FF4D00] flex items-center justify-center gap-0.5 select-none hover:bg-gray-100 active:border-b-white active:border-r-white active:border-t-gray-700 active:border-l-gray-700"
                                >
                                    Open Machine Page <ArrowOutwardIcon className="text-[10px]" />
                                </Link>
                            ) : item.url ? (
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-1.5 bg-[#dfdfdf] border border-t-white border-l-white border-b-gray-700 border-r-gray-700 text-center font-bold text-[9px] text-black flex items-center justify-center gap-0.5 select-none group-hover:bg-[#FF4D00] group-hover:text-white hover:border-black active:border-b-white active:border-r-white active:border-t-gray-700 active:border-l-gray-700"
                                >
                                    Launch Project Wires <ArrowOutwardIcon className="text-[10px]" />
                                </a>
                            ) : (
                                <div className="w-full py-1.5 bg-[#dfdfdf] border border-gray-300 text-center font-mono text-[9px] text-gray-400 select-none">
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
                    className="px-6 py-1.5 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 font-bold text-[10px] cursor-pointer hover:bg-gray-200 active:border-b-white active:border-r-white active:border-t-gray-800 active:border-l-gray-800"
                >
                    ✕ Close File
                </button>
            </div>
        </div>
    );
};