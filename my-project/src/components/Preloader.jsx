import { useState, useEffect } from "react";

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [terminalLogs, setTerminalLogs] = useState([
        "HONEST BIOS Version 2.01.1998",
        "Copyright (C) 1998-2026 Honestraj Corp.",
        "------------------------------------",
        "Initializing System Boot...",
    ]);

    // Spinner chars for extra retro vibe
    const spinnerChars = ["|", "/", "-", "\\"];
    const spinnerIndex = Math.floor(progress / 4) % spinnerChars.length;

    useEffect(() => {
        let currentProgress = 0;
        
        // Dynamic logs triggered at certain milestones
        const milestones = {
            10: "CPU: Intel Pentium II 450 MHz... OK",
            25: "Memory Test: 65,536 KB... OK",
            40: "Loading Audio Synth Drivers... OK",
            60: "Mounting honest_paint.exe & terminal_prompt.exe... OK",
            75: "Configuring Soundboard Winamp v2.76... OK",
            90: "Establishing GUI Environment... OK",
            100: "System Ready. Booting Workspace...",
        };

        const interval = setInterval(() => {
            const step = Math.floor(Math.random() * 12) + 3; // Step size 3-14
            const prevProgress = currentProgress;
            currentProgress = Math.min(currentProgress + step, 100);
            setProgress(currentProgress);

            // Add terminal logs when crossing milestone thresholds
            Object.keys(milestones).forEach((key) => {
                const milestoneVal = parseInt(key);
                if (prevProgress < milestoneVal && currentProgress >= milestoneVal) {
                    setTerminalLogs((prev) => [...prev, `> ${milestones[milestoneVal]}`]);
                }
            });

            if (currentProgress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 800); // Let the 100% state hover for a brief moment before fade-out
            }
        }, Math.random() * 100 + 80); // Speed of loading increments

        return () => clearInterval(interval);
    }, [onComplete]);

    const getLoaderBar = () => {
        const totalBlocks = 20;
        const filledBlocks = Math.floor((progress / 100) * totalBlocks);
        const unfilledBlocks = totalBlocks - filledBlocks;
        return `[${"█".repeat(filledBlocks)}${"░".repeat(unfilledBlocks)}]`;
    };

    return (
        <div className="fixed inset-0 bg-[#000000] z-[99999] flex flex-col items-center justify-between p-6 md:p-12 font-mono select-none overflow-hidden text-white">
            {/* CRT Scanline Filter */}
            <div className="absolute inset-0 pointer-events-none z-50 crt-scanlines-preloader opacity-65" />
            
            {/* Top Stats Area - Classic retro Bios design */}
            <div className="w-full max-w-4xl text-[10px] md:text-xs text-gray-500 self-start">
                <div className="flex justify-between">
                    <span>HONEST_BIOS v2.01</span>
                    <span>2000-06-22</span>
                </div>
                <div className="border-b border-gray-800 pb-2 mt-1">
                    God Is The First Designer
                </div>
            </div>

            {/* Centered Glitch Text and Progress Area */}
            <div className="flex flex-col items-center justify-center gap-6">
                <div className="glitch-wrapper">
                    {/* glitch-active styles are defined in index.css */}
                    <h1 
                        className="glitch-active text-6xl md:text-8xl font-black tracking-widest text-white uppercase select-none"
                        data-text="HONESTRAJ"
                    >
                        HONESTRAJ
                    </h1>
                </div>

                {/* Progress bar and counter */}
                <div className="flex flex-col items-center gap-2 mt-4">
                    <span className="text-sm md:text-base text-gray-300 font-bold tracking-widest uppercase">
                        Loading Systems... {progress}% {spinnerChars[spinnerIndex]}
                    </span>
                    <span className="text-xs md:text-sm text-[#39ff14] tracking-wider font-bold">
                        {getLoaderBar()}
                    </span>
                </div>
            </div>

            {/* Bottom Terminal Log Area */}
            <div className="w-full max-w-4xl bg-black/40 border border-gray-900 rounded p-4 h-36 md:h-44 overflow-y-auto text-left flex flex-col gap-1 text-[9px] md:text-xs tracking-wide">
                {terminalLogs.map((log, index) => (
                    <div 
                        key={index} 
                        className={log.startsWith(">") ? "terminal-green-text font-bold" : "text-gray-400"}
                    >
                        {log}
                    </div>
                ))}
                {/* Auto-scroll anchor */}
                <div className="animate-pulse terminal-green-text text-xs mt-1">
                    _
                </div>
            </div>
        </div>
    );
};

export default Preloader;
