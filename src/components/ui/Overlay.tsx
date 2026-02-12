"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Section 1: 0% - 25%
    const opacity1 = useTransform(scrollYProgress, [0.05, 0.15, 0.20, 0.30], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.05, 0.30], [50, -50]);

    // Section 2: 35% - 55%
    const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.50, 0.60], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.35, 0.60], [50, -50]);
    const x2 = useTransform(scrollYProgress, [0.35, 0.60], [-50, 0]); // Slight enter from left

    // Section 3: 65% - 85%
    const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.80, 0.90], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.65, 0.90], [50, -50]);
    const x3 = useTransform(scrollYProgress, [0.65, 0.90], [50, 0]); // Slight enter from right

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center h-screen w-full">
            {/* Section 1 - Centered */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute text-center"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
                    Aditya
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase">
                    Creative Developer
                </p>
            </motion.div>

            {/* Section 2 - Left Aligned */}
            <motion.div
                style={{ opacity: opacity2, y: y2, x: x2 }}
                className="absolute left-10 md:left-24 max-w-2xl"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    I build digital <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        experiences.
                    </span>
                </h2>
            </motion.div>

            {/* Section 3 - Right Aligned */}
            <motion.div
                style={{ opacity: opacity3, y: y3, x: x3 }}
                className="absolute right-10 md:right-24 text-right max-w-2xl"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    Bridging design <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        and engineering.
                    </span>
                </h2>
            </motion.div>
        </div>
    );
}
