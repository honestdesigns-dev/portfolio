import { Link } from "react-router-dom";
import { useCursor } from "../context/CursorContext";
import gg from "../assets/projects/gg.png";
import colan from "../assets/projects/colan.png";
import m2a from "../assets/projects/m2a.png";
import rd from "../assets/projects/rd.png";
import bus from "../assets/projects/buses.png";
import ivuniverse from "../assets/projects/ivuniverse.png";
import fivelittlemonkeys from "../assets/projects/fivelittle.png";
import colanlogo from "../assets/projects/colanlogo.png";
import darkdevil from "../assets/projects/darkdevil.png";
import pathuthala from "../assets/projects/pathuthala.png";
import trinity from "../assets/projects/trinity.png";
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
                    <a href="https://drive.google.com/file/d/1zNEISufevJQYwiYWM5kY3ppGqL0E33KF/view?usp=sharing">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 p-4 rounded-lg hover:scale-105 transition-all flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={gg} alt="" />
                        <h2 className="text-2xl font-bold text-black">GG Excel</h2>
                        <p className="text-sm text-gray-600">Business Portfolio</p>
                    </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1q805u7svkQXsZR1X0vNXLi_e3qXpRtqT/view?usp=sharing">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-[220px] rounded-lg" src={colan} alt="" />
                        <h2 className="text-2xl font-bold text-black">Colan</h2>
                        <p className="text-sm text-gray-600">Business Portfolio</p>
                    </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1nX0Pn4Au9s7_j11pEC66QcJ8Nmkef1G6/view?usp=sharing">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={m2a} alt="" />
                        <h2 className="text-2xl font-bold text-black">M2A Media</h2>
                        <p className="text-sm text-gray-600">Social</p>
                    </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1xhBDm_9E7inj9u2i5SKas1tiVPWBe_cn/view?usp=sharing">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={rd} alt="" />
                        <h2 className="text-2xl font-bold text-black">RDvault</h2>
                        <p className="text-sm text-gray-600">Business Portfolio</p>
                    </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1LzvYdjfIV-uUuX97nLvMvMVRNmqdyrYl/view?usp=sharing">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={bus} alt="" />
                        <h2 className="text-2xl font-bold text-black">Wheels On The Busses</h2>
                        <p className="text-sm text-gray-600">2d Animation</p>
                    </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1GWDEJwW-luKzvyvPJsOicAsp_W3-9n5u/view?usp=sharing">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={ivuniverse} alt="" />
                        <h2 className="text-2xl font-bold text-black">IV Universe</h2>
                        <p className="text-sm text-gray-600">Business Portfolio</p>
                    </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1m4KZ86zVMJi3U5enJihjhKunSr3KBzuY/view?usp=sharing">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={fivelittlemonkeys} alt="" />
                        <h2 className="text-2xl font-bold text-black">Five Little Monkeys</h2>
                        <p className="text-sm text-gray-600">2d Animation</p>
                    </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1cEn-GYOkmVdHkFMEHbAW9piKeb-OJoJL/view?usp=sharing">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={colanlogo} alt="" />
                        <h2 className="text-2xl font-bold text-black">Colan Logo Intro</h2>
                        <p className="text-sm text-gray-600">Logo Animation</p>
                    </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1yQBwTf8HCnYoCfcBGhfTPUwvWQ0lTAIm/view?usp=sharing">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={darkdevil} alt="" />
                        <h2 className="text-2xl font-bold text-black">Dark Devil</h2>
                        <p className="text-sm text-gray-600">Movie Title Animation</p>
                    </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1eJxCFqKyss8TSSJU7FV_pXPuj0DZdRxe/view?usp=sharing">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={pathuthala} alt="" />
                        <h2 className="text-2xl font-bold text-black">Pathu Thala - Honest_Version</h2>
                        <p className="text-sm text-gray-600">Movie Title Animation</p>
                    </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1plZcVTHX5Z3dYmx45b0gJKq6J4tdMzyk/view?usp=sharing">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                        <img className="w-[400px] h-auto rounded-lg" src={trinity} alt="" />
                        <h2 className="text-2xl font-bold text-black">Trinity</h2>
                        <p className="text-sm text-gray-600">3D Title Animation</p>
                    </div>
                    </a>
                </div>
            </div>

        </section>
    );
}