import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const SEARCH_INDEX = [
    // UI/UX
    { name: "Ramachandran Hospitality", path: "https://www.behance.net/gallery/254825315/Hospitality", category: "UI/UX Design", description: "Hospitality and dining system case design layouts" },
    { name: "Ramachandran Education", path: "https://www.behance.net/gallery/254783717/Education-Website", category: "UI/UX Design", description: "University web portal interface layouts" },
    { name: "Good Fellows (Healthcare)", path: "https://www.behance.net/gallery/254562389/Healthcare", category: "UI/UX Design", description: "Social caretaker system high-fidelity wireframes" },
    { name: "Travel Guide (HAJJ Travel)", path: "https://www.behance.net/gallery/254786435/Travel-Tourism", category: "UI/UX Design", description: "Hajj travel guide mobile app screens & map workflow" },
    { name: "QODORA (Medical Insurance)", path: "https://www.behance.net/gallery/250527775/Qodora", category: "UI/UX Design", description: "Medical insurance prototype & checkout flows" },
    { name: "Solar Energy Management", path: "https://www.behance.net/gallery/254784961/Solar-Energy-Management", category: "UI/UX Design", description: "Battery tracking & solar generation metric dashboard" },
    { name: "Signex (Enterprise)", path: "https://www.behance.net/gallery/237202087/Signex-ERP-App-UIUX-Product-Design-Case-Study", category: "UI/UX Design", description: "Enterprise ERP product and signage dashboard case study" },
    { name: "Sports Reform", path: "https://www.behance.net/gallery/205963977/Sports-Reform-website-ui-design", category: "UI/UX Design", description: "Sports performance dashboard and wireframe layouts" },
    { name: "Guvi Learning Platform", path: "https://www.behance.net/gallery/240490215/Learning-Course-Landing-Page", category: "UI/UX Design", description: "EdTech course portal & registration landing page" },
    { name: "Lightup Temple (Booking Pooja)", path: "https://www.behance.net/gallery/205956803/Lightup-Temples-website-ui-design", category: "UI/UX Design", description: "SaaS booking engine for pooja and spiritual services" },
    { name: "Mistnov (Hotel Booking) - Freelance", path: "https://www.behance.net/gallery/205870419/Mistnov", category: "UI/UX Design", description: "Hotel room booking dashboard & calendar explorer" },
    { name: "Algominds (Code platform)", path: "https://www.behance.net/gallery/208198007/Algominds", category: "UI/UX Design", description: "Interactive code learning platform & landing layout" },

    // Motion Graphics
    { name: "GG Excel Promo Clip", path: "https://drive.google.com/file/d/1zNEISufevJQYwiYWM5kY3ppGqL0E33KF/view?usp=sharing", category: "Motion Graphics", description: "Motion graphics promo clip for GG Excel portfolio" },
    { name: "Colan Motion Flow", path: "https://drive.google.com/file/d/1q805u7svkQXsZR1X0vNXLi_e3qXpRtqT/view?usp=sharing", category: "Motion Graphics", description: "Corporate business portfolio promo flow" },
    { name: "M2A Media Campaign", path: "https://drive.google.com/file/d/1nX0Pn4Au9s7_j11pEC66QcJ8Nmkef1G6/view?usp=sharing", category: "Motion Graphics", description: "Social interaction high engagement marketing clip" },
    { name: "RDvault Promo Clip", path: "https://drive.google.com/file/d/1xhBDm_9E7inj9u2i5SKas1tiVPWBe_cn/view?usp=sharing", category: "Motion Graphics", description: "Business portfolio promotion animation" },
    { name: "Wheels On The Busses", path: "https://drive.google.com/file/d/1LzvYdjfIV-uUuX97nLvMvMVRNmqdyrYl/view?usp=sharing", category: "Motion Graphics", description: "2D character animation sequence for children" },
    { name: "IV Universe Brand Wires", path: "https://drive.google.com/file/d/1GWDEJwW-luKzvyvPJsOicAsp_W3-9n5u/view?usp=sharing", category: "Motion Graphics", description: "Corporate brand logo flow concepts" },
    { name: "Five Little Monkeys", path: "https://drive.google.com/file/d/1m4KZ86zVMJi3U5enJihjhKunSr3KBzuY/view?usp=sharing", category: "Motion Graphics", description: "Children's animated song and vector layers" },
    { name: "Colan Logo Intro", path: "https://drive.google.com/file/d/1cEn-GYOkmVdHkFMEHbAW9piKeb-OJoJL/view?usp=sharing", category: "Motion Graphics", description: "Micro-interaction logo animation" },
    { name: "Dark Devil Title Flow", path: "https://drive.google.com/file/d/1yQBwTf8HCnYoCfcBGhfTPUwvWQ0lTAIm/view?usp=sharing", category: "Motion Graphics", description: "Dramatic thriller title sequence motion graphics" },
    { name: "Pathu Thala Title Flow", path: "https://drive.google.com/file/d/1eJxCFqKyss8TSSJU7FV_pXPuj0DZdRxe/view?usp=sharing", category: "Motion Graphics", description: "Recreated conceptual film title motion graphics" },
    { name: "Trinity Title Flow", path: "https://drive.google.com/file/d/1plZcVTHX5Z3dYmx45b0gJKq6J4tdMzyk/view?usp=sharing", category: "Motion Graphics", description: "Isometric 3D motion graphics concept" },

    // 3D Animation
    { name: "Phoneix Bird", path: "https://drive.google.com/file/d/1fvthm8s8gaUEzqzAE-cF-PADXcgndxEi/view?usp=sharing", category: "3D Animation", description: "Blender asset pack 3D mesh modeling rendering" },
    { name: "Winter Environment", path: "https://drive.google.com/file/d/1bY_IJ9-j5qRLcUO70GuiEmp907Z-wI4F/view?usp=sharing", category: "3D Animation", description: "Low-poly environment render & Blender meshes" },

    // Pages & Resume
    { name: "Resume & Professional CV", path: "/resume", category: "Resume", description: "Retro resume reader app, skills index & pdf download" },
    { name: "UI/UX Projects Collection", path: "/uidesigns", category: "Gallery", description: "Explore full index of design files and casing" },
    { name: "Motion Graphic Showcase", path: "/motiondesigns", category: "Gallery", description: "Explore full vector animations and clips list" },
    { name: "3D Blender Work", path: "/3ddesigns", category: "Gallery", description: "Explore static Blender meshes and renders" },

    // Resume Details - Skills, Awards, Experience, Current Company
    { name: "Core Skills: UI/UX & Prototyping", path: "/?open=skills", category: "Skills", description: "User Research, User Flows, Wireframing, Prototyping, Usability Testing, Accessibility, Design Systems" },
    { name: "Design Tools & 3D Software", path: "/?open=skills", category: "Skills", description: "Figma, Adobe XD, Framer, Webflow, UX Pin, Marvel, Blender, Spline, Cinema 4D, Adobe Aero, Dimension, Mixamo, After Effects, Premiere Pro, Photoshop, Illustrator, Dora 3D" },
    { name: "Quarter IV - March 2024 Award", path: "/?open=awards", category: "Awards", description: "Outstanding Performance and Lasting Contribution at Colan Infotech" },
    { name: "Quarter IV - March 2025 Award", path: "/?open=awards", category: "Awards", description: "Solid Delivery Performance at Colan Infotech" },
    { name: "Quarter I - July 2025 Award", path: "/?open=awards", category: "Awards", description: "Best Performance and Lasting Contribution at Colan Infotech" },
    { name: "Lead UI/UX & Product Designer (Current)", path: "/resume", category: "Experience", description: "Colan Infotech Pvt Ltd (2023 - Present) - Chennai, India" },
    { name: "Colan Infotech Pvt Ltd (Current Company)", path: "/resume", category: "Experience", description: "4+ years hands-on experience delivering UX/UI solutions across 10+ projects" }
];

