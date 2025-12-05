import { Link } from "react-router-dom";

export default function awalplastics() {
    return (
        <div className="flex flex-col items-center justify-center p-10 mt-8 mx-auto max-w-7xl px-4 mb-12">
            <h1 className="text-3xl font-bold">Awal Plastics</h1>
            <p className="mt-4 text-gray-600">
                Welcome to the Awal Plastics detailed page (UI/UX Design Case Study).
            </p>
            <button className="mt-4 px-6 py-2 bg-gray-600 text-black font-medium rounded-full shadow-sm hover:shadow-md transition-all hover:gradient-fill">
                <a href="https://www.behance.net/gallery/237202087/Signex-ERP-App-UIUX-Product-Design-Case-Study">View Design</a>
            </button>
        </div>  
    );
}