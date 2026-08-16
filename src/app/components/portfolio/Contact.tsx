import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export function Contact() {
  const { settings } = usePortfolio();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const githubHandle = settings.githubUrl.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, '');
  const linkedinHandle = settings.linkedinUrl.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, '');

  const socials = [
    { icon: Mail, label: 'Email', value: settings.email, href: `mailto:${settings.email}`, gold: true },
    { icon: Github, label: 'GitHub', value: `github.com/${githubHandle}`, href: settings.githubUrl, gold: false },
    { icon: Linkedin, label: 'LinkedIn', value: `linkedin.com/in/${linkedinHandle}`, href: settings.linkedinUrl, gold: false },
  ];

  return (
    <section id="contact" className="py-28 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">Contact</p>
          <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
            Let's work together
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            For roles, collaborations, or product work, email me or reach out on LinkedIn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518] ${
                s.gold
                  ? 'border-[#F5C518]/25 bg-[#F5C518]/5 hover:border-[#F5C518]/50 hover:bg-[#F5C518]/8'
                  : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                s.gold ? 'bg-[#F5C518] text-black' : 'bg-white/8 border border-white/10'
              }`}>
                <s.icon size={18} className={s.gold ? 'text-black' : 'text-gray-400 group-hover:text-white'} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                <p className={`text-sm ${s.gold ? 'text-[#F5C518]' : 'text-gray-300 group-hover:text-white'} transition-colors`}>
                  {s.value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
