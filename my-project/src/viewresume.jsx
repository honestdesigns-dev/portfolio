import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

// Assets from existing project structure
import resume from "./assets/uicv.pdf";
import templatePdf from "./assets/uicv.pdf";

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
Experienced and user-oriented UI/UX Product Designer with over 4+ years of hands-on expertise orchestrating responsive, elegant, and highly scalable enterprise (ERP) dashboards, custom application suites, and landing architectures. 

Extremely focused on aligning business logic with sleek, accessible user-centered experiences.`
  },

  skills: {
   title: "SKILLS.TXT",
   content: `SKILLS:
=========================================
User Experience Design, User Interface Design, Motion Graphic Design, Video Editing, 3D
Animation [Beginner], HTML, CSS, React / Tailwind / Github [Beginner].`
  },

  tools: {
   title: "DESIGN TOOLS.TXT",
   content: `DESIGN TOOLS:
=========================================
Figma, Adobe XD, Framer, Webflow, UX Pin, Marvel, Blender 3D, Spline, Cinema 4D,
Adobe Aero 3D, Adobe Dimension, Adobe Mixamo 3D, Adobe After Effects, Premiere Pro,
Photoshop, Adobe Illustrator, Dora 3D, Adobe creative cloud, learning more tools…
`
  },

  experience: {
    title: "EXPERIENCE.TXT",
    content: `WORK CHRONICLES:
=========================================
💼 Colan Infotech Pvt Ltd (Chennai, India)
   Role: Lead UI/UX & Product Designer
   Duration: 4+ Years Hands-on Experience
   
   * Architected 10+ client projects including scalable enterprise ERP systems.
   * Designed rich aesthetic components in Blender, Spline, Figma, & React.`
  },

  education: {
    title: "EDUCATION.TXT",
    content: `ACADEMIC OUTLINE:
=========================================
🎓 Bachelor of Science in Computer Science
   
📌 Professional Certifications:
=========================================
🎓 Diploma in Computer Application`
  },
  contact: {
    title: "CONTACT_INFO.TXT",
    content: `GET IN TOUCH:
