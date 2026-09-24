import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import RotatingText from './RotatingText';
import { WordRotate } from "@/components/ui/word-rotate";

/**
 * A modern, minimal hero section component.
 */
export default function Hero() {
  const capabilities = [
    'Full-Stack Collective',
    '5 Core Engineers',
    'Schema to Interface',
    'Scalable Systems Architects'
  ];
  const greetings = ["Hello", "Hola", "Ciao", "مرحبا"];

  const handleSplineLoad = (splineApp) => {
    try {
      if (splineApp) {
        // Expose to window for debugging in browser console
        window._splineApp = splineApp;

        if (typeof splineApp.setBackgroundColor === 'function') {
          splineApp.setBackgroundColor('#F3F7FF');
        }

        // Hide "logo" (NEXOBOT background text) — exact name found via scene traversal
        const hideNexoBotObjects = () => {
          try {
            // Method 1: findObjectByName with exact known name "logo" (the NEXOBOT group)
            const exactNamesToHide = ['logo', 'Logo', 'LOGO'];
            exactNamesToHide.forEach(name => {
              try {
                const obj = splineApp.findObjectByName(name);
                if (obj) {
                  obj.visible = false;
                  // Also hide all children
                  if (obj.children) {
                    obj.children.forEach(child => { child.visible = false; });
                  }
                }
              } catch (_) {}
            });

            // Method 2: Three.js scene traversal — hide "logo" group and all nexo-related objects
            try {
              const scene = splineApp._renderer?.scene || splineApp._scene || splineApp.scene;
              if (scene && typeof scene.traverse === 'function') {
                scene.traverse(obj => {
                  if (obj && obj.name) {
                    const lowerName = obj.name.toLowerCase();
                    // Hide the logo group and anything under it
                    if (
                      lowerName === 'logo' ||
                      lowerName.includes('nexo') ||
                      (obj.parent && obj.parent.name && obj.parent.name.toLowerCase() === 'logo')
                    ) {
                      obj.visible = false;
                    }
                  }
                });
              }
            } catch (_) {}

            splineApp.requestRender?.();
          } catch (_) {}
        };

        // Disable Spline watermark / logo overlay in WebGL pipeline
        const disableWatermark = () => {
          try {
            if (splineApp._renderer?.pipeline) {
              if (typeof splineApp._renderer.pipeline.setWatermark === 'function') {
                splineApp._renderer.pipeline.setWatermark(null);
              }
              if (splineApp._renderer.pipeline.logoOverlayPass) {
                splineApp._renderer.pipeline.logoOverlayPass.enabled = false;
              }
              splineApp.requestRender?.();
            }
          } catch (_) {}
        };

        // Run immediately and after delays to ensure scene is fully loaded
        hideNexoBotObjects();
        disableWatermark();
        setTimeout(() => { hideNexoBotObjects(); disableWatermark(); }, 300);
        setTimeout(() => { hideNexoBotObjects(); disableWatermark(); }, 1000);
        setTimeout(() => { hideNexoBotObjects(); disableWatermark(); }, 3000);
      }
    } catch (err) {
      console.warn('Spline setup:', err);
    }
  };

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-[#F3F7FF] flex flex-col justify-between md:block">
      {/* Decorative Radial Grid & Ambient Blue Blobs */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(47, 95, 232, 0.14) 1.5px, transparent 1.5px)',
          backgroundSize: '26px 26px'
        }}
      />
      <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-blue-400/25 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none z-0" />

      {/* 1. Spline 3D Robot - Positioned below text on mobile, full-screen on desktop */}
      <div className="absolute bottom-0 left-0 right-0 h-[65vh] sm:h-[68vh] md:h-full md:inset-0 z-10 pointer-events-none md:pointer-events-auto flex items-center justify-center">
        <Spline
          scene="https://prod.spline.design/9xuF1oRA5poA131s/scene.splinecode"
          onLoad={handleSplineLoad}
          aria-label="Interactive 3D animation"
        />
      </div>

      {/* 2. Content: Brought down on mobile to eliminate excessive empty space above robot */}
      <div className="relative z-20 w-full pt-36 sm:pt-40 md:pt-0 md:h-full md:flex md:items-center px-4 sm:px-8 md:px-16 lg:px-24 pointer-events-none">
        <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0 pointer-events-auto text-center md:text-left">
          <p className="font-mono text-[11px] sm:text-xs md:text-sm tracking-wider uppercase text-[#2F5FE8] mb-1 sm:mb-2 font-semibold">
            // full-stack collective — 5 engineers
          </p>
          <h1 className="font-pixel flex flex-wrap items-center justify-center md:justify-start gap-x-1 sm:gap-x-2 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#0D1E40]">
            <WordRotate words={greetings} className="text-[#0D1E40]" />
            <span className="text-[#0D1E40]">, We're </span>
            <span className="text-[#2F5FE8]">CipherX</span>
          </h1>
          
          {/* Rotating Text for Capabilities */}
          <div className="flex justify-center md:justify-start mt-1.5 sm:mt-2.5">
            <RotatingText
              texts={capabilities}
              splitBy="words"
              mainClassName="text-sm sm:text-base md:text-xl lg:text-2xl text-[#2F5FE8] font-mono font-semibold"
              splitLevelClassName="overflow-hidden"
              staggerDuration={0.06}
              staggerFrom="last"
            />
          </div>

          <p className="hidden md:block text-[#5B6B8C] text-sm sm:text-base mt-4 max-w-lg leading-relaxed font-sans font-medium">
            We design, architect, and ship high-performance software end to end — from schema to interface, from first commit to production scale.
          </p>
        
          {/* Call-to-action buttons */}
          <div className="flex items-center justify-center md:justify-start gap-3 mt-3.5 sm:mt-5 md:mt-7">
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                setTimeout(() => {
                  const el = document.getElementById('projects') || document.getElementById('projects-mobile');
                  if (el) {
                    el.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base font-semibold text-white transition-all duration-300 bg-[#2F5FE8] hover:bg-[#2049bf] rounded-lg shadow-md shadow-blue-500/20 pointer-events-auto hover:scale-105 active:scale-95"
            >
              Explore Our Work
              <ArrowRight size={15} />
            </a>
            <a
              href="#team"
              onClick={e => {
                e.preventDefault();
                setTimeout(() => {
                  const el = document.getElementById('team') || document.getElementById('education');
                  if (el) {
                    el.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base font-semibold text-[#0D1E40] transition-all duration-300 bg-white border border-[#2F5FE8]/30 rounded-lg shadow-sm pointer-events-auto hover:border-[#2F5FE8] hover:bg-blue-50 hover:scale-105 active:scale-95"
            >
              Meet The Team
            </a>
          </div>

          {/* Desktop Meta Badges */}
          <div className="hidden md:flex items-center gap-6 mt-8 pt-6 border-t border-[#0D1E40]/10 text-xs text-[#5B6B8C] font-mono">
            <span><strong className="text-[#0D1E40] text-sm font-bold">5</strong> core engineers</span>
            <span>Frontend to Infrastructure</span>
            <span>Open-Source Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}