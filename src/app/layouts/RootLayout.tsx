import { Outlet } from 'react-router';
import { PortfolioProvider } from '../context/PortfolioContext';

export function RootLayout() {
  return (
    <PortfolioProvider>
      <Outlet />
    </PortfolioProvider>
  );
}
