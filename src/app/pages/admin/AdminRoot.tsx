import { useState } from 'react';
import { AdminLogin } from './AdminLogin';
import { AdminLayout } from '../../components/admin/AdminLayout';

export function AdminRoot() {
  const [authenticated, setAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const handleLogin = () => {
    try {
      sessionStorage.setItem('admin_auth', 'true');
    } catch {}
    setAuthenticated(true);
  };

  if (!authenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminLayout />;
}
