import React from 'react';
import { VelocityText } from './ScrollVelocity';
import { Figma, Git, Javascript, Mysql, Nextjs, Node, Php, PostgreSQL, ReactLogo, Typescript, Bootstrap, Css, Django, Html, MongoDB, Postman } from './SkillLogos';
import { Highlighter } from "@/components/ui/highlighter";

const skillsRow1 = [
  <ReactLogo key="react" />,
  <Nextjs key="nextjs" />,
  <Javascript key="js" />,
  <Typescript key="ts" />,
  <Bootstrap key="bootstrap" />,
  <Css key="css" />,
  <Django key="django" />,
  <Figma key="figma" />,
];

const skillsRow2 = [
  <Html key="html" />,
  <MongoDB key="mongodb" />,
  <PostgreSQL key="postgresql" />,
  <Postman key="postman" />,
  <Mysql key="mysql" />,
  <Node key="node" />,
  <Git key="git" />,
  <Php key="php" />,
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-white text-black py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <div className="inline-block mb-7 sm:mb-10 md:mb-12">
          <p className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#2F5FE8] font-semibold mb-1 sm:mb-2">
            // Technologies & Tools
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pixel inline-block text-[#0D1E40]">
            <Highlighter action="underline" color="#FFD700">
              Tech Stack
            </Highlighter>
          </h2>
        </div>
      </div>
      <div className="relative max-w-screen-lg mx-auto flex flex-col gap-3 sm:gap-4">
        {/* Left Blur */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-12 md:w-16 z-10"
             style={{
               background: 'linear-gradient(to right, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0))',
               filter: 'blur(4px)'
             }}
        />
        {/* Right Blur */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-12 md:w-16 z-10"
             style={{
               background: 'linear-gradient(to left, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0))',
               filter: 'blur(4px)'
             }}
        />
        <VelocityText baseVelocity={-5} numCopies={4}>
          {skillsRow1.map((logo, index) => (
            <div key={index} className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 text-gray-600 mx-1.5 sm:mx-2.5 md:mx-4 flex items-center justify-center p-0.5 sm:p-1">
              {logo}
            </div>
          ))}
        </VelocityText>
        <VelocityText baseVelocity={5} numCopies={4}>
          {skillsRow2.map((logo, index) => (
            <div key={index} className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 text-gray-600 mx-1.5 sm:mx-2.5 md:mx-4 flex items-center justify-center p-0.5 sm:p-1">
              {logo}
            </div>
          ))}
        </VelocityText>
      </div>
    </section>
  );
}