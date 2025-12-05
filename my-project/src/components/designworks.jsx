import { Link } from "react-router-dom";
import awal from "../assets/projects/awal.png"
import caretaker from "../assets/projects/caretaker.png"
import acuite from "../assets/projects/acuite.jpg"
import mistnov from "../assets/projects/mistnov.png"
import EH from "../assets/projects/eh.png"
import EE from "../assets/projects/ee.png"

export default function Designworks() {
    const projects = [
        {
            image: awal,
            title: "Awal Plastics",
            description: "Awal Plastics is considered one of the largest signage companies in the Middle East. We design, fabricate, install and maintain all types of signage.",
            link: "/awalplastics",
            alt: "awalplastics"
        },
        {
            image: caretaker,
            title: "Good Fellows",
            description: <>A group of young graduates who have an affection towards the elderly and look forward to creating meaningful bonds with our <br /> Grandpals!</>,
            link: "/goodfellows",
            alt: "caretaker"
        },
        {
            image: acuite,
            title: "Acuite Ratings",
            description: <>As India’s foremost credit rating and research agency, we actively pursue our goal to unlock the growth potential of <br /> financial markets.</>,
            link: "/acuite",
            alt: "acuite"
        },
        {
            image: mistnov,
            title: "Mistnov",
            description: "Hotel room booking software is a digital platform that lets guests book rooms online 24/7, while automating hotel operations like inventory management, pricing, and guest data.",
            link: "/mistnov",
            alt: "mistnov"
        },
        {
            image: EH,
            title: "Excellent Hospital",
            description: "Hotel room booking software is a digital platform that lets guests book rooms online 24/7, while automating hotel operations like inventory management, pricing, and guest data.",
            link: "/eh",
            alt: "Excellent Hospital"
        },
        {
            image: EE,
            title: "Excellent Education",
            description: "Hotel room booking software is a digital platform that lets guests book rooms online 24/7, while automating hotel operations like inventory management, pricing, and guest data.",
            link: "/ee",
            alt: "Excellent Education"
        }
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 mx-auto max-w-7xl px-4 place-items-center mb-12">
            {projects.map((project, index) => (
                <div key={index} className="w-full max-w-[500px] flex flex-col items-center gap-4 bg-indigo-100 p-6 rounded-xl transition-transform hover:scale-[1.02]">
                    <img className="w-full h-auto rounded-lg shadow-sm" src={project.image} alt={project.alt} />
                    <h1 className="text-2xl md:text-3xl font-medium text-center">{project.title}</h1>
                    <p className="text-gray-600 text-center leading-relaxed">{project.description}</p>
                    <Link to={project.link} className="mt-2 px-6 py-2 bg-white text-indigo-600 font-medium rounded-full shadow-sm hover:shadow-md transition-all hover:bg-indigo-50">
                        View Project
                    </Link>
                </div>
            ))}
        </section>
    );
}