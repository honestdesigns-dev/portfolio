import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

// Assets from existing project structure
import resume from "./assets/HonestcvUIUX.pdf";

// Themes Config (perfectly aligned with about.jsx)
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
    inactiveTab: "bg-white border-2 border-black text-black text-xs px-3 py-1 cursor-pointer rounded truncate max-w-[120px] md:max-w-[160px] hover:bg-gray-55 active:translate-y-[1px]",
  }
};

const documentOutlines = {
  summary: {
    title: "SUMMARY.TXT",
    content: `PROFESSIONAL SUMMARY:
=========================================
Experienced and user-oriented UI/UX Product Designer with over 3 years of hands-on expertise orchestrating responsive, elegant, and highly scalable enterprise (ERP) dashboards, custom application suites, and landing architectures. 

Extremely focused on aligning business logic with sleek, accessible user-centered experiences.`
  },
  experience: {
    title: "EXPERIENCE.TXT",
    content: `WORK CHRONICLES:
=========================================
💼 Colan Infotech Pvt Ltd (Chennai, India)
   Role: Lead UI/UX & Product Designer
   Duration: 3+ Years Hands-on Experience
   
   * Architected 10+ scalable enterprise ERP systems.
   * Reduced usability obstacles by 40% via structured testing workflows.
   * Designed rich aesthetic components in Blender, Spline, Figma, & React.`
  },
  education: {
    title: "EDUCATION.TXT",
    content: `ACADEMIC OUTLINE:
=========================================
🎓 Bachelor of Science in Creative Design
   Specialization: Interaction & Interface Architectures
   
📌 Professional Certifications:
   * Enterprise Architecture Usability Engineering
   * Motion Graphics & Flow Design (After Effects Focus)`
  },
  contact: {
    title: "CONTACT_INFO.TXT",
    content: `GET IN TOUCH:
=========================================
📬 Email: honestdesigns.dev@gmail.com
💻 Behance: behance.net/honestraj
🌐 Location: Chennai, Tamil Nadu, India`
  }
};