=========================================
📬 Email: honestdesigns0.@gmail.com
🌐 Location: Chennai, Tamil Nadu, India`
  }
};

const generateResumeDoc = (format) => {
  const title = "Honestraj - UI/UX Product Designer Resume";
  const contentHtml = `
    <div style="font-family: 'Calibri', sans-serif; color: #333333; margin: 0 auto; max-width: 6.5in;">
      <table style="width:100%; margin-bottom: 20pt; border-collapse: collapse;">
        <tr>
          <td style="vertical-align: top;">
            <h1 style="margin: 0; font-family: 'Georgia', serif; font-size: 26pt; font-weight: bold; color: #000000; letter-spacing: -0.5px;">HONESTRAJ</h1>
            <p style="margin: 2pt 0 0 0; font-size: 13pt; color: #555555; text-transform: uppercase; letter-spacing: 1px;">Lead UI/UX & Product Designer</p>
          </td>
          <td style="text-align: right; vertical-align: top; font-size: 10pt; color: #555555; line-height: 1.4;">
            <p style="margin: 0;">📍 Chennai, Tamil Nadu, India</p>
            <p style="margin: 0;">✉️ honestdesigns.dev@gmail.com</p>
            <p style="margin: 0;">🌐 behance.net/honestraj</p>
          </td>
        </tr>
      </table>

      <hr style="border: 0; border-top: 1.5pt solid #222222; margin-bottom: 15pt;" />

      <!-- SUMMARY -->
      <h2 style="font-family: 'Georgia', serif; font-size: 13pt; font-weight: bold; color: #111111; text-transform: uppercase; margin-top: 0; margin-bottom: 6pt; letter-spacing: 0.5px;">Professional Summary</h2>
      <p style="margin: 0 0 15pt 0; font-size: 10.5pt; line-height: 1.5; text-align: justify;">
        Experienced and user-oriented UI/UX Product Designer with over 4+ years of hands-on expertise orchestrating responsive, elegant, and highly scalable enterprise (ERP) dashboards, custom application suites, and landing architectures. Extremely focused on aligning business logic with sleek, accessible, and user-centered experiences.
      </p>

      <!-- EXPERIENCE -->
      <h2 style="font-family: 'Georgia', serif; font-size: 13pt; font-weight: bold; color: #111111; text-transform: uppercase; margin-top: 15pt; margin-bottom: 6pt; letter-spacing: 0.5px;">Work Experience</h2>
      
      <table style="width:100%; margin-bottom: 4pt; border-collapse: collapse;">
        <tr>
          <td style="font-weight: bold; font-size: 11pt; color: #111111;">Colan Infotech Pvt Ltd</td>
          <td style="text-align: right; font-size: 10pt; color: #555555; font-style: italic;">Chennai, India</td>
        </tr>
        <tr>
          <td style="font-style: italic; font-size: 10pt; color: #444444;">Lead UI/UX & Product Designer</td>
          <td style="text-align: right; font-size: 10pt; color: #555555;">2023 - Present</td>
        </tr>
      </table>
      <ul style="margin: 0 0 15pt 0; padding-left: 15pt; font-size: 10.5pt; line-height: 1.5;">
        <li style="margin-bottom: 3pt;">Architected and designed 10+ scalable enterprise ERP systems, improving user task completion rates.</li>
        <li style="margin-bottom: 3pt;">Reduced usability obstacles by 40% through structured usability testing workflows and data-driven iterations.</li>
        <li style="margin-bottom: 3pt;">Designed rich 3D and 2D components using Blender, Spline, Figma, and translated them into modular React codebases.</li>
        <li style="margin-bottom: 3pt;">Collaborated closely with engineering and product management teams to define component libraries and style guides.</li>
      </ul>

      <!-- EDUCATION -->
      <h2 style="font-family: 'Georgia', serif; font-size: 13pt; font-weight: bold; color: #111111; text-transform: uppercase; margin-top: 15pt; margin-bottom: 6pt; letter-spacing: 0.5px;">Education & Certifications</h2>
      
      <table style="width:100%; margin-bottom: 4pt; border-collapse: collapse;">
        <tr>
          <td style="font-weight: bold; font-size: 11pt; color: #111111;">Bachelor of Science in Creative Design</td>
          <td style="text-align: right; font-size: 10pt; color: #555555; font-style: italic;">Specialization: Interaction & Interface Architectures</td>
        </tr>
      </table>
      <p style="margin: 0 0 10pt 0; font-size: 10.5pt; line-height: 1.5; color: #555555;">
        Focus areas: Usability Engineering, Interactive Media, Motion Design, and Human-Computer Interaction.
      </p>
      
      <p style="margin: 0 0 15pt 0; font-size: 10pt; line-height: 1.4;">
        <strong>Professional Certifications:</strong><br/>
        • Enterprise Architecture Usability Engineering<br/>
        • Motion Graphics & Flow Design (After Effects Focus)
      </p>

      <!-- KEY SKILLS -->
      <h2 style="font-family: 'Georgia', serif; font-size: 13pt; font-weight: bold; color: #111111; text-transform: uppercase; margin-top: 15pt; margin-bottom: 6pt; letter-spacing: 0.5px;">Core Skills</h2>
      <table style="width: 100%; font-size: 10pt; line-height: 1.5; border-collapse: collapse; margin-bottom: 15pt;">
        <tr>
          <td style="width: 33%; vertical-align: top; padding: 2pt 0;">• UI/UX Design & Prototyping</td>
          <td style="width: 33%; vertical-align: top; padding: 2pt 0;">• 3D Modeling (Blender/Spline)</td>
          <td style="width: 33%; vertical-align: top; padding: 2pt 0;">• React.js & Front-End Dev</td>
        </tr>
        <tr>
          <td style="width: 33%; vertical-align: top; padding: 2pt 0;">• Usability Testing & Research</td>
          <td style="width: 33%; vertical-align: top; padding: 2pt 0;">• Design Systems Architecture</td>
          <td style="width: 33%; vertical-align: top; padding: 2pt 0;">• Motion & Interaction Design</td>
        </tr>
      </table>
    </div>
  `;
  
  const docHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <!--[if gte mso 9]>
      <xml>
        <w:WordDocument>
          <w:View>Print</w:View>
          <w:Zoom>100</w:Zoom>
          <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
      </xml>
      <![endif]-->
      <meta charset="utf-8">
      <title>${title}</title>
      <style>
        @page {
          size: 8.5in 11in;
          margin: 1.0in 1.0in 1.0in 1.0in;
          mso-header-margin: .5in;
          mso-footer-margin: .5in;
          mso-paper-source: 0;
        }
        div.Section1 { page: Section1; }
      </style>
    </head>
    <body>
      <div class="Section1">
        ${contentHtml}
      </div>
    </body>
    </html>
  `;
  
  const mimeType = format === 'docx' 
    ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    : 'application/msword';
  
  return new Blob([docHtml], { type: mimeType });
};

