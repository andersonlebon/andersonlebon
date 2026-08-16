import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title?: string;
}

const DEFAULT_TITLE = 'Anderson Lebon | Full-Stack Developer in Montreal';
const EXPERTISE_TITLE = 'Expertise | Anderson Lebon, Full-Stack Developer';

export function SEO({ title }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const nextTitle = title
      || (location.pathname === '/expertise' ? EXPERTISE_TITLE : DEFAULT_TITLE);
    document.title = nextTitle;
  }, [title, location.pathname]);

  return null;
}
