import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Trash2, Eye, X, CheckCheck, Search } from 'lucide-react';
import { usePortfolio, Message } from '../../context/PortfolioContext';

export function AdminMessages() {
  const { messages, setMessages } = usePortfolio();
  const [selected, setSelected] = useState<Message | null>(null);
  const [search, setSearch] = useState('');

  const filtered = messages.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.email.toLowerCase().includes(search.toLowerCase()) ||
    m.message.toLowerCase().includes(search.toLowerCase())
  );

  const handleRead = (msg: Message) => {
    if (!msg.read) {
      setMessages(messages.map(m => m.id === msg.id ? { ...m, read: true } : m));
    }
    setSelected(msg);
  };

  const handleDelete = (id: string) => {
    setMessages(messages.filter(m => m.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const markAllRead = () => {
    setMessages(messages.map(m => ({ ...m, read: true })));
  };

  const unread = messages.filter(m => !m.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>Messages</h1>
          <p className="text-sm text-gray-500">
            {messages.length} total · {unread} unread
          </p>
        </div>
        {unread > 0 && (
          <button
            onClick={markAllRead}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-gray-400 text-sm hover:text-white hover:border-white/20 transition-all"
          >
            <CheckCheck size={15} />
            Mark all read
          </button>
        )}
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search messages..."
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/30 transition-colors"
        />
      </div>

      {/* Messages list */}
      <div className="space-y-2">
        <AnimatePresence>
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-gray-500"
            >
              <Mail size={32} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">No messages found</p>
            </motion.div>
          ) : (
            filtered.map((msg, i) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleRead(msg)}
                className={`group flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                  !msg.read
                    ? 'bg-blue-500/5 border-blue-500/20 hover:border-blue-500/30'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/10 hover:bg-white/[0.04]'
                } ${selected?.id === msg.id ? 'ring-1 ring-blue-500/30' : ''}`}
              >
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 flex items-center justify-center text-sm text-white shrink-0" style={{ fontWeight: 600 }}>
                  {msg.name[0].toUpperCase()}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-sm ${msg.read ? 'text-gray-300' : 'text-white'}`} style={{ fontWeight: msg.read ? 400 : 600 }}>
                      {msg.name}
                    </span>
                    {!msg.read && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />}
                    <span className="text-xs text-gray-500 ml-auto shrink-0">{msg.date}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{msg.email}</p>
                  <p className={`text-sm truncate ${msg.read ? 'text-gray-500' : 'text-gray-300'}`}>
                    {msg.message}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleRead(msg); }}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                    title="View"
                  >
                    <Eye size={14} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(msg.id); }}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Message detail panel */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg bg-[#111118] border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 flex items-center justify-center text-sm text-white" style={{ fontWeight: 600 }}>
                    {selected.name[0]}
                  </div>
                  <div>
                    <p className="text-sm text-white" style={{ fontWeight: 600 }}>{selected.name}</p>
                    <p className="text-xs text-gray-500">{selected.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{selected.date}</span>
                  <button onClick={() => setSelected(null)} className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5">
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-300 leading-relaxed">{selected.message}</p>
              </div>

              <div className="p-5 border-t border-white/5 flex items-center justify-between">
                <a
                  href={`mailto:${selected.email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/80 text-white text-sm hover:bg-blue-500 transition-colors"
                >
                  <Mail size={14} />
                  Reply via Email
                </a>
                <button
                  onClick={() => { handleDelete(selected.id); setSelected(null); }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-red-400 text-sm hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
