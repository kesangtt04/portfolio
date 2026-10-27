'use client';

import { useEffect } from 'react';

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure theme is applied on mount
    const theme = localStorage.getItem('theme-preference') || 'dark';
    const html = document.documentElement;
    
    if (theme === 'light') {
      html.classList.add('light');
    } else {
      html.classList.remove('light');
    }
  }, []);

  return <>{children}</>;
}
