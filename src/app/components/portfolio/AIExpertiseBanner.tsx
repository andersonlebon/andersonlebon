import { useRef } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import { Sparkles, Brain, PenTool, Layers, Zap, ArrowRight } from 'lucide-react';

const pills = [
  { icon: Brain, label: 'OpenAI & LLMs', color: '#F5C518' },
  { icon: Zap, label: 'Cursor & AI Dev', color: '#E5E7EB' },
  { icon: PenTool, label: 'Figma & Design Systems', color: '#A78BFA' },
  { icon: Layers, label: 'System Architecture', color: '#34D399' },
];

export function AIExpertiseBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-16 bg-[#0F0F0F] relative overflow-hidden">
      {/* Gold glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border border-[#F5C518]/25 overflow-hidden p-8 md:p-10"
          style={{ background: 'rgba(245,197,24,0.03)' }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#F5C518] rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#F5C518] rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#F5C518] rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#F5C518] rounded-br-2xl" />

          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            {/* Left */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Sparkles size={15} className="text-[#F5C518]" />
                <span className="text-xs text-[#F5C518] uppercase tracking-widest">Beyond Full-Stack</span>
              </div>
              <h3 className="text-white mb-3" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.5rem' }}>
                AI × Design × Architecture
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                I work at the rare intersection of AI engineering, design systems, and cloud architecture.
                See my deep expertise, impact projects, and side projects.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-col gap-2 shrink-0">
              {pills.map((pill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl border"
                  style={{
                    borderColor: `${pill.color}20`,
                    background: `${pill.color}08`,
                  }}
                >
                  <pill.icon size={14} style={{ color: pill.color }} />
                  <span className="text-sm text-gray-300">{pill.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="shrink-0">
              <Link to="/expertise">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(245,197,24,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F5C518] text-black hover:bg-[#DEBA15] transition-all"
                  style={{ fontWeight: 700 }}
                >
                  View Full Expertise
                  <ArrowRight size={15} />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
