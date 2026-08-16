import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

export function AdminVisitors() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>Visitors</h1>
        <p className="text-sm text-gray-500">Visitor tracking is not enabled on this site.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-10 rounded-2xl bg-white/[0.03] border border-white/[0.07] text-center"
      >
        <Eye size={28} className="text-[#F5C518] mx-auto mb-4" />
        <p className="text-white mb-2" style={{ fontWeight: 600 }}>No visitor data</p>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Country, device, and traffic tables were removed because they were not backed by a real data source.
        </p>
      </motion.div>
    </div>
  );
}
