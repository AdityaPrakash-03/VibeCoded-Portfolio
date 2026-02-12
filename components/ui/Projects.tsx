"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, FolderOpen } from "lucide-react";

const projects = [
    {
        title: "CMP-Bookpedia",
        category: "UX & Dev",
        description: "Mapped user journeys & built intuitive book discovery. Community-driven insights.",
        tags: ["Kotlin", "UX Research"],
        link: "https://github.com/AdityaPrakash-03/CMP-Bookpedia",
        colSpan: "md:col-span-2",
        gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
        title: "DreamSpace",
        category: "AI Product",
        description: "AI-powered design tool with real-time image processing. Flutter + Flask architecture.",
        tags: ["Flutter", "Python", "AI"],
        link: "https://github.com/AdityaPrakash-03/DreamSpace",
        colSpan: "md:col-span-1",
        gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
        title: "Product Documents",
        category: "Strategy",
        description: "PRDs, Competitive Analysis, Usability Evaluations. Comprehensive product thinking artifacts.",
        tags: ["Product Strategy", "Analysis"],
        link: "https://drive.google.com/drive/folders/1LkXNcQG6-a-yfMNE5fg1mT744myifdjJ?usp=drive_link",
        colSpan: "md:col-span-3",
        gradient: "from-orange-500/20 to-yellow-500/20"
    },
];

export default function Projects() {
    return (
        <section className="relative z-10 bg-[#0a0a0a] py-32 px-6 md:px-12 w-full">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Selected Works
                    </h2>
                    <div className="h-1 w-24 bg-purple-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl bg-[#1a1a1a] border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 ${project.colSpan}`}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative p-8 h-full flex flex-col justify-between z-10">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-gray-300 border border-white/5 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        <ArrowUpRight className="text-white/50 group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:underline decoration-purple-500 underline-offset-4 decoration-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-500 bg-black/30 px-2 py-1 rounded border border-white/5">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
