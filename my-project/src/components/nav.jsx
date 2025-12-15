import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f0f0f0]/80 backdrop-blur-sm transition-all duration-300">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4 xl:px-0">

                <Link to="/">
                    <img src={Logo} alt="Logo" className="h-16 w-auto object-contain" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link
                        to="/"
                        className="text-lg w-24 text-center font-medium text-gray-600 transition-all duration-300 px-2 py-1 rounded-full hover:border-black hover:text-black hover:bg-white/50"
                    >
                        Home
                    </Link>
                    
                    <Link
                        to="/About"
                        className="text-lg w-24 text-center font-medium text-gray-600 transition-all duration-300 px-2 py-1 rounded-full hover:border-black hover:text-black hover:bg-white/50"
                    >
                        About
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 hover:text-black focus:outline-none transition-transform active:scale-95"
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
                className={`md:hidden absolute top-full left-0 right-0 bg-[#f0f0f0]/95 backdrop-blur-md border-b border-gray-200 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="flex flex-col items-center gap-4 py-6">
                    <Link
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        to="/works"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    >
                        Works
                    </Link>
                    <Link
                        to="/About"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
