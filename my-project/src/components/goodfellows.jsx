import { Link } from "react-router-dom";

export default function goodfellows() {
    return (
        <div className="flex flex-col items-center justify-center p-10 mt-8 mx-auto max-w-7xl px-4 mb-12">
            <h1 className="text-3xl font-bold">Good Fellows</h1>
            <p className="mt-4 text-gray-600">
                Welcome to the Good Fellows detailed page.
            </p>
            <button className="mt-4 px-6 py-2 bg-gray-600 text-black font-medium rounded-full shadow-sm hover:shadow-md transition-all hover:gradient-fill">
                <a href="https://www.behance.net/gallery/206024825/Care-Taker-website-ui-design">View Design</a>
            </button>
        </div>  
    );
}