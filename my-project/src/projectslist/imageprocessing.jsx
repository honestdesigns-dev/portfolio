import one from "../assets/projects/one.png";
import two from "../assets/projects/two.png";
import three from "../assets/projects/three.png";
import four from "../assets/projects/four.png";
import five from "../assets/projects/five.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

export default function ImageProcessing() {
    return (
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8">
            <Link to="/" className="flex items-center gap-2"><ArrowBackIcon /> Go Back</Link><br />
            <img className="w-full h-auto" src={one} alt="" />
            <img className="w-full h-auto" src={two} alt="" />
            <img className="w-full h-auto" src={three} alt="" />
            <img className="w-full h-auto" src={four} alt="" />
            <img className="w-full h-auto" src={five} alt="" />
        </div>
    );
}