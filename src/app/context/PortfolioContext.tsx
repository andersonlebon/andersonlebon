import React, { createContext, useContext, useState, ReactNode } from 'react';
import primusImage from '../../assets/projects/primus-learning.webp';
import oneByOneImage from '../../assets/projects/onebyone.webp';
import kylieImage from '../../assets/projects/kylie-hair.webp';
import matchpulseImage from '../../assets/projects/matchpulse.webp';
import njSafetyImage from '../../assets/projects/njsafety.webp';
import vdarvsImage from '../../assets/projects/vdarvs.webp';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  companyUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  read: boolean;
}

export interface SiteSettings {
  name: string;
  bio: string;
  headline: string;
  subtitle: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  profileImage: string;
  resumeUrl: string;
  seoTitle: string;
  seoDescription: string;
  promoOriginalPrice: string;
  promoCurrentPrice: string;
  promoDeliveryDays: string;
  promoSpotsAvailable: string;
}

const STORAGE_VERSION = 'v2';
const storageKey = (name: string) => `portfolio_${STORAGE_VERSION}_${name}`;

const defaultProjects: Project[] = [
  {
    id: 'primus-learning',
    title: 'Primus Learning Platform',
    description:
      'A production learning platform covering courses, bootcamps, regional landing pages, payments, and learner administration. I contributed across the Next.js client and supporting APIs, including course catalogs, enrollment flows, and payment integrations used by a live education business.',
    techStack: ['Next.js', 'TypeScript', 'Redux', 'React Query', 'NestJS', 'MongoDB', 'Stripe', 'Paystack', 'Firebase', 'Tailwind CSS'],
    githubUrl: '',
    liveUrl: 'https://www.primuslearning.io/',
    imageUrl: primusImage,
    featured: true,
  },
  {
    id: 'onebyone-ministry',
    title: 'One By One Ministries',
    description:
      'A bilingual ministry website for community work in the Democratic Republic of Congo. The site covers projects, stories, media, donations, contact, and an operations dashboard, with SEO, maps, and Stripe-backed giving.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'PostgreSQL', 'Stripe', 'Leaflet', 'Tailwind CSS'],
    githubUrl: 'https://github.com/andersonlebon/onebyone-ministry',
    liveUrl: 'https://www.onebyoneministries.org/',
    imageUrl: oneByOneImage,
  },
  {
    id: 'kylie-hair',
    title: 'Kylie Hair',
    description:
      'A salon site for booking, commerce, and landing-page content. Visitors can review services, shop products, and request appointments from a branded public site with a private operations backend.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'PostgreSQL', 'React Query', 'Tailwind CSS'],
    githubUrl: '',
    liveUrl: 'https://www.kyliehairr.com/',
    imageUrl: kylieImage,
  },
  {
    id: 'matchpulse',
    title: 'MatchPulse',
    description:
      'A FIFA World Cup 2026 schedule tracker with team preferences, match reminders, calendar export, and authenticated user sessions.',
    techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'React Query', 'Tailwind CSS'],
    githubUrl: 'https://github.com/andersonlebon/matchpulse-mvp',
    liveUrl: 'https://www.matchpuls.live/',
    imageUrl: matchpulseImage,
  },
  {
    id: 'nj-safety-driver',
    title: 'NJ Safety Driver',
    description:
      'A role-based portal for drivers, field agents, and admins. Drivers manage vehicles and documents, agents search plates and file infractions, and admins oversee records with summary statistics.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'PostgreSQL', 'React Query', 'Tailwind CSS'],
    githubUrl: 'https://github.com/andersonlebon/Nj-safety-driver-web',
    liveUrl: 'https://nj-safety-driver-web.vercel.app/',
    imageUrl: njSafetyImage,
  },
  {
    id: 'vdarvs',
    title: 'VDARVS',
    description:
      'Village Digital Administrative Records & Verification, a local-government prototype for Lesotho. It digitizes citizen registration, land records, official documents, and chief-led dispute workflows.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'PostgreSQL', 'React Query', 'Playwright', 'Tailwind CSS'],
    githubUrl: 'https://github.com/litebohop/vdarvs',
    liveUrl: 'https://vdarvs.vercel.app/',
    imageUrl: vdarvsImage,
  },
];

