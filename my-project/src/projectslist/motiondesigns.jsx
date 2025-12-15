import { Link } from "react-router-dom";
import { useCursor } from "../context/CursorContext";
import gg from "../assets/projects/gg.png";
import colan from "../assets/projects/colan.png";
import m2a from "../assets/projects/m2a.png";
import rd from "../assets/projects/rd.png";
import bus from "../assets/projects/buses.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Works() {
    const { setCursorVariant } = useCursor();
    return (
        <section>
            {/* PROJECT CARDS */}
            <div className="flex flex-col items-center justify-center">
            <Link to="/" className="flex items-center gap-2"><ArrowBackIcon /> Go Back</Link><br />
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-black text-center">My Casing</h1>
                    <p className="mt-10 text-4xl md:text-4xl font-bold text-[#FF4D00] text-center">Motion Graphics Design's</p>
                </div>
                <div
                    className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-none"
                    onMouseEnter={() => setCursorVariant("project")}
                    onMouseLeave={() => setCursorVariant("default")}
                >
                    <Link to="/">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 p-4 rounded-lg hover:scale-105 transition-all flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={gg} alt="" />
                        <h2 className="text-2xl font-bold text-black">GG Excel</h2>
                        <p className="text-sm text-gray-600">Business Portfolio</p>
                    </div>
                    </Link>
                    <Link to="/">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-[220px] rounded-lg" src={colan} alt="" />
                        <h2 className="text-2xl font-bold text-black">Colan</h2>
                        <p className="text-sm text-gray-600">Business Portfolio</p>
                    </div>
                    </Link>
                    <Link to="/">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={m2a} alt="" />
                        <h2 className="text-2xl font-bold text-black">M2A Media</h2>
                        <p className="text-sm text-gray-600">Social</p>
                    </div>
                    </Link>
                    <Link to="/">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={rd} alt="" />
                        <h2 className="text-2xl font-bold text-black">RDvault</h2>
                        <p className="text-sm text-gray-600">Business Portfolio</p>
                    </div>
                    </Link>
                    <Link to="/">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={bus} alt="" />
                        <h2 className="text-2xl font-bold text-black">Wheels On The Busses</h2>
                        <p className="text-sm text-gray-600">2d Animation</p>
                    </div>
                    </Link>
                </div>
            </div>

        </section>
    );
}