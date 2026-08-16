import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
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

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'LMS & Website Development Platform',
    description: 'A full-featured Learning Management System (LMS) designed to manage online courses, instructors, and student enrollments. The platform includes secure authentication, role-based access (admin, instructor, student), and integrated payment systems (Stripe, Campay, Paystack). Built with a scalable architecture to support real-world educational platforms.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Paystack', 'Campay'],
    githubUrl: 'https://github.com/buyananderson',
    liveUrl: 'https://primuslearning.com',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop',
  },
  {
    id: '2',
    title: 'E-commerce Web Application',
    description: 'A modern e-commerce platform that allows users to browse products, manage a shopping cart, and complete secure checkout processes. Includes product management, dynamic filtering, and responsive UI optimized for both desktop and mobile users.',
    techStack: ['React', 'Redux', 'Node.js', 'REST API', 'Stripe'],
    githubUrl: 'https://github.com/buyananderson',
    liveUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'Business Website - Client Project',
    description: 'A responsive business website developed for a real client, focusing on modern UI/UX, performance, and accessibility. Includes service pages, contact forms, and SEO optimization to enhance online presence.',
    techStack: ['React', 'Tailwind CSS', 'Material-UI', 'SEO'],
    githubUrl: 'https://github.com/buyananderson',
    liveUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
  },
  {
    id: '4',
    title: 'Corporate Business Platform',
    description: 'A dynamic website built for a client with a focus on content presentation and user engagement. Designed with responsive layouts and optimized loading performance for real-world usage.',
    techStack: ['React', 'API Integration', 'TypeScript'],
    githubUrl: 'https://github.com/buyananderson',
    liveUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop',
  },
  {
    id: '5',
    title: 'Store Management System',
    description: 'A fullstack store management system that enables tracking of inventory, sales, and business operations through an intuitive admin dashboard. Features include CRUD operations, analytics, and real-time updates.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    githubUrl: 'https://github.com/buyananderson',
    liveUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=600&fit=crop',
  },
  {
    id: '6',
    title: 'Real-time Chat Application',
    description: 'A real-time messaging application enabling users to communicate instantly. Built with modern web technologies and supports dynamic message updates, user sessions, and responsive UI.',
    techStack: ['React', 'Socket.io', 'WebSockets', 'Node.js'],
    githubUrl: 'https://github.com/buyananderson',
    liveUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&h=600&fit=crop',
  },
  {
    id: '7',
    title: 'Car Parking Management System',
    description: 'A system designed to manage parking spaces efficiently, allowing tracking of available slots, reservations, and usage data through a centralized dashboard.',
    techStack: ['JavaScript', 'React', 'Backend API', 'PostgreSQL'],
    githubUrl: 'https://github.com/buyananderson',
    liveUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1200&h=600&fit=crop',
  },
  {
    id: '8',
    title: 'Bookstore Application',
    description: 'A web application for managing and browsing a collection of books. Includes features such as adding, removing, and categorizing books, with state management handled efficiently.',
    techStack: ['React', 'Redux', 'REST API'],
    githubUrl: 'https://github.com/buyananderson',
    liveUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&h=600&fit=crop',
  },
  {
    id: '9',
    title: 'Admin Dashboard System',
    description: 'A customizable admin dashboard designed to visualize and manage application data. Includes charts, tables, and user management features for efficient monitoring.',
    techStack: ['React', 'Chart.js', 'Recharts', 'TypeScript'],
    githubUrl: 'https://github.com/buyananderson',
    liveUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
  },
  {
    id: '10',
    title: 'Multi-step Form & File Upload System',
    description: 'An advanced multi-step form system with file upload capabilities, including drag-and-drop interface and progress tracking. Designed for complex data submission workflows.',
    techStack: ['React', 'Material-UI', 'API Integration', 'File Upload'],
    githubUrl: 'https://github.com/buyananderson',
    liveUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=600&fit=crop',
  },
];

const defaultExperience: Experience[] = [
  {
    id: '1',
    company: 'Primuslearning',
    role: 'Full-Stack Developer',
    duration: '2024 – 2025',
    description: [
      'Led development team of 5 engineers across frontend and backend',
      'Built full-stack LMS platform serving 10,000+ students',
      'Managed and optimized AWS infrastructure (EC2, S3, RDS, CloudFront)',
      'Implemented CI/CD pipelines with GitHub Actions reducing deploy time by 60%',
    ],
  },
  {
    id: '2',
    company: 'Vaurse',
    role: 'Full-Stack Developer',
    duration: '2023 – 2024',
    description: [
      'Built a modern recruitment platform connecting candidates with companies',
      'Developed performant frontend with Next.js and TypeScript',
      'Worked in a fully distributed remote team across 4 time zones',
    ],
  },
  {
    id: '3',
    company: 'XOOMMIT Agency',
    role: 'Full-Stack Developer',
    duration: '2023 – 2024',
    description: [
      'Built MVP software applications for global startup clients',
      'Provided rapid development solutions with tight deadlines',
      'Collaborated with designers, PMs, and international clients',
    ],
  },
  {
    id: '4',
    company: 'NordicResults',
    role: 'Full-Stack Developer',
    duration: '2022 – 2023',
    description: [
      'Maintained and improved Rails backend and React frontend',
      'Refactored REST APIs improving response times by 40%',
      'Improved overall application architecture and code quality',
    ],
  },
];

