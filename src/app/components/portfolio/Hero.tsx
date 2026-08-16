import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, ChevronDown } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import andersonPhoto from '../../../assets/anderson-portrait.webp';

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F5C518" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function Hero() {
  const { settings } = usePortfolio();
  const reduceMotion = useReducedMotion();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 30 },
    show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const glowTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 8, repeat: Infinity, ease: 'easeInOut' as const };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0F0F0F]">
      <AnimatedGrid />

      <motion.div
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)' }}
        animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={glowTransition}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)' }}
        animate={reduceMotion ? undefined : { scale: [1, 1.2, 1] }}
        transition={reduceMotion ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/60 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.1 }}
          className="relative border border-[#F5C518]/20 rounded-2xl overflow-hidden min-h-[80vh] flex items-stretch"
          style={{ background: 'rgba(245,197,24,0.02)' }}
        >
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#F5C518] rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#F5C518] rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#F5C518] rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#F5C518] rounded-br-2xl" />

          <div className="flex flex-col lg:flex-row items-center w-full">
            <div className="flex-1 flex items-center px-8 md:px-16 py-12 lg:py-0">
              <div className="hidden lg:flex flex-col items-center mr-10 self-center">
                <div className="w-px h-16 bg-gradient-to-b from-[#F5C518]/60 to-transparent mb-3" />
                <p className="text-[10px] text-[#F5C518]/60 tracking-[0.35em] uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  Introduce
                </p>
              </div>

              <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
                <motion.div variants={item} className="flex mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F5C518]/30 bg-[#F5C518]/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518]" />
                    <span className="text-xs text-[#F5C518]">Available for opportunities</span>
                  </div>
                </motion.div>

                <motion.div variants={item}>
                  <p className="text-white/60 text-base mb-2 uppercase tracking-widest" style={{ fontSize: '0.75rem' }}>Hello, my name is</p>
                  <h1 className="mb-4 tracking-tight" style={{ fontFamily: 'var(--font-geist)', fontWeight: 800, lineHeight: 1.05 }}>
                    <span className="text-5xl md:text-6xl lg:text-7xl text-[#F5C518] block">{settings.name.toUpperCase()}</span>
                    <span className="text-3xl md:text-4xl text-white block mt-1">Software Developer &amp; AI Engineer</span>
                  </h1>
                </motion.div>

                <motion.div variants={item} className="w-16 h-0.5 bg-[#F5C518] mb-6" />

                <motion.p variants={item} className="text-gray-400 leading-relaxed mb-3 max-w-md" style={{ fontSize: '0.95rem' }}>
                  {settings.subtitle}
                </motion.p>
                <motion.p variants={item} className="text-sm text-gray-500 mb-8">
                  Currently at{' '}
                  <a
                    href="https://aspynai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5C518] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
                  >
                    Aspyn AI
                  </a>
                  {' · '}{settings.location}
                </motion.p>

                <motion.div variants={item} className="flex items-center gap-3 mb-8">
                  <a
                    href={settings.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Anderson on GitHub"
                    className="p-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-[#F5C518] hover:border-[#F5C518]/40 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
                  >
                    <Github size={18} aria-hidden="true" />
                  </a>
                  <a
                    href={settings.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Anderson on LinkedIn"
                    className="p-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-[#F5C518] hover:border-[#F5C518]/40 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
                  >
                    <Linkedin size={18} aria-hidden="true" />
                  </a>
                </motion.div>

                <motion.div variants={item} className="flex flex-wrap gap-3">
                  <motion.button
                    type="button"
                    onClick={scrollToProjects}
                    whileHover={reduceMotion ? undefined : { scale: 1.03, boxShadow: '0 0 25px rgba(245,197,24,0.3)' }}
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F5C518] text-black text-sm transition-all hover:bg-[#DEBA15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5C518]"
                    style={{ fontWeight: 700 }}
                  >
                    Hire Me
                    <ArrowRight size={15} aria-hidden="true" />
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={scrollToContact}
                    whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#F5C518]/50 text-[#F5C518] text-sm hover:bg-[#F5C518]/10 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5C518]"
                    style={{ fontWeight: 600 }}
                  >
                    <Download size={15} aria-hidden="true" />
                    Download CV
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative lg:w-[45%] flex items-end justify-center lg:justify-end self-stretch overflow-hidden">
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at bottom, rgba(245,197,24,0.12) 0%, transparent 70%)' }}
              />

              <motion.div
                initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8, x: reduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 1.2, type: 'spring' }}
                className="absolute bottom-12 right-4 lg:right-10 z-20 text-right"
              >
                <div className="inline-flex flex-col items-end">
                  <span className="text-[#F5C518]" style={{ fontFamily: 'var(--font-geist)', fontWeight: 900, fontSize: '4rem', lineHeight: 1 }}>+5</span>
                  <span className="text-white text-xs tracking-widest uppercase">Years</span>
                  <span className="text-white text-xs tracking-widest uppercase">Experience</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.5 }}
                className="relative z-10 w-full h-full flex items-end justify-center min-h-[420px]"
              >
                <img
                  src={andersonPhoto}
                  alt="Anderson, Software Developer and AI Engineer based in Montreal"
                  width={934}
                  height={1400}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full max-h-[550px] w-auto object-contain object-bottom select-none"
                  style={{ filter: 'drop-shadow(0 0 40px rgba(245,197,24,0.15))' }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.9 }}
          className="grid grid-cols-3 gap-4 mt-6 max-w-sm"
        >
          {[
            { value: '5+', label: 'Years Exp.' },
            { value: '6+', label: 'Featured projects' },
            { value: '5', label: 'Companies' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[#F5C518] text-xl mb-0.5" style={{ fontFamily: 'var(--font-geist)', fontWeight: 800 }}>
                {stat.value}
              </div>
              <div className="text-gray-500" style={{ fontSize: '0.7rem' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={reduceMotion ? { duration: 0 } : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[#F5C518]/40"
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
