export interface SkillItem {
  id: string;
  name: string;
  category: 'hard' | 'soft';
  badge: string;
  detail: string;
  bgGummy: string;
  accentColor: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  diskColor: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  tag: string;
  date: string;
  location: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  description: string;
  techStack: string[];
  externalLink: string;
  linkText: string;
  colorScheme: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  achievements: string[];
  colorScheme: string;
}
