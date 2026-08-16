import { createBrowserRouter, redirect } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { Portfolio } from './pages/Portfolio';
import { Expertise } from './pages/Expertise';
import { ProjectArchive } from './pages/ProjectArchive';

const redirectHome = () => redirect('/');

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Portfolio },
      { path: 'expertise', Component: Expertise },
      { path: 'projects', Component: ProjectArchive },
      { path: 'admin', loader: redirectHome },
      { path: 'admin/*', loader: redirectHome },
      { path: 'services', loader: redirectHome },
      { path: 'faith', loader: redirectHome },
      { path: '*', loader: redirectHome },
    ],
  },
]);
