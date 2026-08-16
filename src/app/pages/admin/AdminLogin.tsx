import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

// Simple demo auth — password: "admin123"
const ADMIN_PASSWORD = 'admin123';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        onLogin();
      } else {
        setError('Incorrect password.');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 70%)' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        {/* Back link */}
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>

        {/* Card */}
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-[#F5C518]/15 backdrop-blur">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#F5C518] flex items-center justify-center mb-4"
              style={{ boxShadow: '0 0 30px rgba(245,197,24,0.25)' }}>
              <Lock size={20} className="text-black" />
            </div>
            <div className="flex items-center gap-0 mb-1">
              <span className="text-[#F5C518]" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.1rem' }}>&lt;/</span>
              <span className="text-white" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.1rem' }}>Admin</span>
              <span className="text-[#F5C518]" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1.1rem' }}>&gt;.</span>
            </div>
            <p className="text-sm text-gray-500 text-center">Enter your password to access the dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="Enter password..."
                  className={`w-full px-4 py-3 pr-10 rounded-xl bg-white/[0.05] border text-white placeholder-gray-600 text-sm focus:outline-none transition-all ${
                    error ? 'border-red-500/50' : 'border-white/10 focus:border-[#F5C518]/40'
                  }`}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-400 mt-1.5"
                >
                  {error}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(245,197,24,0.3)' }}
              whileTap={{ scale: 0.98 }}
              disabled={loading || !password}
              className="w-full py-3 rounded-xl bg-[#F5C518] text-black text-sm hover:bg-[#DEBA15] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ fontWeight: 700 }}
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                'Sign In'
              )}
            </motion.button>
          </form>

          <p className="text-center text-xs text-gray-600 mt-5">
            Demo password: <span className="text-gray-400 font-mono">admin123</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}