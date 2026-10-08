import React, { useState } from 'react';
import { 
  Sparkles, 
  Rocket, 
  GraduationCap, 
  ExternalLink, 
  ArrowUpRight, 
  Award, 
  Code, 
  Layers, 
  BookOpen, 
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { PROJECTS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { playGummyPop } from '../utils/sound';

export const EduProjects: React.FC = () => {
  const [viewMode, setViewMode] = useState<'both' | 'projects' | 'education'>('both');

  return (
    <section id="projects-edu" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-black font-display text-[#07076c] tracking-tight">
            Education &amp; Projects
          </h2>
        </div>

        {/* Trapezoid / Ember Style Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl clay-card-flat border-3 border-[#07076c]">
          <button
            onClick={() => {
              playGummyPop('click');
              setViewMode('both');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs md:text-sm font-black transition-all ${
              viewMode === 'both'
                ? 'bg-[#FF6584] text-white clay-pill shadow-[2px_2px_0px_#07076c]'
                : 'text-[#07076c] hover:bg-gray-100'
            }`}
          >
            All (8)
          </button>
          <button
            onClick={() => {
              playGummyPop('click');
              setViewMode('projects');
            }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs md:text-sm font-black transition-all ${
              viewMode === 'projects'
                ? 'bg-[#FFD166] text-[#07076c] clay-pill shadow-[2px_2px_0px_#07076c]'
                : 'text-[#07076c] hover:bg-gray-100'
            }`}
          >
            <Rocket size={14} />
            <span>5 Projects</span>
          </button>
          <button
            onClick={() => {
              playGummyPop('click');
              setViewMode('education');
            }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs md:text-sm font-black transition-all ${
              viewMode === 'education'
                ? 'bg-[#06D6A0] text-[#07076c] clay-pill shadow-[2px_2px_0px_#07076c]'
                : 'text-[#07076c] hover:bg-gray-100'
            }`}
          >
            <GraduationCap size={14} />
            <span>3 Education</span>
          </button>
        </div>
      </div>

      {/* Main 3D Clay Ember / Vessel Container */}
      <div className="rounded-[40px] bg-[#FAF8F5] p-5 sm:p-8 md:p-10 clay-card border-[3.5px] border-[#07076c] relative">

        {/* Content Section: Projects & Education Grid */}
        <div className="space-y-12">
          
          {/* 1. PROJECTS SECTION */}
          {(viewMode === 'both' || viewMode === 'projects') && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-xl bg-[#FFD166] text-[#07076c] flex items-center justify-center border-2 border-[#07076c] shadow-[2px_2px_0px_#07076c]">
                  <Rocket size={16} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black font-display text-[#07076c]">
                    Projects, Repos &amp; Documentation
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS_DATA.map((proj) => (
                  <div
                    key={proj.id}
                    className="rounded-[30px] p-6 bg-white border-[3px] border-[#07076c] shadow-[5px_5px_0px_#07076c] hover:shadow-[7px_7px_0px_#07076c] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Pill & Icon */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className="w-10 h-10 rounded-2xl border-2 border-[#07076c] flex items-center justify-center font-mono font-black text-sm shadow-[2px_2px_0px_#07076c]"
                          style={{ backgroundColor: proj.colorScheme }}
                        >
                          &lt;/&gt;
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] text-[#07076c] text-[11px] font-mono font-bold border border-[#07076c]">
                          {proj.type}
                        </span>
                      </div>

                      {/* Judul Utama (Main Title) */}
                      <h4 className="text-xl font-black font-display text-[#07076c]">
                        {proj.title}
                      </h4>

                      {/* Deskripsi Singkat (Short Description) */}
                      <p className="text-xs md:text-sm text-gray-700 mt-3 leading-relaxed">
                        {proj.description}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {proj.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-[#FAF8F5] text-[11px] font-bold text-[#07076c] border border-[#07076c]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* External Link Button (Required) */}
                    <div className="mt-6 pt-4 border-t-2 border-[#07076c]/10 flex items-center justify-between">
                      <a
                        href={proj.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playGummyPop('click')}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#07076c] hover:bg-[#15158a] text-white text-xs md:text-sm font-bold clay-btn shadow-[2px_2px_0px_#FFD166] transition-all"
                      >
                        <span>{proj.linkText}</span>
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. EDUCATION SECTION */}
          {(viewMode === 'both' || viewMode === 'education') && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-xl bg-[#06D6A0] text-[#07076c] flex items-center justify-center border-2 border-[#07076c] shadow-[2px_2px_0px_#07076c]">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black font-display text-[#07076c]">
                    Academic Journey &amp; Certifications
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {EDUCATION_DATA.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-[30px] p-6 bg-white border-[3px] border-[#07076c] shadow-[5px_5px_0px_#07076c] hover:shadow-[7px_7px_0px_#07076c] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Gummy Pill */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-black border-2 border-[#07076c] shadow-[1px_1px_0px_#07076c]"
                          style={{ backgroundColor: edu.colorScheme }}
                        >
                          {edu.period}
                        </span>
                        <Award size={18} className="text-[#FF6584]" />
                      </div>

                      {/* Judul Utama (Main Title) */}
                      <h4 className="text-lg md:text-xl font-black font-display text-[#07076c] leading-snug">
                        {edu.institution}
                      </h4>

                      {/* Sub Judul (Subtitle) */}
                      <p className="text-xs md:text-sm font-bold text-[#FF6584] mt-1">
                        {edu.degree}
                      </p>

                      {/* Deskripsi Singkat (Short Description) */}
                      <p className="text-xs md:text-sm text-gray-700 mt-3 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Achievements List */}
                      <div className="mt-4 pt-3 border-t border-[#07076c]/10 space-y-1.5">
                        {edu.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-gray-600 font-medium">
                            <CheckCircle2 size={13} className="text-[#04A77D] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
