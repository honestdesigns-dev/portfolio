import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between px-0 py-4">
                
                <img src={Logo} alt="Logo" />

                <div className="flex gap-6">

                    <Link 
                        to="/" 
                        className="text-1xl w-24 text-center font-medium text-gray-600 transition-colors px-2 py-1 rounded-full border hover:border-black hover:text-black hover:bg-gray-100 hover-gradient-fill"
                    >
                        Home
                    </Link>

                    <Link 
                        to="/works" 
                        className="text-1xl w-24 text-center font-medium text-gray-600 transition-colors px-2 py-1 rounded-full border hover:border-black hover:text-black hover:bg-gray-100 hover-gradient-fill"
                    >
                        Works
                    </Link>

                </div>
            </div>
        </nav>
    );
}
