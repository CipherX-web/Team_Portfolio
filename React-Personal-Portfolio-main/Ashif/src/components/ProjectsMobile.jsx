import React from 'react';
import { Highlighter } from "@/components/ui/highlighter";
import { ExternalLink, Github } from 'lucide-react';

import p1Img from '../assets/projects/p1_image.jpeg';
import p2Img from '../assets/projects/p2_image.jpeg';

// --- Data for the real projects (p1 & p2) ---
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

export default function ProjectsMobile() {
    return (
        <section id="projects-mobile" className="w-full bg-white text-black py-16 px-4 border-t border-slate-200/60">
            <div className="text-center mb-10">
                <p className="font-mono text-xs tracking-wider uppercase text-[#2F5FE8] font-semibold mb-1">
                    // Our Work
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold font-pixel underline-wavy-yellow inline-block text-[#0D1E40]">
                    <Highlighter action="underline" color="#FFD700">
                        Featured Projects 🚀
                    </Highlighter>
                </h2>
                <p className="text-slate-600 font-sans text-xs sm:text-sm mt-2 max-w-sm mx-auto">
                    Real-world software and hardware systems built collaboratively by our team.
                </p>
            </div>
            <div className="flex flex-col gap-6 max-w-md mx-auto">
                {projectData.map((project) => (
                    <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                        <div className="w-full h-48 bg-slate-100 overflow-hidden border-b border-slate-100">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                            {project.subtitle && (
                                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2F5FE8] font-semibold mb-1">
                                    {project.subtitle}
                                </span>
                            )}
                            <h3 className="text-lg font-bold text-[#0D1E40] mb-2">{project.title}</h3>
                            <p className="text-xs text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {project.tags && project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-blue-50/80 text-[#2F5FE8] border border-blue-200/60 text-[10px] font-mono font-medium px-2 py-0.5 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2.5 mt-auto pt-3 border-t border-slate-100">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#2F5FE8] hover:bg-[#2049bf] rounded-lg shadow-sm transition-all"
                                    >
                                        <ExternalLink size={13} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-[#24292e] hover:text-white rounded-lg transition-all"
                                    >
                                        <Github size={13} />
                                        <span>View Code</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}