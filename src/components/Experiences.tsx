import React, { useState } from 'react';
import { 
  Sparkles, 
  Disc, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Briefcase, 
  Star,
  ExternalLink
} from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { ExperienceItem } from '../types/portfolio';
import { playGummyPop } from '../utils/sound';

export const Experiences: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES_DATA[0].id);

  const toggleExpand = (id: string) => {
    playGummyPop('squish');
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="experiences" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-black font-display text-[#07076c] tracking-tight">
            Track Record &amp; Experiences
          </h2>
        </div>
        <p className="text-xs md:text-sm font-bold text-gray-500 max-w-md">
          No experience, No bright future
        </p>
      </div>

      {/* Floppy Disk Clay Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERIENCES_DATA.map((exp, index) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div
              key={exp.id}
              className={`rounded-[32px] p-6 border-[3.5px] border-[#07076c] transition-all duration-300 relative ${
                isExpanded ? 'bg-white shadow-[8px_8px_0px_#07076c]' : 'bg-[#FAF8F5] hover:bg-white shadow-[5px_5px_0px_#07076c]'
              }`}
              style={{
                boxShadow: isExpanded
                  ? '8px 8px 0px #07076c, inset 3px 3px 6px rgba(255,255,255,0.9), inset -3px -3px 6px rgba(7,7,108,0.1)'
                  : '5px 5px 0px #07076c, inset 2px 2px 5px rgba(255,255,255,0.7), inset -2px -2px 5px rgba(7,7,108,0.08)'
              }}
            >
              {/* Retro Floppy Top Header / Metal Shutter Accent */}

              {/* Main Floppy Sticker Label */}
              <div className="p-4 rounded-2xl bg-[#FFFDF9] border-2 border-[#07076c] shadow-[2px_2px_0px_#07076c]">
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-gray-500 font-semibold mb-1">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar size={13} className="text-[#FF6584]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-[#04A77D]" />
                    {exp.location}
                  </span>
                </div>

                <h3 className="text-xl font-black font-display text-[#07076c] tracking-tight">
                  {exp.role}
                </h3>
                
                <p className="text-sm font-bold text-[#FF6584] mt-0.5">
                  {exp.company}
                </p>

                <p className="text-xs md:text-sm text-gray-700 mt-2.5 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Expandable Key Highlights & Tech Stack */}
              {isExpanded && (
                <div className="mt-4 pt-3 border-t-2 border-dashed border-[#07076c]/20 animate-in fade-in duration-200">
                  <p className="text-xs font-black uppercase tracking-wider text-gray-500 mb-2">
                    Key Highlights &amp; Shipped Impact:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                        <CheckCircle size={15} className="text-[#04A77D] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bottom Decorative Write-Protect Notch */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono font-bold text-gray-400">
                <span>DISK_ID: {exp.id.toUpperCase()}</span>
                <span
                  onClick={() => toggleExpand(exp.id)}
                  className="cursor-pointer text-[#07076c] hover:underline"
                >
                  {isExpanded ? 'Collapse Details ▲' : 'Inspect Details ▼'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
