import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Github, Linkedin, Menu, X, Sparkles } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { settings } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const location = useLocation();
  const isExpertisePage = location.pathname === '/expertise';

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    if (isExpertisePage) return;
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpertisePage]);

  const scrollTo = (href: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F0F0F]/90 backdrop-blur-xl border-b border-[#F5C518]/10 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" aria-label="Anderson home">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-0 cursor-pointer"
            >
              <span className="text-[#F5C518]" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.2rem' }}>&lt;/</span>
              <span className="text-white" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.2rem' }}>
                {settings.name}
              </span>
              <span className="text-[#F5C518]" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.2rem' }}>&gt;.</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {!isExpertisePage && navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm rounded-lg transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518] ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#F5C518]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-[#F5C518]/8 rounded-lg border border-[#F5C518]/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}

            <Link
              to="/expertise"
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518] ${
                isExpertisePage
                  ? 'text-[#F5C518] bg-[#F5C518]/8 border border-[#F5C518]/20'
                  : 'text-gray-400 hover:text-[#F5C518] hover:bg-[#F5C518]/8'
              }`}
            >
              <Sparkles size={13} aria-hidden="true" />
              Expertise
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={settings.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anderson on GitHub"
              className="p-2 rounded-lg text-gray-400 hover:text-[#F5C518] hover:bg-[#F5C518]/8 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={settings.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anderson on LinkedIn"
              className="p-2 rounded-lg text-gray-400 hover:text-[#F5C518] hover:bg-[#F5C518]/8 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 text-gray-400 hover:text-[#F5C518] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </motion.nav>

      <motion.div
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -20 }}
        style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
        className="fixed top-16 left-0 right-0 z-40 bg-[#0F0F0F]/98 backdrop-blur-xl border-b border-[#F5C518]/10 md:hidden"
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {!isExpertisePage && navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-4 py-3 text-left text-sm rounded-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518] ${
                activeSection === link.href.replace('#', '')
                  ? 'text-[#F5C518] bg-[#F5C518]/8 border border-[#F5C518]/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}

          <Link
            to="/expertise"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518] ${
              isExpertisePage
                ? 'text-[#F5C518] bg-[#F5C518]/8 border border-[#F5C518]/20'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles size={14} aria-hidden="true" />
            Expertise
          </Link>

          <div className="flex items-center gap-3 px-4 pt-3 border-t border-[#F5C518]/10 mt-2">
            <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Anderson on GitHub" className="text-gray-400 hover:text-[#F5C518]">
              <Github size={18} aria-hidden="true" />
            </a>
            <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Anderson on LinkedIn" className="text-gray-400 hover:text-[#F5C518]">
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
