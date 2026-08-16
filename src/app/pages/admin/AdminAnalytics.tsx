import { motion } from 'motion/react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from 'recharts';

const monthlyData = [
  { month: 'Aug', views: 1200, visitors: 800, messages: 12 },
  { month: 'Sep', views: 1800, visitors: 1100, messages: 18 },
  { month: 'Oct', views: 2200, visitors: 1400, messages: 22 },
  { month: 'Nov', views: 1900, visitors: 1200, messages: 15 },
  { month: 'Dec', views: 2800, visitors: 1800, messages: 28 },
  { month: 'Jan', views: 3400, visitors: 2100, messages: 31 },
  { month: 'Feb', views: 4200, visitors: 2600, messages: 42 },
  { month: 'Mar', views: 3800, visitors: 2400, messages: 38 },
];

const projectViews = [
  { name: 'Primus LMS', views: 580 },
  { name: 'Budget App', views: 390 },
  { name: 'Greenbadger', views: 310 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="px-3 py-2 bg-[#1A1A24] border border-white/10 rounded-lg text-xs space-y-1">
        <p className="text-gray-400 mb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} style={{ color: p.color }}>{p.name}: {p.value}</p>
        ))}
      </div>
    );
  }
  return null;
};

export function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>Analytics</h1>
        <p className="text-sm text-gray-500">Performance overview and engagement metrics</p>
      </motion.div>

      {/* KPI summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Views', value: '21,300', change: '+34%' },
          { label: 'Total Visitors', value: '13,400', change: '+28%' },
          { label: 'Avg. Session', value: '3m 12s', change: '+12%' },
          { label: 'Conv. Rate', value: '1.65%', change: '+0.3%' },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
          >
            <p className="text-xs text-gray-500 mb-3">{s.label}</p>
            <p className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>{s.value}</p>
            <p className="text-xs text-green-400">{s.change} vs last period</p>
          </motion.div>
        ))}
      </div>

      {/* Multi-line traffic chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
      >
        <h3 className="text-white text-sm mb-1" style={{ fontWeight: 600 }}>Traffic Trends</h3>
        <p className="text-xs text-gray-500 mb-5">Views, visitors, and messages over time</p>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={monthlyData} margin={{ top: 0, right: 10, left: -30, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
            <Line type="monotone" dataKey="views" stroke="#6366F1" strokeWidth={2} dot={false} name="Page Views" />
            <Line type="monotone" dataKey="visitors" stroke="#8B5CF6" strokeWidth={2} dot={false} name="Visitors" />
            <Line type="monotone" dataKey="messages" stroke="#06B6D4" strokeWidth={2} dot={false} name="Messages" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Project views */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
      >
        <h3 className="text-white text-sm mb-5" style={{ fontWeight: 600 }}>Project Views</h3>
        <div className="space-y-4">
          {projectViews.map((p, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-gray-300">{p.name}</span>
                <span className="text-sm text-white" style={{ fontWeight: 500 }}>{p.views}</span>
              </div>
              <div className="h-2 rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(p.views / 580) * 100}%` }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
