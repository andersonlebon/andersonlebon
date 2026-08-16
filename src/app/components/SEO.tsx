import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title = "Anderson Lebon - Full-Stack Developer",
  description = "Portfolio of Anderson Lebon, a full-stack developer in Montreal-Nord, Quebec. Currently at Aspyn AI, building production web apps with React, Next.js, and TypeScript.",
  image = "https://www.andersone.site/og-image.png",
  url
}: SEOProps) {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tags
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic Meta Tags
    updateMetaTag('description', description, true);
    updateMetaTag('keywords', 'full-stack developer, React, Next.js, TypeScript, Node.js, Anderson Lebon, Montreal, Aspyn AI', true);
    updateMetaTag('author', 'Anderson', true);

    // Open Graph / Facebook
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');
    updateMetaTag('og:site_name', 'Anderson Portfolio');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', currentUrl, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:creator', '@andersonlebon', true);

    // WhatsApp specific
    updateMetaTag('og:image:type', 'image/png');

    // Additional SEO
    updateMetaTag('robots', 'index, follow', true);
    updateMetaTag('theme-color', '#F5C518', true);

  }, [title, description, image, currentUrl]);

  return null;
}
