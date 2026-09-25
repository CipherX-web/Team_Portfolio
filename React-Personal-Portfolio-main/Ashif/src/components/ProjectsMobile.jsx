import React, { useState } from 'react';
import { Highlighter } from "@/components/ui/highlighter";
// --- 1. Import your project images ---

import project1Img from '../assets/projects/project1.png';
import project2Img from '../assets/projects/project2.png';
import project3Img from '../assets/projects/Project3.png';
import project4Img from '../assets/projects/Project4.png';
import project5Img from '../assets/projects/project5.png';
import project6Img from '../assets/projects/project6.png';
import project7Img from '../assets/projects/project7.png';
import project8Img from '../assets/projects/project8.png';
import project9Img from '../assets/projects/project9.png';
import { Truck } from 'lucide-react';

// --- Data for the projects ---
const projectData = [
    {
        title: 'Project Aperture',
        description: 'A unified observability and telemetry platform delivering sub-second anomaly detection, dynamic RBAC workspaces, and live streaming metrics across distributed microservices.',
        videoUrl: 'https://res.cloudinary.com/dktapziq9/video/upload/v1764394626/1764393871242766_dqfnqn.mp4',
        imageUrl: project1Img,
        liveUrl: '#',
        repoUrl: 'https://github.com/cipherxwebteam',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'TimescaleDB'],
    },
    {
        title: 'Ledgerly Engine',
        description: 'An offline-first reconciliation and financial operations engine for global remote teams with automatic currency conversion, cryptographic audit trails, and instant receipt OCR parsing.',
        videoUrl: 'https://res.cloudinary.com/dktapziq9/video/upload/v1764395075/1764395026924189_ij9257.mov',
        imageUrl: project7Img,
        liveUrl: '#',
        repoUrl: 'https://github.com/cipherxwebteam',
        tags: ['React Native', 'Python', 'FastAPI', 'Redis', 'SQLite'],
    },
    {
        title: 'Relay Event Bus',
        description: 'A high-concurrency event bus and notification dispatcher processing over 10M webhook deliveries per day with idempotent retries, backpressure controls, and real-time WebSocket fan-out.',
        videoUrl: 'https://res.cloudinary.com/dktapziq9/video/upload/v1764395357/1764395325884939_lrg7f4.mp4',
        imageUrl: project5Img,
        liveUrl: '#',
        repoUrl: 'https://github.com/cipherxwebteam',
        tags: ['Node.js', 'WebSockets', 'PostgreSQL', 'Go', 'Redis Streams'],
    },
    {
        title: 'CipherCore Mesh',
        description: 'Distributed microservices mesh and consensus coordination framework designed for fault-tolerant state synchronization across hybrid cloud deployments.',
        videoUrl: 'https://res.cloudinary.com/dktapziq9/video/upload/v1764396382/1764396334647746_qruqaf.mp4',
        imageUrl: project2Img,
        liveUrl: '#',
        repoUrl: 'https://github.com/cipherxwebteam',
        tags: ['Go', 'gRPC', 'Kubernetes', 'Docker', 'Envoy'],
    },
    {
        title: 'Synapse Flow',
        description: 'A dynamic event-driven workflow orchestrator with real-time visual DAG execution monitoring and distributed state persistence.',
        imageUrl: project3Img,
        liveUrl: '#',
        repoUrl: 'https://github.com/cipherxwebteam',
        tags: ['TypeScript', 'Next.js', 'GraphQL', 'Kafka'],
    },
    {
        title: 'KubePulse Monitor',
        description: 'Zero-overhead cluster health diagnostic dashboard and autoscaling telemetry aggregator for containerized enterprise workloads.',
        imageUrl: project4Img,
        liveUrl: '#',
        repoUrl: 'https://github.com/cipherxwebteam',
        tags: ['Go', 'React', 'Prometheus', 'Kubernetes'],
    },
];

export default function ProjectsMobile() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

    return (
        <section id="projects" className="w-full bg-white text-black py-16 px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold font-pixel underline-wavy-yellow inline-block">
                    <Highlighter action="underline" color="#FFD700">
                        Selected Projects
                    </Highlighter>
                </h2>
                <p className="text-gray-500 font-mono text-xs sm:text-sm mt-2">// shipped full-stack systems</p>
            </div>
            <div className="flex flex-col gap-6 max-w-md mx-auto">
                {displayedProjects.map((project, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sm:p-5 flex flex-col">
                        <div className="w-full h-44 rounded-lg overflow-hidden mb-3 bg-gray-100 shadow-inner">
                            {project.videoUrl ? (
                                <video
                                    src={project.videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                    poster={project.imageUrl}
                                />
                            ) : (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tags && project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-200 text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-auto">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn !w-auto !h-auto !px-4 !py-2 !text-xs !rounded-lg"
                            >
                                Visit Site
                            </a>
                            {project.repoUrl && project.repoUrl !== '#' && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn !w-auto !h-auto !px-4 !py-2 !text-xs !rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300"
                                >
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* View More / View Less Button */}
            <div className="text-center mt-8">
                {!showAll && projectData.length > 3 && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="btn"
                    >
                        View More
                    </button>
                )}
                {showAll && (
                    <button
                        onClick={() => setShowAll(false)}
                        className="btn"
                    >
                        View Less
                    </button>
                )}
            </div>
        </section>
    );
}