import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router';
import {
  Heart, BookOpen, Star, Sunrise, Award, Users, Sparkles,
  MessageCircle, Cross, Compass, TrendingUp, Calendar, Target,
  Gift, Shield, Lightbulb, Hand, ArrowRight, Quote
} from 'lucide-react';
import { Navbar } from '../components/portfolio/Navbar';
import { Footer } from '../components/portfolio/Footer';
import andersonPhoto from 'figma:asset/e0a67e12da7a5ae3d222ee29bbc6e7853f37de55.png';

// ─── Floating Light Particles ───────────────────────────────────────────────────

function FloatingLight({ delay = 0, x = 0, y = 0, duration = 8 }: { delay?: number; x?: number; y?: number; duration?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        x: [x, x + Math.random() * 40 - 20],
        y: [y, y - 60],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute w-2 h-2 rounded-full bg-[#F5C518]"
      style={{ left: `${x}%`, top: `${y}%`, filter: 'blur(2px)' }}
    />
  );
}

function PulsingGlow({ delay = 0, size = 100 }: { delay?: number; size?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0.3, scale: 0.8 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute rounded-full bg-[#F5C518]/20"
      style={{
        width: size,
        height: size,
        filter: 'blur(40px)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────

export function Faith() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const milestones = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Encountered Christ at a local church gathering. A moment that changed everything.',
      icon: Sunrise,
      color: '#F5C518'
    },
    {
      year: '2019',
      title: 'Baptism & Commitment',
      description: 'Publicly declared my faith through baptism. Began daily Bible study and prayer.',
      icon: Cross,
      color: '#A78BFA'
    },
    {
      year: '2020',
      title: 'Spiritual Mentorship',
      description: 'Found a mentor who guided me through Scripture and deepened my understanding.',
      icon: Users,
      color: '#34D399'
    },
    {
      year: '2021',
      title: 'Serving Others',
      description: 'Started volunteering in youth ministry and community outreach programs.',
      icon: Hand,
      color: '#F5C518'
    },
    {
      year: '2022',
      title: 'Leadership & Growth',
      description: 'Led a small group Bible study. Learned to shepherd others while growing myself.',
      icon: Award,
      color: '#A78BFA'
    },
    {
      year: '2023-2026',
      title: 'Walking in Purpose',
      description: 'Discovering how faith integrates with my work, relationships, and calling.',
      icon: Compass,
      color: '#34D399'
    }
  ];

  const coreValues = [
    {
      icon: BookOpen,
      title: 'Daily Scripture',
      description: 'Starting each day in God\'s Word to align my mind and heart with His truth.',
      color: '#F5C518'
    },
    {
      icon: MessageCircle,
      title: 'Prayer Life',
      description: 'Constant communication with God through prayer, thanksgiving, and worship.',
      color: '#A78BFA'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Growing alongside brothers and sisters in Christ through fellowship.',
      color: '#34D399'
    },
    {
      icon: Heart,
      title: 'Love in Action',
      description: 'Serving others as an expression of God\'s love working through me.',
      color: '#F5C518'
    },
    {
      icon: Shield,
      title: 'Faith Over Fear',
      description: 'Trusting God\'s sovereignty even when circumstances feel uncertain.',
      color: '#A78BFA'
    },
    {
      icon: Lightbulb,
      title: 'Lifelong Learning',
      description: 'Never stopping my pursuit of knowing God more deeply.',
      color: '#34D399'
    }
  ];

  const keyVerses = [
    {
      verse: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.',
      reference: 'Jeremiah 29:11',
      impact: 'This verse reminds me that God\'s plans for my life are good, even when I can\'t see the full picture.'
    },
    {
      verse: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
      reference: 'Proverbs 3:5-6',
      impact: 'My anchor verse for decision-making — surrendering control and trusting His guidance.'
    },
    {
      verse: 'I can do all things through Christ who strengthens me.',
      reference: 'Philippians 4:13',
      impact: 'A constant reminder that my strength comes not from myself, but from Christ in me.'
    }
  ];

  const impactAreas = [
    { icon: Target, label: 'Youth Mentored', value: '20+' },
    { icon: Calendar, label: 'Years Walking', value: '8+' },
    { icon: BookOpen, label: 'Books Read', value: '50+' },
    { icon: Gift, label: 'Lives Touched', value: '100+' }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] overflow-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Light Particles */}
          {[...Array(20)].map((_, i) => (
            <FloatingLight
              key={i}
              delay={i * 0.3}
              x={Math.random() * 100}
              y={Math.random() * 100}
              duration={6 + Math.random() * 4}
            />
          ))}

          {/* Pulsing Glows */}
          <PulsingGlow delay={0} size={300} />
          <div className="absolute top-1/4 left-1/4">
            <PulsingGlow delay={1} size={200} />
          </div>
          <div className="absolute bottom-1/4 right-1/4">
            <PulsingGlow delay={2} size={250} />
          </div>

          {/* Radial Gradient */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(245,197,24,0.08) 0%, transparent 60%)'
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F5C518]/30 bg-[#F5C518]/5 mb-8"
            >
              <Cross size={14} className="text-[#F5C518]" />
              <span className="text-sm text-[#F5C518]" style={{ fontWeight: 600 }}>
                My Faith Journey
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
              style={{ fontFamily: 'var(--font-geist)', fontWeight: 800, lineHeight: 1.05 }}
            >
              <span className="block text-5xl md:text-7xl text-white mb-3">
                Walking with Christ
              </span>
              <span className="block text-4xl md:text-6xl text-[#F5C518]">
                A Journey of Grace
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              My relationship with Jesus Christ is the foundation of everything I am and everything I do. This is the story of how God transformed my life and continues to shape me daily.
            </motion.p>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[#F5C518]/20"
              style={{ boxShadow: '0 25px 50px -12px rgba(245,197,24,0.25)' }}
            >
              <img
                src={andersonPhoto}
                alt="Faith Journey"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] text-center"
              >
                <area.icon size={28} className="text-[#F5C518] mx-auto mb-3" />
                <div className="text-[#F5C518] text-4xl mb-2" style={{ fontFamily: 'var(--font-geist)', fontWeight: 800 }}>
                  {area.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {area.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">My Journey</p>
            <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
              Milestones of <span className="text-[#F5C518]">faith</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each season has brought new lessons, deeper understanding, and a closer walk with Jesus.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F5C518]/20 via-[#F5C518]/40 to-[#F5C518]/20 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-block p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                      <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="px-3 py-1 rounded-full border text-xs" style={{
                          borderColor: `${milestone.color}40`,
                          background: `${milestone.color}10`,
                          color: milestone.color,
                          fontWeight: 600
                        }}>
                          {milestone.year}
                        </div>
                      </div>
                      <h3 className="text-white text-xl mb-3" style={{ fontWeight: 700 }}>
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative flex items-center justify-center shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                      className="w-14 h-14 rounded-full flex items-center justify-center border-2 z-10"
                      style={{
                        borderColor: milestone.color,
                        background: `${milestone.color}15`,
                        boxShadow: `0 0 30px ${milestone.color}40`
                      }}
                    >
                      <milestone.icon size={24} style={{ color: milestone.color }} />
                    </motion.div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">Daily Practice</p>
            <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
              Living out my <span className="text-[#F5C518]">faith</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Faith isn't just belief — it's a daily practice that shapes how I live, work, and love.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(245,197,24,0.3)' }}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] overflow-hidden transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{
                  background: `linear-gradient(90deg, transparent, ${value.color}60, transparent)`
                }} />

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border" style={{
                  background: `${value.color}10`,
                  borderColor: `${value.color}30`
                }}>
                  <value.icon size={22} style={{ color: value.color }} />
                </div>

                <h3 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scripture Verses ── */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">God's Word</p>
            <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
              Verses that <span className="text-[#F5C518]">anchor</span> me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These scriptures have been my foundation through every season of life.
            </p>
          </motion.div>

          <div className="space-y-8">
            {keyVerses.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.07] overflow-hidden"
              >
                <div className="absolute top-6 left-6 opacity-10">
                  <Quote size={60} className="text-[#F5C518]" />
                </div>

                <div className="relative">
                  <p className="text-white text-lg md:text-xl mb-4 leading-relaxed italic">
                    "{item.verse}"
                  </p>
                  <p className="text-[#F5C518] mb-6" style={{ fontWeight: 700 }}>
                    — {item.reference}
                  </p>
                  <div className="p-4 rounded-xl bg-[#F5C518]/5 border border-[#F5C518]/20">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <span className="text-[#F5C518]" style={{ fontWeight: 600 }}>Why it matters:</span> {item.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimony ── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-10 md:p-14 rounded-2xl border border-[#F5C518]/20 overflow-hidden text-center"
            style={{ background: 'rgba(245,197,24,0.03)' }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.08) 0%, transparent 70%)'
            }} />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/60 to-transparent" />

            <div className="relative">
              <div className="text-5xl mb-6">✝️</div>
              <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
                Faith shapes <span className="text-[#F5C518]">everything</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                My relationship with Christ isn't separate from my work — it's the lens through which I see everything. From how I build products to how I treat people, my faith is woven into who I am.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F5C518] text-black hover:bg-[#DEBA15] transition-all"
                    style={{ fontWeight: 700 }}
                  >
                    Back to Portfolio
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
                <Link to="/expertise">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#F5C518]/40 text-[#F5C518] hover:bg-[#F5C518]/8 transition-all"
                    style={{ fontWeight: 600 }}
                  >
                    View My Work
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}