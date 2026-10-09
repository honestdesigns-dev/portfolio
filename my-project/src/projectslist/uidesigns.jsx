import { Link } from "react-router-dom";
import { useCursor } from "../context/CursorContext";
import awalPlastics from "../assets/projects/awal.png";
import caretaker from "../assets/projects/caretaker.png";
import eedu from "../assets/projects/eeducation.png";
import ehos from "../assets/projects/ehospital.png";
import sports from "../assets/projects/sportsref.png";
import lightup from "../assets/projects/lightup.png";
import kuvi from "../assets/projects/kuvi.png";
import qodora from "../assets/projects/Qodora.png";
import solar from "../assets/projects/solar.png";
import hajj from "../assets/projects/hajj.png";
import rido from "../assets/projects/rido.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const projects = [
    {
        name: "Awal Plastics (Enterprise)",
        link: "https://www.behance.net/gallery/237202087/Signex-ERP-App-UIUX-Product-Design-Case-Study",
        img: awalPlastics,
        category: "Enterprise Platform"
    },
    {
        name: "Rido (Bike/Cab Booking)",
        link: "https://www.behance.net/gallery/256520445/Rido-Travel-App-Bike-Cab-Ride-App-Travel-App",
        img: rido,
        category: "Bike & Cab Booking App"
    },
    {
        name: "Ramachandran Hospitality",
        link: "https://www.behance.net/gallery/254825315/Hospitality",
        img: ehos,
        category: "Hospitality Website"
    },
    {
        name: "Ramachandran Education",
        link: "https://www.behance.net/gallery/254783717/Education-Website",
        img: eedu,
        category: "University Portal"
    },
    {
        name: "Good Fellows (Healthcare)",
        link: "https://www.behance.net/gallery/254562389/Healthcare",
        img: caretaker,
        category: "Healthcare / Social"
    },
    {
        name: "Travel Guide (HAJJ Travel)",
        link: "https://www.behance.net/gallery/254786435/Travel-Tourism",
        img: hajj,
        category: "Travel & Tourism"
    },
    {
        name: "QODORA (Medical Insurance)",
        link: "https://www.behance.net/gallery/250527775/Qodora",
        img: qodora,
        category: "Medical Insurance"
    },
    {
        name: "Solar Energy Management",
        link: "https://www.behance.net/gallery/254784961/Solar-Energy-Management",
        img: solar,
        category: "Energy Management Dashboard"
    },
    {
        name: "Sports Reform",
        link: "https://www.behance.net/gallery/205963977/Sports-Reform-website-ui-design",
        img: sports,
        category: "Sports Performance Portal"
    },
    {
        name: "Guvi Learning Platform",
        link: "https://www.behance.net/gallery/240490215/Learning-Course-Landing-Page",
        img: kuvi,
        category: "EdTech Platform"
    },
    {
        name: "Lightup Temple (Booking Pooja)",
        link: "https://www.behance.net/gallery/205956803/Lightup-Temples-website-ui-design",
        img: lightup,
        category: "SaaS Booking Platform"
    },
];

export default function Works() {
    const { setCursorVariant } = useCursor();
    return (
        <section>
            {/* PROJECT CARDS */}
            <div className="flex flex-col items-center justify-center pt-24 sm:pt-24 md:pt-6">
                <Link to="/" className="flex items-center gap-2"><ArrowBackIcon /> Go Back</Link><br />
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white text-center">My Casing</h1>
                    <p className="mt-10 text-4xl md:text-4xl font-bold text-[#FF4D00] text-center">UIUX Design's</p>
                </div>
                <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-none px-6 md:px-16 justify-items-center">
                    {projects.map((project, index) => {
                        const sanitizedFileName = project.name
                            .toLowerCase()
                            .replace(/[^a-z0-9]/g, '_')
                            .replace(/_+/g, '_')
                            .slice(0, 20);

                        return (
                            <a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setCursorVariant("link")}
                                onMouseLeave={() => setCursorVariant("default")}
                                className="hover:cursor-none w-full flex justify-center no-underline"
                            >
                                <div className="group w-full max-w-[400px] bg-white dark:bg-[#141417] border-2 border-black dark:border-[#2f2f35] rounded-xl overflow-hidden transition-all duration-200 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#FF4D00] dark:hover:shadow-[7px_7px_0px_0px_#FF4D00] hover:-translate-x-0.5 hover:-translate-y-1 flex flex-col justify-between">
                                    {/* Retro Window Title Bar */}
                                    <div className="bg-[#f2f2f4] dark:bg-[#1f1f24] group-hover:bg-[#eaebee] dark:group-hover:bg-[#26262c] border-b-2 border-black dark:border-[#2f2f35] px-3.5 py-2 flex items-center justify-between select-none transition-colors">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <span className="text-xs">🎨</span>
                                            <span className="font-mono text-[11px] font-bold text-gray-800 dark:text-gray-300 truncate">
                                                {sanitizedFileName}.exe
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 shrink-0 ml-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600 border border-black/40 dark:border-black" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600 border border-black/40 dark:border-black" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-black/40 dark:border-black" />
                                        </div>
                                    </div>

                                    {/* Media Canvas / Screen */}
                                    <div className="relative aspect-[16/10] w-full bg-[#0d0d0f] overflow-hidden border-b-2 border-black dark:border-[#2f2f35]">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-105"
                                            src={project.img}
                                            alt={project.name}
                                            loading="lazy"
                                        />
                                        {/* Retro Badge Overlay */}
                                        <div className="absolute top-2.5 left-2.5 bg-black/85 backdrop-blur-md border border-white/20 text-[#39ff14] font-mono text-[9px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">
                                            {project.category}
                                        </div>
                                        {/* Scanline CRT overlay */}
                                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-15 transition-opacity bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.6)_50%)] bg-[size:100%_4px]" />
                                    </div>

                                    {/* Card Body & Details */}
                                    <div className="p-4 flex flex-col flex-1 justify-between gap-3 bg-white dark:bg-[#141417]">
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-xl font-black text-black dark:text-white group-hover:text-[#FF4D00] transition-colors line-clamp-1 leading-tight">
                                                {project.name}
                                            </h2>
                                            <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-500 dark:text-gray-400">
                                                <span className="text-gray-400 dark:text-gray-500">SPEC:</span>
                                                <span className="text-gray-800 dark:text-gray-200 font-semibold truncate">{project.category}</span>
                                            </div>
                                        </div>

                                        {/* Retro Push Button */}
                                        <div className="pt-2 border-t border-gray-100 dark:border-[#232328]">
                                            <div className="w-full py-2 px-3 bg-[#f3f4f6] dark:bg-[#202025] group-hover:bg-[#FF4D00] text-black dark:text-white group-hover:text-white font-mono text-xs font-bold rounded-md border-2 border-black dark:border-[#383840] group-hover:border-black flex items-center justify-between transition-all duration-150 shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5">
                                                <span>EXECUTE FILE</span>
                                                <ArrowOutwardIcon style={{ fontSize: "14px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}