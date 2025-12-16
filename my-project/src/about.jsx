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

export default function About() {
    const skills = [
        { src: Figma, name: "Figma" },
        { src: Ae, name: "Adobe After Effects" },
        { src: Ai, name: "Adobe Illustrator" },
        { src: Ps, name: "Adobe Photoshop" },
        { src: Pr, name: "Adobe Premiere Pro" },
        { src: Xd, name: "Adobe XD" },
        { src: Rush, name: "Adobe Premiere Rush" },
        { src: Creatie, name: "Creatie" },
        { src: Blender, name: "Blender" },
        { src: Spline, name: "Spline" },
        { src: ReactLogo, name: "React" },
        { src: Framer, name: "Framer" }
    ];
    return (
        <section className="mt-24 flex flex-col md:flex-col items-center justify-center gap-10 max-w-[1280px] mx-auto p-6">
            <img className="w-64 h-auto rounded-2xl object-cover" src={Me} alt="Profile" />
            <div className="flex flex-col gap-4 max-w-xl text-center md:text-left">
                <h1 className="text-4xl text-center font-bold text-black">Honestraj</h1>
                <p className="text-base text-gray-600 text-center leading-relaxed">
                    Highly driven <span className="text-[#FF4D00] font-bold">UI/UX Designer</span> with 3+ years of hands-on experience in designing intuitive and
                    scalable digital solutions for complex enterprise systems [ERP]. Proven expertise in applying
                    user-centered design principles to analyze target user needs, translate research findings into
                    optimized design solutions, and enhance product usability and satisfaction. I completed
                    10+ projects with the client's satisfaction.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-center gap-6 mt-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:-translate-y-1 duration-100">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl border border-gray-100 p-2 flex items-center justify-center">
                                <img src={skill.src} alt={skill.name} className="w-full h-full object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}