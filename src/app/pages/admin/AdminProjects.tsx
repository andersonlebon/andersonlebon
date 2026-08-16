import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Pencil, Trash2, X, ExternalLink, Github, Image } from 'lucide-react';
import { usePortfolio, Project } from '../../context/PortfolioContext';

const emptyProject: Omit<Project, 'id'> = {
  title: '',
  description: '',
  techStack: [],
  githubUrl: '',
  liveUrl: '',
  imageUrl: '',
};

function ProjectModal({
  project,
  onSave,
  onClose,
}: {
  project: Partial<Project>;
  onSave: (p: Omit<Project, 'id'>) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<Omit<Project, 'id'>>({
    title: project.title || '',
    description: project.description || '',
    techStack: project.techStack || [],
    githubUrl: project.githubUrl || '',
    liveUrl: project.liveUrl || '',
    imageUrl: project.imageUrl || '',
  });
  const [techInput, setTechInput] = useState('');

  const addTech = () => {
    if (techInput.trim() && !form.techStack.includes(techInput.trim())) {
      setForm({ ...form, techStack: [...form.techStack, techInput.trim()] });
      setTechInput('');
    }
  };

  const removeTech = (tech: string) => {
    setForm({ ...form, techStack: form.techStack.filter(t => t !== tech) });
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
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-lg bg-[#111118] border border-white/10 rounded-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <h2 className="text-white text-sm" style={{ fontWeight: 600 }}>
            {project.id ? 'Edit Project' : 'New Project'}
          </h2>
          <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
            <X size={16} />
          </button>
        </div>

        <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Project Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="My Awesome Project"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Describe your project..."
              rows={3}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Tech Stack</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                placeholder="e.g. React"
                className="flex-1 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
              />
              <button
                type="button"
                onClick={addTech}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-500 transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.techStack.map((tech) => (
                <span key={tech} className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300">
                  {tech}
                  <button onClick={() => removeTech(tech)} className="text-gray-500 hover:text-red-400 transition-colors">
                    <X size={10} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Image URL</label>
            <input
              type="url"
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              placeholder="https://..."
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5">GitHub URL</label>
            <input
              type="url"
              value={form.githubUrl}
              onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
              placeholder="https://github.com/..."
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Live URL</label>
            <input
              type="url"
              value={form.liveUrl}
              onChange={(e) => setForm({ ...form, liveUrl: e.target.value })}
              placeholder="https://..."
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
        </div>

        <div className="p-5 border-t border-white/5 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">Cancel</button>
          <button
            onClick={() => onSave(form)}
            className="px-5 py-2 rounded-xl bg-[#F5C518] text-black text-sm hover:bg-[#DEBA15] transition-all"
            style={{ fontWeight: 700 }}
          >
            {project.id ? 'Save Changes' : 'Create Project'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AdminProjects() {
  const { projects, setProjects } = usePortfolio();
  const [modal, setModal] = useState<{ open: boolean; project: Partial<Project> }>({ open: false, project: {} });
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleSave = (form: Omit<Project, 'id'>) => {
    if (modal.project.id) {
      setProjects(projects.map(p => p.id === modal.project.id ? { ...form, id: modal.project.id } : p));
    } else {
      setProjects([...projects, { ...form, id: Date.now().toString() }]);
    }
    setModal({ open: false, project: {} });
  };

  const handleDelete = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
    setDeleteConfirm(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>Projects</h1>
          <p className="text-sm text-gray-500">{projects.length} projects in your portfolio</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setModal({ open: true, project: {} })}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F5C518] text-black text-sm hover:bg-[#DEBA15] transition-all"
          style={{ fontWeight: 700 }}
        >
          <Plus size={16} />
          New Project
        </motion.button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl bg-white/[0.03] border border-white/[0.07] overflow-hidden group"
          >
            <div className="relative h-36 overflow-hidden">
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                  <Image size={24} className="text-gray-600" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent" />
            </div>

            <div className="p-4">
              <h3 className="text-white mb-2" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{project.title}</h3>
              <p className="text-xs text-gray-400 mb-3 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 3).map(tech => (
                  <span key={tech} className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 border border-white/10 text-gray-400">{tech}</span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 border border-white/10 text-gray-500">+{project.techStack.length - 3}</span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"><Github size={14} /></a>}
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"><ExternalLink size={14} /></a>}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setModal({ open: true, project })}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(project.id)}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal.open && (
          <ProjectModal
            project={modal.project}
            onSave={handleSave}
            onClose={() => setModal({ open: false, project: {} })}
          />
        )}
      </AnimatePresence>

      {/* Delete confirm */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-[#111118] border border-white/10 rounded-2xl p-6 max-w-sm w-full"
            >
              <h3 className="text-white mb-2" style={{ fontWeight: 600 }}>Delete project?</h3>
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