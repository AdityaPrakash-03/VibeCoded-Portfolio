"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "E-Commerce Rebrand",
        category: "Design & Development",
        description: "A complete overhaul of a fashion retailer's digital presence, focusing on speed and aesthetic.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", // Placeholder
    },
    {
        title: "Fintech Dashboard",
        category: "Product Design",
        description: "Real-time data visualization platform for high-frequency trading analytics.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop", // Placeholder
    },
    {
        title: "AI Chat Interface",
        category: "Frontend Engineering",
        description: "Responsive, accessible, and highly interactive chat interface for a generative AI model.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop", // Placeholder
    },
    {
        title: "3D Product Configurator",
        category: "WebGL / Three.js",
        description: "Interactive 3D experience allowing users to customize luxury watches in real-time.",
        image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2370&auto=format&fit=crop", // Placeholder
    },
];

export default function Projects() {
    return (
        <section className="relative z-10 bg-[#121212] py-24 px-6 md:px-12 w-full">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                                <p className="mt-3 text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-white font-medium group-hover:text-purple-400 transition-colors">
                                    View Case Study <span className="text-lg">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
