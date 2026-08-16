import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Github, Star, GitCommit, BookOpen, TrendingUp } from 'lucide-react';

function generateContributions() {
  const weeks = 53;
  const data = [];
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.7) level = 1;
      if (rand > 0.8) level = 2;
      if (rand > 0.9) level = 3;
      if (rand > 0.95) level = 4;
      week.push(level);
    }
    data.push(week);
  }
  return data;
}

const contributions = generateContributions();

const levelColors = [
  'bg-white/5',
  'bg-[#F5C518]/20',
  'bg-[#F5C518]/45',
  'bg-[#F5C518]/70',
  'bg-[#F5C518]',
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const stats = [
  { icon: GitCommit, label: 'Commits (2025)', value: '847', color: 'text-[#F5C518]', bg: 'bg-[#F5C518]/10 border-[#F5C518]/20' },
  { icon: BookOpen, label: 'Repositories', value: '32', color: 'text-gray-300', bg: 'bg-white/5 border-white/10' },
  { icon: Star, label: 'Stars Earned', value: '214', color: 'text-[#F5C518]', bg: 'bg-[#F5C518]/10 border-[#F5C518]/20' },
  { icon: TrendingUp, label: 'Contribution Streak', value: '23 days', color: 'text-gray-300', bg: 'bg-white/5 border-white/10' },
];

export function GitHubActivity() {
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

        {/* Stats row */}
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

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="p-6 rounded-2xl bg-white/[0.02] border border-[#F5C518]/15"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-white text-sm" style={{ fontWeight: 500 }}>Contribution Graph — 2025</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Less</span>
              {levelColors.map((c, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* Month labels */}
          <div className="flex gap-1 mb-2 pl-4">
            {months.map((m, i) => (
              <div key={i} className="flex-1 text-center" style={{ minWidth: 0 }}>
                <span className="text-[10px] text-gray-600">{m}</span>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="overflow-x-auto">
            <div className="flex gap-1" style={{ minWidth: 700 }}>
              {contributions.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((level, di) => (
                    <motion.div
                      key={di}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.2, delay: (wi * 7 + di) * 0.001 }}
                      title={`Level ${level}`}
                      className={`w-3 h-3 rounded-sm cursor-pointer hover:scale-125 transition-transform ${levelColors[level]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
