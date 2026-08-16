import { motion } from 'motion/react';
import {
  MessageSquare, FolderKanban, Briefcase, Layers
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export function Overview() {
  const { projects, experience, skills, messages } = usePortfolio();
  const unread = messages.filter(m => !m.read).length;

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">Portfolio content currently stored in this browser. Visitor analytics are not connected.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
        >
          <h3 className="text-white text-sm mb-5" style={{ fontWeight: 600 }}>Content Overview</h3>
          <div className="space-y-3">
            {[
              { icon: FolderKanban, label: 'Projects', value: projects.length, color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { icon: Briefcase, label: 'Experience', value: experience.length, color: 'text-purple-400', bg: 'bg-purple-500/10' },
              { icon: Layers, label: 'Skills', value: skills.length, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
              { icon: MessageSquare, label: 'Unread Messages', value: unread, color: 'text-green-400', bg: 'bg-green-500/10' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center`}>
                    <item.icon size={15} className={item.color} />
                  </div>
                  <span className="text-sm text-gray-300">{item.label}</span>
                </div>
                <span className="text-white" style={{ fontFamily: 'var(--font-geist)', fontWeight: 600 }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
        >
          <h3 className="text-white text-sm mb-5" style={{ fontWeight: 600 }}>Recent Messages</h3>
          {messages.length === 0 ? (
            <p className="text-sm text-gray-500">No local messages yet. Contact form drafts are stored in this browser only.</p>
          ) : (
            <div className="space-y-3">
              {messages.slice(0, 5).map((msg) => (
                <div key={msg.id} className={`flex items-start gap-3 p-3 rounded-xl ${!msg.read ? 'bg-blue-500/5 border border-blue-500/15' : 'hover:bg-white/5'} transition-colors`}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-xs text-blue-300 shrink-0">
                    {msg.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm text-white" style={{ fontWeight: 500 }}>{msg.name}</span>
                      {!msg.read && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />}
                      <span className="text-xs text-gray-500 ml-auto shrink-0">{msg.date}</span>
                    </div>
                    <p className="text-xs text-gray-400 truncate">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
