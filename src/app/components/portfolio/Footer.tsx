import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const { settings } = usePortfolio();
  const location = useLocation();

  const scrollTo = (href: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#F5C518]/10 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link to="/" aria-label="Anderson home" className="inline-flex items-center gap-0 mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]">
              <span className="text-[#F5C518]" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.2rem' }}>&lt;/</span>
              <span className="text-white" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.2rem' }}>{settings.name}</span>
              <span className="text-[#F5C518]" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.2rem' }}>&gt;.</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {settings.subtitle}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#F5C518] uppercase tracking-widest mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-gray-400 hover:text-[#F5C518] transition-colors text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/expertise"
                className="text-sm text-gray-400 hover:text-[#F5C518] transition-colors text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
              >
                Expertise
              </Link>
              <Link
                to="/projects"
                className="text-sm text-gray-400 hover:text-[#F5C518] transition-colors text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
              >
                All Projects
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs text-[#F5C518] uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: settings.githubUrl, label: 'Anderson on GitHub' },
                { icon: Linkedin, href: settings.linkedinUrl, label: 'Anderson on LinkedIn' },
                { icon: Mail, href: `mailto:${settings.email}`, label: `Email ${settings.email}` },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.label.startsWith('Email') ? undefined : '_blank'}
                  rel={s.label.startsWith('Email') ? undefined : 'noopener noreferrer'}
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg border border-[#F5C518]/20 flex items-center justify-center text-gray-400 hover:text-[#F5C518] hover:border-[#F5C518]/50 hover:bg-[#F5C518]/8 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
                >
                  <s.icon size={16} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#F5C518]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {settings.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Built with <Heart size={10} className="text-[#F5C518] fill-[#F5C518]" aria-hidden="true" /> using React and Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
