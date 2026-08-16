import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title?: string;
}

const DEFAULT_TITLE = 'Anderson | Software Developer & AI Engineer in Montreal';
const EXPERTISE_TITLE = 'AI & Software Engineering Expertise | Anderson';

export function SEO({ title }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const nextTitle = title
      || (location.pathname === '/expertise' ? EXPERTISE_TITLE : DEFAULT_TITLE);
    document.title = nextTitle;
  }, [title, location.pathname]);

  return null;
}
