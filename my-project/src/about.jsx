import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

// Assets from existing project structure
import Me from "./assets/me.jpg";
import Figma from "./assets/fig.png";
import Ae from "./assets/ae.png";
import Ai from "./assets/ai.png";
import Ps from "./assets/ps.png";
import Pr from "./assets/pr.png";
import Xd from "./assets/xd.png";
import Rush from "./assets/rush.png";
import Creatie from "./assets/creatie.png";
import Blender from "./assets/blender.png";
import Spline from "./assets/spline.png";
import ReactLogo from "./assets/react.svg";
import Framer from "./assets/framer.png";
import AwardImg from "./assets/aw.jpg";
import resume from "./assets/Honest Resume UIUX Design.pdf";

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

export default function About() {
  const [theme, setTheme] = useState("win98");
  const [openWindows, setOpenWindows] = useState({
    bio: true,
    skills: false,
    awards: false,
    terminal: false,
  });
  const [minimizedWindows, setMinimizedWindows] = useState({
    bio: false,
    skills: false,
    awards: false,
    terminal: false,
  });
  const [maximizedWindows, setMaximizedWindows] = useState({
    bio: false,
    skills: false,
    awards: false,
    terminal: false,
  });
  const [activeWindow, setActiveWindow] = useState("bio");
  const [zIndices, setZIndices] = useState({
    bio: 10,
    skills: 10,
    awards: 10,
    terminal: 10,
  });
  const [highestZ, setHighestZ] = useState(10);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isShutDown, setIsShutDown] = useState(false);

  const desktopRef = useRef(null);

  // Bring window to focus
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

  const activeStyles = themeStyles[theme];

  if (isShutDown) {
    return (
      <div className="fixed inset-0 bg-[#000000] z-[9999] flex flex-col items-center justify-center text-white font-mono p-4 select-none">
        {/* CRT Scanline Turn Off Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
        
        <div className="w-16 h-1 bg-white mb-8 animate-pulse rounded-full" />
        <h1 className="text-xl md:text-2xl font-bold tracking-widest text-[#ff4a7d] mb-2 text-center uppercase">
          SYSTEM SHUT DOWN SUCCESSFUL
        </h1>
        <p className="text-xs text-gray-500 text-center max-w-sm mb-8 leading-relaxed">
          The HonestOS workstation has entered low power sleep mode. scanlines and micro-processors offline.
        </p>
        <button
          onClick={() => setIsShutDown(false)}
          className="border-2 border-white px-6 py-2 text-sm uppercase hover:bg-white hover:text-black transition-all cursor-pointer font-black shadow-[4px_4px_0_0_rgba(255,255,255,0.3)] hover:shadow-none active:translate-x-1 active:translate-y-1"
        >
          Reboot Terminal 🎾
        </button>
      </div>
    );
  }

  return (
    <section 
      ref={desktopRef}
      className={`fixed md:relative w-full h-[calc(100vh-80px)] md:h-[750px] max-w-[1280px] mx-auto top-20 md:top-auto left-0 md:left-auto right-0 md:right-auto mt-0 md:mt-28 mb-0 md:mb-16 overflow-hidden flex flex-col transition-all duration-300 border-t-4 border-b-4 border-x-0 md:border-4 border-black rounded-none md:rounded-lg shadow-2xl p-0`}
      style={activeStyles.desktopStyle}
      onClick={() => setIsStartMenuOpen(false)}
    >
      {/* CRT Scanline Filter for Synthwave */}
      {theme === "synthwave" && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_3px] pointer-events-none z-50 opacity-40" />
      )}

      {/* DESKTOP WORKSPACE */}
      <div className="flex-1 w-full p-4 md:p-6 relative flex flex-row md:flex-col flex-wrap content-start items-start justify-start gap-4 md:gap-8 z-10 overflow-y-auto">
        
        {/* Desktop Folder Icons */}
        <DesktopIcon
          label="honest_me.doc"
          icon="📂"
          themeStyles={activeStyles}
          onClick={() => openApp("bio")}
        />
        <DesktopIcon
          label="Skills Bin"
          icon="📁"
          themeStyles={activeStyles}
          onClick={() => openApp("skills")}
        />
        <DesktopIcon
          label="awards.exe"
          icon="🏆"
          themeStyles={activeStyles}
          onClick={() => openApp("awards")}
        />
        <DesktopIcon
          label="LinkedIn Profile"
          icon="🔗"
          themeStyles={activeStyles}
          onClick={() => window.open("https://www.linkedin.com/in/honestraj-vijay/", "_blank")}
        />
        <DesktopIcon
          label="CLI Terminal"
          icon="📟"
          themeStyles={activeStyles}
          onClick={() => openApp("terminal")}
        />

        {/* DRAGGABLE APP WINDOWS (Desktop / large screens) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block z-20">
          
          {/* WINDOW 1: PROFILE BIO */}
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
            width="560px"
          >
            <div className="p-4 flex flex-col md:flex-row gap-6 overflow-y-auto h-full text-black leading-relaxed font-sans text-sm">
              <div className="shrink-0 flex flex-col items-center">
                <div className="relative group w-44 h-auto rounded-lg overflow-hidden border-2 border-black bg-white p-1 shadow-[3px_3px_0_0_#000]">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    src={Me}
                    alt="Honestraj"
                  />
                  {/* Dither or grid overlay on image */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_50%,transparent_50%)] bg-[size:100%_4px] pointer-events-none opacity-40" />
                </div>
                <div className="mt-3 text-center">
                  <span className="bg-black text-white text-[10px] font-black uppercase px-2 py-0.5 font-mono rounded tracking-wider">
                    <span style={{paddingRight:"6px"}}>UI/UX | Motion Graphic</span> <br />
                    <span style={{paddingLeft:"6px"}}> Designer </span>
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <h2 className="text-2xl font-black font-mono border-b-2 border-black pb-1 mb-3 flex items-center justify-between">
                  <span>Honestraj</span>
                  <span className="text-gray-400 text-xs font-normal">v3.0.0</span>
                </h2>
                <div className="font-mono text-xs text-gray-500 mb-2">
                  JOB_TITLE: <span className="text-[#FF4D00] font-black">UI/UX PRODUCT DESIGNER</span>
                </div>
                <p className="mb-3 text-xs md:text-sm">
                  Highly driven <span className="text-[#FF4D00] font-bold font-mono">UI/UX Designer</span> with 4+ years of experience in designing intuitive and scalable digital solutions for complex enterprise systems [ERP].
                </p>
                <p className="text-xs md:text-sm">
                  Expert at translating intricate user needs into neat, satisfying interfaces that elevate system usability. I have successfully driven 10+ projects with absolute client satisfaction.
                </p>
                <div className="mt-4 border border-dashed border-gray-400 p-2.5 bg-gray-50 font-mono text-[10px] leading-normal text-gray-600 rounded">
                  📌 WORKSTATION CORE: <br />
                  - Chennai, India <br />
                  - UI/UX Product Designer for <a href="https://colaninfotech.com/" target="_blank" rel="noopener noreferrer" className="text-[#FF4D00] font-bold font-mono underline hover:text-blue-600 transition-colors">Colan Infotech Pvt Ltd</a> <br />
                  - Passionate about creative scripting & motion flows.
                </div>
              </div>
            </div>
          </AnimateWindow>

          {/* WINDOW 2: SKILLS EXPLORER */}
          <AnimateWindow
            isOpen={openWindows.skills && !minimizedWindows.skills}
            isMaximized={maximizedWindows.skills}
            zIndex={zIndices.skills}
            title="C:\\WINDOWS\\DESKTOP\\SKILLS"
            winName="skills"
            activeWindow={activeWindow}
            activeStyles={activeStyles}
            desktopRef={desktopRef}
            focusWindow={focusWindow}
            toggleMinimize={toggleMinimize}
            toggleMaximize={toggleMaximize}
            closeApp={closeApp}
            initialX={220}
            initialY={100}
            width="520px"
          >
            <div className="p-4 flex flex-col h-full bg-[#f8f8f8] text-black">
              <div className="flex justify-between items-center text-xs font-mono border-b border-gray-300 pb-2 mb-3">
                <span>12 objects found</span>
                <span className="text-gray-400">Click a file to read metadata</span>
              </div>
              <div className="grid grid-cols-4 gap-4 overflow-y-auto max-h-[300px] p-1">
                <SkillItem src={Figma} name="Figma" level="Expert (3+ yrs)" desc="High-fidelity interactive UI case design" />
                <SkillItem src={Ae} name="After Effects" level="Advanced" desc="Lottie animations & custom interactive motion flows" />
                <SkillItem src={Ai} name="Illustrator" level="Expert" desc="Slick vector layouts, icons & brand typography" />
                <SkillItem src={Ps} name="Photoshop" level="Advanced" desc="Raster mockups, texture renders & dither filters" />
                <SkillItem src={Pr} name="Premiere Pro" level="Advanced" desc="High engagement video compilations & sound beats" />
                <SkillItem src={Xd} name="Adobe XD" level="Intermediate" desc="Legacy project prototyping and layout wires" />
                <SkillItem src={Rush} name="Premiere Rush" level="Intermediate" desc="Quick edits and mobile compilation workflows" />
                <SkillItem src={Creatie} name="Creatie AI" level="Advanced" desc="AI-accelerated UI prototyping and design layouts" />
                <SkillItem src={Blender} name="Blender 3D" level="Advanced" desc="3D asset modeling, meshes & glTF structures" />
                <SkillItem src={Spline} name="Spline" level="Advanced" desc="Interactive Web 3D design and triggers" />
                <SkillItem src={ReactLogo} name="React" level="Advanced" desc="Creative frontend structuring and component models" />
                <SkillItem src={Framer} name="Framer" level="Advanced" desc="Dynamic micro-interactions and site building" />
              </div>
            </div>
          </AnimateWindow>

          {/* WINDOW 3: AWARDS DATABASE */}
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
            initialX={150}
            initialY={140}
            width="580px"
          >
            <div className="p-4 flex flex-col md:flex-row gap-6 overflow-y-auto h-full bg-[#f3efe9] text-black">
              <div className="flex-1 flex flex-col gap-4 font-mono text-xs">
                <h3 className="text-base font-bold font-sans border-b-2 border-black pb-1 uppercase tracking-wider flex items-center gap-1.5">
                  🏆 Professional Merits
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
                  {/* Blinking screen light */}
                  <div className="absolute top-1 right-2 w-2 h-2 bg-green-500 rounded-full animate-ping pointer-events-none" />
                  
                  {/* Glowing mask overlay */}
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



          {/* WINDOW 5: RETRO TERMINAL */}
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
            initialX={180}
            initialY={160}
            width="550px"
          >
            <RetroTerminal activeTheme={theme} />
          </AnimateWindow>
        </div>

        {/* MOBILE LAYOUT STACKED PANELS (Visible on mobile/tablet) */}
        <div className="w-full md:hidden flex flex-col gap-6 mt-4 z-10">
          
          {/* Mobile Tab 1: Profile */}
          {openWindows.bio && (
            <div className={`w-full overflow-hidden ${activeStyles.windowBg}`}>
              <div className={activeStyles.windowTitle}>
                <span>📂 honest_me.doc</span>
                <button onClick={(e) => closeApp("bio", e)} className={activeStyles.windowButton}>✕</button>
              </div>
              <div className="p-4 bg-white text-black leading-relaxed font-sans text-xs flex flex-col gap-4">
                <div className="flex justify-center">
                  <div className="w-32 h-auto rounded border border-black bg-white p-1">
                    <img className="w-full h-full object-cover grayscale" src={Me} alt="Honestraj" />
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-lg font-black font-mono">Honestraj</h2>
                  <div className="text-[10px] text-[#FF4D00] font-black uppercase font-mono mt-1">
                    UI/UX PRODUCT DESIGNER
                  </div>
                </div>
                <p>
                  Highly driven **UI/UX Designer** with 3+ years of experience in designing intuitive and scalable digital solutions for complex enterprise systems [ERP]. Proven expertise in user-centered design, translating research findings into optimized design solutions, and enhancing product usability.
                </p>
                <div className="border border-dashed border-gray-400 p-2 bg-gray-50 font-mono text-[9px] text-gray-600">
                  📌 WORKSTATION DETAILS: <br />
                  - Chennai, India <br />
                  - 4+ Years Hands-on Experience
                </div>
              </div>
            </div>
          )}

          {/* Mobile Tab 2: Skills */}
          {openWindows.skills && (
            <div className={`w-full overflow-hidden ${activeStyles.windowBg}`}>
              <div className={activeStyles.windowTitle}>
                <span>📁 Skills Bin</span>
                <button onClick={(e) => closeApp("skills", e)} className={activeStyles.windowButton}>✕</button>
              </div>
              <div className="p-4 bg-white text-black">
                <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-[300px]">
                  <SkillItemMobile src={Figma} name="Figma" level="Expert" />
                  <SkillItemMobile src={Ae} name="After Effects" level="Advanced" />
                  <SkillItemMobile src={Ai} name="Illustrator" level="Expert" />
                  <SkillItemMobile src={Ps} name="Photoshop" level="Advanced" />
                  <SkillItemMobile src={Pr} name="Premiere Pro" level="Advanced" />
                  <SkillItemMobile src={Xd} name="Adobe XD" level="Intermediate" />
                  <SkillItemMobile src={Rush} name="Premiere Rush" level="Intermediate" />
                  <SkillItemMobile src={Creatie} name="Creatie" level="Advanced" />
                  <SkillItemMobile src={Blender} name="Blender" level="Advanced" />
                  <SkillItemMobile src={Spline} name="Spline" level="Advanced" />
                  <SkillItemMobile src={ReactLogo} name="React" level="Advanced" />
                  <SkillItemMobile src={Framer} name="Framer" level="Advanced" />
                </div>
              </div>
            </div>
          )}

          {/* Mobile Tab 3: Awards */}
          {openWindows.awards && (
            <div className={`w-full overflow-hidden ${activeStyles.windowBg}`}>
              <div className={activeStyles.windowTitle}>
                <span>🏆 awards.exe</span>
                <button onClick={(e) => closeApp("awards", e)} className={activeStyles.windowButton}>✕</button>
              </div>
              <div className="p-4 bg-white text-black flex flex-col gap-4 font-mono text-[10px]">
                <div className="flex flex-col gap-2">
                  <div className="border border-gray-300 p-2 bg-gray-50">
                    <span className="font-bold text-[#FF4D00]">Quarter IV - March 2024:</span> Outstanding Performance and Lasting Contribution (Colan Infotech Private Limited)
                  </div>
                  <div className="border border-gray-300 p-2 bg-gray-50">
                    <span className="font-bold text-[#FF4D00]">Quarter I - July 2025:</span> Solid Delivery Performance (Colan Infotech Private Limited)
                  </div>
                </div>
                <div className="border border-gray-400 p-2 rounded flex flex-col items-center bg-[#1a1c1e]">
                  <img src={AwardImg} alt="Certificate" className="h-32 object-contain" />
                  <span className="text-[8px] text-green-400 mt-1 uppercase">CRT Monitor view</span>
                </div>
              </div>
            </div>
          )}



          {/* Mobile Tab 5: Terminal */}
          {openWindows.terminal && (
            <div className={`w-full overflow-hidden ${activeStyles.windowBg}`}>
              <div className={activeStyles.windowTitle}>
                <span>📟 terminal.exe</span>
                <button onClick={(e) => closeApp("terminal", e)} className={activeStyles.windowButton}>✕</button>
              </div>
              <div className="p-0">
                <RetroTerminal activeTheme={theme} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* TASKBAR */}
      <div className={`w-full h-12 shrink-0 flex items-center justify-between px-3 relative z-30 select-none ${activeStyles.taskbar}`}>
        <div className="flex items-center gap-2">
          {/* Start Menu Button */}
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

          {/* Running Program Tabs in Taskbar */}
          <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-[500px]">
            {openWindows.bio && (
              <button
                onClick={() => toggleMinimize("bio")}
                className={minimizedWindows.bio ? activeStyles.inactiveTab : activeStyles.activeTab}
              >
                📂 honest_me.doc
              </button>
            )}
            {openWindows.skills && (
              <button
                onClick={() => toggleMinimize("skills")}
                className={minimizedWindows.skills ? activeStyles.inactiveTab : activeStyles.activeTab}
              >
                📁 Skills Bin
              </button>
            )}
            {openWindows.awards && (
              <button
                onClick={() => toggleMinimize("awards")}
                className={minimizedWindows.awards ? activeStyles.inactiveTab : activeStyles.activeTab}
              >
                🏆 awards.exe
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
          </div>
        </div>

        {/* Real-time System Clock */}
        <SystemClock theme={theme} />

        {/* START MENU POPUP */}
        <AnimatePresence>
          {isStartMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className={`absolute bottom-13 left-2 w-64 md:w-72 flex z-50 ${activeStyles.startMenu}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Stripe Banner */}
              <div className={`w-10 shrink-0 ${activeStyles.startMenuBanner} flex flex-col justify-end pb-4 font-mono text-xs font-bold leading-none`}>
                <span className="-rotate-90 origin-bottom-left translate-x-5 -translate-y-4 whitespace-nowrap tracking-wider">
                  HONEST_OS v1.0
                </span>
              </div>

              {/* Start Menu Options List */}
              <div className="flex-1 flex flex-col bg-white text-black p-1 text-xs">
                
                {/* Theme Selector */}
                <div className="p-2 border-b border-gray-200">
                  <span className="font-bold block text-gray-500 font-mono text-[9px] mb-1">WALLPAPER SCHEME</span>
                  <button
                    onClick={cycleTheme}
                    className="w-full text-left font-bold py-1 px-2 border hover:bg-gray-100 flex items-center justify-between cursor-pointer border-gray-300"
                  >
                    <span>🎨 Change Theme</span>
                    <span className="bg-[#ff4a7d]/10 text-[#ff4a7d] px-1.5 py-0.5 rounded text-[10px] uppercase font-mono font-black">
                      {theme}
                    </span>
                  </button>
                </div>

                <div className="py-1">
                  <StartMenuLink
                    icon="📂"
                    label="honest_me.doc (About Bio)"
                    onClick={() => { openApp("bio"); setIsStartMenuOpen(false); }}
                  />
                  <StartMenuLink
                    icon="📁"
                    label="Skills Bin Explorer"
                    onClick={() => { openApp("skills"); setIsStartMenuOpen(false); }}
                  />
                  <StartMenuLink
                    icon="🏆"
                    label="awards.exe (Registry)"
                    onClick={() => { openApp("awards"); setIsStartMenuOpen(false); }}
                  />
                  <StartMenuLink
                    icon="🔗"
                    label="LinkedIn Profile"
                    onClick={() => { window.open("https://www.linkedin.com/in/honestraj-vijay/", "_blank"); setIsStartMenuOpen(false); }}
                  />
                  <StartMenuLink
                    icon="📟"
                    label="Terminal Console CLI"
                    onClick={() => { openApp("terminal"); setIsStartMenuOpen(false); }}
                  />
                </div>

                <hr className="border-gray-200 my-1" />

                <div className="py-1 font-bold">
                  {/* View CV */}
                  <Link
                    to="/resume"
                    className="flex items-center gap-2.5 py-1.5 px-3 hover:bg-black hover:text-white transition-all cursor-pointer font-sans"
                  >
                    <span>👀</span>
                    <span>View CV / Resume</span>
                  </Link>

                  {/* Download CV */}
                  <a
                    href={resume}
                    download="Honest Resume UIUX Design.pdf"
                    className="flex items-center gap-2.5 py-1.5 px-3 hover:bg-black hover:text-white transition-all cursor-pointer font-sans"
                  >
                    <span>💾</span>
                    <span>Download CV / Resume</span>
                  </a>

                  {/* Shut down trigger */}
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
    </section>
  );
}

// Sub-Component: DesktopIcon
const DesktopIcon = ({ label, icon, onClick, themeStyles }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center p-2 rounded cursor-pointer w-20 hover:bg-white/10 active:scale-95 transition-all text-center select-none"
    >
      <div className="text-3xl filter drop-shadow-md leading-none mb-1.5">{icon}</div>
      <span className={themeStyles.iconText}>{label}</span>
    </div>
  );
};

// Sub-Component: Draggable Window Shell
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

  // Window styling logic
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
      className={`pointer-events-auto flex flex-col overflow-hidden max-h-[500px] ${activeStyles.windowBg} ${
        isMaximized ? "max-h-[calc(100%-48px)] h-[calc(100%-48px)] rounded-none" : "rounded-t"
      }`}
    >
      {/* Title Bar */}
      <div className={isActive ? activeStyles.windowTitle : activeStyles.windowTitleInactive}>
        <span className="truncate select-none max-w-[70%] font-mono pr-2">{title}</span>
        
        <div className="flex items-center gap-1.5 shrink-0 pointer-events-auto">
          {/* Minimize [ _ ] */}
          <button
            onClick={(e) => toggleMinimize(winName, e)}
            className={activeStyles.windowButton}
            title="Minimize"
          >
            _
          </button>
          
          {/* Maximize [ ▢ ] */}
          <button
            onClick={(e) => toggleMaximize(winName, e)}
            className={activeStyles.windowButton}
            title={isMaximized ? "Restore Window" : "Maximize Window"}
          >
            {isMaximized ? "❐" : "▢"}
          </button>

          {/* Close [ X ] */}
          <button
            onClick={(e) => closeApp(winName, e)}
            className={`${activeStyles.windowButton} hover:bg-red-500 hover:text-white`}
            title="Close application"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Window Body Container */}
      <div className="flex-1 overflow-auto pointer-events-auto select-text">
        {children}
      </div>
    </motion.div>
  );
};

// Sub-Component: SkillItem file inside Explorer
const SkillItem = ({ src, name, level, desc }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="flex flex-col items-center justify-center p-2 hover:bg-blue-100 hover:outline hover:outline-1 hover:outline-blue-400 rounded cursor-pointer relative select-none"
    >
      <div className="w-10 h-10 flex items-center justify-center p-1 bg-white border border-gray-200 rounded-md shadow-sm mb-1.5 transition-transform group-hover:-translate-y-1">
        <img src={src} alt={name} className="w-full h-full object-contain" />
      </div>
      <span className="font-mono text-[9px] font-bold tracking-tight text-center leading-tight truncate w-full text-black">
        {name}
      </span>

      {/* Retro style Tooltip block */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            className="absolute bottom-full mb-2 bg-[#ffffe1] border border-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)] p-2.5 z-50 text-[10px] text-black w-44 rounded-md font-mono pointer-events-none"
          >
            <span className="font-bold text-[#FF4D00] block mb-0.5">{name}</span>
            <div className="text-[9px] text-gray-500 font-bold mb-1">PRO_LEVEL: {level}</div>
            <p className="text-[9px] leading-tight text-gray-700">{desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Skill Item for Mobile
const SkillItemMobile = ({ src, name, level }) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded">
      <div className="w-8 h-8 flex items-center justify-center p-1 bg-white border border-gray-100 rounded">
        <img src={src} alt={name} className="w-full h-full object-contain" />
      </div>
      <div className="flex-1 font-mono text-[9px]">
        <span className="font-bold block text-black">{name}</span>
        <span className="text-gray-500 font-medium">{level}</span>
      </div>
    </div>
  );
};

// Sub-Component: Award Registry Item
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

// Sub-Component: Start Menu Item Link
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

// Sub-Component: Live Digital Clock with am/pm
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

// Sub-Component: Canvas Draw Paint widget
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

    // Set canvas initial dimensions correctly
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width || 420;
    canvas.height = rect.height || 260;

    // Fill canvas background to clean white
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
      {/* Paint Toolbar */}
      <div className="flex items-center gap-2 pb-2 mb-1.5 border-b border-gray-400 flex-wrap">
        <span className="font-bold">Palette:</span>
        <div className="flex gap-1 border border-gray-300 p-0.5 bg-white">
          {["#000000", "#ff0000", "#0000ff", "#00ff00", "#ffff00", "#ffffff"].map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              style={{ backgroundColor: c }}
              className={`w-4 h-4 border cursor-pointer ${
                color === c ? "border-2 border-black outline outline-1 outline-blue-500" : "border-gray-400"
              }`}
              title={c === "#ffffff" ? "Eraser Tool" : c}
            />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <span>Brush Size:</span>
          <select
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="bg-white border border-gray-300 text-[10px] py-0.5 px-1 outline-none"
          >
            <option value={2}>Small (2px)</option>
            <option value={4}>Medium (4px)</option>
            <option value={8}>Large (8px)</option>
            <option value={15}>Extra Large (15px)</option>
          </select>
        </div>
        <button
          onClick={clearCanvas}
          className="ml-auto px-2.5 py-0.5 border border-gray-500 bg-white hover:bg-gray-100 active:bg-gray-200 cursor-pointer shadow-[1px_1px_0px_0px_#000]"
        >
          Clear
        </button>
      </div>

      {/* Paint Canvas Sheet */}
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

// Sub-Component: Terminal CLI Shell
const RetroTerminal = ({ activeTheme }) => {
  const [history, setHistory] = useState([
    { text: "HONEST_OS [Version 1.0.1998]", type: "system" },
    { text: "(c) 1998-2026 Honestraj Corp. All rights reserved.", type: "system" },
    { text: "Type 'help' for a list of active shell commands.", type: "system" },
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
        text: "Available commands:\n  help      - Show this documentation\n  about     - Learn more about Honestraj\n  skills    - List core software & UI skills\n  awards    - Display professional accomplishments\n  neofetch  - Render system information and logo\n  matrix    - Toggle green phosphor digital rain\n  clear     - Wipe command screen logs",
        type: "output"
      });
    } else if (cmd === "about" || cmd === "bio") {
      newHistory.push({
        text: "Honestraj is a UI/UX Designer with 3+ years of expertise. He creates intuitive, scalable enterprise solutions (ERP systems), digital branding, and custom micro-interactions. He has delivered 10+ high-satisfaction projects for international startups and businesses.",
        type: "output"
      });
    } else if (cmd === "skills") {
      newHistory.push({
        text: "SOFTWARE & ENGINE PROFICIENCIES:\n- Figma (UI/UX Case Designing)\n- Adobe Creative Suite (After Effects, Illustrator, Photoshop, XD, Premiere Pro)\n- Blender & Spline (3D Modeling & Web Integration)\n- React & Framer Motion (Creative Frontend Development)",
        type: "output"
      });
    } else if (cmd === "awards") {
      newHistory.push({
        text: "RECOGNITION & AWARDS (Colan Infotech Private Limited):\n- Outstanding Performance and Lasting Contribution (Quarter IV - March 2024)\n- Solid Delivery Performance (Quarter I - July 2025)",
        type: "output"
      });
    } else if (cmd === "neofetch") {
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
Host: Honestraj Creative Portfolio
CPU: UI/UX Creative Engine (3+ Years exp)
Resolution: Responsive Viewport
Active Theme: ${activeTheme.toUpperCase()}
Shell: Bash / phosphor-terminal
Skills: ERP Systems, UI/UX, 3D Assets, Motion Graphics
Uptime: Flawless Performance
`,
        type: "output"
      });
    } else if (cmd === "matrix") {
      setShowMatrix(!showMatrix);
      newHistory.push({
        text: showMatrix ? "Matrix falling code deactivated." : "Matrix falling code activated. Phosphor streams injected.",
        type: "output"
      });
    } else {
      newHistory.push({
        text: `'${cmd}' is not recognized as an internal or external command, operable program or batch file. Type 'help' for instructions.`,
        type: "error"
      });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <div className="flex flex-col h-full bg-[#000000] text-[#33ff33] font-mono text-[10px] md:text-xs p-2.5 overflow-hidden relative" style={{ minHeight: "220px" }}>
      {showMatrix && <MatrixRain />}
      
      <div className="flex-1 overflow-y-auto mb-2 flex flex-col gap-1.5 z-10 pr-1">
        {history.map((h, i) => (
          <pre
            key={i}
            className={`whitespace-pre-wrap ${
              h.type === "input" ? "text-white font-bold" :
              h.type === "error" ? "text-red-500 font-bold" :
              h.type === "system" ? "text-green-500/80" : "text-[#33ff33]"
            }`}
          >
            {h.text}
          </pre>
        ))}
        <div ref={terminalEndRef} />
      </div>

      <form onSubmit={handleCommandSubmit} className="flex items-center gap-1 border-t border-green-950 pt-2 shrink-0 z-10">
        <span className="shrink-0 text-white">C:\WINDOWS\DESKTOP&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 bg-transparent text-white outline-none border-none p-0 select-text font-mono text-[10px] md:text-xs caret-green-500"
          autoFocus
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

    // Resize canvas on layout switch
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0 bg-transparent" />;
};