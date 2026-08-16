import { createContext, useContext, ReactNode } from 'react';
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
  role: string;
  problem: string;
  contribution: string;
  outcome: string;
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

export interface SiteSettings {
  name: string;
  bio: string;
  headline: string;
  subtitle: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  location: string;
  website: string;
  seoTitle: string;
  seoDescription: string;
}

export const projects: Project[] = [
  {
    id: 'primus-learning',
    title: 'Primus Learning Platform',
    role: 'Full-Stack Developer',
    problem: 'An education business needed one product for courses, bootcamps, enrollment, and payments instead of disconnected landing pages and admin tools.',
    contribution: 'Built and shipped Next.js client features and supporting APIs: catalogs, regional landing pages, learner administration, and Stripe/Paystack enrollment flows.',
    outcome: 'The platform is live at primuslearning.io and remains the largest eligible product in this portfolio. Repository details stay private.',
    description:
      'A production learning platform covering courses, bootcamps, regional landing pages, payments, and learner administration.',
    techStack: ['Next.js', 'TypeScript', 'Redux', 'React Query', 'NestJS', 'MongoDB', 'Stripe', 'Paystack', 'Firebase', 'Tailwind CSS'],
    githubUrl: '',
    liveUrl: 'https://www.primuslearning.io/',
    imageUrl: primusImage,
    featured: true,
  },
  {
    id: 'onebyone-ministry',
    title: 'One By One Ministries',
    role: 'Full-Stack Developer',
    problem: 'A ministry needed a public site that could tell stories, accept donations, and manage operations in English and French.',
    contribution: 'Designed and shipped the bilingual site, donation flow, media galleries, maps, SEO, and an operations dashboard on Next.js and Supabase.',
    outcome: 'Live at onebyoneministries.org with a public repository and Stripe-backed giving.',
    description:
      'A bilingual ministry website for community work in the Democratic Republic of Congo, covering projects, stories, media, donations, and operations.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'PostgreSQL', 'Stripe', 'Leaflet', 'Tailwind CSS'],
    githubUrl: 'https://github.com/andersonlebon/onebyone-ministry',
    liveUrl: 'https://www.onebyoneministries.org/',
    imageUrl: oneByOneImage,
  },
  {
    id: 'kylie-hair',
    title: 'Kylie Hair',
    role: 'Full-Stack Developer',
    problem: 'A salon needed booking, a shop, and a branded landing page in one product instead of disconnected tools.',
    contribution: 'Built the public site, appointment flow, commerce, and private operations backend on Next.js, Supabase, and Drizzle.',
    outcome: 'Live at kyliehairr.com. The repository stays private; this is a public-safe product summary.',
    description:
      'A salon site for booking, commerce, and landing-page content, with a branded public experience and a private operations backend.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'PostgreSQL', 'React Query', 'Tailwind CSS'],
    githubUrl: '',
    liveUrl: 'https://www.kyliehairr.com/',
    imageUrl: kylieImage,
  },
  {
    id: 'matchpulse',
    title: 'MatchPulse',
    role: 'Full-Stack Developer',
    problem: 'World Cup 2026 fans needed a personal schedule with reminders and calendar export instead of hunting across sites.',
    contribution: 'Built the tracker with team preferences, match reminders, calendar export, and authenticated sessions.',
    outcome: 'Live at matchpuls.live with a public repository.',
    description:
      'A FIFA World Cup 2026 schedule tracker with team preferences, match reminders, calendar export, and authenticated sessions.',
    techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'React Query', 'Tailwind CSS'],
    githubUrl: 'https://github.com/andersonlebon/matchpulse-mvp',
    liveUrl: 'https://www.matchpuls.live/',
    imageUrl: matchpulseImage,
  },
  {
    id: 'nj-safety-driver',
    title: 'NJ Safety Driver',
    role: 'Full-Stack Developer',
    problem: 'Drivers, field agents, and admins needed one portal for vehicles, documents, infractions, and payments.',
    contribution: 'Implemented role-based access, document uploads, plate search, infraction filing, and admin statistics on Next.js and Supabase.',
    outcome: 'Live at nj-safety-driver-web.vercel.app with a public repository.',
    description:
      'A role-based portal for drivers, field agents, and admins covering vehicles, documents, infractions, and payments.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'PostgreSQL', 'React Query', 'Tailwind CSS'],
    githubUrl: 'https://github.com/andersonlebon/Nj-safety-driver-web',
    liveUrl: 'https://nj-safety-driver-web.vercel.app/',
    imageUrl: njSafetyImage,
  },
  {
    id: 'vdarvs',
    title: 'VDARVS',
    role: 'Full-Stack Developer',
    problem: 'Lesotho village administration needed digital citizen, land, and dispute records that match local hierarchy rather than street addresses.',
    contribution: 'Built the local-government prototype: citizen registration, land records, official documents, and chief-led dispute workflows, with documented architecture and Playwright coverage.',
    outcome: 'Live prototype at vdarvs.vercel.app. Public repository under the litebohop organization.',
    description:
      'Village Digital Administrative Records & Verification, a local-government prototype for Lesotho covering registration, land, documents, and disputes.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'PostgreSQL', 'React Query', 'Playwright', 'Tailwind CSS'],
    githubUrl: 'https://github.com/litebohop/vdarvs',
    liveUrl: 'https://vdarvs.vercel.app/',
    imageUrl: vdarvsImage,
  },
];

export const experience: Experience[] = [
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

export const skills: Skill[] = [
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

export const settings: SiteSettings = {
  name: 'Anderson',
  bio: 'Full-stack developer based in Montreal-Nord, Quebec. I currently work at Aspyn AI and previously shipped learning platforms, government prototypes, and production web apps with React, Next.js, TypeScript, and Node.js.',
  headline: 'Anderson — Full-Stack Developer',
  subtitle: 'Full-stack developer building production web apps, from learning platforms and booking products to government prototypes. Currently at Aspyn AI.',
  githubUrl: 'https://github.com/andersonlebon',
  linkedinUrl: 'https://www.linkedin.com/in/andersonlebon/',
  email: 'laurentandersonm@outlook.com',
  location: 'Montreal-Nord, Quebec',
  website: 'https://www.andersone.site',
  seoTitle: 'Anderson Lebon — Full-Stack Developer',
  seoDescription: 'Portfolio of Anderson Lebon, a full-stack developer in Montreal-Nord, Quebec. Currently at Aspyn AI, building production web apps with React, Next.js, and TypeScript.',
};

interface PortfolioContextType {
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  settings: SiteSettings;
}

const PortfolioContext = createContext<PortfolioContextType>({
  projects,
  experience,
  skills,
  settings,
});

export function PortfolioProvider({ children }: { children: ReactNode }) {
  return (
    <PortfolioContext.Provider value={{ projects, experience, skills, settings }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
