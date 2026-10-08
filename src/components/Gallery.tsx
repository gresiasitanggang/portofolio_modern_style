import React, { useState } from 'react';
import { Sparkles, Maximize2, Camera, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data/portfolioData';
import { ImageModal } from './ImageModal';
import { playGummyPop } from '../utils/sound';

export const Gallery: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpenPhoto = (index: number) => {
    playGummyPop('squish');
    setActiveIndex(index);
    setModalOpen(true);
  };

  return (
    <section id="gallery" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-black font-display text-[#07076c] tracking-tight">
            Photo Gallery &amp; Archive
          </h2>
        </div>
        <p className="text-xs md:text-sm font-bold text-gray-500 max-w-md">
          Hover for an instant blur and storyline caption. Click any snapshot to jump right into the carousel viewer!
        </p>
      </div>

      {/* Unified Single Container (As explicitly requested by user) */}
      <div className="rounded-[36px] bg-white p-5 md:p-8 clay-card border-[3.5px] border-[#07076c] relative overflow-hidden">
        
        {/* Container Top Meta Ribbon */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#07076c]/15">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF6584] border border-[#07076c]" />
            <span className="w-3 h-3 rounded-full bg-[#FFD166] border border-[#07076c]" />
            <span className="w-3 h-3 rounded-full bg-[#06D6A0] border border-[#07076c]" />
            <span className="font-mono text-xs font-bold text-[#07076c]/70 ml-1">
              student_life_archive.zip
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#FAF8F5] text-[#07076c] text-xs font-black border border-[#07076c]">
            Total {GALLERY_DATA.length} Snaps
          </span>
        </div>

        {/* Bento Photo Grid inside Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
          {GALLERY_DATA.map((photo, index) => {
            // Asymmetric Bento sizing: first photo wide, others balanced
            const spanClass =
              index === 0
                ? 'sm:col-span-2 lg:col-span-8 min-h-[300px] md:min-h-[360px]'
                : index === 1
                ? 'sm:col-span-2 lg:col-span-4 min-h-[260px]'
                : index === 2
                ? 'lg:col-span-4 min-h-[260px]'
                : index === 3
                ? 'lg:col-span-4 min-h-[260px]'
                : 'lg:col-span-4 min-h-[260px]';

            return (
              <div
                key={photo.id}
                onClick={() => handleOpenPhoto(index)}
                className={`group relative rounded-[26px] overflow-hidden border-[3px] border-[#07076c] bg-[#FAF8F5] cursor-pointer shadow-[4px_4px_0px_#07076c] hover:shadow-[6px_6px_0px_#07076c] transition-all duration-300 ${spanClass}`}
              >
                {/* Real Generated Image: On hover it blurs and slightly zooms */}
                <img
                  src={photo.src}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[3.5px]"
                />

                {/* Always-visible top pill badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#07076c] text-[11px] font-black border border-[#07076c] shadow-[1px_1px_0px_#07076c]">
                    {photo.tag}
                  </span>
                </div>

                {/* Hover Overlay: Dark Scrim + Caption + Expand Icon (Appears on Hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07076c]/95 via-[#07076c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 md:p-6 text-white">
                  
                  {/* Floating Click Affordance */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFD166] text-[#07076c] border border-[#07076c] flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-[2px_2px_0px_#07076c]">
                    <Maximize2 size={16} />
                  </div>

                  {/* Caption Info (Revealed on hover) */}
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[11px] font-mono text-[#06D6A0] font-bold">
                      {photo.date} · {photo.location}
                    </span>
                    <p className="text-xs text-white/90 mt-1.5 line-clamp-3 leading-relaxed">
                      "{photo.caption}"
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-[#FFD166]">
                      <Eye size={13} />
                      <span>Click to launch full carousel</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Container Footer Hint */}
        <div className="mt-6 pt-4 border-t-2 border-[#07076c]/10 flex flex-wrap items-center justify-between text-xs font-semibold text-gray-500">
          <span>📸 Authentic moments captured through education, projects, and social life.</span>
          <span className="font-bold text-[#07076c]">Keyboard Shortcuts: Left / Right Arrows &amp; ESC</span>
        </div>
      </div>

      {/* Carousel Modal Lightbox */}
      <ImageModal
        photos={GALLERY_DATA}
        currentIndex={activeIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectIndex={(index) => setActiveIndex(index)}
      />
    </section>
  );
};