const defaultExperience: Experience[] = [
  {
    id: 'aspyn-ai',
    company: 'Aspyn AI',
    companyUrl: 'https://aspynai.com/',
    role: 'Full-Stack Developer & Software Engineer',
    duration: '2025 – Present',
    description: [
      'Build and ship full-stack product work for AI operator software used by internal teams and production clients.',
      'Contribute across web applications, APIs, and delivery workflows in a small remote engineering team.',
      'Collaborate on architecture, reviews, and production releases without exposing private client systems.',
    ],
  },
  {
    id: 'primus-learning',
    company: 'Primus Learning',
    companyUrl: 'https://www.primuslearning.io/',
    role: 'Full-Stack Developer',
    duration: '2024 – 2025',
    description: [
      'Built learning-platform features spanning course catalogs, bootcamps, payments, and administration.',
      'Worked across Next.js clients and supporting APIs used by a live education business.',
      'Helped ship payment and enrollment flows with Stripe, Paystack, and related services.',
    ],
  },
  {
    id: 'vaurse',
    company: 'Vaurse',
    role: 'Full-Stack Developer',
    duration: '2023 – 2024',
    description: [
      'Built a modern recruitment platform connecting candidates with companies.',
      'Developed a performant frontend with Next.js and TypeScript.',
      'Worked in a fully distributed remote team across multiple time zones.',
    ],
  },
  {
    id: 'xoommit',
    company: 'XOOMMIT Agency',
    role: 'Full-Stack Developer',
    duration: '2023 – 2024',
    description: [
      'Built MVP software applications for startup clients.',
      'Delivered production-ready features under tight timelines.',
      'Collaborated with designers, product managers, and international clients.',
    ],
  },
  {
    id: 'nordicresults',
    company: 'NordicResults',
    role: 'Full-Stack Developer',
    duration: '2022 – 2023',
    description: [
      'Maintained and improved a Rails backend and React frontend.',
      'Refactored REST APIs and improved application architecture.',
      'Raised code quality through reviews, refactors, and clearer service boundaries.',
    ],
  },
];

const defaultSkills: Skill[] = [
  { id: '1', name: 'React', category: 'Frontend', icon: '⚛️' },
  { id: '2', name: 'Next.js', category: 'Frontend', icon: '▲' },
  { id: '3', name: 'TypeScript', category: 'Frontend', icon: '🔷' },
  { id: '4', name: 'Tailwind CSS', category: 'Frontend', icon: '🎨' },
  { id: '5', name: 'Vite', category: 'Frontend', icon: '⚡' },
  { id: '6', name: 'Redux', category: 'Frontend', icon: '🟣' },
  { id: '7', name: 'Node.js', category: 'Backend', icon: '🟢' },
  { id: '8', name: 'NestJS', category: 'Backend', icon: '🐱' },
  { id: '9', name: 'Ruby on Rails', category: 'Backend', icon: '💎' },
  { id: '10', name: 'Supabase', category: 'Backend', icon: '⚡' },
  { id: '11', name: 'PostgreSQL', category: 'Databases', icon: '🐘' },
  { id: '12', name: 'MongoDB', category: 'Databases', icon: '🍃' },
  { id: '13', name: 'Drizzle ORM', category: 'Databases', icon: '💧' },
  { id: '14', name: 'AWS', category: 'DevOps', icon: '☁️' },
  { id: '15', name: 'Docker', category: 'DevOps', icon: '🐳' },
  { id: '16', name: 'CI/CD', category: 'DevOps', icon: '🔄' },
  { id: '17', name: 'GitHub', category: 'DevOps', icon: '🐙' },
  { id: '18', name: 'Vercel', category: 'DevOps', icon: '▲' },
  { id: '19', name: 'React Native', category: 'Mobile', icon: '📱' },
  { id: '20', name: 'Stripe', category: 'Backend', icon: '💳' },
];

