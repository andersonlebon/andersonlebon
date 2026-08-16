import { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard, FolderKanban, Briefcase, Layers, MessageSquare,
  Users, BarChart3, Settings, LogOut, Bell, Search, Menu, X,
  ExternalLink, ChevronDown
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const navItems = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { path: '/admin/projects', label: 'Projects', icon: FolderKanban },
  { path: '/admin/experience', label: 'Experience', icon: Briefcase },
  { path: '/admin/skills', label: 'Skills', icon: Layers },
  { path: '/admin/messages', label: 'Messages', icon: MessageSquare, badge: true },
  { path: '/admin/visitors', label: 'Visitors', icon: Users },
  { path: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/admin/settings', label: 'Site Settings', icon: Settings },
];

export function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { messages, settings } = usePortfolio();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const unreadCount = messages.filter(m => !m.read).length;

  const isActive = (item: typeof navItems[0]) => {
    if (item.exact) return location.pathname === item.path;
    return location.pathname.startsWith(item.path);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-[#F5C518]/10">
        <Link to="/" className="flex items-center gap-0">
          <span className="text-[#F5C518]" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1rem' }}>&lt;/</span>
          {sidebarOpen && (
            <span className="text-white text-sm" style={{ fontFamily: 'var(--font-geist)', fontWeight: 600 }}>
              {settings.name}
            </span>
          )}
          {sidebarOpen && (
            <span className="text-[#F5C518]" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '1rem' }}>&gt;.</span>
          )}
        </Link>
        {sidebarOpen && (
          <span className="ml-2 px-2 py-0.5 text-[10px] rounded-full bg-[#F5C518]/15 text-[#F5C518] border border-[#F5C518]/30">
            Admin
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item);
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileSidebarOpen(false)}
              className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group ${
                active
                  ? 'bg-[#F5C518]/[0.06] text-[#F5C518]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {active && (
                <motion.div
                  layoutId="adminActiveNav"
                  className="absolute inset-0 bg-[#F5C518]/[0.08] rounded-xl border border-[#F5C518]/[0.2]"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              )}
              <item.icon size={16} className="relative z-10 shrink-0" />
              {sidebarOpen && (
                <span className="relative z-10 flex-1">{item.label}</span>
              )}
              {sidebarOpen && item.badge && unreadCount > 0 && (
                <span className="relative z-10 px-1.5 py-0.5 text-[10px] rounded-full bg-[#F5C518] text-black min-w-[18px] text-center" style={{ fontWeight: 700 }}>
                  {unreadCount}
                </span>
              )}
              {!sidebarOpen && item.badge && unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#F5C518]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-[#F5C518]/8 space-y-1">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <ExternalLink size={16} className="shrink-0" />
          {sidebarOpen && <span>View Portfolio</span>}
        </a>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/5 transition-all"
        >
          <LogOut size={16} className="shrink-0" />
          {sidebarOpen && <span>Exit Admin</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#0B0B0F] text-white overflow-hidden">
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: sidebarOpen ? 220 : 60 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="hidden md:flex flex-col border-r border-[#F5C518]/10 shrink-0 overflow-hidden"
        style={{ background: '#0D0D0D' }}
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: -220 }}
              animate={{ x: 0 }}
              exit={{ x: -220 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 top-0 bottom-0 w-56 z-50 md:hidden border-r border-[#F5C518]/10"
              style={{ background: '#0D0D0D' }}
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Topbar */}
        <header className="h-16 border-b border-[#F5C518]/8 flex items-center justify-between px-4 md:px-6 shrink-0" style={{ background: '#0D0D0D' }}>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden md:flex p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Menu size={18} />
            </button>
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {mobileSidebarOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <div className="relative hidden sm:block">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 text-sm bg-white/5 border border-white/[0.08] rounded-xl text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500/30 w-52"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              <Bell size={18} />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#F5C518]" />
              )}
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-white/5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F5C518] to-[#DEBA15] flex items-center justify-center text-xs text-black" style={{ fontWeight: 700 }}>
                A
              </div>
              <div className="hidden sm:block">
                <p className="text-sm text-white" style={{ fontWeight: 500 }}>{settings.name}</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <ChevronDown size={14} className="text-gray-500 hidden sm:block" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}