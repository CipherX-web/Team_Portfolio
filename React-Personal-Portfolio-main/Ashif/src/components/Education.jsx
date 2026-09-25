import React, { useState } from 'react';
import { Highlighter } from "@/components/ui/highlighter";
import { ExternalLink, Terminal, ShieldCheck, Zap } from 'lucide-react';
import member1 from '../assets/team/member1.jpg';
import member2 from '../assets/team/member2.jpg';
import member3 from '../assets/team/member3.jpg';
import member4 from '../assets/team/member4.jpg';
import member5 from '../assets/team/member5.jpg';

const ICONS = {
  LinkedIn: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/>
    </svg>
  ),
  GitHub: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/>
    </svg>
  ),
  X: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    </svg>
  ),
};

const TEAM_MEMBERS = [
  {
    id: "lakshan",
    name: "Lakshan Jayawardana",
    role: "Team Lead & Systems Architect",
    focus: "Architecture, Topology & Resilience",
    avatar: member1,
    stack: ["Go", "Node.js", "Microservices", "System Topology"],
    github: "https://github.com/LakshanSj",
    linkedin: "https://www.linkedin.com/in/lakshan-jayawardana/",
    x: "https://x.com/CipherXzr",
  },
  {
    id: "prageeth",
    name: "Prageeth Chamuditha",
    role: "Staff Frontend & UI Engineer",
    focus: "Design Systems, Micro-Interactions & A11y",
    avatar: member2,
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Motion"],
    github: "https://github.com/cipherxwebteam",
    linkedin: "https://www.linkedin.com/company/cipherx-team/",
    x: "https://x.com/CipherXzr",
  },
  {
    id: "kamitha",
    name: "Kamitha Akash",
    role: "Principal Backend & Systems",
    focus: "High-Throughput APIs & Low-Latency Data",
    avatar: member3,
    stack: ["PostgreSQL", "Redis", "Python", "Kafka", "Event Sourcing"],
    github: "https://github.com/cipherxwebteam",
    linkedin: "https://www.linkedin.com/company/cipherx-team/",
    x: "https://x.com/CipherXzr",
  },
  {
    id: "vidura",
    name: "Vidura Pabasara",
    role: "Senior Full-Stack Product",
    focus: "End-to-End Features & Mobile Sync",
    avatar: member4,
    stack: ["React Native", "TypeScript", "GraphQL", "Offline-first"],
    github: "https://github.com/cipherxwebteam",
    linkedin: "https://www.linkedin.com/company/cipherx-team/",
    x: "https://x.com/CipherXzr",
  },
  {
    id: "dinisuru",
    name: "Dinisuru Sangadith",
    role: "Staff DevOps & Platform",
    focus: "Cloud Infrastructure & Zero-Downtime CI/CD",
    avatar: member5,
    stack: ["Docker", "Kubernetes", "AWS", "Terraform", "Prometheus"],
    github: "https://github.com/cipherxwebteam",
    linkedin: "https://www.linkedin.com/company/cipherx-team/",
    x: "https://x.com/CipherXzr",
  },
];

export default function Education() {
  return (
    <section id="team" className="w-full bg-[#FAFBFD] text-slate-900 pb-20 sm:pb-28 pt-14 sm:pt-20 border-t border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#2F5FE8] font-semibold mb-2">
            // Core Engineering Squad
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold font-pixel tracking-tight text-[#0D1E40]">
            <Highlighter action="underline" color="#FFD700">
              The CipherX Squad
            </Highlighter>
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base mt-3 leading-relaxed">
            5 dedicated core engineers providing complete end-to-end stack ownership — from reactive user interfaces to distributed low-latency cloud infrastructure.
          </p>
        </div>

        {/* 5 Members Grid: 3 cards top, 2 cards centered bottom on desktop */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative flex flex-col justify-between w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#2F5FE8]/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Top Accent Gradient Border on Hover */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-[#2F5FE8] via-cyan-400 to-[#2F5FE8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Member Picture & Status Badge */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-slate-100 group-hover:ring-[#2F5FE8]/50 shadow-md transition-all duration-300 group-hover:scale-105"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm"
                      title="Active Member"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0D1E40] truncate group-hover:text-[#2F5FE8] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#2F5FE8] line-clamp-2 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Focus / Core Domain */}
                <div className="mb-4 bg-[#F3F7FF] rounded-xl p-3 border border-[#2F5FE8]/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2F5FE8]/80 mb-0.5">Core Focus</p>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                    {member.focus}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono font-medium px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200/60 transition-colors group-hover:bg-blue-50 group-hover:text-[#2F5FE8] group-hover:border-blue-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links: GitHub, LinkedIn & X */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-slate-500 font-medium">Connect:</span>
                <div className="flex items-center gap-1.5">
                  {/* GitHub Profile Button */}
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-[#24292e] hover:text-white transition-all duration-200 shadow-xs hover:shadow active:scale-95"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <ICONS.GitHub className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {/* LinkedIn Profile Button */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-[#0A66C2] hover:text-white transition-all duration-200 shadow-xs hover:shadow active:scale-95"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <ICONS.LinkedIn className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  {/* X (Twitter) Profile Button */}
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-black hover:text-white transition-all duration-200 shadow-xs hover:shadow active:scale-95"
                    aria-label={`${member.name}'s X profile`}
                  >
                    <ICONS.X className="w-3.5 h-3.5" />
                    <span>X</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Standards Pill Strip */}
        <div className="mt-14 sm:mt-16 max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2F5FE8] flex items-center justify-center shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0D1E40]">Engineering Standards</h4>
              <p className="text-xs text-slate-500">Shared rigor across all collective deliverables</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
              <Zap size={14} className="text-[#2F5FE8]" />
              <span>Sub-100ms API targets</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
              <Terminal size={14} className="text-[#2F5FE8]" />
              <span>Full contract type safety</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
              <ShieldCheck size={14} className="text-[#2F5FE8]" />
              <span>Zero-downtime CI/CD</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}