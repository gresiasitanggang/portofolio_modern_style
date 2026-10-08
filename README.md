# Gresia Sitanggang — Personal Portfolio

An interactive, responsive personal portfolio blending Neo-Brutalism macro-structure with Claymorphism (Gummy Puff) micro-details, built with React 19, TypeScript, Tailwind CSS v4, and Vite.

## esign System & Aesthetic

- Macro Style: Bold Neo-Brutalism with high-contrast borders (`#07076c`), structured bento layouts, and offset drop shadows.
- Micro Style: Tactile Claymorphism and inflated gummy puff bevels featuring dual specular inner highlights and squishy spring feedback.
- Interactive Audio: Synthesized tactile bubble pops and clicks crafted using the native browser Web Audio API oscillator—zero external audio assets, zero latency, fully toggleable.

## Key Sections & Features

1. Floating Navigation Dock: Quick section jumping, live status badge (`Open for Collabs`), sound FX toggle, and instant message launcher.
2. Hero Stage: High-resolution developer portrait with interactive Easter-egg accessories (toggleable Cool Shades and Lo-Fi Headphones), cohort metadata, and clear North Star ambition.
3. About & Engineering Philosophy: Background story, keyword cloud, interactive real-time likes counter with floating `+1 ❤️` spring particles, and daily workstation focus widget.
4. Interactive Gummy Skills: 5 Hard Technical Skills and 5 Soft Interpersonal Competencies presented as inflatable squishy balloons with clickable proficiency drawers.
5. Retro Floppy Disk Experiences: Milestone records designed as tactile 1.44M diskettes with expandable contribution highlights and technology tags.
6. Unified Bento Photo Gallery: Seamless photo collection with hover focus-blur caption overlays and a full-featured modal carousel slider with keyboard navigation (`Left/Right/ESC`).
7. The 3D Clay Ember Vault (Works & Education): Combined interactive container housing featured engineering projects and academic credentials with verified external links.
8. Compact Island Footer: Concise identity and balanced social cards (Instagram, TikTok, and copy-to-clipboard Email).

## Tech Stack

- Framework: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- Language: [TypeScript](https://www.typescriptlang.org/)
- Styling: [Tailwind CSS v4](https://tailwindcss.com/)
- Icons: [Lucide React](https://lucide.dev/)
- Typography: Bricolage Grotesque (Display), Plus Jakarta Sans (Body), JetBrains Mono (Code)
- Audio Synthesis: Native Browser Web Audio API

## Project Structure

```
├── public/
│   └── images/              # Static photography assets (Hero & Gallery)
├── src/
│   ├── components/          # Modular React UI components
│   │   ├── About.tsx        # Bio, philosophy, likes counter & daily focus
│   │   ├── EduProjects.tsx  # Projects & education vault
│   │   ├── Experiences.tsx  # Retro floppy disk work experiences
│   │   ├── Footer.tsx       # Compact island footer & social links
│   │   ├── Gallery.tsx      # Bento gallery container
│   │   ├── Hero.tsx         # Hero section & interactive stickers
│   │   ├── ImageModal.tsx   # Fullscreen lightbox carousel modal
│   │   ├── Navbar.tsx       # Floating dock navigation bar
│   │   └── Skills.tsx       # Inflatable gummy balloon skills
│   ├── data/
│   │   └── portfolioData.ts # Centralized portfolio records & assets
│   ├── types/
│   │   └── portfolio.ts     # TypeScript interfaces & definitions
│   ├── utils/
│   │   └── sound.ts         # Tactile Web Audio synthesizer
│   ├── App.tsx              # Main page orchestration & contact modal
│   ├── index.css            # Tailwind layer imports & custom clay tokens
│   └── main.tsx             # Application DOM mounting
├── index.html               # Entry point with optimized Google Fonts
├── package.json             # Scripts & dependency definitions
├── tsconfig.json            # Strict TypeScript configuration
└── vite.config.ts           # Vite build configuration
```

---

## Getting Started

### Prerequisites

- Node.js (version 18 or newer)
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/gresiasitanggang/portfolio_modern_style

# Navigate into project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the application.

### Production Build

```bash
npm run build
```
