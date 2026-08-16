import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export function Contact() {
  const { settings, addMessage } = usePortfolio();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      addMessage(form);
      setSent(true);
      setLoading(false);
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  const socials = [
    { icon: Mail, label: 'Email', value: settings.email, href: `mailto:${settings.email}`, gold: true },
    { icon: Github, label: 'GitHub', value: 'github.com/anderson', href: settings.githubUrl, gold: false },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/anderson', href: settings.linkedinUrl, gold: false },
  ];

  return (
    <section id="contact" className="py-28 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
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
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you have a question, a project proposal, or just want to say hi — my inbox is always open. I'll do my best to get back to you within 24 hours.
            </p>

            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 4, scale: 1.01 }}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group ${
                  s.gold
                    ? 'border-[#F5C518]/25 bg-[#F5C518]/5 hover:border-[#F5C518]/50 hover:bg-[#F5C518]/8'
                    : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  s.gold ? 'bg-[#F5C518] text-black' : 'bg-white/8 border border-white/10'
                }`}>
                  <s.icon size={18} className={s.gold ? 'text-black' : 'text-gray-400 group-hover:text-white'} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                  <p className={`text-sm ${s.gold ? 'text-[#F5C518]' : 'text-gray-300 group-hover:text-white'} transition-colors`}>
                    {s.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-6 rounded-2xl bg-white/[0.02] border border-[#F5C518]/15"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/30 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-[#F5C518]" />
                </div>
                <h3 className="text-white mb-2" style={{ fontWeight: 600 }}>Message sent!</h3>
                <p className="text-gray-400 text-sm mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="px-4 py-2 text-sm text-[#F5C518] border border-[#F5C518]/30 rounded-lg hover:bg-[#F5C518]/10 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#F5C518]/40 focus:bg-[#F5C518]/[0.03] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#F5C518]/40 focus:bg-[#F5C518]/[0.03] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#F5C518]/40 focus:bg-[#F5C518]/[0.03] transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(245,197,24,0.25)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F5C518] text-black text-sm hover:bg-[#DEBA15] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontWeight: 700 }}
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
