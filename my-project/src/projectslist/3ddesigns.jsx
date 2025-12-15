import { Link } from "react-router-dom";
import phoneix from "../assets/projects/phoneix.png";
import winter from "../assets/projects/winter.png";

export default function Works() {
    return (
        <section>
            <div className="flex flex-col items-center justify-center">
                            <div>
                                <p className="mt-10 text-4xl md:text-4xl font-bold text-[#FF4D00] text-center">3D Animation</p>
                            </div>
                            <div
                                className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 cursor-none"
                                onMouseEnter={() => setCursorVariant("project")}
                                onMouseLeave={() => setCursorVariant("default")}
                            >
                                <div className="bg-[#000000]/0 hover:bg-[#000000]/4 p-4 rounded-lg hover:scale-105 transition-all flex flex-col items-center justify-center gap-2">
                                    <img className="w-[400px] h-auto rounded-lg" src={phoneix} alt="" />
                                    <h2 className="text-2xl font-bold text-black">Phoneix Bird</h2>
                                    <p className="text-sm text-gray-600">3D Animation</p>
                                </div>
                                <div className="bg-[#000000]/0 hover:bg-[#000000]/4 hover:scale-105 transition-all p-4 rounded-lg flex flex-col items-center justify-center gap-2">
                                    <img className="w-[400px] h-[220px] rounded-lg" src={winter} alt="" />
                                    <h2 className="text-2xl font-bold text-black">Winter</h2>
                                    <p className="text-sm text-gray-600">3D Animation</p>
                                </div>
                            </div>
                        </div>
        </section>
    );
}