import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Pencil, Trash2, X, Calendar, Building2 } from 'lucide-react';
import { usePortfolio, Experience } from '../../context/PortfolioContext';

function ExperienceModal({
  exp,
  onSave,
  onClose,
}: {
  exp: Partial<Experience>;
  onSave: (e: Omit<Experience, 'id'>) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    company: exp.company || '',
    role: exp.role || '',
    duration: exp.duration || '',
    description: exp.description || [''],
    companyUrl: exp.companyUrl || '',
  });

  const updateDesc = (i: number, val: string) => {
    const d = [...form.description];
    d[i] = val;
    setForm({ ...form, description: d });
  };

  const addDesc = () => setForm({ ...form, description: [...form.description, ''] });
  const removeDesc = (i: number) => {
    const d = form.description.filter((_, idx) => idx !== i);
    setForm({ ...form, description: d.length ? d : [''] });
  };

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
        className="w-full max-w-lg bg-[#111118] border border-white/10 rounded-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <h2 className="text-white text-sm" style={{ fontWeight: 600 }}>
            {exp.id ? 'Edit Experience' : 'Add Experience'}
          </h2>
          <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"><X size={16} /></button>
        </div>

        <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1.5">Company</label>
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Company Name"
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5">Duration</label>
              <input
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
                placeholder="2024 – 2025"
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Role / Title</label>
            <input
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              placeholder="Full-Stack Developer"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Company URL</label>
            <input
              value={form.companyUrl}
              onChange={(e) => setForm({ ...form, companyUrl: e.target.value })}
              placeholder="https://..."
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs text-gray-400">Responsibilities</label>
              <button onClick={addDesc} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
                <Plus size={12} /> Add
              </button>
            </div>
            <div className="space-y-2">
              {form.description.map((d, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    value={d}
                    onChange={(e) => updateDesc(i, e.target.value)}
                    placeholder={`Responsibility ${i + 1}`}
                    className="flex-1 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
                  />
                  <button onClick={() => removeDesc(i)} className="p-2 rounded-xl text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-white/5 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">Cancel</button>
          <button
            onClick={() => onSave({ ...form, description: form.description.filter(d => d.trim()) })}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm hover:from-blue-500 hover:to-purple-500 transition-all"
          >
            {exp.id ? 'Save Changes' : 'Add Experience'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AdminExperience() {
  const { experience, setExperience } = usePortfolio();
  const [modal, setModal] = useState<{ open: boolean; exp: Partial<Experience> }>({ open: false, exp: {} });
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleSave = (form: Omit<Experience, 'id'>) => {
    if (modal.exp.id) {
      setExperience(experience.map(e => e.id === modal.exp.id ? { ...form, id: modal.exp.id } : e));
    } else {
      setExperience([{ ...form, id: Date.now().toString() }, ...experience]);
    }
    setModal({ open: false, exp: {} });
  };

  const handleDelete = (id: string) => {
    setExperience(experience.filter(e => e.id !== id));
    setDeleteConfirm(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>Experience</h1>
          <p className="text-sm text-gray-500">{experience.length} positions</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setModal({ open: true, exp: {} })}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm"
        >
          <Plus size={16} /> Add Experience
        </motion.button>
      </div>

      <div className="space-y-4">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/10 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-white" style={{ fontWeight: 600 }}>{exp.role}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Building2 size={12} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">
                    <Calendar size={10} />
                    {exp.duration}
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {exp.description.map((d, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => setModal({ open: true, exp })}
                  className="p-2 rounded-lg text-gray-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                >
                  <Pencil size={14} />
                </button>
                <button
                  onClick={() => setDeleteConfirm(exp.id)}
                  className="p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {modal.open && (
          <ExperienceModal exp={modal.exp} onSave={handleSave} onClose={() => setModal({ open: false, exp: {} })} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {deleteConfirm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-[#111118] border border-white/10 rounded-2xl p-6 max-w-sm w-full">
              <h3 className="text-white mb-2" style={{ fontWeight: 600 }}>Delete this experience?</h3>
              <p className="text-sm text-gray-400 mb-6">This action cannot be undone.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteConfirm(null)} className="flex-1 px-4 py-2 rounded-xl border border-white/10 text-gray-400 text-sm hover:text-white transition-colors">Cancel</button>
                <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 px-4 py-2 rounded-xl bg-red-600/80 text-white text-sm hover:bg-red-500 transition-colors">Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
