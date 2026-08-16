import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { usePortfolio } from '../../context/PortfolioContext';

const categoryStyles: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  Frontend:  { bg: 'hover:bg-[#F5C518]/8',  border: 'border-[#F5C518]/20 hover:border-[#F5C518]/50',  text: 'text-[#F5C518]',   dot: 'bg-[#F5C518]' },
  Backend:   { bg: 'hover:bg-white/[0.06]', border: 'border-white/10 hover:border-white/25',           text: 'text-gray-300',    dot: 'bg-gray-400' },
  Databases: { bg: 'hover:bg-[#F5C518]/5',  border: 'border-[#F5C518]/15 hover:border-[#F5C518]/40',  text: 'text-[#F5C518]/80',dot: 'bg-[#F5C518]/80' },
  DevOps:    { bg: 'hover:bg-white/[0.04]', border: 'border-white/10 hover:border-white/20',           text: 'text-gray-400',    dot: 'bg-gray-500' },
  Mobile:    { bg: 'hover:bg-[#F5C518]/6',  border: 'border-[#F5C518]/20 hover:border-[#F5C518]/45',  text: 'text-[#F5C518]/90',dot: 'bg-[#F5C518]/90' },
};

export function TechStack() {
  const { skills } = usePortfolio();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];
  const filtered = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory);

  return (
    <section id="techstack" className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(245,197,24,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">Tech Stack</p>
          <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
            Tools of the trade
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A curated set of technologies I use to build fast, scalable, and maintainable products.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#F5C518] text-black border border-[#F5C518]'
                  : 'text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
              style={{ fontWeight: activeCategory === cat ? 700 : 400 }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((skill, i) => {
            const styles = categoryStyles[skill.category] || categoryStyles.Backend;
            return (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className={`group p-4 rounded-xl border bg-white/[0.02] ${styles.border} ${styles.bg} transition-all duration-300 cursor-default`}
              >
                <div className="text-2xl mb-2">{skill.icon}</div>
                <p className="text-white text-sm" style={{ fontWeight: 500 }}>{skill.name}</p>
                <p className={`text-xs mt-1 ${styles.text}`}>{skill.category}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {Object.entries(categoryStyles).map(([cat, styles]) => {
            const count = skills.filter(s => s.category === cat).length;
            return (
              <div key={cat} className={`p-4 rounded-xl bg-white/[0.02] border ${styles.border} text-center`}>
                <div className={`text-2xl mb-1 ${styles.text}`} style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>{count}</div>
                <div className="text-xs text-gray-400">{cat}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
