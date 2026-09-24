import React from 'react';
import { Layers, Rocket, ShieldCheck } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Layers className="w-5 h-5 text-[#2F5FE8]" />,
      title: "5 Full-Stack Engineers",
      desc: "An integrated collective covering UI, APIs, mobile, and cloud platform."
    },
    {
      icon: <Rocket className="w-5 h-5 text-[#2F5FE8]" />,
      title: "End-to-End Ownership",
      desc: "From initial design and architecture to production deployment and scale."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#2F5FE8]" />,
      title: "Production Rigor",
      desc: "Type safety, sub-100ms API targets, and automated zero-downtime CI/CD."
    }
  ];

  return (
    <section id="about" className="relative w-full bg-white text-slate-900 py-16 sm:py-24 border-t border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#2F5FE8] font-semibold mb-2">
            // Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pixel tracking-tight text-[#0D1E40]">
            About <span className="text-[#2F5FE8]">CipherX</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
            We are a tight-knit collective of 5 engineers crafting resilient digital products.
            Instead of siloed departments, we operate as a single agile unit — shipping clean interfaces, robust APIs, and scalable infrastructure.
          </p>
        </div>

        {/* 3 Simple Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] rounded-xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#2F5FE8]/40 hover:bg-[#F3F7FF]/50 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100/70 flex items-center justify-center mb-3.5">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0D1E40] mb-1.5 font-sans">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}