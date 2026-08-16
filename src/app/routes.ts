import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { Portfolio } from './pages/Portfolio';
import { Expertise } from './pages/Expertise';
import { Services } from './pages/Services';
import { Faith } from './pages/Faith';
import { AdminRoot } from './pages/admin/AdminRoot';
import { Overview } from './pages/admin/Overview';
import { AdminProjects } from './pages/admin/AdminProjects';
import { AdminExperience } from './pages/admin/AdminExperience';
import { AdminSkills } from './pages/admin/AdminSkills';
import { AdminMessages } from './pages/admin/AdminMessages';
import { AdminVisitors } from './pages/admin/AdminVisitors';
import { AdminAnalytics } from './pages/admin/AdminAnalytics';
import { AdminSettings } from './pages/admin/AdminSettings';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Portfolio,
      },
      {
        path: 'expertise',
        Component: Expertise,
      },
      {
        path: 'services',
        Component: Services,
      },
      {
        path: 'faith',
        Component: Faith,
      },
      {
        path: 'admin',
        Component: AdminRoot,
        children: [
          { index: true, Component: Overview },
          { path: 'projects', Component: AdminProjects },
          { path: 'experience', Component: AdminExperience },
          { path: 'skills', Component: AdminSkills },
          { path: 'messages', Component: AdminMessages },
          { path: 'visitors', Component: AdminVisitors },
          { path: 'analytics', Component: AdminAnalytics },
          { path: 'settings', Component: AdminSettings },
        ],
      },
    ],
  },
]);