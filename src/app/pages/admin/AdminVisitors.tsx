import { motion } from 'motion/react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { Globe, Monitor, Smartphone, Tablet, TrendingUp, Eye } from 'lucide-react';

const trafficData = [
  { date: 'Feb 27', visitors: 120 },
  { date: 'Feb 28', visitors: 98 },
  { date: 'Mar 1', visitors: 145 },
  { date: 'Mar 2', visitors: 89 },
  { date: 'Mar 3', visitors: 178 },
  { date: 'Mar 4', visitors: 203 },
  { date: 'Mar 5', visitors: 167 },
];

const countryData = [
  { country: 'United States', code: '🇺🇸', visitors: 847, percentage: 32 },
  { country: 'United Kingdom', code: '🇬🇧', visitors: 420, percentage: 16 },
  { country: 'Germany', code: '🇩🇪', visitors: 315, percentage: 12 },
  { country: 'Canada', code: '🇨🇦', visitors: 290, percentage: 11 },
  { country: 'Australia', code: '🇦🇺', visitors: 248, percentage: 9 },
  { country: 'Netherlands', code: '🇳🇱', visitors: 196, percentage: 7 },
  { country: 'France', code: '🇫🇷', visitors: 158, percentage: 6 },
  { country: 'Other', code: '🌍', visitors: 373, percentage: 7 },
];

const deviceData = [
  { name: 'Desktop', value: 58, color: '#6366F1', icon: Monitor },
  { name: 'Mobile', value: 34, color: '#8B5CF6', icon: Smartphone },
  { name: 'Tablet', value: 8, color: '#06B6D4', icon: Tablet },
];

const pagesData = [
  { page: '/', label: 'Home', views: 2480, unique: 1820 },
  { page: '/projects', label: 'Projects', views: 1320, unique: 980 },
  { page: '/about', label: 'About', views: 910, unique: 740 },
  { page: '/contact', label: 'Contact', views: 755, unique: 650 },
  { page: '/experience', label: 'Experience', views: 655, unique: 520 },
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

export function AdminVisitors() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>Visitors</h1>
        <p className="text-sm text-gray-500">Analytics and visitor insights for your portfolio</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Visitors', value: '2,847', icon: TrendingUp, change: '+18%', color: 'text-blue-400', bg: 'from-blue-600/20 to-blue-500/5', border: 'border-blue-500/20' },
          { label: 'Page Views', value: '12,491', icon: Eye, change: '+24%', color: 'text-purple-400', bg: 'from-purple-600/20 to-purple-500/5', border: 'border-purple-500/20' },
          { label: 'Avg. Duration', value: '3m 42s', icon: Globe, change: '+5%', color: 'text-cyan-400', bg: 'from-cyan-600/20 to-cyan-500/5', border: 'border-cyan-500/20' },
          { label: 'Bounce Rate', value: '38.2%', icon: Monitor, change: '-7%', color: 'text-green-400', bg: 'from-green-600/20 to-green-500/5', border: 'border-green-500/20' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`p-5 rounded-2xl bg-gradient-to-br ${stat.bg} border ${stat.border}`}
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs text-gray-400">{stat.label}</p>
              <stat.icon size={16} className={stat.color} />
            </div>
            <p className="text-2xl text-white mb-1.5" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>{stat.value}</p>
            <p className="text-xs text-green-400">{stat.change} vs last week</p>
          </motion.div>
        ))}
      </div>

      {/* Traffic chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
      >
        <h3 className="text-white text-sm mb-1" style={{ fontWeight: 600 }}>Daily Visitor Traffic</h3>
        <p className="text-xs text-gray-500 mb-5">Last 7 days</p>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={trafficData} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
            <defs>
              <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="date" tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="visitors" stroke="#6366F1" strokeWidth={2} fill="url(#colorV)" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Countries + Devices */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Countries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="md:col-span-2 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
        >
          <h3 className="text-white text-sm mb-5" style={{ fontWeight: 600 }}>Top Countries</h3>
          <div className="space-y-3">
            {countryData.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-lg w-6">{c.code}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-300">{c.country}</span>
                    <span className="text-xs text-gray-500">{c.visitors.toLocaleString()} · {c.percentage}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${c.percentage}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Devices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
        >
          <h3 className="text-white text-sm mb-5" style={{ fontWeight: 600 }}>Devices</h3>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie data={deviceData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
                {deviceData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2.5 mt-3">
            {deviceData.map((d) => (
              <div key={d.name} className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: d.color }} />
                <d.icon size={13} className="text-gray-500 shrink-0" />
                <span className="text-sm text-gray-400 flex-1">{d.name}</span>
                <span className="text-sm text-white" style={{ fontWeight: 500 }}>{d.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Most visited pages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
      >
        <h3 className="text-white text-sm mb-5" style={{ fontWeight: 600 }}>Most Visited Pages</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-500 border-b border-white/5">
                <th className="text-left pb-3 pr-4">Page</th>
                <th className="text-right pb-3 pr-4">Views</th>
                <th className="text-right pb-3">Unique Visitors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {pagesData.map((p, i) => (
                <tr key={i} className="text-sm hover:bg-white/5 transition-colors">
                  <td className="py-3 pr-4">
                    <div>
                      <p className="text-gray-300">{p.label}</p>
                      <p className="text-xs text-gray-600">{p.page}</p>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-right text-gray-300">{p.views.toLocaleString()}</td>
                  <td className="py-3 text-right text-gray-300">{p.unique.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
