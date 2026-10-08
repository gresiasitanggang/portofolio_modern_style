import { SkillItem, ExperienceItem, GalleryPhoto, ProjectItem, EducationItem } from '../types/portfolio';

// Public Asset Paths
export const HERO_IMAGE = `${import.meta.env.BASE_URL}images/hero_portrait.jpg`;

export const PERSONAL_INFO = {
  name: 'Gresia Sitanggang',
  nickname: 'Gres',
  image: HERO_IMAGE,
  role: 'Programmer in Engineering',
  major: 'Computer Engineering',
  university: 'Semarang State University',
  cohort: '2024',
  dreamGoal: 'Software Engineer',
  status: '🟢 Open for Internships & AI Collabs',
  currentTrack: '🎧 Lofi Coding Beats with Focus',
  location: 'Semarang, Indonesia',
  email: 'gresiaa_stg@students.unnes.ac.id',
  instagram: 'https://instagram.com/gresia.dastg',
  instagramHandle: '@gresia.dastg',
  linkedin: 'https://www.linkedin.com/in/gresia-sitanggang/',
  linkedinHandle: 'Gresia Sitanggang',
  github: 'https://github.com/gresiasitanggang',
};

export const ABOUT_DATA = {
  paragraph: `Hello, world! I'm an Computer Engineering undergrad (Class of '24) passionate about developing robust software architechture, Generative AI models, and artistic interface. I like building, reaserching, and learning about APIs, multi-agent LLM pipelines, and functional softwares, I treat code not just as binary logic but also as an expressive and creative algorithm to solve real-world messy problems with emphaty and precision.`,
  keywords: [
    '#SoftwareEngineering',
    '#FullStackDeveloper',
    '#TypeScriptProgramming',
    '#SystemArchitecture',
    '#CreativeTech',
  ],
  quickStats: [
    { label: 'Skills', value: '35+', icon: 'Code2' },
    { label: 'Certificates', value: '12+', icon: 'Sparkles' },
    { label: 'Projects', value: '5+', icon: 'Coffee' },
    { label: 'Experiences', value: '04', icon: 'Trophy' }
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // 5 HARD SKILLS
  {
    id: 'hard-1',
    name: 'Web Development',
    category: 'hard',
    badge: 'Frontend Core',
    detail: 'Proficient in end-to-end web architecture, applying MVC patterns, and developing responsive interfaces using modern HTML, CSS, JavaScript, and frameworks.',
    bgGummy: 'bg-[#FFD166]', // Gummy Butter Yellow
    accentColor: '#DDA106',
    iconName: 'Layout'
  },
  {
    id: 'hard-2',
    name: 'AI & Data Science',
    category: 'hard',
    badge: 'AI & Data Engine',
    detail: 'Leveraging Python for data processing, fundamental machine learning models, ETL workflows, and cloud-based AI integration (AWS, Microsoft Azure and Fabric).',
    bgGummy: 'bg-[#06D6A0]', // Cyber Mint
    accentColor: '#04A77D',
    iconName: 'Brain'
  },
  {
    id: 'hard-3',
    name: 'Back-end & Database',
    category: 'hard',
    badge: 'Backend Architecture',
    detail: 'Focused on server-side logic, API concepts, database management, and structured data handling using PHP and MySQL for scalability.',
    bgGummy: 'bg-[#48CAE4]', // Sky Puff
    accentColor: '#0096C7',
    iconName: 'Server'
  },
  {
    id: 'hard-4',
    name: 'Digital Communication',
    category: 'hard',
    badge: 'DevOps & Deploy',
    detail: 'Skilled in translating technical progress into clear documentation, visual assets, and digital media workflows using modern collaboration tools.',
    bgGummy: 'bg-[#BDB2FF]', // Lavender Cloud
    accentColor: '#7C69FF',
    iconName: 'Cloud'
  },

  // 5 SOFT SKILLS
  {
    id: 'soft-1',
    name: 'Cross-Team Collaboration',
    category: 'soft',
    badge: 'Mindset',
    detail: 'Experienced in coordinating across teams, adapting to diverse workflows, and contributing effectively toward shared goals in collaborative environments.',
    bgGummy: 'bg-[#FFD166]',
    accentColor: '#DDA106',
    iconName: 'Lightbulb'
  },
  {
    id: 'soft-2',
    name: 'Project Management',
    category: 'soft',
    badge: 'Culture',
    detail: 'Capable of organizing project tasks, managing priorities and timelines, and coordinating deliverables to support efficient project execution.',
    bgGummy: 'bg-[#06D6A0]',
    accentColor: '#04A77D',
    iconName: 'Users'
  },
  {
    id: 'soft-3',
    name: 'Technical Communication',
    category: 'soft',
    badge: 'Growth Engine',
    detail: 'Skilled in conveying technical concepts and project progress clearly through structured documentation, presentations, and cross-functional communication.',
    bgGummy: 'bg-[#48CAE4]',
    accentColor: '#0096C7',
    iconName: 'Compass'
  },
  {
    id: 'soft-4',
    name: 'Critical Thinking',
    category: 'soft',
    badge: 'Communication',
    detail: 'Proficient in analyzing problems systematically, evaluating possible solutions, and making practical decisions based on available information and project requirements.',
    bgGummy: 'bg-[#BDB2FF]',
    accentColor: '#7C69FF',
    iconName: 'MessageSquare'
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Social Media & Digital Partnership Intern Staff',
    company: 'Rumah Dev',
    period: 'Jun - Oct 2023',
    location: 'Hybrid - Medan, Sumatera Utara',
    highlights: [
      ' 	Developed two interactive portfolio websites using custom HTML/CSS and JavaScript with Bootstrap to enhance the digital visibility of product profiles.',
      'Maintained structured digital archives and database records for partnership contacts to ensure smooth team handover and project tracking.',
      'Identified and processed contact information for over 200 organization partners, facilitated external communication, and successfully executed over 60%+ of potential event publication collaborations on the Ruang Mahasiswa platform.',
      'Collaboratively drafted over 30 visual and written content briefs with the design and sponsorship teams to optimize the daily publication workflow.'
    ],
    diskColor: '#FF6584'
  },
  {
    id: 'exp-2',
    role: 'Pionir Muda Intern Staff',
    company: 'BEM KM UNNES 2025 Harmony Action Cabinet',
    period: 'Sep 2025 - Dec 2025',
    location: 'Semarang, Indonesia',
    highlights: [
      'BEM KM UNNES Internship: Learning the workflow of various ministries and contributing to the implementation of assigned tasks within the designated ministry.',
      'Asmalibrasi Project and Gathering: Designing visual assets for publications and serving as an on-site technical media operator and managing media documentation for over 90+ participants.',
    ],
    diskColor: '#FFD166'
  },
  {
    id: 'exp-3',
    role: 'UNNES Digital Future Comittee',
    company: 'BEM KM UNNES 2026 Ministry of Information and Communication',
    period: 'Jun - Sep 2026',
    location: 'Semarang, Indonesia',
    highlights: [
      'Contributed to the production of promotional content for sponsors, including Instagram Stories and Reels, to support event promotion and digital outreach.',
      'Designed event merchandise, including keychains, stickers, and pins, while adapting visual assets to meet production requirements.',
      'Operated OBS Studio during the event to support live visual production, scene switching, and technical event broadcasting.'
    ],
    diskColor: '#06D6A0'
  },
  {
    id: 'exp-4',
    role: 'Media Development Staff',
    company: 'BEM KM UNNES 2026 Ministry of Information and Communication',
    period: 'Feb 2026 - Present',
    location: 'Semarang, Indonesia',
    highlights: [
      'Actively contributed to the technical and visual planning for UNNES Digital Future (UDF) work programs.',
      'Designed 6+ digital art pieces and illustrations themed around national and religious holidays, which were published on official social media channel, thereby increasing student engagement.',
      'Collaborate with internal divisions to structure and visualize the organizational flow for the ministry’s projects.'
    ],
    diskColor: '#48CAE4'
  }
];

export const GALLERY_DATA: GalleryPhoto[] = [
  {
    id: 'gal-1',
    src: `${import.meta.env.BASE_URL}images/bemkm26.jpg`,
    caption: 'BEM KM UNNES 2026 Functionaries',
    tag: 'Organization',
    date: 'March 2026',
    location: 'Semarang State University'
  },
  {
    id: 'gal-2',
    src: `${import.meta.env.BASE_URL}images/asmalibrasi.jpg`,
    caption: 'Asmalibrasi Event - Media & Publication Staff',
    tag: 'Comittee',
    date: 'December 2025',
    location: 'Semarang State University'
  },
  {
    id: 'gal-3',
    src: `${import.meta.env.BASE_URL}images/juaraukk.jpg`,
    caption: 'Skill Competency Award (Vocational High School)',
    tag: 'Champion',
    date: 'March 2024',
    location: 'Pematangsiantar'
  },
  {
    id: 'gal-4',
    src: `${import.meta.env.BASE_URL}images/magangkak.jpg`,
    caption: 'BEM KM UNNES 2025 Internship at KAK',
    tag: 'Organization',
    date: 'March 2024',
    location: 'Semarang State University'
  },
  {
    id: 'gal-5',
    src: `${import.meta.env.BASE_URL}images/googleiomedan.jpg`,
    caption: 'Google Extended I/O Seminar Participant',
    tag: 'Event External',
    date: '2023',
    location: 'Medan'
  },
  {
    id: 'gal-6',
    src: `${import.meta.env.BASE_URL}images/rumahdev.png`,
    caption: 'Design Projects for Rumah Dev',
    tag: 'Products',
    date: '2023',
    location: 'Medan'
  },
  {
    id: 'gal-7',
    src: `${import.meta.env.BASE_URL}images/specialdays.png`,
    caption: 'Design Projects for BEM KM UNNES 2026',
    tag: 'Products',
    date: '2026',
    location: 'Semarang State University'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Interactive Portfolio Web',
    type: 'Developing',
    description: 'A personal showcase website engineered with custom HTML, CSS, JavaScript, and Bootstrap. Built with a mobile-first approach to showcase software projects, data processing credentials, and personal milestones.',
    techStack: ['Visual Studio Code', 'CSS', 'Bootstrap', 'Java Script'],
    externalLink: 'https://github.com/gresiasitanggang/portofolio_gresia',
    linkText: 'View Repo',
    colorScheme: '#FFD166'
  },
  {
    id: 'proj-2',
    title: 'E-Commerce Management System',
    type: 'Developing',
    description: 'A dynamic web application featuring user authentication, product inventory management, and database manipulation (CRUD) using PHP and MySQL. Currently migrating toward the Laravel framework for enhanced security and architecture.',
    techStack: ['Visual Studio Code', 'Localhost Database', 'PHP', 'CSS', 'Bootstrap'],
    externalLink: 'https://github.com/gresiasitanggang/app_toko',
    linkText: 'View Repo',
    colorScheme: '#06D6A0'
  },
  {
    id: 'proj-3',
    title: 'Native Web Project (SMK)',
    type: 'Developing',
    description: 'A native portfolio web developed entirely from scratch without external frameworks during software engineering studies. Designed to build strong fundamentals in semantic HTML and CSS layout structures.',
    techStack: ['CSS', 'Bootstrap', 'UI UX', 'Sublime Text', 'Notepad++'],
    externalLink: 'https://github.com/gresiasitanggang/',
    linkText: 'Developers Profile',
    colorScheme: '#FF6584'
  },
  {
    id: 'proj-4',
    title: 'Digital Media & Content Strategy',
    type: 'Creating',
    description: 'Visual content and editorial briefs engineered for student audiences during the RumahDev internship. Demonstrates capabilities in layout structure, branding consistency, and clear information hierarchy.',
    techStack: ['Instagram', 'GDocs', 'Trello', 'Canva'],
    externalLink: 'https://drive.google.com/drive/folders/1oFFTmNgP5gP_bts13Ck7sOdJ0C1slKIU',
    linkText: 'View Gallery',
    colorScheme: '#48CAE4'
  },
  {
    id: 'proj-5',
    title: 'Digital Illustration & Graphics',
    type: 'Creating',
    description: 'Digital artwork and illustration projects crafted using Ibis Paint X and Canva. Focuses on composition, color balance, and visual storytelling for organizational special-day campaigns.',
    techStack: ['Instagram', 'Ibis Paint', 'Pinterest', 'Canva'],
    externalLink: 'https://drive.google.com/drive/folders/1oFFTmNgP5gP_bts13Ck7sOdJ0C1slKIU',
    linkText: 'View Gallery',
    colorScheme: '#48CAE4'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'Bintang Timur Vocational High School',
    degree: 'Software Engineering',
    period: '2021 - 2024',
    description: 'Focused on software development, programming fundamentals, database management, and application development through academic projects and vocational training.',
    achievements: [
      'Ranked 1st in class throughout all semesters during vocational high school.',
      'Achieved 1st place in the school-level vocational internship (PKL) presentation.',
      'Achieved 1st place in the Software Engineering cohort for the Vocational Competency Examination (UKK).'
    ],
    colorScheme: '#BDB2FF'
  },
  {
    id: 'edu-2',
    institution: 'Universitas Negeri Semarang',
    degree: 'B.Sc. in Computer Engineering',
    period: '2024 - Present (Semester 5)',
    description: 'Studying computer engineering with a growing focus on software development, artificial intelligence, and modern computing technologies.',
    achievements: [
      'BEM KM UNNES — Student Organization Intern and Ministry of Information and Communication Staff.',
      'Contributed to BEM KM UNNES committees, including Asmalibrasi and UNNES Digital Future (UDF).',
      'Participated in organizational activities involving web development, digital media, event production, and cross-team collaboration.'
    ],
    colorScheme: '#FFD166'
  },
  {
    id: 'edu-3',
    institution: 'Dicoding Indonesia Programs',
    degree: 'AI Enthusiast & Fullstack Developer',
    period: '2025 - Present',
    description: 'Participated in technology learning programs and professional development initiatives focused on software development, artificial intelligence, and data-related technologies.',
    achievements: [
      'Belajar Fundamental Pemrosesan Data',
      'Membangun Aplikasi Gen AI dengan Microsoft Azure',
      'Belajar Penerapan Data Science dengan Microsoft Fabric',
      'Belajar Dasar Cloud dan Gen AI di AWS',
      'Spec-Driven Development dengan Kiro',
      'Belajar Dasar AI',
      'Memulai Pemrograman dengan Python',
      'Belajar Machine Learning untuk Pemula',
      'Belajar Fundamental Deep Learning',
      'Belajar Strategi Pengembangan Diri',
      'Prompt Engineering untuk Software Developer',
      'Membangun Sistem Machine Learning',
    ],
    colorScheme: '#06D6A0'
  }
];
