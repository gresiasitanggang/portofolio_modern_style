import React, { useState } from 'react';
import { 
  Sparkles, 
  Layout, 
  Brain, 
  Server, 
  Cloud, 
  Database, 
  Lightbulb, 
  Users, 
  Compass, 
  MessageSquare, 
  HeartHandshake, 
  Flame,
  CheckCircle2,
  X,
  Zap,
  Info
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';
import { playGummyPop } from '../utils/sound';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hard' | 'soft'>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [squishedId, setSquishedId] = useState<string | null>(null);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (filter === 'all') return true;
    return skill.category === filter;
  });

  const handleSquish = (skill: SkillItem) => {
    playGummyPop('squish');
    setSquishedId(skill.id);
    setSelectedSkill(skill);
    setTimeout(() => setSquishedId(null), 300);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout': return <Layout size={24} />;
      case 'Brain': return <Brain size={24} />;
      case 'Server': return <Server size={24} />;
      case 'Cloud': return <Cloud size={24} />;
      case 'Database': return <Database size={24} />;
      case 'Lightbulb': return <Lightbulb size={24} />;
      case 'Users': return <Users size={24} />;
      case 'Compass': return <Compass size={24} />;
      case 'MessageSquare': return <MessageSquare size={24} />;
      case 'HeartHandshake': return <HeartHandshake size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  return (
    <section id="skills" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-black font-display text-[#07076c] tracking-tight">
            Hard Skills & Soft Skills
          </h2>
        </div>

        {/* Filter Switcher Controls */}
        <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl clay-card-flat border-3 border-[#07076c]">
          <button
            onClick={() => {
              playGummyPop('click');
              setFilter('all');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-black transition-all ${
              filter === 'all'
                ? 'bg-[#FF6584] text-white clay-pill shadow-[2px_2px_0px_#07076c]'
                : 'text-[#07076c] hover:bg-gray-100'
            }`}
          >
            All (8)
          </button>
          <button
            onClick={() => {
              playGummyPop('click');
              setFilter('hard');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-black transition-all ${
              filter === 'hard'
                ? 'bg-[#FFD166] text-[#07076c] clay-pill shadow-[2px_2px_0px_#07076c]'
                : 'text-[#07076c] hover:bg-gray-100'
            }`}
          >
            4 Hard Skills 💻
          </button>
          <button
            onClick={() => {
              playGummyPop('click');
              setFilter('soft');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-black transition-all ${
              filter === 'soft'
                ? 'bg-[#06D6A0] text-[#07076c] clay-pill shadow-[2px_2px_0px_#07076c]'
                : 'text-[#07076c] hover:bg-gray-100'
            }`}
          >
            4 Soft Skills 🤝
          </button>
        </div>
      </div>

      <p className="text-xs md:text-sm font-semibold text-gray-600 mb-6 flex items-center gap-2">
        <span><b>Capabilities</b></span>
        <span>Keep learning and progressing for future career</span>
      </p>

      {/* Gummy Balloons Grid (5 Hard + 5 Soft) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {filteredSkills.map((skill, index) => {
          const isSquished = squishedId === skill.id;
          const isSelected = selectedSkill?.id === skill.id;

          return (
            <div
              key={skill.id}
              onClick={() => handleSquish(skill)}
              className={`group cursor-pointer select-none rounded-[28px] p-5 text-left border-[3.5px] border-[#07076c] transition-all duration-200 flex flex-col justify-between relative overflow-hidden ${
                skill.bgGummy
              } ${
                isSquished
                  ? 'scale-90 rotate-2'
                  : 'hover:-translate-y-1.5 hover:rotate-1'
              } ${
                isSelected
                  ? 'ring-4 ring-[#07076c] shadow-[8px_8px_0px_#07076c]'
                  : 'shadow-[5px_5px_0px_#07076c]'
              }`}
              style={{
                boxShadow: isSelected
                  ? '8px 8px 0px #07076c, inset 3px 3px 6px rgba(255,255,255,0.95), inset -3px -3px 6px rgba(7,7,108,0.2)'
                  : '5px 5px 0px #07076c, inset 3px 3px 6px rgba(255,255,255,0.85), inset -3px -3px 6px rgba(7,7,108,0.12)'
              }}
            >
              {/* Top Gummy Specular Highlight Bubble */}
              <div className="absolute top-2 left-4 w-12 h-3 rounded-full bg-white/60 blur-[1px] pointer-events-none" />

              <div>
                {/* Category Badge Only */}
                <div className="flex justify-end mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[#07076c] text-[11px] font-black border border-[#07076c] shadow-[1px_1px_0px_#07076c]">
                    {skill.category === 'hard' ? 'Hard Skill' : 'Soft Skill'}
                  </span>
                </div>

                {/* Animated Icon Cushion */}
                <div className="w-12 h-12 rounded-2xl bg-white text-[#07076c] border-2 border-[#07076c] flex items-center justify-center mb-3 shadow-[2px_2px_0px_#07076c] group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {getIcon(skill.iconName)}
                </div>

                {/* Skill Title */}
                <h3 className="text-base md:text-lg font-black font-display text-[#07076c] leading-snug">
                  {skill.name}
                </h3>

                {/* Detail */}
                <p className="mt-2 text-xs font-medium text-[#07076c]/85 leading-relaxed">
                  {skill.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
