import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Github, Star, BookOpen, Users } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const stats = [
  { icon: BookOpen, label: 'Public repositories', value: '80', color: 'text-[#F5C518]', bg: 'bg-[#F5C518]/10 border-[#F5C518]/20' },
  { icon: Users, label: 'GitHub followers', value: '137', color: 'text-gray-300', bg: 'bg-white/5 border-white/10' },
  { icon: Star, label: 'Profile since', value: '2020', color: 'text-[#F5C518]', bg: 'bg-[#F5C518]/10 border-[#F5C518]/20' },
  { icon: Github, label: 'Handle', value: 'andersonlebon', color: 'text-gray-300', bg: 'bg-white/5 border-white/10' },
];

export function GitHubActivity() {
  const { settings } = usePortfolio();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">Open Source</p>
          <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white mb-2 flex items-center justify-center gap-3" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
            <Github size={36} className="text-[#F5C518]" />
            GitHub Activity
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((stat, i) => (
            <div key={i} className={`p-5 rounded-2xl border ${stat.bg} text-center`}>
              <stat.icon size={20} className={`${stat.color} mx-auto mb-2`} />
              <div className={`text-2xl mb-1 ${stat.color}`} style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="p-6 rounded-2xl bg-white/[0.02] border border-[#F5C518]/15"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <p className="text-white text-sm" style={{ fontWeight: 500 }}>Live GitHub summary</p>
            <a
              href={settings.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#F5C518] hover:underline"
            >
              View profile
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=andersonlebon&theme=tokyonight"
              alt="Anderson Lebon GitHub stats"
              className="w-full max-w-[410px] h-auto"
            />
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=andersonlebon&theme=tokyonight"
              alt="Anderson Lebon top languages"
              className="w-full max-w-[410px] h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
