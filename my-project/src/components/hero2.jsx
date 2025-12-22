import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import GamesIcon from '@mui/icons-material/Games';
import uiux from "../assets/uid.jpg";
import manime from "../assets/manime.jpg";
import threeD from "../assets/3dd.jpg";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useCursor } from "../context/CursorContext";

export default function Hero2() {
    const { setCursorVariant } = useCursor();

    return (
        <section className="w-full py-10 bg-[#f0f0f0] dark:bg-[#1a1a1a] my-20 relative cursor-default">
            <Marquee gradient={false} speed={100} className="overflow-hidden rotate-4">
                <div className="flex items-center gap-12 px-6 bg-black py-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Web Design</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Visual Design</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">UI/UX Design</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Branding</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Animation</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Video Editing</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Photo Editing</h1>
                    <GamesIcon fontSize="large" className="text-[#FF4D00] mr-12" />
                </div>
            </Marquee>
            <Marquee gradient={false} speed={100} className="overflow-hidden rotate-[-4deg]">
                <div className="flex items-center gap-12 px-6 bg-[#FF4D00] py-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Senior Designer</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">3+ Years of Experience</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Satisfied Clients</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Branding</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Animation</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Video Editing</h1>
                    <GamesIcon fontSize="large" className="text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white opacity-80 uppercase">Photo Editing</h1>
                    <GamesIcon fontSize="large" className="text-white mr-12" />
                </div>
            </Marquee>
            <div className="my-16 md:my-16 w-full max-w-[1280px] mx-auto px-4 md:px-8">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-600 dark:text-gray-300 text-center leading-tight">“We help fast-moving digital startups build sharper brands and websites with clarity, speed, and zero friction."</h1>
                <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
                    <p className="text-sm md:text-base font-bold text-[#FF4D00] text-center py-2 px-4 rounded-full transition-colors flex items-center gap-2"> <GamesIcon fontSize="small" /> Branding</p>
                    <p className="text-sm md:text-base font-bold text-[#FF4D00] text-center py-2 px-4 rounded-full transition-colors flex items-center gap-2"> <GamesIcon fontSize="small" /> Animation</p>
                    <p className="text-sm md:text-base font-bold text-[#FF4D00] text-center py-2 px-4 rounded-full transition-colors flex items-center gap-2"> <GamesIcon fontSize="small" /> Logo Design</p>
                    <p className="text-sm md:text-base font-bold text-[#FF4D00] text-center py-2 px-4 rounded-full transition-colors flex items-center gap-2"> <GamesIcon fontSize="small" /> Video Editing</p>
                    <p className="text-sm md:text-base font-bold text-[#FF4D00] text-center py-2 px-4 rounded-full transition-colors flex items-center gap-2"> <GamesIcon fontSize="small" /> Photo Editing</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4">
                <Link to="/uidesigns">
                    <div
                        className="bg-transparent md:bg-white dark:md:bg-[#242424] p-6 gap-4 flex flex-col items-start justify-center rounded-lg group cursor-pointer hover:cursor-none"
                        onMouseEnter={() => setCursorVariant("link")}
                        onMouseLeave={() => setCursorVariant("default")}
                    >
                        <div className="overflow-hidden rounded-lg">
                            <img className="w-[350px] h-[180px] object-cover transition-transform duration-300 group-hover:scale-110" src={uiux} alt="" />
                        </div>
                        <p className="flex items-center gap-2 font-medium group-hover:text-[#FF4D00]">
                            UI/UX Design
                            <ArrowOutwardIcon className="transition-transform duration-300 group-hover:rotate-45" />
                        </p>
                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 w-[350px]">I design intuitive, system-driven UI/UX solutions that simplify complex workflows while maintaining clarity and scalability.</p>
                    </div>
                </Link>
                <Link to="/motiondesigns">
                    <div
                        className="bg-transparent md:bg-white dark:md:bg-[#242424] p-6 gap-4 flex flex-col items-start justify-center rounded-lg group cursor-pointer hover:cursor-none"
                        onMouseEnter={() => setCursorVariant("link")}
                        onMouseLeave={() => setCursorVariant("default")}
                    >
                        <div className="overflow-hidden rounded-lg">
                            <img className="w-[350px] h-[180px] object-cover transition-transform duration-300 group-hover:scale-110" src={manime} alt="" />
                        </div>
                        <p className="flex items-center gap-2 font-medium group-hover:text-[#FF4D00]">
                            Motion Graphics
                            <ArrowOutwardIcon className="transition-transform duration-300 group-hover:rotate-45" />
                        </p>
                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 w-[350px]">My motion graphics focus on storytelling, smooth transitions, and visual flow to bring static designs to life.</p>
                    </div>
                </Link>
                <Link to="/3ddesigns">
                    <div
                        className="bg-transparent md:bg-white dark:md:bg-[#242424] p-6 gap-4 flex flex-col items-start justify-center rounded-lg group cursor-pointer hover:cursor-none"
                        onMouseEnter={() => setCursorVariant("link")}
                        onMouseLeave={() => setCursorVariant("default")}
                    >
                        <div className="overflow-hidden rounded-lg">
                            <img className="w-[350px] h-[180px] object-cover transition-transform duration-300 group-hover:scale-110" src={threeD} alt="" />
                        </div>
                        <p className="flex items-center gap-2 font-medium group-hover:text-[#FF4D00]">
                            3D Animation
                            <ArrowOutwardIcon className="transition-transform duration-300 group-hover:rotate-45" />
                        </p>
                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 w-[350px]">I create high-quality 3D animations that combine realistic modeling, lighting, and motion to visually.</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}