import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router';
import {
  Sparkles, Cpu, Layers, PenTool, ArrowRight, ExternalLink,
  Github, Zap, Target, Code2, BookOpen, Star, ChevronRight,
  Globe, Braces, Database, Cloud, LayoutDashboard, Workflow, Brain,
} from 'lucide-react';
import { Navbar } from '../components/portfolio/Navbar';
import { Footer } from '../components/portfolio/Footer';
import { SEO } from '../components/SEO';
import { projects } from '../context/PortfolioContext';

const domains = [
  {
    id: 'fullstack',
    icon: Cpu,
    title: 'Full-stack product work',
    subtitle: 'React · Next.js · TypeScript · Node.js',
    color: '#F5C518',
    impact: 'Shipped live products with auth, payments, and operations dashboards',
    description:
      'I build the client, API, and data layer as one product. The work in this portfolio is production software: enrollment, booking, donations, role-based portals, and public sites that stay online.',
    capabilities: [
      'Next.js and React product UIs',
      'TypeScript across client and API',
      'NestJS and Node.js services',
      'Supabase auth and Postgres data models',
      'Stripe and Paystack payment flows',
      'Role-based access and admin tools',
    ],
    tools: ['React', 'Next.js', 'TypeScript', 'NestJS', 'Supabase', 'PostgreSQL', 'MongoDB', 'Stripe'],
    stats: [{ v: 'Next.js', l: 'Primary UI' }, { v: 'TS', l: 'End to end' }, { v: 'Live', l: 'Deployments' }],
  },
  {
    id: 'ai-dev',
    icon: Zap,
    title: 'AI-assisted engineering',
    subtitle: 'Cursor · production delivery · Aspyn AI',
    color: '#E5E7EB',
    impact: 'Daily engineering practice with Cursor, plus current work at Aspyn AI',
    description:
      'I use Cursor as my primary IDE and treat AI pair programming as a repeatable workflow: project rules, focused context, tests, and reviews. I currently work at Aspyn AI on AI operator software. Client systems stay private.',
    capabilities: [
      'Cursor as a daily development environment',
      'Project rules and multi-file context',
      'Tests and review loops with AI assistance',
      'Shipping product work inside an AI company',
      'Keeping private client details out of public case studies',
    ],
    tools: ['Cursor', 'GitHub Copilot', 'TypeScript', 'Git'],
    stats: [{ v: 'Cursor', l: 'Daily IDE' }, { v: 'Aspyn', l: 'Current role' }, { v: 'Ship', l: 'Product work' }],
  },
  {
    id: 'figma',
    icon: PenTool,
    title: 'Interface engineering',
    subtitle: 'Figma · design-to-code · accessible UI',
    color: '#A78BFA',
    impact: 'Turned Figma designs into production React interfaces',
    description:
      'I work at the handoff between design and code. I implement component hierarchies, spacing, and interaction states that match the source file, then keep the UI usable on keyboard and smaller screens.',
    capabilities: [
      'Figma-to-React component mapping',
      'Design tokens and consistent theming',
      'Responsive layouts and Auto Layout thinking',
      'Keyboard focus and accessible labels',
      'Public marketing sites and product dashboards',
    ],
    tools: ['Figma', 'Tailwind CSS', 'React', 'Framer Motion'],
    stats: [{ v: 'Figma', l: 'To code' }, { v: 'UI', l: 'Systems' }, { v: 'A11y', l: 'In the build' }],
  },
  {
    id: 'architecture',
    icon: Layers,
    title: 'Product architecture',
    subtitle: 'Auth · data · payments · deployment',
    color: '#34D399',
    impact: 'Designed schemas, access models, and deploy paths used in live products',
    description:
      'Before a feature ships, I map the data model, access rules, and hosting path. The public work shows auth, payments, bilingual content, maps, and role-based portals rather than slide-deck architecture.',
    capabilities: [
      'Auth and role-based access (RBAC)',
      'Postgres schemas with Drizzle',
      'REST APIs and React Query clients',
      'CI/CD and Vercel production deploys',
      'Observability enough to operate a small product',
    ],
    tools: ['PostgreSQL', 'Drizzle', 'Supabase', 'Docker', 'AWS', 'Vercel', 'Playwright'],
    stats: [{ v: 'Auth', l: 'RBAC' }, { v: 'Pay', l: 'Stripe' }, { v: 'Cloud', l: 'Vercel + AWS' }],
  },
];

