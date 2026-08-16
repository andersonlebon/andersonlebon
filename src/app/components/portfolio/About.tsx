import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Cloud, Code2, Globe, BrainCircuit, Layers } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const highlights = [
  { icon: BrainCircuit, label: 'AI Engineering', description: 'AI-enabled products, model APIs, and workflows' },
  { icon: Users, label: 'Product Delivery', description: 'Shipped learning, booking, and operations platforms' },
  { icon: Cloud, label: 'Cloud Infrastructure', description: 'AWS, Docker, CI/CD, and Vercel' },
  { icon: Code2, label: 'Software Development', description: 'React, Next.js, Node.js, Rails' },
  { icon: Globe, label: 'Remote Collaboration', description: 'Distributed teams across time zones' },
  { icon: Layers, label: 'Scalable Architecture', description: 'Auth, payments, dashboards, and data models' },
];

export function About() {
  const { settings } = usePortfolio();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">About Me</p>
          <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
            Passionate about building
            <span className="block text-[#F5C518] mt-1">great software</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F5C518] via-[#F5C518]/40 to-transparent rounded-full" />
              <p className="text-gray-300 leading-relaxed text-lg pl-6">
                {settings.bio}
              </p>
              <p className="text-gray-400 leading-relaxed text-sm pl-6 mt-4">
                Currently at{' '}
                <a href="https://aspynai.com/" target="_blank" rel="noopener noreferrer" className="text-[#F5C518] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]">
                  Aspyn AI
                </a>
                , building AI operator software as a Software Developer and AI Engineer.
              </p>
            </div>

            <div className="mt-8 pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-20">Location</span>
                <span className="text-gray-300 text-sm">{settings.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-20">Status</span>
                <span className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse" />
                  <span className="text-[#F5C518]">Available for work</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-20">Email</span>
                <a href={`mailto:${settings.email}`} className="text-[#F5C518] text-sm hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]">
                  {settings.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-[#F5C518]/30 hover:bg-[#F5C518]/[0.03] transition-all duration-300 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F5C518]/10 flex items-center justify-center mb-3 group-hover:bg-[#F5C518]/20 transition-all border border-[#F5C518]/20">
                  <item.icon size={16} className="text-[#F5C518]" />
                </div>
                <p className="text-white text-sm mb-1" style={{ fontWeight: 500 }}>{item.label}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
