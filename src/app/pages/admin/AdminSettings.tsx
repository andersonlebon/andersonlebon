import { useState } from 'react';
import { motion } from 'motion/react';
import { Save, Github, Linkedin, Mail, Globe, FileText, User, Check, Phone, MapPin, DollarSign, Clock, Users as UsersIcon } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export function AdminSettings() {
  const { settings, setSettings } = usePortfolio();
  const [form, setForm] = useState({ ...settings });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSettings(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const hasChanges = JSON.stringify(form) !== JSON.stringify(settings);

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>Site Settings</h1>
          <p className="text-sm text-gray-500">Changes here update the portfolio in real-time</p>
        </div>
        <motion.button
          onClick={handleSave}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all ${
            saved
              ? 'bg-green-600/80 text-white'
              : hasChanges
              ? 'bg-[#F5C518] text-black hover:bg-[#DEBA15]'
              : 'bg-white/5 text-gray-400 cursor-not-allowed'
          }`}
          disabled={!hasChanges && !saved}
        >
          {saved ? <><Check size={16} /> Saved!</> : <><Save size={16} /> Save Changes</>}
        </motion.button>
      </div>

      {/* Identity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
      >
        <div className="flex items-center gap-2 mb-5">
          <User size={16} className="text-blue-400" />
          <h2 className="text-sm text-white" style={{ fontWeight: 600 }}>Identity</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Display Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs text-gray-400 mb-1.5">Hero Headline</label>
            <input
              value={form.headline}
              onChange={(e) => setForm({ ...form, headline: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs text-gray-400 mb-1.5">Hero Subtitle</label>
            <textarea
              value={form.subtitle}
              onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
              rows={2}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/40 transition-colors resize-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs text-gray-400 mb-1.5">Bio</label>
            <textarea
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              rows={3}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/40 transition-colors resize-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs text-gray-400 mb-1.5">Profile Image URL</label>
            <input
              value={form.profileImage}
              onChange={(e) => setForm({ ...form, profileImage: e.target.value })}
              placeholder="https://..."
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
      >
        <div className="flex items-center gap-2 mb-5">
          <Mail size={16} className="text-green-400" />
          <h2 className="text-sm text-white" style={{ fontWeight: 600 }}>Contact Information</h2>
        </div>
        <div className="space-y-3">
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
              <Mail size={13} /> Contact Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#F5C518]/40 transition-colors"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
              <Phone size={13} /> Phone Number
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+1-555-123-4567"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#F5C518]/40 transition-colors"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
              <MapPin size={13} /> Location
            </label>
            <input
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="City, State/Country"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#F5C518]/40 transition-colors"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
              <Globe size={13} /> Personal Website
            </label>
            <input
              type="url"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              placeholder="https://yourwebsite.com"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#F5C518]/40 transition-colors"
            />
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
      >
        <div className="flex items-center gap-2 mb-5">
          <Globe size={16} className="text-purple-400" />
          <h2 className="text-sm text-white" style={{ fontWeight: 600 }}>Social Links</h2>
        </div>
        <div className="space-y-3">
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
              <Github size={13} /> GitHub URL
            </label>
            <input
              value={form.githubUrl}
              onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
              placeholder="https://github.com/..."
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
              <Linkedin size={13} /> LinkedIn URL
            </label>
            <input
              value={form.linkedinUrl}
              onChange={(e) => setForm({ ...form, linkedinUrl: e.target.value })}
              placeholder="https://linkedin.com/in/..."
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
              <FileText size={13} /> Resume URL
            </label>
            <input
              value={form.resumeUrl}
              onChange={(e) => setForm({ ...form, resumeUrl: e.target.value })}
              placeholder="https://..."
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
        </div>
      </motion.div>

      {/* Promo Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
        className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
      >
        <div className="flex items-center gap-2 mb-5">
          <DollarSign size={16} className="text-[#F5C518]" />
          <h2 className="text-sm text-white" style={{ fontWeight: 600 }}>Services Promo Settings</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
              <DollarSign size={13} /> Original Price
            </label>
            <input
              value={form.promoOriginalPrice}
              onChange={(e) => setForm({ ...form, promoOriginalPrice: e.target.value })}
              placeholder="$200"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#F5C518]/40 transition-colors"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
              <DollarSign size={13} /> Current Price (Sale)
            </label>
            <input
              value={form.promoCurrentPrice}
              onChange={(e) => setForm({ ...form, promoCurrentPrice: e.target.value })}
              placeholder="$50"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#F5C518]/40 transition-colors"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
              <Clock size={13} /> Delivery Days
            </label>
            <input
              value={form.promoDeliveryDays}
              onChange={(e) => setForm({ ...form, promoDeliveryDays: e.target.value })}
              placeholder="3"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#F5C518]/40 transition-colors"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
              <UsersIcon size={13} /> Spots Available
            </label>
            <input
              value={form.promoSpotsAvailable}
              onChange={(e) => setForm({ ...form, promoSpotsAvailable: e.target.value })}
              placeholder="3"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#F5C518]/40 transition-colors"
            />
          </div>
        </div>
      </motion.div>

      {/* SEO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
      >
        <div className="flex items-center gap-2 mb-5">
          <Globe size={16} className="text-cyan-400" />
          <h2 className="text-sm text-white" style={{ fontWeight: 600 }}>SEO Metadata</h2>
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Page Title</label>
            <input
              value={form.seoTitle}
              onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Meta Description</label>
            <textarea
              value={form.seoDescription}
              onChange={(e) => setForm({ ...form, seoDescription: e.target.value })}
              rows={2}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/40 transition-colors resize-none"
            />
          </div>
        </div>

        {/* Preview */}
        <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/[0.08]">
          <p className="text-xs text-gray-500 mb-2">Search Engine Preview</p>
          <p className="text-blue-400 text-sm hover:underline cursor-pointer">{form.seoTitle}</p>
          <p className="text-xs text-green-600">anderson.dev</p>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">{form.seoDescription}</p>
        </div>
      </motion.div>

      {/* Save button bottom */}
      <div className="flex justify-end">
        <motion.button
          onClick={handleSave}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm transition-all ${
            saved
              ? 'bg-green-600/80 text-white'
              : 'bg-[#F5C518] text-black hover:bg-[#DEBA15]'
          }`}
          style={{ fontWeight: 700 }}
        >
          {saved ? <><Check size={16} /> Changes Saved!</> : <><Save size={16} /> Save All Changes</>}
        </motion.button>
      </div>
    </div>
  );
}