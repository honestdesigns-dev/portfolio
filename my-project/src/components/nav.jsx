import { useState } from "react";
import { Link } from "react-router-dom";
import resume from "../assets/uicv.pdf";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000] transition-all duration-300">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4 xl:px-0">

                <Link to="/" className="flex items-center gap-3 select-none">
                    <span className="text-[#f2efe9] font-black text-2xl tracking-widest uppercase font-mono">HONEST</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link
                        to="/"
                        className="neo-button text-xs tracking-widest text-center"
                    >
                        Home
                    </Link>

                    <Link
                        to="/About"
                        className="neo-button text-xs tracking-widest text-center"
                    >
                        About
                    </Link>
                    <Link
                        to="/resume"
                        className="neo-button text-xs tracking-widest text-center"
                    >
                        Resume
                    </Link>
                    <a
                        href="mailto:honestdesigns0@gmail.com"
                        className="bg-[#ffcc00] text-black border-2 border-black font-black uppercase text-[10px] tracking-widest py-1.5 px-4 text-center shadow-[2px_2px_0px_0px_#000] hover:scale-105 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all rounded-md ml-2"
                    >
                        Hire
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none transition-transform active:scale-95"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-[#f2efe9] bg-grid border-b-4 border-black shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="flex flex-col items-center gap-4 py-8">
                    <Link
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-[#ffcc00] text-black border-2 border-black font-black uppercase text-xs tracking-widest py-3 px-6 text-center w-48 shadow-[3px_3px_0px_0px_#000] hover:scale-102 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all rounded-md"
                    >
                        Home
                    </Link>
                    <Link
                        to="/About"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-[#3bdfd9] text-black border-2 border-black font-black uppercase text-xs tracking-widest py-3 px-6 text-center w-48 shadow-[3px_3px_0px_0px_#000] hover:scale-102 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all rounded-md"
                    >
                        About
                    </Link>
                    <Link 
                        to="/resume" 
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-[#b1e847] text-black border-2 border-black font-black uppercase text-xs tracking-widest py-3 px-6 text-center w-48 shadow-[3px_3px_0px_0px_#000] hover:scale-102 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all rounded-md"
                    >
                        Resume
                    </Link>
                    <a
                        href="mailto:honestdesigns0@gmail.com"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-[#ff4a7d] text-white border-2 border-black font-black uppercase text-xs tracking-widest py-3 px-6 text-center w-48 shadow-[3px_3px_0px_0px_#000] hover:scale-102 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all rounded-md animate-pulse"
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </nav>
    );
}
