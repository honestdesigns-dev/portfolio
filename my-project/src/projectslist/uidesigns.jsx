import { Link } from "react-router-dom";
import { useCursor } from "../context/CursorContext";
import awalPlastics from "../assets/projects/awal.png";
import caretaker from "../assets/projects/caretaker.png";
import eedu from "../assets/projects/eeducation.png";
import ehos from "../assets/projects/ehospital.png";
import mist from "../assets/projects/mistnov.png";
import ligma from "../assets/projects/ligma.png";
import sports from "../assets/projects/sportsref.png";
import Imageprocessing from "../assets/projects/imageprocessing.png";
import kuvi from "../assets/projects/kuvi.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Works() {
    const { setCursorVariant } = useCursor();
    return (
        <section>
            {/* PROJECT CARDS */}
            <div className="flex flex-col items-center justify-center pt-24 sm:pt-24 md:pt-6">
                <Link to="/" className="flex items-center gap-2"><ArrowBackIcon /> Go Back</Link><br />
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-black text-center">My Casing</h1>
                    <p className="mt-10 text-4xl md:text-4xl font-bold text-[#FF4D00] text-center">UIUX Design's</p>
                </div>
                <div
                    className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-none"
                    onMouseEnter={() => setCursorVariant("project")}
                    onMouseLeave={() => setCursorVariant("default")}
                >
                    <a href="https://www.behance.net/gallery/237202087/Signex-ERP-App-UIUX-Product-Design-Case-Study">
                        <div className="bg-[#000000]/0 hover:bg-[#000000]/4 p-4 rounded-lg hover:scale-105 transition-all flex flex-col items-center justify-center gap-2">
                            <img className="w-[400px] h-[220px] rounded-lg" src={awalPlastics} alt="" />
                            <h2 className="text-2xl font-bold text-black">Awal Plastics</h2>
                            <p className="text-sm text-gray-600">ERP</p>
                        </div>
                    </a>
                    <a href="https://www.behance.net/gallery/238328023/Ligma">
                        <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                            <img className="w-[400px] h-[220px] rounded-lg" src={ligma} alt="" />
                            <h2 className="text-2xl font-bold text-black">Ligma</h2>
                            <p className="text-sm text-gray-600">ERP</p>
                        </div>
                    </a>
                    <a href="https://www.behance.net/gallery/206024825/Care-Taker-website-ui-design">
                        <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                            <img className="w-[400px] h-[220px] rounded-lg" src={caretaker} alt="" />
                            <h2 className="text-2xl font-bold text-black">Caretaker</h2>
                            <p className="text-sm text-gray-600">Social</p>
                        </div>
                    </a>
                    <a href="https://www.behance.net/gallery/240490215/Training-Course">
                        <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                            <img className="w-[400px] h-[220px] rounded-lg" src={kuvi} alt="" />
                            <h2 className="text-2xl font-bold text-black">Kuvi Tech</h2>
                            <p className="text-sm text-gray-600">Training Course</p>
                        </div>
                    </a>
                    <a href="">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                                    <img className="w-[400px] h-[220px] rounded-lg" src={eedu} alt="" />
                                    <h2 className="text-2xl font-bold text-black">Excellent Education</h2>
                                    <p className="text-sm text-gray-600">University</p>
                                </div>
                                </a>
                    <a href="">
                    <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                                    <img className="w-[400px] h-[220px] rounded-lg" src={ehos} alt="" />
                                    <h2 className="text-2xl font-bold text-black">Excellent Hospital</h2>
                                    <p className="text-sm text-gray-600">Hospital</p>
                                </div>
                                </a>
                    <a href="https://www.behance.net/gallery/205870419/Mistnov">
                        <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                            <img className="w-[400px] h-auto rounded-lg" src={mist} alt="" />
                            <h2 className="text-2xl font-bold text-black">Mistnov</h2>
                            <p className="text-sm text-gray-600">Travel Booking</p>
                        </div>
                    </a>
                    <a href="https://www.behance.net/gallery/205963977/Sports-Reform-website-ui-design">
                        <div className="bg-[#000000]/0 hover:bg-[#000000]/4 p-4 rounded-lg hover:scale-105 transition-all flex flex-col items-center justify-center gap-2">
                            <img className="w-[400px] h-[220px] rounded-lg" src={sports} alt="" />
                            <h2 className="text-2xl font-bold text-black">Sports Reform</h2>
                            <p className="text-sm text-gray-600">Sports</p>
                        </div>
                    </a>
                    <Link to="/image-processing">
                        <div className="bg-[#000000]/0 hover:bg-[#000000]/4 p-4 rounded-lg hover:scale-105 transition-all flex flex-col items-center justify-center gap-2">
                            <img className="w-[400px] h-[220px] rounded-lg" src={Imageprocessing} alt="" />
                            <h2 className="text-2xl font-bold text-black">Image Processing</h2>
                            <p className="text-sm text-gray-600">AI & Machine Learning</p>
                        </div>
                    </Link>

                </div>
            </div>


        </section>
    );
}