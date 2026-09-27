"use client"

import React from 'react';
import { motion } from 'framer-motion';
import GlareHover from './GlareHover';
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from 'lucide-react';

import p1Img from '../assets/projects/p1_image.jpeg';
import p2Img from '../assets/projects/p2_image.jpeg';

// --- Real Team Projects (p1 & p2) ---
const projectData = [
    {
        id: 'smart-dustbin',
        title: 'Smart Dustbin System',
        subtitle: 'IoT · Renewable Energy · Waste Management',
        description: 'An IoT-based smart waste management system featuring separate organic & inorganic compartments, ultrasonic fill-level and methane odor sensors. Automatically sends real-time alerts to municipal teams to optimize garbage collection routes, and incorporates solar-powered public amenities (USB charging, cooling fans, and night lighting).',
        imageUrl: p1Img,
        liveUrl: 'https://sdb-waste-management-system.web.app/',
        repoUrl: 'https://github.com/LakshanSj/smart-dustbin-waste-management-system',
        tags: ['IoT', 'Arduino / Sensors', 'Web Dashboard', 'Solar Energy', 'Smart City'],
    },
    {
        id: 'unimed',
        title: 'UniMed Healthcare System',
        subtitle: 'Full-Stack Web · Cloud Healthcare Management',
        description: 'A comprehensive university healthcare management platform designed to replace manual record-keeping with a secure, cloud-based workflow. Features tailored digital portals for students, doctors, and lab assistants for streamlined appointments, lab requests, and medical histories.',
        imageUrl: p2Img,
        liveUrl: 'https://unimed-23t.pages.dev',
        repoUrl: 'https://github.com/Kamithaakash/UniMed-MORASHIFT',
        tags: ['React', 'Flask API', 'MongoDB', 'Tailwind CSS', 'Cloudflare'],
    },
];

// --- Single Project Card Component ---
const ProjectCard = ({ project }) => (
    <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.25}
        glareAngle={-30}
        glareSize={350}
        transitionDuration={1200}
        playOnce={true}
        width="100%"
        height="100%"
        background="#fff"
        borderRadius="20px"
        className="h-full"
        style={{ border: '1px solid #e2e8f0' }}
    >
        <div className="flex flex-col h-full bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            {/* Project Image Banner */}
            <div className="relative w-full h-56 sm:h-64 bg-slate-100 overflow-hidden border-b border-slate-100 flex items-center justify-center">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-grow">
                {project.subtitle && (
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#2F5FE8] font-semibold mb-1">
                        {project.subtitle}
                    </span>
                )}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0D1E40] mb-2.5 font-sans">
                    {project.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 flex-grow font-sans">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-blue-50/80 text-[#2F5FE8] border border-blue-200/60 text-[11px] font-mono font-medium px-2.5 py-1 rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-auto">
                    {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#2F5FE8] hover:bg-[#2049bf] rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95"
                        >
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                        </a>
                    )}
                    {project.repoUrl && project.repoUrl !== '#' && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-[#24292e] hover:text-white rounded-lg transition-all duration-200 active:scale-95"
                        >
                            <Github size={14} />
                            <span>View Code</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    </GlareHover>
);

// --- Main Projects Section Component ---
export default function Projects() {
    return (
        <section
            id="projects"
            className="relative w-full text-black py-20 overflow-hidden bg-white border-t border-slate-200/60"
        >
            <InteractiveGridPattern
                className={cn(
                    "absolute inset-0 h-full w-full",
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
                )}
                width={20}
                height={20}
                squares={[80, 80]}
                squaresClassName="fill-gray-100"
            />

            <div className="relative z-10 px-4 sm:px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12 sm:mb-14"
                >
                    <p className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#2F5FE8] font-semibold mb-2">
                        // Our Work
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold font-pixel underline-wavy-yellow inline-block text-[#0D1E40]">
                        <Highlighter action="underline" color="#FFD700">
                            Featured Projects 🚀
                        </Highlighter>
                    </h2>
                    <p className="text-slate-600 font-sans text-sm sm:text-base mt-3 max-w-xl mx-auto">
                        Real-world software and hardware systems built collaboratively by our team.
                    </p>
                </motion.div>

                {/* 2 Featured Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projectData.map((project, idx) => {
                        const isFromLeft = idx % 2 === 0;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, x: isFromLeft ? -45 : 45 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                                className="w-full"
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}