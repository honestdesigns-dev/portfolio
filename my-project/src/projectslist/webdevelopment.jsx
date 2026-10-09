import { Link } from "react-router-dom";
import { useCursor } from "../context/CursorContext";
import aspirelens from "../assets/projects/aspirelenss.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const projects = [
    {
        name: "Aspire Lens",
        link: "https://www.aspirelens.com/",
        img: aspirelens,
        category: "School Photography Platform"
    }
];

export default function WebDevelopment() {
    const { setCursorVariant } = useCursor();
    return (
        <section>
            {/* PROJECT CARDS */}
            <div className="flex flex-col items-center justify-center pt-24 sm:pt-24 md:pt-6">
                <Link to="/" className="flex items-center gap-2"><ArrowBackIcon /> Go Back</Link><br />
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white text-center">My Casing</h1>
                    <p className="mt-10 text-4xl md:text-4xl font-bold text-[#FF4D00] text-center">Web Development</p>
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
