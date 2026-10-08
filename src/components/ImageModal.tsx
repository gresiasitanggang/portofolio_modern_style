import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { GalleryPhoto } from '../types/portfolio';
import { playGummyPop } from '../utils/sound';

interface ImageModalProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex
}) => {
  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  const handleNext = () => {
    playGummyPop('click');
    onSelectIndex((currentIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    playGummyPop('click');
    onSelectIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, photos.length]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Carousel Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#07076c]/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Lightbox Modal Window (Neo-Brutalist + Claymorphic) */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-[32px] p-4 sm:p-6 clay-card border-[3.5px] border-[#07076c] flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[#07076c]/15">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#FFD166] text-[#07076c] text-xs font-black border-2 border-[#07076c]">
              Photo Album
            </span>
            <span className="font-mono text-xs font-bold text-gray-500">
              Snapshot {currentIndex + 1} of {photos.length}
            </span>
          </div>

          {/* Close Button with X at Top Right (Explicit requirement) */}
          <button
            onClick={() => {
              playGummyPop('pop');
              onClose();
            }}
            title="Close Carousel &amp; Return to Website"
            aria-label="Close Carousel"
            className="w-10 h-10 rounded-full bg-[#FF6584] text-white hover:bg-[#e05370] flex items-center justify-center border-2 border-[#07076c] clay-btn shadow-[2px_2px_0px_#07076c] transition-transform active:scale-90"
          >
            <X size={20} className="stroke-[3]" />
          </button>
        </div>

        {/* Carousel Image Stage with Left & Right Arrows */}
        <div className="relative flex-1 min-h-[300px] max-h-[56vh] rounded-2xl overflow-hidden border-2 border-[#07076c] bg-[#FAF8F5] flex items-center justify-center group">
          <img
            src={currentPhoto.src}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain md:object-cover transition-all duration-300"
          />

          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Snapshot"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#07076c] hover:bg-[#FFD166] flex items-center justify-center border-2 border-[#07076c] clay-btn shadow-[3px_3px_0px_#07076c] transition-all"
          >
            <ChevronLeft size={22} className="stroke-[3]" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Snapshot"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#07076c] hover:bg-[#FFD166] flex items-center justify-center border-2 border-[#07076c] clay-btn shadow-[3px_3px_0px_#07076c] transition-all"
          >
            <ChevronRight size={22} className="stroke-[3]" />
          </button>
        </div>

        {/* Bottom Metadata & Caption Area */}
        <div className="mt-4 pt-2 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
              <span className="flex items-center gap-1 font-mono">
                <Calendar size={13} className="text-[#FF6584]" />
                {currentPhoto.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-[#04A77D]" />
                {currentPhoto.location}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-[#FAF8F5] text-[#07076c] font-bold border border-[#07076c]">
                {currentPhoto.tag}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-black font-display text-[#07076c]">
              {currentPhoto.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-700 mt-1 max-w-2xl leading-relaxed">
              {currentPhoto.caption}
            </p>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-1.5 self-center md:self-end">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  playGummyPop('click');
                  onSelectIndex(idx);
                }}
                aria-label={`Ke foto ${idx + 1}`}
                className={`transition-all duration-200 rounded-full border border-[#07076c] ${
                  currentIndex === idx
                    ? 'w-7 h-3 bg-[#FF6584] shadow-[1px_1px_0px_#07076c]'
                    : 'w-3 h-3 bg-gray-200 hover:bg-[#FFD166]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
