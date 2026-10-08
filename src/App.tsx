import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experiences } from './components/Experiences';
import { EduProjects } from './components/EduProjects';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { playGummyPop } from './utils/sound';
import { PERSONAL_INFO } from './data/portfolioData';
import { Mail, Send, X, Check, Copy, Sparkles, MessageCircle } from 'lucide-react';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleOpenContact = () => {
    playGummyPop('pop');
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    playGummyPop('click');
    setContactModalOpen(false);
    setFormSent(false);
  };

  const handleCopyEmail = () => {
    playGummyPop('click');
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playGummyPop('pop');
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setContactModalOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] bg-grid-pattern text-[#07076c] selection:bg-[#FF6584] selection:text-white flex flex-col font-sans">
      
      {/* Top Floating Navbar (Inspired by marco.fyi dock) */}
      <Navbar onContactClick={handleOpenContact} />

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Hero Section (Big photo, name, major, cohort, ambition, accessories) */}
        <Hero />

        {/* 2. About Section (1 Paragraph + Sebaris Keyword + Quick Widgets) */}
        <About />

        {/* 3. Skills Section (5 Hard Skills + 5 Soft Skills in Gummy Balloons) */}
        <Skills />

        {/* 4. Experiences Section (Retro Floppy Disk Clay Cards) */}
        <Experiences />

        {/* 5. Combined Education & Projects (3D Clay Ember / Vessel with interactive switch) */}
        <EduProjects />

        {/* 6. Gallery Section (Single container, blur hover with caption, carousel slider on click) */}
        <Gallery />
      </main>

      {/* 7. Footer (Re-call Name, Major, Cohort, Ambition, bottom nav, social media) */}
      <Footer />

      {/* Interactive Quick Contact Modal */}
      {contactModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07076c]/70 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-8 clay-card border-[3.5px] border-[#07076c] shadow-[8px_8px_0px_#07076c]">
            {/* Close Button */}
            <button
              onClick={handleCloseContact}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-[#FF6584] hover:text-white text-[#07076c] flex items-center justify-center border-2 border-[#07076c] transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-xl bg-[#FFD166] text-[#07076c] flex items-center justify-center border-2 border-[#07076c]">
                <MessageCircle size={16} />
              </span>
              <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider">
                Quick Dispatch Inbox
              </span>
            </div>

            <h3 className="text-2xl font-black font-display text-[#07076c]">
              Drop a Note to {PERSONAL_INFO.nickname}
            </h3>
            
            <p className="text-xs md:text-sm text-gray-600 mt-1 mb-5">
              Excited to brainstorm AI workflows, chat full-stack architecture, or discuss internship roles? Ping me below or email directly!
            </p>

            {formSent ? (
              <div className="p-6 rounded-2xl bg-[#E8FBF4] border-2 border-[#06D6A0] text-center space-y-2 animate-in zoom-in-95">
                <span className="text-3xl">🎉</span>
                <h4 className="text-lg font-black text-[#04A77D]">Message Dispatched!</h4>
                <p className="text-xs text-gray-600">
                  Thanks for reaching out! I will check my inbox and get back to you at warp speed.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border-2 border-[#07076c] text-sm text-[#07076c] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#FF6584]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border-2 border-[#07076c] text-sm text-[#07076c] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#FF6584]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Message / Collaboration Pitch
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell me about your project, idea, or just say what's up..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border-2 border-[#07076c] text-sm text-[#07076c] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#FF6584]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-[#07076c] border border-[#07076c] flex items-center gap-1.5"
                  >
                    {copiedEmail ? <Check size={13} className="text-[#04A77D]" /> : <Copy size={13} />}
                    <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#07076c] hover:bg-[#15158a] text-white text-xs md:text-sm font-black clay-btn flex items-center gap-2 shadow-[2px_2px_0px_#FF6584]"
                  >
                    <span>Send Message</span>
                    <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
