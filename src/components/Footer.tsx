import React, { useState } from 'react';
import { 
  Mail, 
  Instagram, 
  Check, 
  Copy, 
  Sparkles, 
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playGummyPop } from '../utils/sound';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    playGummyPop('click');
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollTo = (id: string) => {
    playGummyPop('click');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
    <footer id="contact" className="my-14 md:my-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Concise & Simple Island Container with Breathing Room */}
      <div className="rounded-[36px] bg-white p-6 sm:p-8 md:p-10 clay-card border-[3.5px] border-[#07076c] flex flex-col gap-8 shadow-[7px_7px_0px_#07076c]">
        {/* Row 2: Cards Media Sosial (Ukurannya pas, tidak berlebihan) */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            
            {/* Instagram Card */}
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playGummyPop('click')}
              className="p-3.5 rounded-2xl bg-[#FAF8F5] hover:bg-[#FFF0F3] border-2 border-[#07076c] clay-btn flex items-center justify-between transition-all group shadow-[2px_2px_0px_#07076c]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#FF6584] text-white flex items-center justify-center border border-[#07076c]">
                  <Instagram size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500">Instagram</p>
                  <p className="text-xs font-black text-[#07076c]">{PERSONAL_INFO.instagramHandle}</p>
                </div>
              </div>
              <ArrowUpRight size={15} className="text-gray-400 group-hover:text-[#FF6584] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* TikTok Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playGummyPop('click')}
              className="p-3.5 rounded-2xl bg-[#FAF8F5] hover:bg-[#F0FAFF] border-2 border-[#07076c] clay-btn flex items-center justify-between transition-all group shadow-[2px_2px_0px_#07076c]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#07076c] text-[#06D6A0] flex items-center justify-center border border-[#07076c]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500">LinkedIn</p>
                  <p className="text-xs font-black text-[#07076c]">{PERSONAL_INFO.linkedinHandle}</p>
                </div>
              </div>
              <ArrowUpRight size={15} className="text-gray-400 group-hover:text-[#07076c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Email Card with Copy Button */}
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border-2 border-[#07076c] clay-card-flat flex items-center justify-between gap-2 shadow-[2px_2px_0px_#07076c]">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-8 h-8 rounded-xl bg-[#FFD166] text-[#07076c] flex items-center justify-center border border-[#07076c] shrink-0">
                  <Mail size={16} />
                </div>
                <div className="truncate">
                  <p className="text-[11px] font-bold text-gray-500">Student Email</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs font-black text-[#07076c] hover:underline truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-2 py-1 rounded-lg bg-white hover:bg-[#FFD166] text-[#07076c] border border-[#07076c] text-[11px] font-black shrink-0 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <span className="flex items-center gap-1 text-[#04A77D]">
                    <Check size={12} />
                    Copied!
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy size={12} />
                    Copy
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Row 3: Simple & Clean Copyright Note */}
        <div className="pt-4 border-t border-[#07076c]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-semibold text-gray-500">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name} · Personal Portfolio · Crafted with code &amp; curiosity.</p>
          <p className="text-[11px] font-mono text-[#07076c]/80">Computer Engineering · UNNES '24</p>
        </div>

      </div>
    </footer>
  );
};
