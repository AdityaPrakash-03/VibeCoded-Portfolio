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
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
                    Aditya
                </h1>
                <p className="mt-4 text-2xl md:text-4xl text-purple-300 font-bold tracking-widest uppercase glow-lg drop-shadow-lg">
                    Vibe Coder
                </p>
            </motion.div>

            {/* Section 2 - Left Aligned */}
            <motion.div
                style={{ opacity: opacity2, y: y2, x: x2 }}
                className="absolute left-10 md:left-24 max-w-2xl bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/5"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-xl">
                    Engineering meets <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        Product Strategy.
                    </span>
                </h2>
                <p className="mt-4 text-xl text-gray-100 font-medium drop-shadow-md">
                    Building customer-centric products with pixel-perfect precision.
                </p>
            </motion.div>

            {/* Section 3 - Right Aligned */}
            <motion.div
                style={{ opacity: opacity3, y: y3, x: x3 }}
                className="absolute right-10 md:right-24 text-right max-w-2xl bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/5"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-xl">
                    Metrics-driven <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Decision Making.
                    </span>
                </h2>
                <p className="mt-4 text-xl text-gray-100 font-medium drop-shadow-md">
                    From user research to scalable solutions.
                </p>
            </motion.div>
        </div>
    );
}
