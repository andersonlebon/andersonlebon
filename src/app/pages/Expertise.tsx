import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router';
import {
  Sparkles, Cpu, Layers, PenTool, ArrowRight, ExternalLink,
  Github, Zap, Target, TrendingUp, Users, Code2, BookOpen,
  Star, Clock, ChevronRight, Globe, Braces, Database, Cloud,
  LayoutDashboard, Box, Workflow, Lightbulb, Brain, Figma,
} from 'lucide-react';
import { Navbar } from '../components/portfolio/Navbar';
import { Footer } from '../components/portfolio/Footer';

// ─── Domain Data ───────────────────────────────────────────────────────────────

const domains = [
  {
    id: 'openai',
    icon: Brain,
    emoji: '🤖',
    title: 'OpenAI & Generative AI',
    subtitle: 'Prompt Engineer · API Integrator · AI Product Builder',
    color: '#F5C518',
    glow: 'rgba(245,197,24,0.12)',
    impact: 'Built 6+ AI-powered products used by 10,000+ users',
    description:
      'Deep expertise integrating large language models into real-world products. From prompt engineering and fine-tuning to RAG pipelines and AI agent orchestration — I bridge the gap between model capability and user impact.',
    capabilities: [
      'GPT-4 / GPT-4o API integration',
      'Prompt engineering & chain-of-thought',
      'RAG pipelines with vector databases',
      'AI agent design & orchestration',
      'Fine-tuning on custom datasets',
      'LangChain / LlamaIndex workflows',
      'Streaming & real-time AI responses',
      'Content moderation & safety layers',
    ],
    tools: ['OpenAI API', 'LangChain', 'Pinecone', 'Supabase pgvector', 'LlamaIndex', 'Hugging Face', 'Vercel AI SDK', 'Claude'],
    stats: [{ v: '6+', l: 'AI Products' }, { v: '10K+', l: 'End Users' }, { v: '4M+', l: 'AI Tokens/mo' }],
    image: 'https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  },
  {
    id: 'cursor',
    icon: Zap,
    emoji: '⚡',
    title: 'Cursor & AI-Powered Dev',
    subtitle: 'AI Pair Programmer · Context Engineer · 10× Developer',
    color: '#E5E7EB',
    glow: 'rgba(229,231,235,0.08)',
    impact: 'Reduced feature delivery time by 60% using AI-assisted workflows',
    description:
      'I use Cursor as my primary IDE and have built workflows that make AI an extension of my thinking, not just a code completer. From .cursorrules to multi-file context orchestration, I\'ve made AI pair programming a repeatable, reliable engineering practice.',
    capabilities: [
      '.cursorrules & project-level AI memory',
      'Multi-file refactoring with AI context',
      'Test generation & code review automation',
      'Codebase-aware feature implementation',
      'Documentation generation pipelines',
      'AI-driven debugging workflows',
      'Spec-to-implementation conversion',
      'Custom AI coding conventions',
    ],
    tools: ['Cursor', 'GitHub Copilot', 'Tabnine', 'Cline', 'v0.dev', 'Bolt.new', 'Continue.dev', 'Aider'],
    stats: [{ v: '60%', l: 'Faster delivery' }, { v: '3×', l: 'PRs/week' }, { v: '40%', l: 'Less bugs' }],
    image: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  },
  {
    id: 'figma',
    icon: PenTool,
    emoji: '🎨',
    title: 'Figma & Design Systems',
    subtitle: 'Design Systems · Prototyping · Design-to-Code',
    color: '#A78BFA',
    glow: 'rgba(167,139,250,0.10)',
    impact: 'Designed 3 full design systems shipped to production',
    description:
      'I sit at the intersection of design and engineering. I design in Figma with the same rigour I apply to code — component hierarchies, token systems, accessibility, and handoff. I can prototype, test, and hand-off pixel-perfect designs that developers can implement directly.',
    capabilities: [
      'Full design system architecture',
      'Auto Layout & responsive components',
      'Design tokens & variable theming',
      'High-fidelity interactive prototypes',
      'Figma-to-React component mapping',
      'Dev Mode & inspect workflows',
      'FigJam system architecture diagrams',
      'User flow & journey mapping',
    ],
    tools: ['Figma', 'FigJam', 'Figma Variables', 'Storybook', 'Style Dictionary', 'Zeroheight', 'Lottie', 'Framer'],
    stats: [{ v: '3', l: 'Design Systems' }, { v: '50+', l: 'Components' }, { v: '100%', l: 'Design-to-code' }],
    image: 'https://images.unsplash.com/photo-1662776848768-a648c81e512f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  },
  {
    id: 'architecture',
    icon: Layers,
    emoji: '🏗️',
    title: 'System Architecture',
    subtitle: 'Distributed Systems · Cloud Infra · Scalable Design',
    color: '#34D399',
    glow: 'rgba(52,211,153,0.08)',
    impact: 'Designed systems handling 1M+ requests/day with 99.9% uptime',
    description:
      'I design systems before writing a single line of code. From event-driven microservices to serverless architectures, I architect solutions that are observable, scalable, and resilient. I can draw the diagram and then build it.',
    capabilities: [
      'Microservices & event-driven architecture',
      'Serverless & edge computing design',
      'Database schema & query optimization',
      'API design (REST, GraphQL, gRPC)',
      'CI/CD pipeline architecture',
      'Observability & monitoring stacks',
      'Security & compliance architecture',
      'Cost optimization strategies',
    ],
    tools: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Redis', 'PostgreSQL', 'Kafka', 'GraphQL'],
    stats: [{ v: '1M+', l: 'Req/day' }, { v: '99.9%', l: 'Uptime' }, { v: '4+', l: 'Cloud Platforms' }],
    image: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  },
];

// ─── Impact Projects ────────────────────────────────────────────────────────────

const impactProjects = [
  {
    tag: 'OpenAI × Architecture',
    tagColor: '#F5C518',
    title: 'AI-Powered Code Review Platform',
    description:
      'Built a production system that automatically reviews GitHub PRs using GPT-4, provides inline suggestions, detects security vulnerabilities, and estimates complexity. Integrated with Slack, Jira, and GitHub Actions.',
    metrics: [
      { icon: Users, label: 'Teams using it', value: '12+' },
      { icon: TrendingUp, label: 'Faster code reviews', value: '3×' },
      { icon: Target, label: 'Issues caught/mo', value: '200+' },
    ],
    stack: ['GPT-4', 'GitHub API', 'Node.js', 'Redis', 'PostgreSQL', 'Docker'],
    type: 'Work Project',
    featured: true,
  },
  {
    tag: 'Figma × React',
    tagColor: '#A78BFA',
    title: 'Enterprise Design System',
    description:
      'Designed and built a full-scale design system from Figma components to React component library. 80+ components, dark/light theming, accessibility-first, with Storybook docs and Style Dictionary tokens.',
    metrics: [
      { icon: Box, label: 'Components shipped', value: '80+' },
      { icon: Users, label: 'Devs on the system', value: '8' },
      { icon: Clock, label: 'Dev time saved/sprint', value: '30%' },
    ],
    stack: ['Figma', 'React', 'TypeScript', 'Storybook', 'Style Dictionary', 'Tailwind'],
    type: 'Work Project',
    featured: false,
  },
  {
    tag: 'AI × Cursor × Architecture',
    tagColor: '#F5C518',
    title: 'AI SaaS Starter — Full Architecture',
    description:
      'Designed and built an opinionated full-stack SaaS boilerplate using AI at every step. Cursor for development, GPT-4 for content generation, RAG for document Q&A, event-driven notifications, multi-tenant auth, and a payment layer.',
    metrics: [
      { icon: Star, label: 'GitHub stars', value: '340+' },
      { icon: Code2, label: 'Lines of code', value: '12K+' },
      { icon: Zap, label: 'Time to production', value: '2 weeks' },
    ],
    stack: ['Next.js', 'OpenAI', 'Supabase', 'Stripe', 'LangChain', 'Redis', 'Cursor'],
    type: 'Open Source',
    featured: true,
  },
];

// ─── Side Projects ──────────────────────────────────────────────────────────────

const sideProjects = [
  {
    emoji: '🧠',
    title: 'PromptVault',
    description: 'Personal prompt library with versioning, A/B testing, and performance analytics.',
    stack: ['Next.js', 'OpenAI', 'Supabase'],
    links: { github: '#', live: '#' },
    color: '#F5C518',
  },
  {
    emoji: '🖼️',
    title: 'Figma MCP Plugin',
    description: 'MCP server that connects Figma designs directly to AI models for design critique.',
    stack: ['Figma API', 'TypeScript', 'Claude'],
    links: { github: '#', live: '#' },
    color: '#A78BFA',
  },
  {
    emoji: '⚡',
    title: 'CursorRules.dev',
    description: 'Curated collection of .cursorrules for 30+ tech stacks, with a generator.',
    stack: ['Next.js', 'Tailwind', 'MDX'],
    links: { github: '#', live: '#' },
    color: '#E5E7EB',
  },
  {
    emoji: '🏗️',
    title: 'ArchDiagram AI',
    description: 'Describe your system in plain English, get a Mermaid architecture diagram.',
    stack: ['GPT-4', 'Mermaid.js', 'Next.js'],
    links: { github: '#', live: '#' },
    color: '#34D399',
  },
  {
    emoji: '🎨',
    title: 'Design Token Studio',
    description: 'Bridge between Figma Variables and CSS/JS design tokens with live sync.',
    stack: ['Figma API', 'Style Dictionary', 'Node.js'],
    links: { github: '#', live: '#' },
    color: '#A78BFA',
  },
  {
    emoji: '🤖',
    title: 'RAG Playground',
    description: 'Upload any PDF and have a GPT-4-powered conversation with its content.',
    stack: ['LangChain', 'Pinecone', 'Next.js'],
    links: { github: '#', live: '#' },
    color: '#F5C518',
  },
];

// ─── Resources ─────────────────────────────────────────────────────────────────

const resources = [
  {
    category: 'AI Tools',
    icon: Brain,
    color: '#F5C518',
    items: [
      { name: 'OpenAI Platform', desc: 'GPT-4, embeddings, fine-tuning', href: 'https://platform.openai.com' },
      { name: 'LangChain', desc: 'LLM application framework', href: 'https://langchain.com' },
      { name: 'Vercel AI SDK', desc: 'Production AI streaming', href: 'https://sdk.vercel.ai' },
      { name: 'Hugging Face', desc: 'Open-source model hub', href: 'https://huggingface.co' },
    ],
  },
  {
    category: 'Dev Productivity',
    icon: Zap,
    color: '#E5E7EB',
    items: [
      { name: 'Cursor IDE', desc: 'AI-first code editor', href: 'https://cursor.sh' },
      { name: 'v0.dev', desc: 'AI UI generation by Vercel', href: 'https://v0.dev' },
      { name: 'Bolt.new', desc: 'Full-stack AI app builder', href: 'https://bolt.new' },
      { name: 'Continue.dev', desc: 'Open-source AI coding', href: 'https://continue.dev' },
    ],
  },
  {
    category: 'Design & Architecture',
    icon: PenTool,
    color: '#A78BFA',
    items: [
      { name: 'Figma', desc: 'Design & prototyping', href: 'https://figma.com' },
      { name: 'Excalidraw', desc: 'Hand-drawn architecture diagrams', href: 'https://excalidraw.com' },
      { name: 'draw.io', desc: 'Complex system diagrams', href: 'https://draw.io' },
      { name: 'Storybook', desc: 'UI component development', href: 'https://storybook.js.org' },
    ],
  },
];

// ─── Section Wrapper ────────────────────────────────────────────────────────────

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

// ─── Domain Card ────────────────────────────────────────────────────────────────

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
      {/* Top glow bar */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${domain.color}60, transparent)` }} />

      <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        {/* Image side */}
        <div className="relative lg:w-[42%] h-56 lg:h-auto overflow-hidden">
          <img src={domain.image} alt={domain.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(${isReverse ? '270deg' : '90deg'}, transparent 0%, #0F0F0F 90%)` }} />
          {/* Floating stats */}
          <div className="absolute inset-0 flex items-center justify-center gap-6 p-6">
            {domain.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="text-center"
              >
                <div style={{ color: domain.color, fontFamily: 'var(--font-geist)', fontWeight: 800, fontSize: '2rem', lineHeight: 1 }}>{s.v}</div>
                <div className="text-xs text-gray-400 mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content side */}
        <div className="flex-1 p-8 lg:p-10">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
              style={{ background: `${domain.color}15`, borderColor: `${domain.color}30` }}>
              <domain.icon size={22} style={{ color: domain.color }} />
            </div>
            <div>
              <h3 className="text-white mb-0.5" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.25rem' }}>{domain.title}</h3>
              <p className="text-xs" style={{ color: domain.color }}>{domain.subtitle}</p>
            </div>
          </div>

          {/* Impact pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 border"
            style={{ background: `${domain.color}0D`, borderColor: `${domain.color}25` }}>
            <Target size={12} style={{ color: domain.color }} />
            <span className="text-xs" style={{ color: domain.color }}>{domain.impact}</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">{domain.description}</p>

          {/* Capabilities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {domain.capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: domain.color }} />
                {cap}
              </motion.div>
            ))}
          </div>

          {/* Tool tags */}
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

// ─── Impact Project Card ────────────────────────────────────────────────────────

function ImpactProjectCard({ project, index }: { project: typeof impactProjects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-[#F5C518]/20 transition-all duration-300 group"
    >
      {project.featured && (
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/30">
          <span className="text-[10px] text-[#F5C518] flex items-center gap-1"><Star size={9} className="fill-[#F5C518]" /> Featured</span>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left */}
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

          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/[0.08] text-gray-400">{t}</span>
            ))}
          </div>
        </div>

        {/* Right: metrics */}
        <div className="md:w-52 shrink-0">
          <div className="h-full rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 flex flex-col justify-center gap-5">
            {project.metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F5C518]/10 border border-[#F5C518]/20 flex items-center justify-center shrink-0">
                  <m.icon size={14} className="text-[#F5C518]" />
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
    </motion.div>
  );
}

// ─── Side Project Card ─────────────────────────────────────────────────────────

function SideProjectCard({ project, index }: { project: typeof sideProjects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-[#F5C518]/20 transition-all duration-300 group flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-2xl">{project.emoji}</div>
        <div className="flex gap-2">
          <a href={project.links.github} className="p-1.5 rounded-lg text-gray-600 hover:text-white transition-colors">
            <Github size={14} />
          </a>
          <a href={project.links.live} className="p-1.5 rounded-lg text-gray-600 hover:text-[#F5C518] transition-colors">
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <h4 className="text-white mb-2 group-hover:text-[#F5C518] transition-colors" style={{ fontWeight: 600 }}>{project.title}</h4>
      <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span key={t} className="px-2 py-0.5 text-[10px] rounded border border-white/[0.08] text-gray-500">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Resource Card ─────────────────────────────────────────────────────────────

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
          <res.icon size={16} style={{ color: res.color }} />
        </div>
        <h4 className="text-white text-sm" style={{ fontWeight: 600 }}>{res.category}</h4>
      </div>

      <div className="space-y-3">
        {res.items.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-3 group"
          >
            <div>
              <p className="text-gray-300 text-sm group-hover:text-white transition-colors" style={{ fontWeight: 500 }}>{item.name}</p>
              <p className="text-gray-600 text-xs">{item.desc}</p>
            </div>
            <ChevronRight size={14} className="text-gray-700 group-hover:text-[#F5C518] transition-colors mt-0.5 shrink-0" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Architecture Diagram ──────────────────────────────────────────────────────

function ArchDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const nodes = [
    { id: 'client', label: 'Client', sub: 'Next.js / React', x: '50%', y: '8%', color: '#F5C518', icon: Globe },
    { id: 'edge', label: 'Edge Layer', sub: 'Vercel Edge / CDN', x: '50%', y: '28%', color: '#E5E7EB', icon: Cloud },
    { id: 'api', label: 'API Gateway', sub: 'REST / GraphQL', x: '25%', y: '50%', color: '#F5C518', icon: Workflow },
    { id: 'ai', label: 'AI Service', sub: 'OpenAI + LangChain', x: '75%', y: '50%', color: '#A78BFA', icon: Brain },
    { id: 'db', label: 'Database', sub: 'PostgreSQL + Redis', x: '25%', y: '75%', color: '#34D399', icon: Database },
    { id: 'vector', label: 'Vector DB', sub: 'Pinecone / pgvector', x: '75%', y: '75%', color: '#A78BFA', icon: Braces },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative p-8 rounded-2xl bg-white/[0.02] border border-[#F5C518]/15 overflow-hidden"
      style={{ minHeight: 380 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="arch-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5C518" strokeWidth="0.5" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
        </svg>
      </div>

      {/* SVG Lines */}
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

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: 'spring' }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: node.x, top: node.y }}
        >
          <div className="flex flex-col items-center gap-1.5 cursor-default">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center border backdrop-blur"
              style={{
                background: `${node.color}12`,
                borderColor: `${node.color}40`,
                boxShadow: `0 0 20px ${node.color}20`,
              }}
            >
              <node.icon size={18} style={{ color: node.color }} />
            </motion.div>
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

// ─── Main Page ─────────────────────────────────────────────────────────────────

export function Expertise() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navbar />

      {/* ── Hero ── */}
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
                <Sparkles size={12} className="text-[#F5C518]" />
                <span className="text-xs text-[#F5C518]">Rare skill combination</span>
              </div>
            </div>

            <h1 className="text-center mb-6" style={{ fontFamily: 'var(--font-geist)', fontWeight: 800, lineHeight: 1.05 }}>
              <span className="block text-5xl md:text-7xl text-white">AI × Design</span>
              <span className="block text-5xl md:text-7xl text-[#F5C518] mt-1">× Architecture</span>
            </h1>

            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Most developers specialize in one layer. I operate across all three — building AI-powered products,
              designing the interfaces people love, and architecting the systems they trust.
            </p>

            {/* Domain quick-jump pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {domains.map((d) => (
                <motion.a
                  key={d.id}
                  href={`#${d.id}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => { e.preventDefault(); document.getElementById(d.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all"
                  style={{ borderColor: `${d.color}30`, background: `${d.color}08`, color: d.color }}
                >
                  <span>{d.emoji}</span>
                  {d.title.split(' ')[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Impact bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { v: '6+', l: 'AI Products Shipped', icon: Brain, color: '#F5C518' },
              { v: '3', l: 'Design Systems Built', icon: PenTool, color: '#A78BFA' },
              { v: '1M+', l: 'Req/day Architectured', icon: Layers, color: '#34D399' },
              { v: '60%', l: 'Dev Speed with Cursor', icon: Zap, color: '#E5E7EB' },
            ].map((s, i) => (
              <div key={i} className="p-5 rounded-2xl text-center border border-white/[0.07] bg-white/[0.02]">
                <s.icon size={20} className="mx-auto mb-2" style={{ color: s.color }} />
                <div style={{ color: s.color, fontFamily: 'var(--font-geist)', fontWeight: 800, fontSize: '1.75rem', lineHeight: 1 }}>{s.v}</div>
                <div className="text-xs text-gray-500 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Domains ── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <SectionHeader
            label="Expertise"
            title={<>Four domains, <span className="text-[#F5C518]">one mindset</span></>}
            subtitle="Each pillar reinforces the others — I design with AI, build with AI, and architect for AI."
          />
          {domains.map((domain, i) => (
            <DomainCard key={domain.id} domain={domain} index={i} />
          ))}
        </div>
      </section>

      {/* ── Architecture Diagram ── */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            label="System Design"
            title={<>How I architect <span className="text-[#F5C518]">AI systems</span></>}
            subtitle="A reference architecture I use for full-stack AI products — from edge to vector store."
          />
          <div className="mb-6">
            <ArchDiagram />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-xs text-gray-600 mt-4"
          >
            Typical AI SaaS architecture — each project is tailored based on scale, budget, and team size.
          </motion.p>
        </div>
      </section>

      {/* ── Impact Projects ── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="Impact Work"
            title={<>High-impact <span className="text-[#F5C518]">projects</span></>}
            subtitle="Real work shipped to production that demonstrates the combination of these four domains."
          />
          <div className="space-y-6">
            {impactProjects.map((project, i) => (
              <ImpactProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Side Projects ── */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="Side Projects"
            title={<>Building in <span className="text-[#F5C518]">public</span></>}
            subtitle="Experiments, tools, and micro-products I build to explore new ideas at the intersection of AI and dev tools."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sideProjects.map((project, i) => (
              <SideProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="Resources"
            title={<>My go-to <span className="text-[#F5C518]">toolkit</span></>}
            subtitle="Tools, frameworks, and platforms I actively use and recommend."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {resources.map((res, i) => (
              <ResourceCard key={i} res={res} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.06) 0%, transparent 70%)' }} />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/30 to-transparent" />

            <div className="relative">
              <div className="text-3xl mb-4">🚀</div>
              <h2 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
                Let's build something
                <span className="text-[#F5C518]"> powerful</span> together
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you need an AI-powered product, a design system, a robust architecture, or all three — I can take it from whiteboard to production.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/#contact">
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(245,197,24,0.3)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F5C518] text-black hover:bg-[#DEBA15] transition-all"
                    style={{ fontWeight: 700 }}
                  >
                    Start a Project
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#F5C518]/40 text-[#F5C518] hover:bg-[#F5C518]/8 transition-all"
                    style={{ fontWeight: 600 }}
                  >
                    Back to Portfolio
                  </motion.button>
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