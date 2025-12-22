import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import resume from "../assets/HCV-F.pdf";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f0f0f0]/80 dark:bg-[#242424]/80 backdrop-blur-sm transition-all duration-300">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4 xl:px-0">

                <Link to="/">
                    <img src={Logo} alt="Logo" className="h-16 w-auto object-contain dark:invert" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link
                        to="/"
                        className="text-base w-24 text-center font-medium text-gray-600 dark:text-gray-300 transition-all duration-300 px-2 py-1 rounded-full hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white"
                    >
                        Home
                    </Link>

                    <Link
                        to="/About"
                        className="text-base w-24 text-center font-medium text-gray-600 dark:text-gray-300 transition-all duration-300 px-2 py-1 rounded-full hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white"
                    >
                        About
                    </Link>
                    <a href={resume} download="HCV-F.pdf" className="bg-black px-4 py-2 rounded-md text-white hover-gradient-fill">Download CV</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none transition-transform active:scale-95"
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
                className={`md:hidden absolute top-full left-0 right-0 bg-[#f0f0f0]/95 dark:bg-[#242424]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="flex flex-col items-center gap-4 py-6">
                    <Link
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        to="/About"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