const impactProjects = [
  {
    tag: 'Education',
    tagColor: '#F5C518',
    title: 'Primus Learning Platform',
    description:
      'Production learning platform covering courses, bootcamps, payments, and administration. Public-safe case study of the largest eligible product I have shipped.',
    live: 'https://www.primuslearning.io/',
    github: '',
    metrics: [
      { icon: BookOpen, label: 'Domain', value: 'EdTech' },
      { icon: Code2, label: 'Stack', value: 'Next.js' },
      { icon: Target, label: 'Live site', value: 'Yes' },
    ],
    stack: ['Next.js', 'TypeScript', 'NestJS', 'MongoDB', 'Stripe', 'Paystack'],
    type: 'Private product',
    featured: true,
  },
  {
    tag: 'Nonprofit',
    tagColor: '#A78BFA',
    title: 'One By One Ministries',
    description:
      'Bilingual ministry website with donations, stories, media, maps, and an operations dashboard. Public repository and live production site.',
    live: 'https://www.onebyoneministries.org/',
    github: 'https://github.com/andersonlebon/onebyone-ministry',
    metrics: [
      { icon: Globe, label: 'Live', value: 'Yes' },
      { icon: Star, label: 'Public repo', value: 'Yes' },
      { icon: LayoutDashboard, label: 'Ops', value: 'Dashboard' },
    ],
    stack: ['Next.js', 'Supabase', 'Drizzle', 'Stripe', 'Leaflet'],
    type: 'Public product',
    featured: false,
  },
  {
    tag: 'Operations',
    tagColor: '#F5C518',
    title: 'NJ Safety Driver',
    description:
      'Role-based portal for drivers, field agents, and admins: vehicles, documents, infractions, and payments.',
    live: 'https://nj-safety-driver-web.vercel.app/',
    github: 'https://github.com/andersonlebon/Nj-safety-driver-web',
    metrics: [
      { icon: Target, label: 'Roles', value: '3' },
      { icon: LayoutDashboard, label: 'Auth', value: 'Supabase' },
      { icon: Globe, label: 'Live', value: 'Yes' },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle', 'PostgreSQL'],
    type: 'Public product',
    featured: true,
  },
];

const sideProjects = projects.filter((project) =>
  ['kylie-hair', 'matchpulse', 'vdarvs'].includes(project.id),
).map((project) => ({
  title: project.title,
  description: project.description,
  stack: project.techStack.slice(0, 4),
  links: { github: project.githubUrl, live: project.liveUrl },
}));

const resources = [
  {
    category: 'Product stack',
    icon: Code2,
    color: '#F5C518',
    items: [
      { name: 'Next.js', desc: 'App Router product UIs', href: 'https://nextjs.org' },
      { name: 'Supabase', desc: 'Auth, Postgres, storage', href: 'https://supabase.com' },
      { name: 'Drizzle', desc: 'Typed SQL for Postgres', href: 'https://orm.drizzle.team' },
      { name: 'Stripe', desc: 'Payments in live products', href: 'https://stripe.com' },
    ],
  },
  {
    category: 'Delivery',
    icon: Zap,
    color: '#E5E7EB',
    items: [
      { name: 'Cursor', desc: 'AI-first code editor', href: 'https://cursor.com' },
      { name: 'Vercel', desc: 'Production hosting', href: 'https://vercel.com' },
      { name: 'GitHub', desc: 'Source and reviews', href: 'https://github.com' },
      { name: 'Playwright', desc: 'End-to-end coverage', href: 'https://playwright.dev' },
    ],
  },
  {
    category: 'Design',
    icon: PenTool,
    color: '#A78BFA',
    items: [
      { name: 'Figma', desc: 'Design and handoff', href: 'https://figma.com' },
      { name: 'Tailwind CSS', desc: 'Utility-first UI', href: 'https://tailwindcss.com' },
      { name: 'Excalidraw', desc: 'Architecture sketches', href: 'https://excalidraw.com' },
      { name: 'Storybook', desc: 'Component isolation', href: 'https://storybook.js.org' },
    ],
  },
];

function SectionHeader({ label, title, subtitle }: { label: string; title: React.ReactNode; subtitle?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">{label}</p>
      <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
      <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

function DomainCard({ domain, index }: { domain: typeof domains[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isReverse = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02]"
      id={domain.id}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${domain.color}60, transparent)` }} />

      <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div className="relative lg:w-[38%] min-h-[220px] overflow-hidden flex items-center justify-center" style={{ background: `${domain.color}0D` }}>
          <div className="flex items-center justify-center gap-6 p-6">
            {domain.stats.map((s) => (
              <div key={s.l} className="text-center">
                <div style={{ color: domain.color, fontFamily: 'var(--font-geist)', fontWeight: 800, fontSize: '1.6rem', lineHeight: 1 }}>{s.v}</div>
                <div className="text-xs text-gray-400 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 p-8 lg:p-10">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
              style={{ background: `${domain.color}15`, borderColor: `${domain.color}30` }}>
              <domain.icon size={22} style={{ color: domain.color }} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-white mb-0.5" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.25rem' }}>{domain.title}</h3>
              <p className="text-xs" style={{ color: domain.color }}>{domain.subtitle}</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 border"
            style={{ background: `${domain.color}0D`, borderColor: `${domain.color}25` }}>
            <Target size={12} style={{ color: domain.color }} aria-hidden="true" />
            <span className="text-xs" style={{ color: domain.color }}>{domain.impact}</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">{domain.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {domain.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: domain.color }} />
                {cap}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {domain.tools.map((tool) => (
              <span key={tool} className="px-2.5 py-1 text-xs rounded-md border text-gray-400"
                style={{ background: `${domain.color}08`, borderColor: `${domain.color}20` }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ImpactProjectCard({ project, index }: { project: typeof impactProjects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-[#F5C518]/20 transition-all duration-300"
    >
      {project.featured && (
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/30">
          <span className="text-[10px] text-[#F5C518] flex items-center gap-1"><Star size={9} className="fill-[#F5C518]" aria-hidden="true" /> Featured</span>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 text-xs rounded-full border"
              style={{ color: project.tagColor, borderColor: `${project.tagColor}30`, background: `${project.tagColor}0D` }}>
              {project.tag}
            </span>
            <span className="px-2.5 py-1 text-xs rounded-full border border-white/10 text-gray-500">{project.type}</span>
          </div>

          <h3 className="text-white mb-3" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.2rem' }}>
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/[0.08] text-gray-400">{t}</span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]">
                <Github size={14} aria-hidden="true" /> Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[#F5C518] hover:text-[#DEBA15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]">
                <ExternalLink size={14} aria-hidden="true" /> Live site
              </a>
            )}
          </div>
        </div>

        <div className="md:w-52 shrink-0">
          <div className="h-full rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 flex flex-col justify-center gap-5">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F5C518]/10 border border-[#F5C518]/20 flex items-center justify-center shrink-0">
                  <m.icon size={14} className="text-[#F5C518]" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-white text-base" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>{m.value}</div>
                  <div className="text-gray-500 text-xs">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function SideProjectCard({ project, index }: { project: typeof sideProjects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-[#F5C518]/20 transition-all duration-300 group flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-white group-hover:text-[#F5C518] transition-colors" style={{ fontWeight: 600 }}>{project.title}</h4>
        <div className="flex gap-2">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`} className="p-1.5 rounded-lg text-gray-600 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]">
              <Github size={14} aria-hidden="true" />
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site`} className="p-1.5 rounded-lg text-gray-600 hover:text-[#F5C518] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]">
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span key={t} className="px-2 py-0.5 text-[10px] rounded border border-white/[0.08] text-gray-500">{t}</span>
        ))}
      </div>
    </motion.article>
  );
}

function ResourceCard({ res, index }: { res: typeof resources[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07]"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center border"
          style={{ background: `${res.color}15`, borderColor: `${res.color}30` }}>
          <res.icon size={16} style={{ color: res.color }} aria-hidden="true" />
        </div>
        <h4 className="text-white text-sm" style={{ fontWeight: 600 }}>{res.category}</h4>
      </div>
      <div className="space-y-3">
        {res.items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518] rounded"
          >
            <div>
              <p className="text-gray-300 text-sm group-hover:text-white transition-colors" style={{ fontWeight: 500 }}>{item.name}</p>
              <p className="text-gray-600 text-xs">{item.desc}</p>
            </div>
            <ChevronRight size={14} className="text-gray-700 group-hover:text-[#F5C518] transition-colors mt-0.5 shrink-0" aria-hidden="true" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

function ArchDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const nodes = [
    { id: 'client', label: 'Client', sub: 'Next.js / React', x: '50%', y: '8%', color: '#F5C518', icon: Globe },
    { id: 'edge', label: 'Hosting', sub: 'Vercel / CDN', x: '50%', y: '28%', color: '#E5E7EB', icon: Cloud },
    { id: 'api', label: 'API', sub: 'NestJS / Route handlers', x: '25%', y: '50%', color: '#F5C518', icon: Workflow },
    { id: 'auth', label: 'Auth', sub: 'Supabase / RBAC', x: '75%', y: '50%', color: '#A78BFA', icon: Brain },
    { id: 'db', label: 'Database', sub: 'PostgreSQL / MongoDB', x: '25%', y: '75%', color: '#34D399', icon: Database },
    { id: 'pay', label: 'Payments', sub: 'Stripe / Paystack', x: '75%', y: '75%', color: '#A78BFA', icon: Braces },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative p-8 rounded-2xl bg-white/[0.02] border border-[#F5C518]/15 overflow-hidden"
      style={{ minHeight: 380 }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {[
          ['50%', '14%', '50%', '30%'],
          ['50%', '38%', '25%', '52%'],
          ['50%', '38%', '75%', '52%'],
          ['25%', '60%', '25%', '74%'],
          ['75%', '60%', '75%', '74%'],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(245,197,24,0.25)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
          />
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: 'spring' }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: node.x, top: node.y }}
        >
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center border backdrop-blur"
              style={{
                background: `${node.color}12`,
                borderColor: `${node.color}40`,
                boxShadow: `0 0 20px ${node.color}20`,
              }}
            >
              <node.icon size={18} style={{ color: node.color }} />
            </div>
            <div className="text-center">
              <p className="text-white text-xs whitespace-nowrap" style={{ fontWeight: 600 }}>{node.label}</p>
              <p className="text-gray-600 whitespace-nowrap" style={{ fontSize: '0.6rem' }}>{node.sub}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function Expertise() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <SEO title="Expertise | Anderson Lebon, Full-Stack Developer" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F5C518" strokeWidth="0.5" />
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px]"
            style={{ background: 'radial-gradient(ellipse, rgba(245,197,24,0.06) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F5C518]/30 bg-[#F5C518]/5">
                <Sparkles size={12} className="text-[#F5C518]" aria-hidden="true" />
                <span className="text-xs text-[#F5C518]">Verified capabilities</span>
              </div>
            </div>

            <h1 className="text-center mb-6" style={{ fontFamily: 'var(--font-geist)', fontWeight: 800, lineHeight: 1.05 }}>
              <span className="block text-5xl md:text-7xl text-white">How I ship</span>
              <span className="block text-5xl md:text-7xl text-[#F5C518] mt-1">production software</span>
            </h1>

            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Full-stack developer in Montreal, currently at Aspyn AI. This page covers tools and products I can point to: live sites, public repositories, and public-safe summaries of private work.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {domains.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  onClick={(e) => { e.preventDefault(); document.getElementById(d.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
                  style={{ borderColor: `${d.color}30`, background: `${d.color}08`, color: d.color }}
                >
                  {d.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <SectionHeader
            label="Expertise"
            title={<>Four areas, <span className="text-[#F5C518]">one delivery loop</span></>}
            subtitle="Product engineering, AI-assisted development, interface implementation, and the architecture needed to keep a product running."
          />
          {domains.map((domain, i) => (
            <DomainCard key={domain.id} domain={domain} index={i} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            label="System shape"
            title={<>How the products <span className="text-[#F5C518]">are structured</span></>}
            subtitle="A typical layout for the live work in this portfolio: client, API, auth, data, and payments."
          />
          <ArchDiagram />
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="Evidence"
            title={<>Projects that <span className="text-[#F5C518]">show the work</span></>}
            subtitle="Live sites and public repositories. Private product internals stay out of this page."
          />
          <div className="space-y-6">
            {impactProjects.map((project, i) => (
              <ImpactProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="More work"
            title={<>Also in <span className="text-[#F5C518]">production</span></>}
            subtitle="Booking, sports tracking, and a local-government prototype."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sideProjects.map((project, i) => (
              <SideProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="Toolkit"
            title={<>Tools I <span className="text-[#F5C518]">use</span></>}
            subtitle="The stack behind the projects above."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {resources.map((res, i) => (
              <ResourceCard key={res.category} res={res} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-10 md:p-14 rounded-2xl border border-[#F5C518]/20 overflow-hidden"
            style={{ background: 'rgba(245,197,24,0.03)' }}
          >
            <div className="relative">
              <h2 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
                Let's talk about a <span className="text-[#F5C518]">role or project</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Email or LinkedIn is the fastest way to reach me. I can walk through the live products above and the work I am doing at Aspyn AI at a public-safe level.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/#contact" className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F5C518] text-black hover:bg-[#DEBA15] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5C518]" style={{ fontWeight: 700 }}>
                  Contact Me
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/" className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#F5C518]/40 text-[#F5C518] hover:bg-[#F5C518]/8 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5C518]" style={{ fontWeight: 600 }}>
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
