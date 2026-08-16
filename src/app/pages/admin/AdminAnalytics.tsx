import { motion } from 'motion/react';
import { BarChart3 } from 'lucide-react';

export function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>Analytics</h1>
        <p className="text-sm text-gray-500">No analytics provider is connected to this portfolio yet.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-10 rounded-2xl bg-white/[0.03] border border-white/[0.07] text-center"
      >
        <BarChart3 size={28} className="text-[#F5C518] mx-auto mb-4" />
        <p className="text-white mb-2" style={{ fontWeight: 600 }}>Analytics not connected</p>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Visitor charts and conversion metrics were removed because they were placeholder numbers. Connect a real analytics source before showing performance data here.
        </p>
      </motion.div>
    </div>
  );
}
