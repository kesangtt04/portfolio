'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { LightModeDecorations } from '@/components/decorations/LightModeDecorations';

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Ensure the HTML element has the proper class when theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleThemeChange = () => {
      const htmlElement = document.documentElement;
      const storedTheme = localStorage.getItem('theme');
      const systemPrefersDark = mediaQuery.matches;
      
      // Determine the current theme
      const isDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark);
      
      if (isDark) {
        htmlElement.classList.remove('light');
      } else {
        htmlElement.classList.add('light');
      }
    };

    handleThemeChange();
    mediaQuery.addEventListener('change', handleThemeChange);
    
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="theme">
      <LanguageProvider>
        <LightModeDecorations />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