const defaultMessages: Message[] = [];

const defaultSettings: SiteSettings = {
  name: 'Anderson',
  bio: 'Full-stack developer based in Montreal-Nord, Quebec. I currently work at Aspyn AI and previously shipped learning platforms, government prototypes, and production web apps with React, Next.js, TypeScript, and Node.js.',
  headline: 'Anderson — Full-Stack Developer',
  subtitle: 'Full-stack developer building production web apps, from learning platforms and booking products to government prototypes. Currently at Aspyn AI.',
  githubUrl: 'https://github.com/andersonlebon',
  linkedinUrl: 'https://www.linkedin.com/in/andersonlebon/',
  email: 'laurentandersonm@outlook.com',
  phone: '',
  location: 'Montreal-Nord, Quebec',
  website: 'https://www.andersone.site',
  profileImage: '',
  resumeUrl: '',
  seoTitle: 'Anderson Lebon — Full-Stack Developer',
  seoDescription: 'Portfolio of Anderson Lebon, a full-stack developer in Montreal working with React, Next.js, TypeScript, and Node.js. Currently at Aspyn AI.',
  promoOriginalPrice: '$200',
  promoCurrentPrice: '$50',
  promoDeliveryDays: '3',
  promoSpotsAvailable: '3',
};

interface PortfolioContextType {
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  messages: Message[];
  settings: SiteSettings;
  setProjects: (p: Project[]) => void;
  setExperience: (e: Experience[]) => void;
  setSkills: (s: Skill[]) => void;
  setMessages: (m: Message[]) => void;
  setSettings: (s: SiteSettings) => void;
  addMessage: (m: Omit<Message, 'id' | 'date' | 'read'>) => void;
}

const PortfolioContext = createContext<PortfolioContextType | null>(null);

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(storageKey(key));
    if (stored) return JSON.parse(stored);
  } catch {}
  return fallback;
}

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [projects, setProjectsState] = useState<Project[]>(() =>
    loadFromStorage('projects', defaultProjects)
  );
  const [experience, setExperienceState] = useState<Experience[]>(() =>
    loadFromStorage('experience', defaultExperience)
  );
  const [skills, setSkillsState] = useState<Skill[]>(() =>
    loadFromStorage('skills', defaultSkills)
  );
  const [messages, setMessagesState] = useState<Message[]>(() =>
    loadFromStorage('messages', defaultMessages)
  );
  const [settings, setSettingsState] = useState<SiteSettings>(() =>
    loadFromStorage('settings', defaultSettings)
  );

  const persist = (key: string, value: unknown) => {
    localStorage.setItem(storageKey(key), JSON.stringify(value));
  };

  const setProjects = (p: Project[]) => { setProjectsState(p); persist('projects', p); };
  const setExperience = (e: Experience[]) => { setExperienceState(e); persist('experience', e); };
  const setSkills = (s: Skill[]) => { setSkillsState(s); persist('skills', s); };
  const setMessages = (m: Message[]) => { setMessagesState(m); persist('messages', m); };
  const setSettings = (s: SiteSettings) => { setSettingsState(s); persist('settings', s); };

  const addMessage = (m: Omit<Message, 'id' | 'date' | 'read'>) => {
    const newMsg: Message = {
      ...m,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      read: false,
    };
    setMessages([newMsg, ...messages]);
  };

  return (
    <PortfolioContext.Provider value={{
      projects, experience, skills, messages, settings,
      setProjects, setExperience, setSkills, setMessages, setSettings, addMessage,
    }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error('usePortfolio must be used within PortfolioProvider');
  return ctx;
}