export default function ViewResume() {
  const [theme, setTheme] = useState("win98");
  const [isReaderOpen, setIsReaderOpen] = useState(true);
  const [isReaderMinimized, setIsReaderMinimized] = useState(false);
  const [isReaderMaximized, setIsReaderMaximized] = useState(false);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isShutDown, setIsShutDown] = useState(false);

  // Exporter state
  const [isDownloaderOpen, setIsDownloaderOpen] = useState(false);
  const [isDownloaderMinimized, setIsDownloaderMinimized] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("docx");
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportStatus, setExportStatus] = useState("");

  const [downloaderType, setDownloaderType] = useState("template");

  // Document outline tab state
  const [activeOutlineTab, setActiveOutlineTab] = useState("summary");

  const desktopRef = useRef(null);

  const getPanelClass = () => {
    if (theme === "win98") {
      return "bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white p-3";
    } else if (theme === "synthwave") {
      return "bg-[#150b22]/80 border border-[#ff4a7d]/40 shadow-[0_0_8px_rgba(255,74,125,0.2)] p-3 text-[#00ffff]";
    } else {
      return "bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]";
    }
  };

  const getBtnClass = (active = false) => {
    if (theme === "win98") {
      return active
        ? "bg-[#c0c0c0] border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white font-bold p-2 text-center"
        : "bg-[#c0c0c0] border-2 border-b-[#808080] border-r-[#808080] border-t-white border-l-white hover:bg-[#d0d0d0] p-2 text-center active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white";
    } else if (theme === "synthwave") {
      return active
        ? "bg-[#ff4a7d] text-white border border-[#ff4a7d] shadow-[0_0_10px_rgba(255,74,125,0.6)] p-2 text-center font-bold"
        : "bg-[#10061a] text-[#ff4a7d] border border-[#ff4a7d]/50 hover:border-[#ff4a7d] hover:bg-[#ff4a7d]/10 p-2 text-center transition-all";
    } else {
      return active
        ? "bg-black text-white border-2 border-black font-bold p-2 text-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
        : "bg-white text-black border-2 border-black hover:bg-gray-100 p-2 text-center font-medium shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all";
    }
  };

  const handleDownloadResume = () => {
    setDownloaderType("resume");
    setIsDownloaderOpen(true);
    setIsDownloaderMinimized(false);
    setIsExporting(true);
    setExportProgress(0);
    setExportStatus("Connecting to document server...");

    const intervals = [
      { progress: 20, status: "Retrieving uicv.pdf...", delay: 250 },
      { progress: 50, status: "Verifying document signature...", delay: 500 },
      { progress: 80, status: "Generating print stream...", delay: 800 },
      { progress: 100, status: "Ready for download!", delay: 1100 }
    ];

    intervals.forEach((step) => {
      setTimeout(() => {
        setExportProgress(step.progress);
        setExportStatus(step.status);

        if (step.progress === 100) {
          setTimeout(() => {
            const link = document.createElement("a");
            link.href = resume;
            link.download = "uicv.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setIsExporting(false);
          }, 300);
        }
      }, step.delay);
    });
  };

  const handleDownload = () => {
    setIsExporting(true);
    setExportProgress(0);
    setExportStatus("Initializing export stream...");
    
    const intervals = [
      { progress: 25, status: "Resolving template metadata...", delay: 200 },
      { progress: 55, status: "Compiling structures & styling...", delay: 400 },
      { progress: 85, status: "Packaging stream buffer...", delay: 700 },
      { progress: 100, status: "Export complete!", delay: 950 }
    ];
    
    intervals.forEach((step) => {
      setTimeout(() => {
        setExportProgress(step.progress);
        setExportStatus(step.status);
        
        if (step.progress === 100) {
          setTimeout(() => {
            // Perform actual download
            if (selectedFormat === "pdf") {
              const link = document.createElement("a");
              link.href = templatePdf;
              link.download = "Honestraj_CV_Template.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            } else {
              const blob = generateResumeDoc(selectedFormat);
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = `Honestraj_CV_Template.${selectedFormat}`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
            }
            setIsExporting(false);
          }, 300);
        }
      }, step.delay);
    });
  };

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
      className={`fixed md:relative w-full h-[calc(100vh-80px)] md:h-[750px] max-w-[1280px] mx-auto top-20 md:top-auto left-0 md:left-auto right-0 md:right-auto mt-0 md:mt-28 mb-0 md:mb-16 overflow-hidden flex flex-col transition-all duration-300 border-t-4 border-b-4 border-x-0 md:border-4 border-black rounded-none md:rounded-lg shadow-2xl p-0`}
      style={activeStyles.desktopStyle}
      onClick={() => setIsStartMenuOpen(false)}
    >
      {/* CRT Scanline Filter for Synthwave */}
      {theme === "synthwave" && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_3px] pointer-events-none z-50 opacity-40" />
      )}

      {/* DESKTOP AREA */}
      <div className="flex-1 w-full p-4 md:p-6 relative flex flex-row md:flex-col flex-wrap content-start items-start justify-start gap-4 md:gap-8 z-10 overflow-y-auto">
        
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
        <div
          onClick={() => {
            setIsDownloaderOpen(true);
            setIsDownloaderMinimized(false);
          }}
          className="flex flex-col items-center justify-center p-2 rounded cursor-pointer w-20 hover:bg-white/10 text-center select-none"
        >
          <div className="text-3xl filter drop-shadow-md leading-none mb-1.5">📥</div>
          <span className={activeStyles.iconText}>CV_Exporter.exe</span>
        </div>

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
                  onClick={handleDownloadResume}
                  className="flex items-center gap-1 px-2 py-0.5 border border-gray-400 bg-white hover:bg-gray-100 cursor-pointer shadow-[1px_1px_0px_0px_#000] active:shadow-none active:translate-y-0.5 font-bold"
                >
                  <span>📄</span> <span>Download Resume</span>
                </button>
                <button
                  onClick={() => {
                    setDownloaderType("template");
                    setIsDownloaderOpen(true);
                    setIsDownloaderMinimized(false);
                  }}
                  className="flex items-center gap-1 px-2 py-0.5 border border-gray-400 bg-white hover:bg-gray-100 cursor-pointer shadow-[1px_1px_0px_0px_#000] active:shadow-none active:translate-y-0.5 font-bold"
                >
                  <span>📥</span> <span>Download Template</span>
                </button>
                <button
                  onClick={triggerPrint}
                  className="flex items-center gap-1 px-2 py-0.5 border border-gray-400 bg-white hover:bg-gray-100 cursor-pointer shadow-[1px_1px_0px_0px_#000] active:shadow-none active:translate-y-0.5"
                >
                  <span>🖨️</span> <span>Print CV</span>
                </button>
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

          {isDownloaderOpen && !isDownloaderMinimized && (
            <motion.div
              drag
              dragMomentum={false}
              dragElastic={0}
              dragConstraints={desktopRef}
              initial={{ x: 120, y: 60, scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{
                zIndex: 40,
                width: "480px",
                position: "absolute",
              }}
              className={`pointer-events-auto flex flex-col overflow-hidden rounded ${activeStyles.windowBg}`}
            >
              {/* Exporter Title Bar */}
              <div className={activeStyles.windowTitle}>
                <span className="truncate font-mono">
                  {downloaderType === "resume" ? "CV_Exporter.exe - Downloading Resume" : "CV_Exporter.exe - Export Templates"}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button onClick={() => setIsDownloaderMinimized(true)} className={activeStyles.windowButton} title="Minimize">_</button>
                  <button onClick={() => setIsDownloaderOpen(false)} className={`${activeStyles.windowButton} hover:bg-red-500 hover:text-white`} title="Close">✕</button>
                </div>
              </div>

              {/* Exporter Body */}
              <div className={`p-4 flex flex-col gap-4 font-sans text-xs ${theme === 'synthwave' ? 'text-[#00ffff]' : 'text-black'} ${theme === 'synthwave' ? 'bg-[#0a0414]/95' : 'bg-[#c0c0c0]'}`}>
                {isExporting ? (
                  <div className={getPanelClass()}>
                    <h3 className="font-bold text-sm mb-2 font-mono">
                      {downloaderType === "resume" ? "DOWNLOAD PROGRESS" : "EXPORT PROGRESS"}
                    </h3>
                    <div className="w-full bg-gray-300 border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white h-6 relative overflow-hidden mb-2">
                      <div
                        className={`h-full transition-all duration-100 ${
                          theme === 'win98' 
                            ? 'bg-blue-800' 
                            : theme === 'synthwave' 
                              ? 'bg-[#ff4a7d]' 
                              : 'bg-black'
                        }`}
                        style={{ width: `${exportProgress}%` }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center font-bold text-[10px] text-shadow mix-blend-difference text-white">
                        {exportProgress}%
                      </span>
                    </div>
                    <p className="font-mono text-[10px] animate-pulse">{exportStatus}</p>
                  </div>
                ) : (
                  <>
                    <p className="font-medium">
                      Select the desired resume template format to export. Each template is formatted professionally according to industry standards.
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {/* PDF Option */}
                      <button
                        onClick={() => setSelectedFormat("pdf")}
                        className={`${getBtnClass(selectedFormat === "pdf")} flex flex-col items-center justify-center p-3 gap-2 cursor-pointer`}
                      >
                        <span className="text-3xl">📄</span>
                        <span className="font-bold">PDF Format</span>
                        <span className="text-[9px] opacity-80">Official PDF</span>
                      </button>

                      {/* DOCX Option */}
                      <button
                        onClick={() => setSelectedFormat("docx")}
                        className={`${getBtnClass(selectedFormat === "docx")} flex flex-col items-center justify-center p-3 gap-2 cursor-pointer`}
                      >
                        <span className="text-3xl">📝</span>
                        <span className="font-bold">Word (.docx)</span>
                        <span className="text-[9px] opacity-80">Modern XML</span>
                      </button>

                      {/* DOC Option */}
                      <button
                        onClick={() => setSelectedFormat("doc")}
                        className={`${getBtnClass(selectedFormat === "doc")} flex flex-col items-center justify-center p-3 gap-2 cursor-pointer`}
                      >
                        <span className="text-3xl">💾</span>
                        <span className="font-bold">Word (.doc)</span>
                        <span className="text-[9px] opacity-80">Legacy Doc</span>
                      </button>
                    </div>

                    {/* Selected Format Description Panel */}
                    <div className={getPanelClass()}>
                      <div className="flex items-start gap-3">
                        <div className="text-2xl mt-0.5">
                          {selectedFormat === "pdf" ? "ℹ️" : selectedFormat === "docx" ? "⚙️" : "📂"}
                        </div>
                        <div>
                          <h4 className="font-bold uppercase text-[10px] tracking-wide mb-1 font-mono">
                            {selectedFormat === "pdf" && "Adobe PDF Document"}
                            {selectedFormat === "docx" && "Office Open XML Document"}
                            {selectedFormat === "doc" && "Microsoft Word Legacy Document"}
                          </h4>
                          <p className="text-[10px] leading-relaxed opacity-90">
                            {selectedFormat === "pdf" && "Clean, print-ready, and non-editable static PDF template. Perfect for maintaining formatting and styling consistency."}
                            {selectedFormat === "docx" && "Fully editable, modern template formatted with standard fonts (Calibri, Georgia). Compatible with Microsoft Word 2007+, Google Docs, and Pages."}
                            {selectedFormat === "doc" && "Classic legacy format. Maximum backwards compatibility with older versions of Word and alternative office suites."}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-2 mt-2">
                      <button
                        onClick={() => setIsDownloaderOpen(false)}
                        className={`${getBtnClass(false)} px-4 py-1.5 cursor-pointer`}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleDownload}
                        className={`${getBtnClass(true)} px-6 py-1.5 font-bold cursor-pointer`}
                      >
                        Export Now 🚀
                      </button>
                    </div>
                  </>
                )}
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
              <div className="bg-[#eeeeee] border-b border-gray-300 p-2 flex items-center gap-2 justify-center font-sans text-[10px] text-black font-semibold">
                <button
                  onClick={handleDownloadResume}
                  className="px-2 py-1 border border-gray-400 bg-white active:bg-gray-150 cursor-pointer flex items-center gap-1"
                >
                  <span>📄</span> <span>Download Resume</span>
                </button>
                <button
                  onClick={() => {
                    setDownloaderType("template");
                    setIsDownloaderOpen(true);
                  }}
                  className="px-2 py-1 border border-gray-400 bg-white active:bg-gray-150 cursor-pointer flex items-center gap-1"
                >
                  <span>📥</span> <span>Download Template</span>
                </button>
                <button
                  onClick={triggerPrint}
                  className="px-2 py-1 border border-gray-400 bg-white active:bg-gray-150 cursor-pointer flex items-center gap-1"
                >
                  <span>🖨️</span> <span>Print</span>
                </button>
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

          {isDownloaderOpen && (
            <div className={`w-full overflow-hidden ${activeStyles.windowBg}`}>
              {/* Mobile window bar */}
              <div className={activeStyles.windowTitle}>
                <span>
                  {downloaderType === "resume" ? "📥 CV_Exporter.exe - Downloading Resume" : "📥 CV_Exporter.exe - Export Templates"}
                </span>
                <button onClick={() => setIsDownloaderOpen(false)} className={activeStyles.windowButton}>✕</button>
              </div>

              {/* Mobile Exporter Body */}
              <div className={`p-4 flex flex-col gap-4 font-sans text-xs bg-[#c0c0c0] ${theme === 'synthwave' ? 'text-[#00ffff]' : 'text-black'} ${theme === 'synthwave' ? 'bg-[#0a0414]' : ''}`}>
                {isExporting ? (
                  <div className="p-3 border border-gray-300 rounded bg-white text-black">
                    <h3 className="font-bold text-[10px] mb-2 font-mono text-black">
                      {downloaderType === "resume" ? "DOWNLOADING RESUME..." : "EXPORTING TEMPLATE..."}
                    </h3>
                    <div className="w-full bg-gray-200 border h-5 relative overflow-hidden mb-2">
                      <div
                        className="h-full bg-black"
                        style={{ width: `${exportProgress}%` }}
                      />
                    </div>
                    <p className="font-mono text-[9px] text-gray-700">{exportStatus}</p>
                  </div>
                ) : (
                  <>
                    <p className="font-medium text-[10px]">
                      Choose format to download the resume:
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setSelectedFormat("pdf")}
                        className={`p-2 border rounded text-center flex flex-col items-center gap-1 cursor-pointer ${
                          selectedFormat === "pdf" ? "bg-black text-white border-black font-bold" : "bg-white text-gray-700 border-gray-300"
                        }`}
                      >
                        <span className="text-xl">📄</span>
                        <span className="text-[9px]">PDF</span>
                      </button>
                      <button
                        onClick={() => setSelectedFormat("docx")}
                        className={`p-2 border rounded text-center flex flex-col items-center gap-1 cursor-pointer ${
                          selectedFormat === "docx" ? "bg-black text-white border-black font-bold" : "bg-white text-gray-700 border-gray-300"
                        }`}
                      >
                        <span className="text-xl">📝</span>
                        <span className="text-[9px]">DOCX</span>
                      </button>
                      <button
                        onClick={() => setSelectedFormat("doc")}
                        className={`p-2 border rounded text-center flex flex-col items-center gap-1 cursor-pointer ${
                          selectedFormat === "doc" ? "bg-black text-white border-black font-bold" : "bg-white text-gray-700 border-gray-300"
                        }`}
                      >
                        <span className="text-xl">💾</span>
                        <span className="text-[9px]">DOC</span>
                      </button>
                    </div>

                    <p className="text-[9px] leading-relaxed text-gray-600 bg-white/80 p-2 border rounded border-gray-300">
                      {selectedFormat === "pdf" && "Official static PDF Template. Clean and print-ready."}
                      {selectedFormat === "docx" && "Microsoft Word modern template. Editable."}
                      {selectedFormat === "doc" && "Legacy DOC Word format. Maximum compatibility."}
                    </p>

                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => setIsDownloaderOpen(false)}
                        className="px-3 py-1.5 border border-gray-300 rounded text-[10px] bg-white text-black cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleDownload}
                        className="px-4 py-1.5 bg-black text-white font-bold rounded text-[10px] cursor-pointer"
                      >
                        Download 🚀
                      </button>
                    </div>
                  </>
                )}
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
          {isDownloaderOpen && (
            <div className="hidden sm:flex items-center ml-2">
              <button
                onClick={() => setIsDownloaderMinimized(!isDownloaderMinimized)}
                className={isDownloaderMinimized ? activeStyles.inactiveTab : activeStyles.activeTab}
              >
                {downloaderType === "resume" ? "📥 Resume_Download" : "📥 CV_Exporter.exe"}
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

                <div className="py-1 font-bold flex flex-col gap-0.5">
                  {/* Download Resume */}
                  <button
                    onClick={() => {
                      handleDownloadResume();
                      setIsStartMenuOpen(false);
                    }}
                    className="w-full text-left flex items-center gap-2.5 py-1.5 px-3 hover:bg-black hover:text-white transition-all cursor-pointer font-sans border-none"
                  >
                    <span>📄</span>
                    <span>Download Resume (PDF)</span>
                  </button>

                  {/* Download Template */}
                  <button
                    onClick={() => {
                      setDownloaderType("template");
                      setIsDownloaderOpen(true);
                      setIsDownloaderMinimized(false);
                      setIsStartMenuOpen(false);
                    }}
                    className="w-full text-left flex items-center gap-2.5 py-1.5 px-3 hover:bg-black hover:text-white transition-all cursor-pointer font-sans border-none"
                  >
                    <span>📥</span>
                    <span>Download Resume Template</span>
                  </button>

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
