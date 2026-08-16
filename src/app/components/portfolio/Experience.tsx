import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export function Experience() {
  const { experience } = usePortfolio();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-28 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">Career</p>
          <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
            Work history
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#F5C518]/60 via-[#F5C518]/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-12 h-12 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.2, type: 'spring' }}
                    className="w-4 h-4 rounded-full bg-[#F5C518] border-2 border-[#0F0F0F]"
                    style={{ boxShadow: '0 0 12px rgba(245,197,24,0.5)' }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-[#F5C518]/30 hover:bg-[#F5C518]/[0.02] transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-white mb-1" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Building2 size={14} />
                        {job.companyUrl ? (
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F5C518]/80 hover:text-[#F5C518] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
                          >
                            {job.company}
                          </a>
                        ) : (
                          <span className="text-[#F5C518]/80">{job.company}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/25 text-[#F5C518] text-xs">
                      <Calendar size={12} />
                      {job.duration}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                        <CheckCircle2 size={14} className="text-[#F5C518]/60 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}