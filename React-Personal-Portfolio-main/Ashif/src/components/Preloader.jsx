import React, { useEffect, useState } from 'react';

/**
 * Preloader component that displays a dreamy cloudy CipherX intro screen
 * while the 3D Spline robot and assets are loading in the background.
 * Once ready, the cloudy background gracefully vanishes and reveals
 * the 3D robot with its cinematic entrance animation.
 */
export default function Preloader({ isReady }) {
  const [progress, setProgress] = useState(15);
  const [fadeOut, setFadeOut] = useState(false);
  const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    if (isReady) {
      setProgress(100);
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 150);
      const unmountTimer = setTimeout(() => {
        setUnmounted(true);
      }, 1450);
      return () => {
        clearTimeout(timer);
        clearTimeout(unmountTimer);
      };
    } else {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 88) {
            clearInterval(interval);
            return 88;
          }
          return prev + Math.floor(Math.random() * 8 + 4);
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isReady]);

  if (unmounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#F3F7FF] transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        fadeOut ? 'opacity-0 scale-105 blur-sm pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Loading CipherX Experience"
    >
      {/* Decorative Radial Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(47, 95, 232, 0.14) 1.5px, transparent 1.5px)',
          backgroundSize: '26px 26px'
        }}
      />

      {/* Cloud Layer 1: Top-Left Soft Drifting Cloud */}
      <div 
        className="absolute -top-24 -left-20 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full bg-gradient-to-br from-blue-300/45 via-blue-100/70 to-white/90 blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: '4.5s' }}
      />

      {/* Cloud Layer 2: Bottom-Right Soft Ambient Cloud */}
      <div 
        className="absolute -bottom-32 -right-24 w-[460px] sm:w-[580px] h-[460px] sm:h-[580px] rounded-full bg-gradient-to-tl from-blue-400/35 via-indigo-200/50 to-white/80 blur-3xl pointer-events-none"
      />

      {/* Cloud Layer 3: Central Soft White Cloud Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] h-[340px] sm:h-[520px] rounded-full bg-white/75 blur-3xl pointer-events-none"
      />

      {/* Cloud Layer 4: Upper-Right Floating Sky Cloud */}
      <div 
        className="absolute top-1/4 -right-10 w-[300px] h-[300px] rounded-full bg-sky-200/40 blur-2xl pointer-events-none"
      />

      {/* Frosted Mist Ambient Layer */}
      <div className="absolute inset-0 bg-white/25 backdrop-blur-[3px] pointer-events-none" />

      {/* Centered Brand Experience */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm">
        {/* Floating Glowing CipherX Logo Icon */}
        <div className="relative mb-5">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#2F5FE8] to-sky-400 opacity-40 blur-xl animate-pulse" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/95 shadow-xl shadow-blue-500/15 border border-white flex items-center justify-center p-3.5 backdrop-blur-md">
            <img
              src="/cipherX-icon.png"
              alt="CipherX"
              className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* CipherX Title */}
        <h1 className="text-3xl sm:text-4xl font-bold font-pixel tracking-wider text-[#0D1E40] mb-1.5">
          Cipher<span className="text-[#2F5FE8]">X</span>
        </h1>

        {/* Tagline */}
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#2F5FE8] font-semibold mb-6">
          // Engineering Team
        </p>

        {/* Smooth Animated Progress Bar */}
        <div className="w-44 sm:w-52 h-1.5 bg-blue-100/80 rounded-full overflow-hidden shadow-inner mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#2F5FE8] via-sky-400 to-[#2F5FE8] transition-all duration-300 ease-out rounded-full shadow-[0_0_10px_rgba(47,95,232,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Live Loading Status */}
        <span className="text-[11px] sm:text-xs font-mono text-slate-500 tracking-wide">
          {progress < 100 ? 'Getting things ready...' : 'Welcome'}
        </span>
      </div>
    </div>
  );
}
