import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Send, Menu, X, ArrowUpRight } from 'lucide-react';
import { playGummyPop, toggleSound, getSoundEnabled } from '../utils/sound';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [soundOn, setSoundOn] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setSoundOn(getSoundEnabled());

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experiences', 'projects-edu', 'gallery'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) {
      playGummyPop('pop');
    }
  };

  const scrollTo = (id: string) => {
    playGummyPop('click');
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experiences', label: 'Experience' },
    { id: 'projects-edu', label: 'Works & Edu' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto pointer-events-none">
      <div className="pointer-events-auto bg-[#FFFFFF]/90 backdrop-blur-md rounded-2xl md:rounded-full px-4 py-2.5 md:py-2 flex items-center justify-between clay-card-flat border-3 border-[#07076c]">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 font-display text-lg md:text-xl font-black text-[#07076c] hover:opacity-90 transition-opacity tracking-tight"
          >
            <span className="w-8 h-8 rounded-xl bg-[#FFD166] text-[#07076c] neo-border-sm flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_#07076c]">
              GS
            </span>
            <span className="hidden sm:inline">Gresia Sitanggang</span>
            <span className="sm:hidden">Gres</span>
          </button>

          {/* Micro Status Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8FBF4] text-[#04A77D] text-xs font-semibold border-2 border-[#06D6A0]">
            <span className="w-2 h-2 rounded-full bg-[#06D6A0] animate-ping" />
            <span>Open for Collabs</span>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Clean text with playful gummy active state) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1 text-xs lg:text-sm font-bold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FF6584] text-white clay-pill scale-105'
                    : 'text-[#07076c] hover:bg-[#F0EDFA] hover:text-[#07076c]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Interactive Sound Toggle & CTA Action */}
        <div className="flex items-center gap-2">
          {/* Audio Gummy Pop Toggle */}
          <button
            onClick={handleSoundToggle}
            title={soundOn ? 'Interactive Sound: On' : 'Interactive Sound: Muted'}
            aria-label="Toggle Sound"
            className={`w-9 h-9 rounded-full flex items-center justify-center clay-btn text-xs font-bold transition-all ${
              soundOn ? 'bg-[#FFD166] text-[#07076c]' : 'bg-gray-200 text-gray-500'
            }`}
          >
            {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* CTA Say Hi Button */}
          <button
            onClick={() => {
              playGummyPop('pop');
              onContactClick();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#07076c] text-white hover:bg-[#12128a] clay-btn text-xs md:text-sm font-bold whitespace-nowrap shadow-[3px_3px_0px_#FF6584]"
          >
            <span>Say Hi!</span>
            <Send size={13} className="hidden sm:inline" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              playGummyPop('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Menu"
            className="md:hidden w-9 h-9 rounded-full bg-[#BDB2FF] text-[#07076c] flex items-center justify-center clay-btn"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 bg-white rounded-2xl p-4 clay-card border-3 border-[#07076c] flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left px-3 py-2 rounded-xl text-sm font-bold text-[#07076c] hover:bg-[#FFD166]/30 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowUpRight size={14} />
            </button>
          ))}
          <div className="pt-2 border-t-2 border-[#07076c]/10 flex items-center justify-between text-xs text-[#07076c]/70 font-semibold px-1">
            <span>{PERSONAL_INFO.currentTrack}</span>
          </div>
        </div>
      )}
    </header>
  );
};