const getCategoryDetails = (category) => {
    switch (category) {
        case "UI/UX Design":
            return { color: "text-[#3bdfd9] bg-[#3bdfd9]/10 border-[#3bdfd9]/30", icon: "🎨" };
        case "Motion Graphics":
            return { color: "text-[#ff4a7d] bg-[#ff4a7d]/10 border-[#ff4a7d]/30", icon: "🎬" };
        case "3D Animation":
            return { color: "text-[#ffcc00] bg-[#ffcc00]/10 border-[#ffcc00]/30", icon: "🧊" };
        case "Resume":
            return { color: "text-[#39ff14] bg-[#39ff14]/10 border-[#39ff14]/30", icon: "📄" };
        case "Skills":
            return { color: "text-[#a855f7] bg-[#a855f7]/10 border-[#a855f7]/30", icon: "⚡" };
        case "Experience":
            return { color: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/30", icon: "💼" };
        case "Awards":
            return { color: "text-[#f97316] bg-[#f97316]/10 border-[#f97316]/30", icon: "🏆" };
        default:
            return { color: "text-gray-400 bg-gray-900 border-gray-800", icon: "📁" };
    }
};

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();
    const searchRef = useRef(null);
    const mobileSearchRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                (searchRef.current && !searchRef.current.contains(event.target)) &&
                (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target))
            ) {
                setShowResults(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setShowResults(false);
                setSearchQuery("");
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        function handleGlobalKeys(event) {
            const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
            if (activeTag === "input" || activeTag === "textarea" || activeTag === "select") {
                if (event.key === "Escape") {
                    document.activeElement.blur();
                    setShowResults(false);
                }
                return;
            }

            if (
                (event.key === "k" && (event.ctrlKey || event.metaKey)) ||
                (event.key === "/")
            ) {
                event.preventDefault();
                const desktopInput = searchRef.current?.querySelector("input");
                if (desktopInput && window.innerWidth >= 768) {
                    desktopInput.focus();
                } else {
                    const mobileInput = mobileSearchRef.current?.querySelector("input");
                    if (mobileInput) {
                        setIsMenuOpen(true);
                        setTimeout(() => mobileInput.focus(), 150);
                    }
                }
            }
        }
        document.addEventListener("keydown", handleGlobalKeys);
        return () => {
            document.removeEventListener("keydown", handleGlobalKeys);
        };
    }, []);

    const handleSelect = (path) => {
        setSearchQuery("");
        setShowResults(false);
        if (path.startsWith("http")) {
            window.open(path, "_blank", "noopener,noreferrer");
        } else {
            navigate(path);
        }
    };

    const filteredProjects = SEARCH_INDEX.filter((item) => {
        const query = searchQuery.toLowerCase().trim();
        return (
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
    });

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000] transition-all duration-300">
            <div className="max-w-[1880px] mx-auto flex items-center justify-between px-6 py-4 xl:px-0">

                <Link to="/" className="flex items-center gap-3 select-none shrink-0">
                    <span className="text-[#f2efe9] font-black text-2xl tracking-widest uppercase font-mono">HONEST</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    {/* Search Bar - Desktop */}
                    <div ref={searchRef} className="relative w-[240px] focus-within:w-[300px] transition-all duration-300 z-[99] group">
                        <div className="relative flex items-center">
                            <svg 
                                className="absolute left-3 w-3.5 h-3.5 text-gray-500 pointer-events-none transition-colors duration-200 group-focus-within:text-[#3bdfd9]" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search projects, resume..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setShowResults(true);
                                }}
                                onFocus={() => setShowResults(true)}
                                className="w-full bg-[#161616] text-[#fff] placeholder-gray-500 border-2 border-black focus:border-[#3bdfd9] focus:outline-none rounded-md pl-9 pr-14 py-1.5 text-xs font-sans tracking-wide transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-[3px_3px_0px_0px_#3bdfd9]"
                            />
                            {searchQuery ? (
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setShowResults(false);
                                    }}
                                    className="absolute right-3 text-gray-500 hover:text-[#ff4a7d] text-[10px] font-bold font-mono transition-colors"
                                >
                                    ✕
                                </button>
                            ) : (
                                <kbd className="absolute right-3 px-1.5 py-0.5 text-[9px] font-mono font-bold bg-[#262626] text-gray-400 border border-[#3c3c3c] rounded select-none pointer-events-none">
                                    ⌘K
                                </kbd>
                            )}
                        </div>
                        {showResults && searchQuery.trim() && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0c] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md overflow-hidden z-[100] max-h-72 overflow-y-auto">
                                <div className="px-3 py-1.5 bg-[#161616] border-b border-black text-[9px] font-mono text-gray-400 uppercase tracking-widest flex justify-between items-center">
                                    <span>Index Query Search</span>
                                    <span>{filteredProjects.length} found</span>
                                </div>
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map((item, idx) => {
                                        const details = getCategoryDetails(item.category);
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => handleSelect(item.path)}
                                                className="w-full text-left px-3 py-2 flex items-start gap-2.5 hover:bg-[#1f1f1f] border-b border-black last:border-b-0 transition-colors cursor-pointer group"
                                            >
                                                <span className="text-xs select-none pt-0.5">{details.icon}</span>
                                                <div className="flex flex-col flex-1 min-w-0">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <span className="font-bold text-xs text-gray-200 group-hover:text-white truncate">
                                                            {item.name}
                                                        </span>
                                                        <span className={`text-[7px] font-bold font-mono px-1 py-0.5 border rounded uppercase tracking-wider shrink-0 ${details.color}`}>
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                    <span className="text-[9px] text-gray-500 group-hover:text-gray-400 truncate mt-0.5">
                                                        {item.description}
                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })
                                ) : (
                                    <div className="px-3.5 py-3 text-xs text-gray-500 font-mono text-center">
                                        No matching objects found.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <Link
                        to="/"
                        className="neo-button text-xs tracking-widest text-center"
                    >
                        Home
                    </Link>
                    <Link
                        to="/resume"
                        className="neo-button text-xs tracking-widest text-center"
                    >
                        Resume
                    </Link>
                    <a
                        href="mailto:honestdesigns0@gmail.com"
                        className="bg-[#ffcc00] text-black border-2 border-black font-black uppercase text-xs tracking-widest py-1.5 px-4 text-center shadow-[2px_2px_0px_0px_#000] hover:scale-105 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all rounded-md ml-2"
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
                className={`md:hidden absolute top-full left-0 right-0 bg-[#f2efe9] bg-grid border-b-4 border-black shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="flex flex-col items-center gap-4 py-8 px-6">
                    {/* Mobile Search Input */}
                    <div ref={mobileSearchRef} className="relative w-full max-w-[280px]">
                        <div className="relative flex items-center">
                            <svg 
                                className="absolute left-3 w-3.5 h-3.5 text-gray-500 pointer-events-none" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search projects, resume..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setShowResults(true);
                                }}
                                onFocus={() => setShowResults(true)}
                                className="w-full bg-[#161616] text-[#fff] placeholder-gray-500 border-2 border-black focus:border-[#ff4a7d] focus:outline-none rounded-md pl-9 pr-10 py-2 text-xs font-sans tracking-wide transition-all shadow-[2px_2px_0px_0px_#000] focus:shadow-[3px_3px_0px_0px_#ff4a7d]"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setShowResults(false);
                                    }}
                                    className="absolute right-3 text-gray-500 hover:text-black text-xs font-bold font-mono"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                        {showResults && searchQuery.trim() && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0c] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md overflow-hidden z-[100] max-h-52 overflow-y-auto">
                                <div className="px-3 py-1.5 bg-[#161616] border-b border-black text-[9px] font-mono text-gray-400 uppercase tracking-widest flex justify-between items-center">
                                    <span>Index Query Search</span>
                                    <span>{filteredProjects.length} found</span>
                                </div>
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map((item, idx) => {
                                        const details = getCategoryDetails(item.category);
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    handleSelect(item.path);
                                                    setIsMenuOpen(false);
                                                }}
                                                className="w-full text-left px-3 py-2 flex items-start gap-2.5 hover:bg-[#1f1f1f] border-b border-black last:border-b-0 transition-colors cursor-pointer group"
                                            >
                                                <span className="text-xs select-none pt-0.5">{details.icon}</span>
                                                <div className="flex flex-col flex-1 min-w-0">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <span className="font-bold text-xs text-gray-200 group-hover:text-white truncate">
                                                            {item.name}
                                                        </span>
                                                        <span className={`text-[7px] font-bold font-mono px-1 py-0.5 border rounded uppercase tracking-wider shrink-0 ${details.color}`}>
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                    <span className="text-[9px] text-gray-500 group-hover:text-gray-400 truncate mt-0.5">
                                                        {item.description}
                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })
                                ) : (
                                    <div className="px-3.5 py-3 text-xs text-gray-500 font-mono text-center">
                                        No matching objects found.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <Link
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-[#ffcc00] text-black border-2 border-black font-black uppercase text-xs tracking-widest py-3 px-6 text-center w-48 shadow-[3px_3px_0px_0px_#000] hover:scale-102 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all rounded-md"
                    >
                        Home
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
