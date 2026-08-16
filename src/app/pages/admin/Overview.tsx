import { motion } from 'motion/react';
import {
  Users, Eye, MessageSquare, TrendingUp, ArrowUpRight, ArrowDownRight,
  FolderKanban, Briefcase, Layers
} from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';
import { usePortfolio } from '../../context/PortfolioContext';

const visitorData = [
  { month: 'Sep', visitors: 120 },
  { month: 'Oct', visitors: 210 },
  { month: 'Nov', visitors: 180 },
  { month: 'Dec', visitors: 290 },
  { month: 'Jan', visitors: 350 },
  { month: 'Feb', visitors: 420 },
  { month: 'Mar', visitors: 510 },
];

const pageData = [
  { name: 'Home', views: 480 },
  { name: 'Projects', views: 320 },
  { name: 'About', views: 210 },
  { name: 'Contact', views: 175 },
  { name: 'Experience', views: 155 },
];

const deviceData = [
  { name: 'Desktop', value: 58, color: '#6366F1' },
  { name: 'Mobile', value: 34, color: '#8B5CF6' },
  { name: 'Tablet', value: 8, color: '#06B6D4' },
];

const statCards = [
  { label: 'Total Visitors', value: '2,847', change: '+18%', up: true, icon: Users, color: 'from-blue-600/20 to-blue-500/5', border: 'border-blue-500/20', iconColor: 'text-blue-400' },
  { label: 'Page Views', value: '12,491', change: '+24%', up: true, icon: Eye, color: 'from-purple-600/20 to-purple-500/5', border: 'border-purple-500/20', iconColor: 'text-purple-400' },
  { label: 'Unique Visitors', value: '1,923', change: '+9%', up: true, icon: TrendingUp, color: 'from-cyan-600/20 to-cyan-500/5', border: 'border-cyan-500/20', iconColor: 'text-cyan-400' },
  { label: 'Messages Received', value: '47', change: '-3%', up: false, icon: MessageSquare, color: 'from-green-600/20 to-green-500/5', border: 'border-green-500/20', iconColor: 'text-green-400' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="px-3 py-2 bg-[#1A1A24] border border-white/10 rounded-lg text-xs">
        <p className="text-gray-400 mb-1">{label}</p>
        <p className="text-white">{payload[0].value} visitors</p>
      </div>
    );
  }
  return null;
};

export function Overview() {
  const { projects, experience, skills, messages } = usePortfolio();
  const unread = messages.filter(m => !m.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">Welcome back, Anderson. Here's what's happening.</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`p-5 rounded-2xl bg-gradient-to-br ${card.color} border ${card.border}`}
          >
            <div className="flex items-start justify-between mb-4">
              <p className="text-sm text-gray-400">{card.label}</p>
              <card.icon size={18} className={card.iconColor} />
            </div>
            <p className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
              {card.value}
            </p>
            <div className={`flex items-center gap-1 text-xs ${card.up ? 'text-green-400' : 'text-red-400'}`}>
              {card.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
              {card.change} vs last month
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Traffic chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-white text-sm mb-1" style={{ fontWeight: 600 }}>Visitor Traffic</h3>
              <p className="text-xs text-gray-500">Last 7 months</p>
            </div>
            <span className="px-2.5 py-1 text-xs rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
              +18% growth
            </span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={visitorData} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
              <defs>
                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="visitors" stroke="#6366F1" strokeWidth={2} fill="url(#colorVisitors)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Device chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
        >
          <h3 className="text-white text-sm mb-1" style={{ fontWeight: 600 }}>Device Usage</h3>
          <p className="text-xs text-gray-500 mb-5">Traffic by device type</p>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie data={deviceData} cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={3} dataKey="value">
                {deviceData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {deviceData.map((d) => (
              <div key={d.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                  <span className="text-gray-400">{d.name}</span>
                </div>
                <span className="text-white">{d.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Popular pages + Content overview */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Popular pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
        >
          <h3 className="text-white text-sm mb-5" style={{ fontWeight: 600 }}>Popular Pages</h3>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={pageData} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="name" tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={({ active, payload, label }: any) => active && payload?.length ? (
                <div className="px-3 py-2 bg-[#1A1A24] border border-white/10 rounded-lg text-xs">
                  <p className="text-gray-400">{label}</p>
                  <p className="text-white">{payload[0].value} views</p>
                </div>
              ) : null} />
              <Bar dataKey="views" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Content overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
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
      </div>

      {/* Recent messages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
      >
        <h3 className="text-white text-sm mb-5" style={{ fontWeight: 600 }}>Recent Messages</h3>
        <div className="space-y-3">
          {messages.slice(0, 3).map((msg) => (
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
      </motion.div>
    </div>
  );
}
