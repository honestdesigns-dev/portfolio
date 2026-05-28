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
        <section className="w-full py-10 bg-grid border-y-4 border-black relative cursor-default">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4 py-16">
                <Link to="/uidesigns">
                    <div
                        className="neo-sticker bg-white p-6 gap-4 flex flex-col items-start justify-center cursor-pointer hover:cursor-none transition-transform hover:-translate-y-2 hover:-translate-x-2"
                        onMouseEnter={() => setCursorVariant("link")}
                        onMouseLeave={() => setCursorVariant("default")}
                    >
                        <div className="overflow-hidden rounded-lg w-full">
                            <img className="w-full sm:w-[350px] h-48 sm:h-[180px] object-cover transition-transform duration-300 group-hover:scale-110" src={uiux} alt="" />
                        </div>
                        <p className="flex items-center gap-2 font-medium group-hover:text-[#FF4D00]">
                            UI/UX Design
                            <ArrowOutwardIcon className="transition-transform duration-300 group-hover:rotate-45" />
                        </p>
                        <p className="text-sm md:text-base text-gray-800 w-full sm:w-[350px]">I design intuitive, system-driven UI/UX solutions that simplify complex workflows while maintaining clarity and scalability.</p>
                    </div>
                </Link>
                <Link to="/motiondesigns">
                    <div
                        className="neo-sticker bg-white p-6 gap-4 flex flex-col items-start justify-center cursor-pointer hover:cursor-none transition-transform hover:-translate-y-2 hover:-translate-x-2"
                        onMouseEnter={() => setCursorVariant("link")}
                        onMouseLeave={() => setCursorVariant("default")}
                    >
                        <div className="overflow-hidden rounded-lg w-full">
                            <img className="w-full sm:w-[350px] h-48 sm:h-[180px] object-cover transition-transform duration-300 group-hover:scale-110" src={manime} alt="" />
                        </div>
                        <p className="flex items-center gap-2 font-medium group-hover:text-[#FF4D00]">
                            Motion Graphics
                            <ArrowOutwardIcon className="transition-transform duration-300 group-hover:rotate-45" />
                        </p>
                        <p className="text-sm md:text-base text-gray-800 w-full sm:w-[350px]">My motion graphics focus on storytelling, smooth transitions, and visual flow to bring static designs to life.</p>
                    </div>
                </Link>
                <Link to="/3ddesigns">
                    <div
                        className="neo-sticker bg-white p-6 gap-4 flex flex-col items-start justify-center cursor-pointer hover:cursor-none transition-transform hover:-translate-y-2 hover:-translate-x-2"
                        onMouseEnter={() => setCursorVariant("link")}
                        onMouseLeave={() => setCursorVariant("default")}
                    >
                        <div className="overflow-hidden rounded-lg w-full">
                            <img className="w-full sm:w-[350px] h-48 sm:h-[180px] object-cover transition-transform duration-300 group-hover:scale-110" src={threeD} alt="" />
                        </div>
                        <p className="flex items-center gap-2 font-medium group-hover:text-[#FF4D00]">
                            3D Animation
                            <ArrowOutwardIcon className="transition-transform duration-300 group-hover:rotate-45" />
                        </p>
                        <p className="text-sm md:text-base text-gray-800 w-full sm:w-[350px]">I create high-quality 3D animations that combine realistic modeling, lighting, and motion to visually.</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}