const defaultSkills: Skill[] = [
  { id: '1', name: 'React', category: 'Frontend', icon: '⚛️' },
  { id: '2', name: 'Next.js', category: 'Frontend', icon: '▲' },
  { id: '3', name: 'TypeScript', category: 'Frontend', icon: '🔷' },
  { id: '4', name: 'Tailwind CSS', category: 'Frontend', icon: '🎨' },
  { id: '5', name: 'Angular', category: 'Frontend', icon: '🅰️' },
  { id: '6', name: 'Vue', category: 'Frontend', icon: '💚' },
  { id: '7', name: 'Node.js', category: 'Backend', icon: '🟢' },
  { id: '8', name: 'NestJS', category: 'Backend', icon: '🐱' },
  { id: '9', name: 'Ruby on Rails', category: 'Backend', icon: '💎' },
  { id: '10', name: 'FastAPI', category: 'Backend', icon: '⚡' },
  { id: '11', name: 'Django', category: 'Backend', icon: '🐍' },
  { id: '12', name: 'Flask', category: 'Backend', icon: '🫙' },
  { id: '13', name: 'Laravel', category: 'Backend', icon: '🔴' },
  { id: '14', name: 'PostgreSQL', category: 'Databases', icon: '🐘' },
  { id: '15', name: 'MongoDB', category: 'Databases', icon: '🍃' },
  { id: '16', name: 'MySQL', category: 'Databases', icon: '🐬' },
  { id: '17', name: 'AWS', category: 'DevOps', icon: '☁️' },
  { id: '18', name: 'Docker', category: 'DevOps', icon: '🐳' },
  { id: '19', name: 'CI/CD', category: 'DevOps', icon: '🔄' },
  { id: '20', name: 'GitHub', category: 'DevOps', icon: '🐙' },
  { id: '21', name: 'React Native', category: 'Mobile', icon: '📱' },
  { id: '22', name: 'Flutter', category: 'Mobile', icon: '🐦' },
  { id: '23', name: 'Expo', category: 'Mobile', icon: '🚀' },
];

const defaultMessages: Message[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    message: "Hi Anderson, I came across your portfolio and I'm very impressed with your LMS project. We're looking for a senior full-stack developer to join our team. Would you be open to a chat?",
    date: '2026-03-04',
    read: false,
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'mchen@startup.io',
    message: "Hey! Love the Greenbadger project. We're building something similar and would love to get your insights. Are you available for a consulting call?",
    date: '2026-03-03',
    read: true,
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    email: 'emma@agency.co',
    message: 'Your portfolio is stunning! We have an exciting project in mind and your expertise seems like a perfect fit. Let us know if you\'re taking on freelance work.',
    date: '2026-03-01',
    read: true,
  },
];

const defaultSettings: SiteSettings = {
  name: 'Anderson',
  bio: 'Full-stack developer experienced with modern JavaScript frameworks, cloud infrastructure, and scalable applications. Experienced working in remote teams and leading development projects.',
  headline: 'Anderson — Full-Stack Web Developer',
  subtitle: 'Full-stack web developer and open-source enthusiast passionate about building scalable web applications, clean architecture, and accessible design.',
  githubUrl: 'https://github.com/anderson',
  linkedinUrl: 'https://linkedin.com/in/anderson',
  email: 'buyananderson@gmail.com',
  phone: '+1-555-123-4567',
  location: 'San Francisco, CA',
  website: 'https://anderson.dev',
  profileImage: '',
  resumeUrl: '',
  seoTitle: 'Anderson — Full-Stack Web Developer',
  seoDescription: 'Portfolio of Anderson, a full-stack web developer specializing in React, Node.js, and cloud infrastructure.',
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
    const stored = localStorage.getItem(key);
    if (stored) return JSON.parse(stored);
  } catch {}
  return fallback;
}

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [projects, setProjectsState] = useState<Project[]>(() =>
    loadFromStorage('portfolio_projects', defaultProjects)
  );
  const [experience, setExperienceState] = useState<Experience[]>(() =>
    loadFromStorage('portfolio_experience', defaultExperience)
  );
  const [skills, setSkillsState] = useState<Skill[]>(() =>
    loadFromStorage('portfolio_skills', defaultSkills)
  );
  const [messages, setMessagesState] = useState<Message[]>(() =>
    loadFromStorage('portfolio_messages', defaultMessages)
  );
  const [settings, setSettingsState] = useState<SiteSettings>(() =>
    loadFromStorage('portfolio_settings', defaultSettings)
  );

  const persist = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const setProjects = (p: Project[]) => { setProjectsState(p); persist('portfolio_projects', p); };
  const setExperience = (e: Experience[]) => { setExperienceState(e); persist('portfolio_experience', e); };
  const setSkills = (s: Skill[]) => { setSkillsState(s); persist('portfolio_skills', s); };
  const setMessages = (m: Message[]) => { setMessagesState(m); persist('portfolio_messages', m); };
  const setSettings = (s: SiteSettings) => { setSettingsState(s); persist('portfolio_settings', s); };

  const addMessage = (m: Omit<Message, 'id' | 'date' | 'read'>) => {
    const newMsg: Message = {
      ...m,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      read: false,
    };
    const updated = [newMsg, ...messages];
    setMessages(updated);
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