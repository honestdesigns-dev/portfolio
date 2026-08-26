import { Link } from "react-router-dom";
import { useCursor } from "../context/CursorContext";
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
import colan from "../assets/projects/colan.png";
import solar from "../assets/projects/solar.png";
import hajj from "../assets/projects/hajj.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const projects = [
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
        name: "Signex (Enterprise)",
        link: "https://www.behance.net/gallery/237202087/Signex-ERP-App-UIUX-Product-Design-Case-Study",
        img: awalPlastics,
        category: "ERP / Enterprise Dashboard"
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
    {
        name: "Mistnov (Hotel Booking) - Freelance",
        link: "https://www.behance.net/gallery/205870419/Mistnov",
        img: mist,
        category: "Travel & Hospitality"
    },
    {
        name: "Algominds (Code learning platform)",
        link: "https://www.behance.net/gallery/208198007/Algominds",
        img: algominds,
        category: "Developer Education"
    }
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
                <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full max-w-none px-6 md:px-16 justify-items-center">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setCursorVariant("link")}
                            onMouseLeave={() => setCursorVariant("default")}
                            className="hover:cursor-none w-full flex justify-center"
                        >
                            <div className="bg-[#000000]/0 hover:bg-[#000000]/4 dark:hover:bg-[#ffffff]/10 p-4 rounded-lg hover:scale-105 transition-all flex flex-col items-center justify-center gap-2 w-full max-w-[400px]">
                                <img className="w-full h-[220px] object-cover rounded-lg" src={project.img} alt={project.name} />
                                <h2 className="text-2xl font-bold text-black dark:text-white text-center">{project.name}</h2>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{project.category}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}