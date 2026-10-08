import React, { useState } from 'react';
import { Sparkles, Code2, Coffee, Trophy, Terminal, CheckCircle2, Heart, Flame } from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { playGummyPop } from '../utils/sound';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stack' | 'interests' | 'mindset'>('stack');
  const [likedBio, setLikedBio] = useState(false);
  const [likesCount, setLikesCount] = useState(2100);
  const [showPlusOne, setShowPlusOne] = useState(false);

  const handleLike = () => {
    playGummyPop('pop');
    setLikesCount(c => c + 1);
    setLikedBio(true);
    setShowPlusOne(true);
    setTimeout(() => setShowPlusOne(false), 900);
  };

  const formatLikes = (count: number) => {
    if (count === 2100) return '2.1k Likes';
    return `${count.toLocaleString('en-US')} Likes`;
  };

  const handleKeywordClick = (keyword: string) => {
    playGummyPop('click');
  };

  return (
    <section id="about" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-black font-display text-[#07076c] tracking-tight">
            About Me
          </h2>
        </div>
        <p className="text-xs md:text-sm font-bold text-gray-500 max-w-md">
          Harmonizing cold binary logic, structured data pipelines, and delightful human-centric interfaces.
        </p>
      </div>

      {/* Main About Bento Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Paragraph & Keywords Bento Card (Large 8 Cols) */}
        <div className="lg:col-span-8 p-6 md:p-8 rounded-[32px] bg-white clay-card border-3 border-[#07076c] flex flex-col justify-between">
          <div>
            {/* Top Terminal Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#07076c]/10">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#FF6584] border border-[#07076c]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFD166] border border-[#07076c]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#06D6A0] border border-[#07076c]" />
                <span className="ml-2 font-mono text-xs font-bold text-[#07076c]/70">bio_overview.md</span>
              </div>
              <div className="relative">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black transition-all clay-btn ${
                    likedBio ? 'bg-[#FF6584] text-white scale-105 shadow-[2px_2px_0px_#07076c]' : 'bg-[#FAF8F5] text-[#07076c]'
                  }`}
                  title="Click to drop some love!"
                >
                  <Heart size={14} className={likedBio ? 'fill-current animate-pulse' : ''} />
                  <span>{formatLikes(likesCount)}</span>
                </button>
                {showPlusOne && (
                  <span className="absolute -top-6 right-2 text-xs font-black text-[#FF6584] animate-bounce pointer-events-none">
                    +1 ❤️
                  </span>
                )}
              </div>
            </div>

            {/* The 1 Required Paragraph (Content rich, expressive, relatable) */}
            <p className="text-base md:text-xl font-medium text-[#07076c] leading-relaxed text-pretty">
              {ABOUT_DATA.paragraph}
            </p>

            {/* Sebaris Keyword di Bawahnya (Direct requirement) */}
            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-2">
                {ABOUT_DATA.keywords.map((kw, i) => (
                  <button
                    key={kw}
                    onClick={() => handleKeywordClick(kw)}
                    className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] hover:bg-[#FFD166] text-[#07076c] font-mono text-xs md:text-sm font-bold border-2 border-[#07076c] shadow-[2px_2px_0px_#07076c] transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Interactive Clay Widget (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            {ABOUT_DATA.quickStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-4 rounded-2xl clay-card border-3 border-[#07076c] flex flex-col justify-between ${
                  idx === 0 ? 'bg-[#FFD166]' : idx === 1 ? 'bg-[#06D6A0]' : idx === 2 ? 'bg-[#FF6584] text-white' : 'bg-[#BDB2FF]'
                }`}
              >
                <div className="text-2xl md:text-3xl font-black font-display tracking-tight">
                  {stat.value}
                </div>
                <div className={`text-xs font-bold mt-2 ${idx === 2 ? 'text-white/90' : 'text-[#07076c]/80'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Today's Focus Card */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] clay-card border-3 border-[#07076c] flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-gray-500">
                  Daily Workstation Focus
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#06D6A0] animate-ping" />
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Diving deep into codes, bugs, APIs, and even your personal algorithm.
              </p>
            </div>
            <div className="mt-8 p-3.5 rounded-2xl bg-[#EBF4FF] border-2 border-[#07076c] flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <p className="text-xs md:text-sm font-semibold text-[#07076c]">
              <span className="font-bold">Engineering Philosophy:</span> Great code is written for humans first, machines second, and solves real user problems with zero drama.
            </p>
          </div>
          </div>

        </div>

      </div>
    </section>
  );
};
