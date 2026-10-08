import React, { useState } from 'react';
import { 
  Terminal, 
  Sparkles, 
  Code, 
  Headphones, 
  Glasses, 
  Compass, 
  ArrowDown, 
  Laptop, 
  Check, 
  Copy,
  ExternalLink,
  Cpu
} from 'lucide-react';
import { playGummyPop } from '../utils/sound';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [glassesMode, setGlassesMode] = useState(false);
  const [headphoneVibe, setHeadphoneVibe] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleGlasses = () => {
    playGummyPop('squish');
    setGlassesMode(!glassesMode);
  };

  const toggleHeadphones = () => {
    playGummyPop('pop');
    setHeadphoneVibe(!headphoneVibe);
  };

  const handleCopyEmail = () => {
    playGummyPop('click');
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const scrollTo = (id: string) => {
    playGummyPop('click');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 md:pt-36 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Top Banner Ribbon */}
      

      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column: Big Hero Image & Interactive Gummy Accessories */}
        <div className="lg:col-span-6 relative flex flex-col items-center">
          
          {/* Main Photo Frame (Neo-Brutalist + Claymorphic Gummy Pillow) */}
          <div className="relative w-full max-w-[460px] aspect-square rounded-[36px] bg-[#FFFFFF] p-3 md:p-4 clay-card border-[3.5px] border-[#07076c] group">
            
            {/* Inner Gummy Cushion Wrap */}
            <div className="relative w-full h-full rounded-[28px] overflow-hidden border-2 border-[#07076c] bg-[#FAF8F5] shadow-inner">
              <img
                src={PERSONAL_INFO.image || '/images/hero_portrait.jpg'}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  glassesMode ? 'scale-105 contrast-110' : 'scale-100'
                }`}
              />

              {/* Interactive Cool Sunglasses Overlay (Toggleable Easter Egg) */}
              {glassesMode && (
                <div className="absolute inset-0 bg-indigo-950/20 backdrop-blur-[1px] flex items-center justify-center pointer-events-none transition-all duration-300">
                  <div className="px-4 py-2 bg-[#FF6584] text-white rounded-full font-black text-sm border-2 border-[#07076c] shadow-[3px_3px_0px_#07076c] animate-bounce">
                    🕶️ Cool Shades Activated!
                  </div>
                </div>
              )}

              {/* Interactive Lo-Fi Audio Wave Overlay */}
              {headphoneVibe && (
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between px-3 py-1.5 bg-[#07076c]/90 text-white rounded-xl text-xs font-mono border-2 border-white/40 backdrop-blur-md animate-pulse">
                  <div className="flex items-center gap-1.5">
                    <Headphones size={13} className="text-[#06D6A0]" />
                    <span>Lo-Fi Beats for Coding</span>
                  </div>
                  <span className="text-[#FFD166]">128 BPM</span>
                </div>
              )}

              {/* Bottom Scrim Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-[#07076c] shadow-[2px_2px_0px_#07076c] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Current Status</p>
                  <p className="text-sm font-black text-[#07076c]">Active B.Sc. Undergrad</p>
                </div>
                <div className="px-2.5 py-1 bg-[#06D6A0] text-[#07076c] rounded-lg text-xs font-black border border-[#07076c]">
                  SEM 5
                </div>
              </div>
            </div>

            {/* Floating Gummy Sticker 1: Kacamata Gaul Toggle */}
            <button
              onClick={toggleGlasses}
              title="Click to toggle stylish retro shades!"
              className={`absolute -top-4 -right-3 md:-right-5 px-3 py-2 rounded-2xl clay-btn flex items-center gap-1.5 text-xs md:text-sm font-black transition-all ${
                glassesMode ? 'bg-[#FF6584] text-white rotate-6 scale-110' : 'bg-[#FFD166] text-[#07076c] -rotate-3 hover:rotate-3'
              }`}
            >
              <Glasses size={18} />
              <span>{glassesMode ? 'Shades: ON' : 'Cool Shades 😎'}</span>
            </button>

            {/* Floating Gummy Sticker 2: Headphone Coding Vibe */}
            <button
              onClick={toggleHeadphones}
              title="Click to tune in with coding headphones!"
              className={`absolute -bottom-4 -left-3 md:-left-5 px-3 py-2 rounded-2xl clay-btn flex items-center gap-1.5 text-xs md:text-sm font-black transition-all ${
                headphoneVibe ? 'bg-[#06D6A0] text-[#07076c] -rotate-6 scale-110' : 'bg-[#BDB2FF] text-[#07076c] rotate-3 hover:-rotate-3'
              }`}
            >
              <Headphones size={18} />
              <span>{headphoneVibe ? 'Audio: Jammin\' 🎧' : 'Headphones 🎧'}</span>
            </button>

            {/* Floating Gummy Sticker 3: Code Tag */}
            <div className="absolute top-1/2 -left-6 hidden md:flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white text-[#07076c] clay-pill text-xs font-mono font-bold -rotate-12 animate-float-slow">
              <Code size={14} className="text-[#FF6584]" />
              <span>&lt;Code /&gt;</span>
            </div>

            {/* Floating Gummy Sticker 4: AI Brain Chip */}
            <div className="absolute top-1/3 -right-6 hidden md:flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#48CAE4] text-[#07076c] clay-pill text-xs font-mono font-bold rotate-12 animate-float-reverse">
              <Cpu size={14} className="text-[#07076c]" />
              <span>model.predict()</span>
            </div>
          </div>

          <p className="mt-4 text-xs font-semibold text-gray-500 text-center">
            *Pro-tip: Try clicking the <span className="font-bold text-[#FF6584]">Shades</span> &amp; <span className="font-bold text-[#04A77D]">Headphones</span> badges above!
          </p>
        </div>

        {/* Right Column: Identity, Education Details & Ambition */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-[#EBF4FF] text-[#07076c] border-2 border-[#07076c] text-xs md:text-sm font-bold shadow-[2px_2px_0px_#07076c]">
            <Laptop size={14} className="text-[#FF6584]" />
            <span>Hey there, welcome to my digital workspace!</span>
          </div>

          {/* Name & Headline */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-[#07076c] tracking-tight leading-[1.08] text-balance">
              {PERSONAL_INFO.name}
            </h1>
            <p className="mt-2 text-lg md:text-xl font-bold text-[#FF6584]">
              {PERSONAL_INFO.role}
            </p>
          </div>

          {/* Core Info Bento Cards (Major, Cohort, University, Ambition) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            
            {/* Card 1: Major */}
            <div className="p-4 rounded-2xl bg-[#FFF6E5] clay-card border-3 border-[#07076c] relative overflow-hidden group">
              <div className="text-xs font-black uppercase tracking-wider text-gray-500 mb-1">
                Degree
              </div>
              <div className="text-lg font-black text-[#07076c] font-display flex items-center justify-between">
                <span>{PERSONAL_INFO.major}</span>
                <span className="text-xl">💻</span>
              </div>
              <div className="text-xs font-semibold text-gray-600 mt-1">
                Faculty of Engineering · <p>{PERSONAL_INFO.university}</p>
              </div>
            </div>

            {/* Card 2: Cohort */}
            <div className="p-4 rounded-2xl bg-[#E8FBF4] clay-card border-3 border-[#07076c] relative overflow-hidden group">
              <div className="text-xs font-black uppercase tracking-wider text-gray-500 mb-1">
                Class
              </div>
              <div className="text-2xl font-black text-[#04A77D] font-display flex items-center justify-between">
                <span>Class of {PERSONAL_INFO.cohort}</span>
                <span className="text-xl">🎓</span>
              </div>
              <div className="text-xs font-semibold text-gray-600 mt-1">
                Tech Nerd &amp; Generation
              </div>
            </div>

            {/* Card 3: Ambition (Full Span) */}
            <div className="sm:col-span-2 p-4 md:p-5 rounded-2xl bg-[#F0EDFA] clay-card border-3 border-[#07076c] relative overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-black uppercase tracking-wider text-[#7C69FF] flex items-center gap-1.5">
                  <Compass size={14} />
                  Long-Term Ambition
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white text-[#07076c] text-[11px] font-black border border-[#07076c]">
                  Primary Goal
                </span>
              </div>
              <div className="text-lg md:text-xl font-black text-[#07076c] font-display">
                {PERSONAL_INFO.dreamGoal}
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-1.5 leading-relaxed">
                Computer Engineering student with a strong focus on web development, backend engineering, and data processing. Experienced in building responsive web systems and managing data-driven workflows within startup environments. Combines technical capability with strong visual communication skills, enabling effective cross-functional collaboration and structured problem-solving.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
