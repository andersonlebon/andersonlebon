import primusImage from '../../assets/projects/primus-learning.webp';
import oneByOneImage from '../../assets/projects/onebyone.webp';
import kylieImage from '../../assets/projects/kylie-hair.webp';
import matchpulseImage from '../../assets/projects/matchpulse.webp';
import njSafetyImage from '../../assets/projects/njsafety.webp';
import vdarvsImage from '../../assets/projects/vdarvs.webp';

export type ProjectCategory =
  | 'AI & SaaS'
  | 'Business Platforms'
  | 'Community & Education'
  | 'Web Applications'
  | 'Learning Projects'
  | 'Hardware';

export type ProjectVisibility = 'Public' | 'Private' | 'Organization';
export type ProjectSource = 'GitHub' | 'Vercel' | 'Organization' | 'Local';

export interface CatalogProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  visibility: ProjectVisibility;
  source: ProjectSource;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  owner?: string;
  featured?: boolean;
}

export const projectCatalog: CatalogProject[] = [
  {
    id: 'primus-learning',
    title: 'Primus Learning Platform',
    description:
      'Production learning platform for courses, bootcamps, enrollment, payments, and learner administration. Multiple private service repositories are represented as one product.',
    technologies: ['Next.js', 'TypeScript', 'NestJS', 'MongoDB', 'Stripe', 'Paystack'],
    category: 'Community & Education',
    visibility: 'Organization',
    source: 'Organization',
    liveUrl: 'https://www.primuslearning.io/',
    imageUrl: primusImage,
    owner: 'Primus Learning',
    featured: true,
  },
  {
    id: 'onebyone-ministry',
    title: 'One By One Ministries',
    description:
      'Bilingual ministry website with donations, stories, media, maps, SEO, and an operations dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'Stripe', 'Leaflet'],
    category: 'Community & Education',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/onebyone-ministry',
    liveUrl: 'https://www.onebyoneministries.org/',
    imageUrl: oneByOneImage,
    owner: 'Personal',
    featured: true,
  },
  {
    id: 'kylie-hair',
    title: 'Kylie Hair',
    description:
      'Salon platform combining appointment booking, commerce, payments, branded content, and private operations tools.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'PostgreSQL'],
    category: 'Business Platforms',
    visibility: 'Private',
    source: 'Vercel',
    liveUrl: 'https://www.kyliehairr.com/',
    imageUrl: kylieImage,
    owner: 'Personal',
    featured: true,
  },
  {
    id: 'matchpulse',
    title: 'MatchPulse',
    description:
      'World Cup 2026 schedule tracker with team preferences, match reminders, calendar export, and authenticated sessions.',
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'React Query'],
    category: 'Web Applications',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/matchpulse-mvp',
    liveUrl: 'https://www.matchpuls.live/',
    imageUrl: matchpulseImage,
    owner: 'Personal',
    featured: true,
  },
  {
    id: 'nj-safety-driver',
    title: 'NJ Safety Driver',
    description:
      'Role-based portal for drivers, field agents, and administrators covering vehicles, documents, infractions, and payments.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'PostgreSQL'],
    category: 'Business Platforms',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/Nj-safety-driver-web',
    liveUrl: 'https://nj-safety-driver-web.vercel.app/',
    imageUrl: njSafetyImage,
    owner: 'Personal',
    featured: true,
  },
  {
    id: 'vdarvs',
    title: 'VDARVS',
    description:
      'Village Digital Administrative Records & Verification System for Lesotho local government workflows.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'Playwright'],
    category: 'Business Platforms',
    visibility: 'Organization',
    source: 'Organization',
    githubUrl: 'https://github.com/litebohop/vdarvs',
    liveUrl: 'https://vdarvs.vercel.app/',
    imageUrl: vdarvsImage,
    owner: 'litebohop',
    featured: true,
  },
  {
    id: 'avec',
    title: 'AVEC',
    description:
      'Digital tontine and ROSCA SaaS for bilingual community savings, member contributions, and group operations.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'next-intl'],
    category: 'AI & SaaS',
    visibility: 'Private',
    source: 'GitHub',
    owner: 'Personal',
  },
  {
    id: 'devpulse',
    title: 'DevPulse',
    description:
      'Local AI-enabled developer platform monorepo with a Next.js web app, MCP server, editor extension, embeddable widget, background jobs, and content generation workflows.',
    technologies: ['Next.js', 'TypeScript', 'OpenRouter', 'MCP', 'Prisma', 'Redis'],
    category: 'AI & SaaS',
    visibility: 'Private',
    source: 'Local',
    owner: 'Personal',
  },
  {
    id: 'skillink-one2one',
    title: 'Skillink / One2One',
    description:
      'Private tutoring marketplace suite for tutor discovery, sessions, reservations, payments, landing content, and administration.',
    technologies: ['Next.js', 'TypeScript', 'NestJS', 'Payments'],
    category: 'Community & Education',
    visibility: 'Organization',
    source: 'Organization',
    owner: 'Primus Learning',
  },
  {
    id: 'smartelimu',
    title: 'SmartElimu',
    description:
      'Private school-management platform covering academics, finance, billing, administration, reporting, and communication workflows.',
    technologies: ['Next.js', 'TypeScript'],
    category: 'Community & Education',
    visibility: 'Organization',
    source: 'Organization',
    owner: 'Collaborative project',
  },
  {
    id: 'bible-study-marathon',
    title: 'Bible Study Marathon Platform',
    description:
      'Private community platform for Bible study programs with quizzes, calendars, attendance, and Face ID-assisted check-in.',
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase'],
    category: 'Community & Education',
    visibility: 'Private',
    source: 'Vercel',
    liveUrl: 'https://ercfr.vercel.app/',
    owner: 'Personal',
  },
  {
    id: 'uno-site',
    title: 'UNO Site',
    description:
      'French showcase and content-management website for UMOJA NI NGUVU (UNO Asbl).',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle'],
    category: 'Web Applications',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/uno-site',
    owner: 'Personal',
  },
  {
    id: 'haranest',
    title: 'Haranest',
    description:
      'Rwanda-focused marketplace for real estate, vehicles, repair services, listings, accounts, and management dashboards.',
    technologies: ['Next.js', 'TypeScript', 'Supabase'],
    category: 'Business Platforms',
    visibility: 'Public',
    source: 'Vercel',
    githubUrl: 'https://github.com/andersonlebon/haranest-app',
    liveUrl: 'https://www.haranest.com/',
    owner: 'Personal',
  },
  {
    id: 'jojo-wet-luxury',
    title: 'Jojo Wet Luxury',
    description:
      'Branded commerce and marketing experience built as a TypeScript web application.',
    technologies: ['React', 'TypeScript', 'Vite'],
    category: 'Business Platforms',
    visibility: 'Private',
    source: 'Vercel',
    liveUrl: 'https://jojo-wet-luxury.vercel.app/',
    owner: 'Personal',
  },
  {
    id: 'my-store',
    title: 'My Store',
    description:
      'Private Next.js store application for catalog, sales, and business operations workflows.',
    technologies: ['Next.js', 'TypeScript'],
    category: 'Business Platforms',
    visibility: 'Private',
    source: 'Vercel',
    liveUrl: 'https://my-store-andersonlebons-projects.vercel.app/',
    owner: 'Personal',
  },
  {
    id: 'up-innovation',
    title: 'UP Innovation',
    description:
      'Company website and digital presence delivered with a modern JavaScript and Next.js stack.',
    technologies: ['Next.js', 'JavaScript'],
    category: 'Web Applications',
    visibility: 'Private',
    source: 'Vercel',
    liveUrl: 'https://up-innovation.vercel.app/',
    owner: 'Personal',
  },
  {
    id: 'real-estate-development',
    title: 'Real Estate Development',
    description:
      'Property development platform explored across private and public Next.js repositories and production deployments.',
    technologies: ['Next.js', 'TypeScript'],
    category: 'Business Platforms',
    visibility: 'Private',
    source: 'Vercel',
    owner: 'Personal',
  },
  {
    id: 'estate-app',
    title: 'Estate App',
    description:
      'Real-estate web application for presenting and managing property information.',
    technologies: ['Next.js', 'TypeScript'],
    category: 'Business Platforms',
    visibility: 'Private',
    source: 'Vercel',
    liveUrl: 'https://estateapp.vercel.app/',
    owner: 'Personal',
  },
  {
    id: 'tasha',
    title: 'Tasha',
    description:
      'Private Next.js website delivered as a branded production deployment.',
    technologies: ['Next.js', 'TypeScript'],
    category: 'Web Applications',
    visibility: 'Private',
    source: 'Vercel',
    liveUrl: 'https://itozanyenumusitari.vercel.app/',
    owner: 'Personal',
  },
  {
    id: 'kawira-safari',
    title: 'Kawira Safari',
    description:
      'Private travel product developed across a React frontend and Ruby backend.',
    technologies: ['React', 'JavaScript', 'Ruby'],
    category: 'Business Platforms',
    visibility: 'Private',
    source: 'GitHub',
    owner: 'Personal',
  },
  {
    id: 'melinium',
    title: 'Melinium',
    description:
      'Private responsive website implementation with a custom SCSS design system.',
    technologies: ['SCSS', 'HTML', 'JavaScript'],
    category: 'Web Applications',
    visibility: 'Private',
    source: 'GitHub',
    owner: 'Personal',
  },
  {
    id: 'landing-page-development',
    title: 'Landing Page Development',
    description:
      'Private client landing-page implementation focused on responsive frontend delivery.',
    technologies: ['SCSS', 'HTML', 'JavaScript'],
    category: 'Web Applications',
    visibility: 'Private',
    source: 'GitHub',
    owner: 'Personal',
  },
  {
    id: 'btc-agaped',
    title: 'BTC Agaped',
    description:
      'School website and LMS with attendance, QR workflows, staff tools, and a Supabase-backed application layer.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Drizzle', 'Playwright'],
    category: 'Community & Education',
    visibility: 'Private',
    source: 'Vercel',
    liveUrl: 'https://btc-agaped.vercel.app/',
    owner: 'Personal',
  },
  {
    id: 'abiga',
    title: 'Abiga',
    description:
      'Memorial and tribute website contributed to as a client-facing community product.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'MUI'],
    category: 'Web Applications',
    visibility: 'Organization',
    source: 'Organization',
    githubUrl: 'https://github.com/barackm/abiga',
    owner: 'barackm',
  },
  {
    id: 'edubridge-dashboard',
    title: 'EduBridge Dashboard',
    description:
      'Administration dashboard for announcements, student services, and EduBridge mobile-app operations.',
    technologies: ['TypeScript', 'React', 'Supabase'],
    category: 'Community & Education',
    visibility: 'Organization',
    source: 'Organization',
    githubUrl: 'https://github.com/olamebarhibonera/EduBridge-dashboard',
    liveUrl: 'https://edubridge-admin.vercel.app/',
    owner: 'olamebarhibonera',
  },
  {
    id: 'edubridge-mobile',
    title: 'EduBridge Mobile',
    description:
      'Cross-platform companion for international students in Kenya with translation, budgeting, local services, emergency contacts, and dashboard integration.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    category: 'Community & Education',
    visibility: 'Organization',
    source: 'Local',
    owner: 'EduBridge',
  },
  {
    id: 'ongeya-backend',
    title: 'Ongeya Backend',
    description:
      'Private safety and alert backend contribution with real-time communication, post repost, and quote workflows.',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Redis', 'Socket.io'],
    category: 'Business Platforms',
    visibility: 'Organization',
    source: 'Local',
    owner: 'barackm',
  },
  {
    id: 'olb-web',
    title: 'OLB Web',
    description:
      'Public organization website contributed to using standards-based frontend development.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Applications',
    visibility: 'Organization',
    source: 'Organization',
    githubUrl: 'https://github.com/olamebarhibonera/OLB-web',
    owner: 'olamebarhibonera',
  },
  {
    id: 'web-chat',
    title: 'Web Chat',
    description:
      'Browser chat application that synchronizes conversations between tabs using Redux and local storage.',
    technologies: ['JavaScript', 'React', 'Redux'],
    category: 'Web Applications',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/web-chat',
    owner: 'Personal',
  },
  {
    id: 'blogger',
    title: 'Blogger',
    description:
      'TypeScript blogging application developed as a modern web publishing experience.',
    technologies: ['TypeScript', 'React'],
    category: 'Web Applications',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/bloger',
    owner: 'Personal',
  },
  {
    id: 'ejo-website',
    title: 'Ejo Website',
    description:
      'Public JavaScript website created as an earlier frontend product.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    category: 'Web Applications',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/ejo-website',
    owner: 'Personal',
  },
  {
    id: 'car-parking',
    title: 'Car Parking',
    description:
      'Customer-focused parking payment concept using connected-car location awareness.',
    technologies: ['JavaScript', 'React'],
    category: 'Web Applications',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/CAR-PARKING',
    owner: 'Personal',
  },
  {
    id: 'industrial-dashboard',
    title: 'Software Industrial Dashboard Controller',
    description:
      'Ruby application for controlling and presenting industrial dashboard information.',
    technologies: ['Ruby'],
    category: 'Business Platforms',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/Software-Industrial-dashboard-controller',
    owner: 'Personal',
  },
  {
    id: 'quiz-builder',
    title: 'Quiz Builder',
    description:
      'Quiz application for creating, sharing, and automatically scoring interactive questionnaires.',
    technologies: ['Ruby', 'SQL'],
    category: 'Community & Education',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/QuizBuilder_App',
    owner: 'Personal',
  },
  {
    id: 'catalog-of-things',
    title: 'Catalog of Things',
    description:
      'Ruby console application for cataloging books, music albums, movies, and games with JSON persistence.',
    technologies: ['Ruby', 'PostgreSQL'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/Catalog-of-things-capstone',
    owner: 'Personal',
  },
  {
    id: 'leaderboard',
    title: 'Leaderboard',
    description:
      'Leaderboard interface for submitting and displaying player scores through an external API.',
    technologies: ['JavaScript', 'Webpack', 'REST API'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/leaderboard',
    owner: 'Personal',
  },
  {
    id: 'final-capstone',
    title: 'Full-Stack Final Capstone',
    description:
      'Team capstone developed with a JavaScript frontend and Ruby on Rails API backend.',
    technologies: ['JavaScript', 'React', 'Ruby on Rails', 'PostgreSQL'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/Final-capstone-frontend-',
    owner: 'Personal',
  },
  {
    id: 'math-magicians',
    title: 'Math Magicians',
    description:
      'Single-page calculator application with math quotations and client-side navigation.',
    technologies: ['React', 'JavaScript'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/math-magicians',
    owner: 'Personal',
  },
  {
    id: 'blog-app',
    title: 'Blog App',
    description:
      'Classic Rails blog with posts, comments, likes, authentication, and relational data.',
    technologies: ['Ruby on Rails', 'PostgreSQL'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/blogApp',
    owner: 'Personal',
  },
  {
    id: 'budget-app',
    title: 'Budget App',
    description:
      'Mobile-oriented web application for organizing categories and tracking personal transactions.',
    technologies: ['Ruby on Rails', 'PostgreSQL'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/Budget-app',
    owner: 'Personal',
  },
  {
    id: 'recipe-app',
    title: 'Recipe App',
    description:
      'Recipe and inventory manager with ingredients, shopping lists, and public recipe sharing.',
    technologies: ['Ruby on Rails', 'PostgreSQL'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/recipeApp',
    owner: 'Personal',
  },
  {
    id: 'awesome-books',
    title: 'Awesome Books',
    description:
      'Book list application for adding and removing titles with browser-side persistence.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/Awesome-book',
    owner: 'Personal',
  },
  {
    id: 'book-store',
    title: 'Book Store',
    description:
      'React and Redux bookstore for browsing, adding, and removing books through an API.',
    technologies: ['React', 'Redux', 'JavaScript'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/BookStore',
    owner: 'Personal',
  },
  {
    id: 'oop-school-library',
    title: 'OOP School Library',
    description:
      'Object-oriented Ruby tool for managing students, teachers, books, and borrowing records.',
    technologies: ['Ruby', 'OOP'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/OOP-school-library',
    owner: 'Personal',
  },
  {
    id: 'charity-world',
    title: 'Charity in the World',
    description:
      'Responsive charity conference and fundraising website focused on adoption support.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/CHARITY-CAPSTON-PROJECT',
    owner: 'Personal',
  },
  {
    id: 'covid-tracker',
    title: 'COVID-19 Cases Tracker',
    description:
      'Data application for exploring COVID-19 case information by continent and country.',
    technologies: ['React', 'Redux', 'JavaScript', 'REST API'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/Situation-updates-on-COVID-19and--casesTracker',
    owner: 'Personal',
  },
  {
    id: 'space-travelers',
    title: "Space Travelers' Hub",
    description:
      'Space travel application for booking rockets and joining missions using live API data.',
    technologies: ['React', 'Redux', 'JavaScript', 'REST API'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/Space-Travelers-Hub',
    liveUrl: 'https://traveler-shub.netlify.app/',
    owner: 'Personal',
  },
  {
    id: 'water-counter',
    title: 'Arduino Water Counter',
    description:
      'Electronic water-consumption counter using Arduino and a flow sensor to measure usage and provide feedback.',
    technologies: ['C++', 'Arduino', 'Sensors'],
    category: 'Hardware',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/watter-counter-with-arduino-and-the-flow-sensor',
    owner: 'Personal',
  },
  {
    id: 'traffic-light-controller',
    title: 'Density-Based Traffic Light Controller',
    description:
      'Arduino traffic-control prototype that adjusts signal behavior using measured traffic density.',
    technologies: ['C++', 'Arduino', 'Sensors'],
    category: 'Hardware',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/Density-based-trafic-light-controller-using-arduino',
    owner: 'Personal',
  },
  {
    id: 'incubator-controller',
    title: 'Incubator Controller',
    description:
      'Embedded-system prototype for monitoring and controlling an incubator environment.',
    technologies: ['C++', 'Arduino', 'Sensors'],
    category: 'Hardware',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/INCUBATOR',
    owner: 'Personal',
  },
  {
    id: 'todo-react',
    title: 'React Todo List',
    description:
      'Task management application for adding, completing, and removing day-to-day tasks.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/todo-with-react',
    owner: 'Personal',
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio V1',
    description:
      'Earlier personal portfolio documenting my initial work and growth as a web developer.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    category: 'Learning Projects',
    visibility: 'Public',
    source: 'GitHub',
    githubUrl: 'https://github.com/andersonlebon/MyPortofilo',
    owner: 'Personal',
  },
];

export const projectCategories = [
  'All',
  'AI & SaaS',
  'Business Platforms',
  'Community & Education',
  'Web Applications',
  'Learning Projects',
  'Hardware',
] as const;

