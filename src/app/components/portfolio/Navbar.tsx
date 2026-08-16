import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Github, Linkedin, Menu, X, LayoutDashboard, Sparkles, Rocket, Heart } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech Stack', href: '#techstack' },
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
  const isServicesPage = location.pathname === '/services';
  const isFaithPage = location.pathname === '/faith';
  const isSpecialPage = isExpertisePage || isServicesPage || isFaithPage;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => l.href.replace('#', ''));
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
  }, []);

  const scrollTo = (href: string) => {
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
          {/* Logo */}
          <Link to="/">
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {!isSpecialPage && navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
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

            {/* Special Pages Links */}
            <Link
              to="/expertise"
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                isExpertisePage
                  ? 'text-[#F5C518] bg-[#F5C518]/8 border border-[#F5C518]/20'
                  : 'text-gray-400 hover:text-[#F5C518] hover:bg-[#F5C518]/8'
              }`}
            >
              <Sparkles size={13} />
              Expertise
            </Link>

            <Link
              to="/services"
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                isServicesPage
                  ? 'text-[#F5C518] bg-[#F5C518]/8 border border-[#F5C518]/20'
                  : 'text-gray-400 hover:text-[#F5C518] hover:bg-[#F5C518]/8'
              }`}
            >
              <Rocket size={13} />
              Services
            </Link>

            <Link
              to="/faith"
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                isFaithPage
                  ? 'text-[#F5C518] bg-[#F5C518]/8 border border-[#F5C518]/20'
                  : 'text-gray-400 hover:text-[#F5C518] hover:bg-[#F5C518]/8'
              }`}
            >
              <Heart size={13} />
              Faith
            </Link>
          </div>

          {/* Social + Admin */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={settings.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-[#F5C518] hover:bg-[#F5C518]/8 transition-all duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href={settings.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-[#F5C518] hover:bg-[#F5C518]/8 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-[#F5C518]"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -20 }}
        style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
        className="fixed top-16 left-0 right-0 z-40 bg-[#0F0F0F]/98 backdrop-blur-xl border-b border-[#F5C518]/10 md:hidden"
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {!isSpecialPage && navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-4 py-3 text-left text-sm rounded-lg transition-all ${
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
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-lg ${
              isExpertisePage
                ? 'text-[#F5C518] bg-[#F5C518]/8 border border-[#F5C518]/20'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles size={14} />
            Expertise
          </Link>

          <Link
            to="/services"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-lg ${
              isServicesPage
                ? 'text-[#F5C518] bg-[#F5C518]/8 border border-[#F5C518]/20'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Rocket size={14} />
            Services
          </Link>

          <Link
            to="/faith"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-lg ${
              isFaithPage
                ? 'text-[#F5C518] bg-[#F5C518]/8 border border-[#F5C518]/20'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Heart size={14} />
            Faith Journey
          </Link>

          <div className="flex items-center gap-3 px-4 pt-3 border-t border-[#F5C518]/10 mt-2">
            <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F5C518]">
              <Github size={18} />
            </a>
            <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F5C518]">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}