import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoIcon from '../assets/cipherX-icon.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40 p-4 sm:p-6 backdrop-blur-md bg-[#F3F7FF]/85 border-b border-[#0D1E40]/10">
      <nav className="container flex items-center justify-between mx-auto max-w-6xl">
        {/* Brand */}
        <a href="#" className="group flex items-center gap-2.5 text-[#0D1E40] font-bold text-lg sm:text-xl tracking-tight transition hover:opacity-90">
          <img
            src={logoIcon}
            alt="CipherX logo"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-sans font-bold">Cipher<span className="text-[#2F5FE8]">X</span></span>
        </a>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5B6B8C]">
          <a href="#about" onClick={e => handleNavClick(e, 'about')} className="transition hover:text-[#2F5FE8]">About</a>
          <a href="#team" onClick={e => handleNavClick(e, 'team')} className="transition hover:text-[#2F5FE8]">Team</a>
          <a href="#skills" onClick={e => handleNavClick(e, 'skills')} className="transition hover:text-[#2F5FE8]">Skills</a>
          <a href="#projects" onClick={e => handleNavClick(e, 'projects')} className="transition hover:text-[#2F5FE8]">Projects</a>
          <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="transition hover:text-[#2F5FE8]">Contact</a>
        </div>

        {/* Desktop CTA Button */}
        <a
          href="#contact"
          onClick={e => handleNavClick(e, 'contact')}
          className="hidden md:inline-flex items-center px-4 py-2 text-xs font-semibold text-white uppercase tracking-wider bg-[#2F5FE8] hover:bg-[#2049bf] rounded-lg transition shadow-md shadow-blue-500/20"
        >
          Get In Touch
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0D1E40] p-2 rounded-lg bg-white border border-[#2F5FE8]/20 hover:bg-blue-50 transition cursor-pointer shadow-sm"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-[#2F5FE8]/20 shadow-2xl flex flex-col gap-2 text-base font-medium text-[#0D1E40] animate-in fade-in slide-in-from-top-2 duration-200">
          <a href="#about" onClick={e => handleNavClick(e, 'about')} className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#2F5FE8] transition">About</a>
          <a href="#team" onClick={e => handleNavClick(e, 'team')} className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#2F5FE8] transition">Team</a>
          <a href="#skills" onClick={e => handleNavClick(e, 'skills')} className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#2F5FE8] transition">Skills</a>
          <a href="#projects" onClick={e => handleNavClick(e, 'projects')} className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#2F5FE8] transition">Projects</a>
          <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#2F5FE8] transition">Contact</a>
        </div>
      )}
    </header>
  );
}