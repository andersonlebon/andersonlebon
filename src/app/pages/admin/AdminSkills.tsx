import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { usePortfolio, Skill } from '../../context/PortfolioContext';

const categories = ['Frontend', 'Backend', 'Databases', 'DevOps', 'Mobile'];

const categoryColors: Record<string, string> = {
  Frontend: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
  Backend: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
  Databases: 'border-green-500/30 bg-green-500/10 text-green-400',
  DevOps: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
  Mobile: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
};

function SkillModal({
  skill,
  onSave,
  onClose,
}: {
  skill: Partial<Skill>;
  onSave: (s: Omit<Skill, 'id'>) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: skill.name || '',
    category: skill.category || 'Frontend',
    icon: skill.icon || '⚙️',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-sm bg-[#111118] border border-white/10 rounded-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <h2 className="text-white text-sm" style={{ fontWeight: 600 }}>{skill.id ? 'Edit Skill' : 'Add Skill'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"><X size={16} /></button>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Skill Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. React"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            >
              {categories.map(c => <option key={c} value={c} className="bg-[#111118]">{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Icon (Emoji)</label>
            <input
              value={form.icon}
              onChange={(e) => setForm({ ...form, icon: e.target.value })}
              placeholder="⚙️"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
        </div>
        <div className="p-5 border-t border-white/5 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-sm text-gray-400 hover:text-white">Cancel</button>
          <button
            onClick={() => onSave(form)}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm hover:from-blue-500 hover:to-purple-500 transition-all"
          >
            {skill.id ? 'Save Changes' : 'Add Skill'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AdminSkills() {
  const { skills, setSkills } = usePortfolio();
  const [modal, setModal] = useState<{ open: boolean; skill: Partial<Skill> }>({ open: false, skill: {} });
  const [activeCategory, setActiveCategory] = useState('All');

  const handleSave = (form: Omit<Skill, 'id'>) => {
    if (modal.skill.id) {
      setSkills(skills.map(s => s.id === modal.skill.id ? { ...form, id: modal.skill.id } : s));
    } else {
      setSkills([...skills, { ...form, id: Date.now().toString() }]);
    }
    setModal({ open: false, skill: {} });
  };

  const handleDelete = (id: string) => {
    setSkills(skills.filter(s => s.id !== id));
  };

  const allCategories = ['All', ...categories];
  const filtered = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>Skills</h1>
          <p className="text-sm text-gray-500">{skills.length} technologies in your stack</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setModal({ open: true, skill: {} })}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm"
        >
          <Plus size={16} /> Add Skill
        </motion.button>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {allCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm transition-all ${
              activeCategory === cat
                ? 'bg-white/10 text-white border border-white/20'
                : 'text-gray-400 border border-transparent hover:text-white hover:border-white/10'
            }`}
          >
            {cat}
            <span className="ml-1.5 text-xs text-gray-500">
              {cat === 'All' ? skills.length : skills.filter(s => s.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <AnimatePresence>
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.03 }}
              className={`relative group p-4 rounded-xl border ${categoryColors[skill.category] || 'border-white/10 bg-white/5 text-gray-400'} hover:scale-105 transition-transform`}
            >
              <div className="text-2xl mb-2">{skill.icon}</div>
              <p className="text-white text-sm" style={{ fontWeight: 500 }}>{skill.name}</p>
              <p className="text-xs mt-0.5 opacity-70">{skill.category}</p>

              {/* Actions on hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
                <button
                  onClick={() => setModal({ open: true, skill })}
                  className="p-1 rounded-md bg-black/40 backdrop-blur text-white hover:bg-blue-600/50 transition-colors"
                >
                  <Pencil size={11} />
                </button>
                <button
                  onClick={() => handleDelete(skill.id)}
                  className="p-1 rounded-md bg-black/40 backdrop-blur text-white hover:bg-red-600/50 transition-colors"
                >
                  <Trash2 size={11} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {modal.open && (
          <SkillModal skill={modal.skill} onSave={handleSave} onClose={() => setModal({ open: false, skill: {} })} />
        )}
      </AnimatePresence>
    </div>
  );
}
