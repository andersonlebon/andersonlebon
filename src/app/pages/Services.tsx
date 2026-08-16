import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Monitor, LayoutDashboard, Clock, Smartphone, Zap, Shield, 
  Award, Cpu, CircuitBoard, Cog, Database, Code2, User, Heart, Send, 
  Check, Mail, Phone, MessageSquare, Rocket, ArrowRight, ExternalLink, Github, Timer
} from 'lucide-react';
import { Navbar } from '../components/portfolio/Navbar';
import { Footer } from '../components/portfolio/Footer';
import andersonPhoto from 'figma:asset/e0a67e12da7a5ae3d222ee29bbc6e7853f37de55.png';
import { usePortfolio } from '../context/PortfolioContext';
import { SEO } from '../components/SEO';

// ─── Floating Vectors ───────────────────────────────────────────────────────────

function FloatingVector({ icon: Icon, delay = 0, x = 0, y = 0, duration = 8 }: { icon: any; delay?: number; x?: number; y?: number; duration?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.15, 0.4, 0.15],
        x: [0, 30, 0],
        y: [0, -20, 0],
        rotate: [0, 10, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <Icon size={35} className="text-[#F5C518]/30" />
    </motion.div>
  );
}

// ─── Countdown Timer ────────────────────────────────────────────────────────────

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to 1 week from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative inline-flex flex-col gap-2 sm:gap-3 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-600/10 border-2 border-red-500/40 backdrop-blur-xl mb-6 sm:mb-8 overflow-hidden w-full max-w-full"
      style={{
        boxShadow: '0 0 40px rgba(239, 68, 68, 0.15), inset 0 0 30px rgba(245, 197, 24, 0.05)'
      }}
    >
      {/* Animated background pulse */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 blur-xl"
      />

      {/* Content */}
      <div className="relative flex items-center gap-2 sm:gap-3">
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Timer size={20} className="text-red-400 sm:w-6 sm:h-6" />
        </motion.div>
        <div>
          <span className="text-white text-sm sm:text-lg" style={{ fontWeight: 700 }}>Limited Time Offer Expires In:</span>
          <div className="text-red-400 text-[10px] sm:text-xs" style={{ fontWeight: 600 }}>Act now before it's too late!</div>
        </div>
      </div>

      <div className="relative flex items-center justify-center gap-1.5 sm:gap-3 overflow-x-auto pb-2">
        {/* Days */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center min-w-[60px] sm:min-w-[80px] p-2 sm:p-3 rounded-xl bg-black/60 border border-[#F5C518]/30 backdrop-blur-md flex-shrink-0"
          style={{
            boxShadow: '0 4px 20px rgba(245, 197, 24, 0.15)'
          }}
        >
          <motion.div 
            key={timeLeft.days}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-[#F5C518] text-2xl sm:text-4xl tabular-nums mb-0.5 sm:mb-1" 
            style={{ fontWeight: 900, lineHeight: 1 }}
          >
            {String(timeLeft.days).padStart(2, '0')}
          </motion.div>
          <div className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-widest" style={{ fontWeight: 600 }}>
            DAYS
          </div>
        </motion.div>

        {/* Colon Separator */}
        <motion.span 
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-[#F5C518] text-xl sm:text-3xl" 
          style={{ fontWeight: 700 }}
        >
          :
        </motion.span>

        {/* Hours */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center min-w-[60px] sm:min-w-[80px] p-2 sm:p-3 rounded-xl bg-black/60 border border-[#F5C518]/30 backdrop-blur-md flex-shrink-0"
          style={{
            boxShadow: '0 4px 20px rgba(245, 197, 24, 0.15)'
          }}
        >
          <motion.div 
            key={timeLeft.hours}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-[#F5C518] text-2xl sm:text-4xl tabular-nums mb-0.5 sm:mb-1" 
            style={{ fontWeight: 900, lineHeight: 1 }}
          >
            {String(timeLeft.hours).padStart(2, '0')}
          </motion.div>
          <div className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-widest" style={{ fontWeight: 600 }}>
            HOURS
          </div>
        </motion.div>

        {/* Colon Separator */}
        <motion.span 
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-[#F5C518] text-xl sm:text-3xl" 
          style={{ fontWeight: 700 }}
        >
          :
        </motion.span>

        {/* Minutes */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center min-w-[60px] sm:min-w-[80px] p-2 sm:p-3 rounded-xl bg-black/60 border border-[#F5C518]/30 backdrop-blur-md flex-shrink-0"
          style={{
            boxShadow: '0 4px 20px rgba(245, 197, 24, 0.15)'
          }}
        >
          <motion.div 
            key={timeLeft.minutes}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-[#F5C518] text-2xl sm:text-4xl tabular-nums mb-0.5 sm:mb-1" 
            style={{ fontWeight: 900, lineHeight: 1 }}
          >
            {String(timeLeft.minutes).padStart(2, '0')}
          </motion.div>
          <div className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-widest" style={{ fontWeight: 600 }}>
            MINUTES
          </div>
        </motion.div>

        {/* Colon Separator */}
        <motion.span 
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-[#F5C518] text-xl sm:text-3xl" 
          style={{ fontWeight: 700 }}
        >
          :
        </motion.span>

        {/* Seconds */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center min-w-[60px] sm:min-w-[80px] p-2 sm:p-3 rounded-xl bg-black/60 border border-[#F5C518]/30 backdrop-blur-md flex-shrink-0"
          style={{
            boxShadow: '0 4px 20px rgba(245, 197, 24, 0.15)'
          }}
        >
          <motion.div 
            key={timeLeft.seconds}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-[#F5C518] text-2xl sm:text-4xl tabular-nums mb-0.5 sm:mb-1" 
            style={{ fontWeight: 900, lineHeight: 1 }}
          >
            {String(timeLeft.seconds).padStart(2, '0')}
          </motion.div>
          <div className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-widest" style={{ fontWeight: 600 }}>
            SECONDS
          </div>
        </motion.div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
    </motion.div>
  );
}

// ─── Order Form ─────────────────────────────────────────────────────────────────

function OrderForm() {
  const { addMessage, settings } = usePortfolio();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMessage({
      name: form.name,
      email: form.email,
      message: `ORDER REQUEST\nPhone: ${form.phone}\n\n${form.message}`
    });
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto"
    >
      <div className="p-8 md:p-10 rounded-3xl border-2 border-[#F5C518]/30 bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A]" style={{
        boxShadow: '0 30px 60px rgba(245,197,24,0.2), inset 0 0 40px rgba(245,197,24,0.03)'
      }}>
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F5C518]/10 border-2 border-[#F5C518]/30 mb-4"
          >
            <Send size={28} className="text-[#F5C518]" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
            Start Your <span className="text-[#F5C518]">Project</span>
          </h2>
          <p className="text-gray-400">
            Fill out the form below and I'll get back to you within 24 hours
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-center"
          >
            <Check size={48} className="text-green-400 mx-auto mb-3" />
            <p className="text-white text-lg mb-1" style={{ fontWeight: 600 }}>Request Received!</p>
            <p className="text-gray-400 text-sm">I'll contact you shortly to discuss your project.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <User size={14} /> Your Name *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5C518]/50 transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Mail size={14} /> Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5C518]/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Phone size={14} /> Phone Number
              </label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+1-555-123-4567"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5C518]/50 transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <MessageSquare size={14} /> Project Details *
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Tell me about your project needs, timeline, and any specific requirements..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5C518]/50 transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(245,197,24,0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#F5C518] text-black text-lg hover:bg-[#DEBA15] transition-all"
              style={{ fontWeight: 700 }}
            >
              <Rocket size={20} />
              Submit Project Request
              <ArrowRight size={20} />
            </motion.button>

            <p className="text-center text-gray-500 text-xs">
              Your information is secure and will only be used to contact you about your project
            </p>
          </form>
        )}
      </div>
    </motion.div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────

export function Services() {
  const { settings, projects } = usePortfolio();
  
  // Calculate savings
  const originalPrice = parseInt(settings.promoOriginalPrice.replace(/\D/g, '')) || 200;
  const currentPrice = parseInt(settings.promoCurrentPrice.replace(/\D/g, '')) || 50;
  const savings = originalPrice - currentPrice;

  // Ensure projects is an array
  const projectList = projects || [];

  return (
    <div className="min-h-screen bg-[#0F0F0F] overflow-hidden">
      <SEO 
        title="Services - Professional Web Development | Anderson"
        description={`🚀 LIMITED OFFER! Professional Website + Admin Dashboard for ${settings.promoCurrentPrice} (Save $${savings}!). Delivered in ${settings.promoDeliveryDays} days. Full-Stack Developer & AI Expert. View my portfolio and start your project today!`}
      />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-10 px-4">
        {/* Background Vectors */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingVector icon={Cpu} delay={0} x={5} y={15} duration={10} />
          <FloatingVector icon={CircuitBoard} delay={1} x={90} y={20} duration={12} />
          <FloatingVector icon={Cog} delay={2} x={10} y={80} duration={11} />
          <FloatingVector icon={Database} delay={1.5} x={85} y={75} duration={13} />
          <FloatingVector icon={Code2} delay={0.5} x={50} y={5} duration={9} />
        </div>

        {/* Animated Gradient Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#F5C518]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#F5C518]/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Mobile-First Layout: Stack vertically on mobile */}
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[70%_30%] lg:gap-12 lg:items-center">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              {/* Limited Offer Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/40 backdrop-blur mb-4"
              >
                <Sparkles size={12} className="text-red-400" />
                <span className="text-white text-xs" style={{ fontWeight: 700 }}>LIMITED TIME OFFER</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 800, lineHeight: 1.1 }}>
                Professional <span className="text-[#F5C518]">Web Development</span> Services
              </h1>

              <p className="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed">
                Get a fully functional website with admin dashboard in just <span className="text-[#F5C518]" style={{ fontWeight: 700 }}>{settings.promoDeliveryDays} days</span>. 
                Built with modern technology, optimized for performance, and ready to scale.
              </p>

              {/* Pricing Box - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-xl border-2 border-[#F5C518]/30 mb-6 w-full">
                <div className="flex items-center justify-between sm:justify-start sm:gap-6 flex-1">
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Regular Price</div>
                    <div className="text-xl text-gray-500 line-through" style={{ fontWeight: 600 }}>{settings.promoOriginalPrice}</div>
                  </div>
                  <div className="w-px h-12 bg-white/10 hidden sm:block" />
                  <div>
                    <div className="text-[#F5C518] text-xs mb-1" style={{ fontWeight: 600 }}>Special Offer</div>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-4xl sm:text-5xl text-[#F5C518]"
                      style={{ fontWeight: 900 }}
                    >
                      {settings.promoCurrentPrice}
                    </motion.div>
                  </div>
                </div>
                <div className="sm:ml-auto">
                  <div className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/40 text-center">
                    <div className="text-white text-sm" style={{ fontWeight: 700 }}>Save ${savings}!</div>
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <CountdownTimer />

              {/* Quick Stats - Mobile Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#F5C518]/10 border border-[#F5C518]/30 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[#F5C518]" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-white text-sm" style={{ fontWeight: 600 }}>{settings.promoDeliveryDays} Days</div>
                    <div className="text-gray-500 text-[10px]">Delivery</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#F5C518]/10 border border-[#F5C518]/30 flex items-center justify-center flex-shrink-0">
                    <Award size={18} className="text-[#F5C518]" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-white text-sm" style={{ fontWeight: 600 }}>5+ Years</div>
                    <div className="text-gray-500 text-[10px]">Experience</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#F5C518]/10 border border-[#F5C518]/30 flex items-center justify-center flex-shrink-0">
                    <Heart size={18} className="text-[#F5C518]" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-white text-sm" style={{ fontWeight: 600 }}>100%</div>
                    <div className="text-gray-500 text-[10px]">Satisfaction</div>
                  </div>
                </div>
              </div>

              <motion.a
                href="#order"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#F5C518] text-black hover:bg-[#DEBA15] transition-all text-base w-full sm:w-auto sm:inline-flex"
                style={{ fontWeight: 700 }}
              >
                <Rocket size={20} />
                Get Started Now
                <ArrowRight size={20} />
              </motion.a>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-black/50 backdrop-blur-md border border-green-500/40 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white" style={{ fontWeight: 600 }}>Available Now</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-black/50 backdrop-blur-md border border-[#F5C518]/40 text-xs">
                  <Sparkles size={12} className="text-red-400" />
                  <span className="text-gray-300" style={{ fontWeight: 600 }}>
                    Only <span className="text-[#F5C518]" style={{ fontWeight: 700 }}>{settings.promoSpotsAvailable} spots</span> left
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Profile Card - Show first on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F5C518]/20 via-[#F5C518]/10 to-transparent blur-3xl rounded-3xl opacity-50" />
              
              <div className="relative p-6 sm:p-8 rounded-2xl border border-[#F5C518]/20 bg-black/40 backdrop-blur-xl w-full max-w-sm">
                {/* Large Profile Photo */}
                <div className="flex justify-center mb-4">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-[#F5C518]/40 shadow-2xl">
                    <img 
                      src={andersonPhoto} 
                      alt="Anderson" 
                      className="w-full h-full object-cover object-top" 
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-4">
                  <div className="text-white text-xl sm:text-2xl mb-2" style={{ fontWeight: 700 }}>Anderson</div>
                  <div className="text-[#F5C518] text-sm sm:text-base mb-2" style={{ fontWeight: 600 }}>Full-Stack Developer & AI Expert</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs sm:text-sm">Available for hire</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <Check size={14} className="text-[#F5C518] flex-shrink-0" />
                    <span>5+ years professional experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <Check size={14} className="text-[#F5C518] flex-shrink-0" />
                    <span>10+ successful projects delivered</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <Check size={14} className="text-[#F5C518] flex-shrink-0" />
                    <span>Expert in React, Node.js & AI</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <Check size={14} className="text-[#F5C518] flex-shrink-0" />
                    <span>Fast delivery & quality guaranteed</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-xs sm:text-sm italic text-center leading-relaxed">
                    "I build modern, scalable web applications that help businesses grow. Let's turn your vision into reality."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PAST PROJECTS SHOWCASE ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A0A0A] px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <p className="text-xs sm:text-sm text-[#F5C518] mb-2 sm:mb-3 tracking-widest uppercase">Portfolio</p>
            <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-4 sm:mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
              Recent <span className="text-[#F5C518]">Projects</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Check out some of the websites and applications I've built for clients. All projects feature modern design, 
              clean code, and exceptional performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectList.slice(0, 6).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.07] hover:border-[#F5C518]/30 bg-white/[0.02] transition-all"
              >
                {/* Project Image */}
                <div className="relative h-44 sm:h-48 bg-gradient-to-br from-[#F5C518]/10 to-[#F5C518]/5 overflow-hidden">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Monitor size={40} className="text-[#F5C518]/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Project Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl mb-2" style={{ fontWeight: 700 }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.techStack || []).slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 rounded-md bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs"
                        style={{ fontWeight: 600 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg bg-[#F5C518] text-black hover:bg-[#DEBA15] transition-all text-xs sm:text-sm"
                        style={{ fontWeight: 600 }}
                      >
                        <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                        View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:text-[#F5C518] hover:border-[#F5C518]/40 transition-all text-xs sm:text-sm"
                        style={{ fontWeight: 600 }}
                      >
                        <Github size={12} className="sm:w-3.5 sm:h-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F5C518]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8 sm:mt-12"
          >
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl border border-[#F5C518]/30 text-[#F5C518] hover:bg-[#F5C518]/10 transition-all text-sm sm:text-base"
              style={{ fontWeight: 600 }}
            >
              View All Projects
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">What You Get</p>
            <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl text-white" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
              Everything you need, <span className="text-[#F5C518]">nothing you don't</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: `${settings.promoDeliveryDays}-day delivery from idea to live website` },
              { icon: LayoutDashboard, title: 'Full CMS Dashboard', desc: 'Manage all content without touching code' },
              { icon: Code2, title: 'Custom Design', desc: 'Beautiful, modern UI tailored to your brand' },
              { icon: Smartphone, title: 'Fully Responsive', desc: 'Perfect on desktop, tablet, and mobile' },
              { icon: Database, title: 'Real-time Updates', desc: 'Changes reflect instantly across your site' },
              { icon: Shield, title: 'Production Ready', desc: 'Built with enterprise-grade best practices' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-[#F5C518]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F5C518]/10 border border-[#F5C518]/20 flex items-center justify-center mb-4">
                  <feature.icon size={22} className="text-[#F5C518]" />
                </div>
                <h3 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER FORM ── */}
      <section id="order" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
              Ready to get <span className="text-[#F5C518]">started</span>?
            </h2>
            <p className="text-gray-400 text-lg">
              Fill out the form below and let's discuss your project
            </p>
          </motion.div>
          <OrderForm />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-12 md:p-16 rounded-2xl border border-[#F5C518]/20 overflow-hidden text-center"
            style={{ background: 'rgba(245,197,24,0.03)' }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ 
              background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.08) 0%, transparent 70%)' 
            }} />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/60 to-transparent" />

            <div className="relative">
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
                Ready to launch your <span className="text-[#F5C518]">dream website</span>?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Stop waiting. Start building. Get a fully functional website with an admin dashboard in just {settings.promoDeliveryDays} days. 
                Join the {projectList.length}+ satisfied clients who've already transformed their online presence.
              </p>
              <motion.a
                href="#order"
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(245,197,24,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#F5C518] text-black hover:bg-[#DEBA15] transition-all text-lg"
                style={{ fontWeight: 700 }}
              >
                <Rocket size={24} />
                Start Your Project Now
                <ArrowRight size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}