export default function ViewResume() {
  const [theme, setTheme] = useState("win98");
  const [isReaderOpen, setIsReaderOpen] = useState(true);
  const [isReaderMinimized, setIsReaderMinimized] = useState(false);
  const [isReaderMaximized, setIsReaderMaximized] = useState(false);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isShutDown, setIsShutDown] = useState(false);

  // Document outline tab state
  const [activeOutlineTab, setActiveOutlineTab] = useState("summary");

  const desktopRef = useRef(null);

  const toggleMinimize = (e) => {
    if (e) e.stopPropagation();
    setIsReaderMinimized(!isReaderMinimized);
  };

  const toggleMaximize = (e) => {
    if (e) e.stopPropagation();
    setIsReaderMaximized(!isReaderMaximized);
  };

  const cycleTheme = () => {
    const themes = ["win98", "synthwave", "macOS"];
    const nextIdx = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIdx]);
  };

  const triggerPrint = () => {
    const printWindow = window.open(resume, "_blank");
    if (printWindow) {
      printWindow.focus();
      printWindow.print();
    }
  };

  const activeStyles = themeStyles[theme];

  if (isShutDown) {
    return (
      <div className="fixed inset-0 bg-[#000000] z-[9999] flex flex-col items-center justify-center text-white font-mono p-4 select-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none" />
        <div className="w-16 h-1 bg-white mb-8 animate-pulse rounded-full" />
        <h1 className="text-xl md:text-2xl font-bold tracking-widest text-[#ff4a7d] mb-2 text-center uppercase">
          SYSTEM SHUT DOWN SUCCESSFUL
        </h1>
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
      className={`relative w-full h-[calc(100vh-140px)] md:h-[750px] max-w-[1280px] mx-auto mt-28 mb-16 overflow-hidden flex flex-col transition-all duration-300 border-4 border-black rounded-lg shadow-2xl p-0`}
      style={activeStyles.desktopStyle}
      onClick={() => setIsStartMenuOpen(false)}
    >
      {/* CRT Scanline Filter for Synthwave */}
      {theme === "synthwave" && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_3px] pointer-events-none z-50 opacity-40" />
      )}

      {/* DESKTOP AREA */}
      <div className="flex-1 w-full p-6 relative flex flex-col md:flex-row flex-wrap content-start items-start justify-start gap-8 z-10 overflow-y-auto">
        
        {/* Desktop Icons */}
        <DesktopIcon
          label="ResumeReader.exe"
          icon="📄"
          themeStyles={activeStyles}
          onClick={() => {
            setIsReaderOpen(true);
            setIsReaderMinimized(false);
          }}
        />
        <Link to="/" className="flex flex-col items-center justify-center p-2 rounded cursor-pointer w-20 hover:bg-white/10 text-center select-none">
          <div className="text-3xl filter drop-shadow-md leading-none mb-1.5">🏠</div>
          <span className={activeStyles.iconText}>Home.lnk</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center justify-center p-2 rounded cursor-pointer w-20 hover:bg-white/10 text-center select-none">
          <div className="text-3xl filter drop-shadow-md leading-none mb-1.5">📂</div>
          <span className={activeStyles.iconText}>AboutOS.lnk</span>
        </Link>
        <a href={resume} download="HCV-F.pdf" className="flex flex-col items-center justify-center p-2 rounded cursor-pointer w-20 hover:bg-white/10 text-center select-none">
          <div className="text-3xl filter drop-shadow-md leading-none mb-1.5">📥</div>
          <span className={activeStyles.iconText}>Get_PDF.lnk</span>
        </a>

        {/* DRAGGABLE RESUME READER APPLICATION (Desktop Viewports) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block z-20">
          {isReaderOpen && !isReaderMinimized && (
            <motion.div
              drag={!isReaderMaximized}
              dragMomentum={false}
              dragElastic={0}
              dragConstraints={desktopRef}
              initial={
                isReaderMaximized
                  ? { left: 0, top: 0, width: "100%", height: "100%" }
                  : { x: 100, y: 30, scale: 0.95, opacity: 0 }
              }
              animate={
                isReaderMaximized
                  ? { x: 0, y: 0, left: 0, top: 0, width: "100%", height: "calc(100% - 48px)", scale: 1, opacity: 1 }
                  : { scale: 1, opacity: 1 }
              }
              style={{
                zIndex: 30,
                width: isReaderMaximized ? "100%" : "720px",
                position: "absolute",
              }}
              className={`pointer-events-auto flex flex-col overflow-hidden max-h-[560px] ${activeStyles.windowBg} ${
                isReaderMaximized ? "max-h-[calc(100%-48px)] h-[calc(100%-48px)] rounded-none" : "rounded-t"
              }`}
            >
              {/* Reader Title Bar */}
              <div className={activeStyles.windowTitle}>
                <span className="truncate font-mono">ResumeReader.exe - Adobe Acrobat Pro 95</span>
                
                <div className="flex items-center gap-1.5 shrink-0">
                  <button onClick={toggleMinimize} className={activeStyles.windowButton} title="Minimize">_</button>
                  <button onClick={toggleMaximize} className={activeStyles.windowButton} title="Maximize">{isReaderMaximized ? "❐" : "▢"}</button>
                  <button onClick={() => setIsReaderOpen(false)} className={`${activeStyles.windowButton} hover:bg-red-500 hover:text-white`} title="Close">✕</button>
                </div>
              </div>

              {/* Reader Application Toolbar */}
              <div className="bg-[#eeeeee] border-b border-gray-400 p-1 flex items-center gap-3 text-xs text-black select-none font-sans font-medium">
                <button
                  onClick={triggerPrint}
                  className="flex items-center gap-1 px-2 py-0.5 border border-gray-400 bg-white hover:bg-gray-100 cursor-pointer shadow-[1px_1px_0px_0px_#000] active:shadow-none active:translate-y-0.5"
                >
                  <span>🖨️</span> <span>Print CV</span>
                </button>
                <a
                  href={resume}
                  download="HCV-F.pdf"
                  className="flex items-center gap-1 px-2 py-0.5 border border-gray-400 bg-white hover:bg-gray-100 cursor-pointer shadow-[1px_1px_0px_0px_#000] active:shadow-none active:translate-y-0.5"
                >
                  <span>📥</span> <span>Download PDF</span>
                </a>
                <div className="h-4 w-[1px] bg-gray-400 mx-1" />
                <span className="text-[10px] text-gray-500 font-mono">Scale: 100% Fit Width</span>
              </div>

              {/* Reader Splitscreen Body */}
              <div className="flex-1 flex overflow-hidden bg-white text-black relative" style={{ minHeight: "360px" }}>
                
                {/* Left Outline tree panel */}
                <div className="w-[200px] border-r border-gray-300 bg-[#f4f4f4] flex flex-col font-mono text-[10px] select-none shrink-0 p-3">
                  <span className="font-bold text-gray-500 block mb-2 font-sans tracking-wide">DOCUMENT OUTLINE</span>
                  <div className="flex flex-col gap-1.5">
                    {Object.keys(documentOutlines).map((key) => (
                      <button
                        key={key}
                        onClick={() => setActiveOutlineTab(key)}
                        className={`text-left p-1.5 border border-transparent rounded cursor-pointer ${
                          activeOutlineTab === key 
                            ? "bg-blue-600 text-white font-bold border-blue-700" 
                            : "hover:bg-gray-200 text-gray-800"
                        }`}
                      >
                        📄 {documentOutlines[key].title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Viewer frame panel */}
                <div className="flex-1 flex flex-col bg-[#e1e2e3] relative">
                  <div className="flex-1 p-2 flex gap-4 overflow-hidden h-full">
                    
                    {/* Outline Text reader display box */}
                    <div className="w-1/2 flex flex-col bg-white border border-gray-300 shadow-sm p-3 font-mono text-[10px] text-black overflow-y-auto whitespace-pre-wrap select-text">
                      {documentOutlines[activeOutlineTab].content}
                    </div>

                    {/* PDF embedded iframe panel */}
                    <div className="w-1/2 h-full bg-white border border-gray-300 shadow-sm overflow-hidden relative">
                      <iframe
                        src={`${resume}#toolbar=0&navpanes=0`}
                        className="w-full h-full border-none"
                        title="Honestraj Resume PDF Frame"
                      />
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </div>

        {/* MOBILE LAYOUT STACKED PANELS (Visible on mobile/tablet screens) */}
        <div className="w-full md:hidden flex flex-col gap-6 mt-4 z-10">
          {isReaderOpen && (
            <div className={`w-full overflow-hidden ${activeStyles.windowBg}`}>
              {/* Mobile window bar */}
              <div className={activeStyles.windowTitle}>
                <span>📄 ResumeReader.exe</span>
                <button onClick={() => setIsReaderOpen(false)} className={activeStyles.windowButton}>✕</button>
              </div>

              {/* Mobile controls */}
              <div className="bg-[#eeeeee] border-b border-gray-300 p-2 flex items-center justify-between font-sans text-[10px] text-black font-semibold">
                <button onClick={triggerPrint} className="px-2 py-1 border border-gray-400 bg-white active:bg-gray-150">
                  🖨️ Print CV
                </button>
                <a href={resume} download="HCV-F.pdf" className="px-2 py-1 border border-gray-400 bg-white active:bg-gray-150">
                  📥 Download PDF
                </a>
              </div>

              {/* Stacked mobile outline index */}
              <div className="p-3 bg-[#f3efe9] text-black border-b border-gray-300 flex flex-wrap gap-1.5 justify-center">
                {Object.keys(documentOutlines).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveOutlineTab(key)}
                    className={`text-[9px] font-mono px-2 py-1 border rounded ${
                      activeOutlineTab === key 
                        ? "bg-black text-white border-black font-bold" 
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {documentOutlines[key].title}
                  </button>
                ))}
              </div>

              {/* Outline content card */}
              <div className="p-4 bg-white text-black font-mono text-[9px] whitespace-pre-wrap leading-relaxed border-b border-gray-300 select-text">
                {documentOutlines[activeOutlineTab].content}
              </div>

              {/* Native PDF frame fit */}
              <div className="p-1.5 bg-[#d3d3d3] flex justify-center items-center h-[340px]">
                <iframe
                  src={`${resume}#toolbar=0&navpanes=0`}
                  className="w-full h-full bg-white border border-gray-400"
                  title="Mobile Resume Frame"
                />
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

          {/* Taskbar running apps */}
          {isReaderOpen && (
            <div className="hidden sm:flex items-center">
              <button
                onClick={toggleMinimize}
                className={isReaderMinimized ? activeStyles.inactiveTab : activeStyles.activeTab}
              >
                📄 ResumeReader.exe
              </button>
            </div>
          )}
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
                    icon="📄"
                    label="ResumeReader.exe (Active App)"
                    onClick={() => {
                      setIsReaderOpen(true);
                      setIsReaderMinimized(false);
                      setIsStartMenuOpen(false);
                    }}
                  />
                  <StartMenuLink
                    icon="🏠"
                    label="Portfolio Home"
                    linkTo="/"
                    onClick={() => setIsStartMenuOpen(false)}
                  />
                  <StartMenuLink
                    icon="📂"
                    label="About Workstation"
                    linkTo="/about"
                    onClick={() => setIsStartMenuOpen(false)}
                  />
                </div>

                <hr className="border-gray-200 my-1" />

                <div className="py-1 font-bold">
                  {/* Download CV */}
                  <a
                    href={resume}
                    download="HCV-F.pdf"
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

// Sub-Component: Start Menu Item Link
const StartMenuLink = ({ icon, label, linkTo, onClick }) => {
  if (linkTo) {
    return (
      <Link
        to={linkTo}
        onClick={onClick}
        className="w-full text-left flex items-center gap-2.5 py-1.5 px-3 hover:bg-black hover:text-white transition-all cursor-pointer font-medium font-sans border-none"
      >
        <span className="text-sm filter drop-shadow-sm select-none">{icon}</span>
        <span className="font-mono text-xs">{label}</span>
      </Link>
    );
  }

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

// Sub-Component: Live Digital Clock
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
