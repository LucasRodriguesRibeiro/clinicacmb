import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToSection: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll handling based on path names
    const sectionMap: Record<string, string> = {
      '/': 'inicio',
      '/corpo-clinico': 'corpo-clinico',
      '/exames': 'exames',
      '/contato': 'contato',
    };

    const targetId = sectionMap[pathname];

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Smooth scroll to the section
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // Check if dynamic doctor route: /medicos/:id
    const doctorMatch = pathname.match(/^\/medicos\/([a-zA-Z0-9-]+)$/);
    if (doctorMatch) {
      // Scroll to corpo-clinico but maybe focus on doctor avatar or grid
      const element = document.getElementById('corpo-clinico');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // Fallback: scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};
export default ScrollToSection;
