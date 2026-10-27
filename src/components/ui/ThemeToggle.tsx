'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = resolvedTheme === 'dark';

  const handleThemeChange = () => {
    const newTheme = isDark ? 'light' : 'dark';
    
    // Animate background change
    const html = document.documentElement;
    html.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    
    // Update the theme
    setTheme(newTheme);
    
    // Update HTML element class for CSS variables
    if (newTheme === 'light') {
      html.classList.add('light');
      html.setAttribute('data-theme', 'light');
    } else {
      html.classList.remove('light');
      html.setAttribute('data-theme', 'dark');
    }
    
    // Store preference - use same key as next-themes (storageKey="theme")
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.button
      onClick={handleThemeChange}
      className="relative p-2 transition-all duration-500 rounded-lg group"
      style={{
        color: 'var(--text-secondary)',
        backgroundColor: 'var(--bg-secondary)',
        boxShadow: isDark 
          ? '0 0 15px rgba(0, 217, 255, 0.1)' 
          : '0 0 8px rgba(0, 217, 255, 0.05)'
      }}
      aria-label="Toggle theme"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(45deg, #00d9ff, #0891b2)',
          filter: 'blur(8px)',
        }}
      />

      {/* Icon container with animation */}
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
        className="relative"
      >
        {isDark ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </motion.div>

      {/* Floating particles on theme change */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          style={{
            backgroundColor: '#00d9ff',
            boxShadow: '0 0 8px rgba(0, 217, 255, 0.6)'
          }}
          className="absolute w-1.5 h-1.5 rounded-full"
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ 
            x: Math.cos((i / 4) * Math.PI * 2) * 40, 
            y: Math.sin((i / 4) * Math.PI * 2) * 40, 
            opacity: 0, 
            scale: 0 
          }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          style={{
            left: '50%',
            top: '50%',
            pointerEvents: 'none',
            position: 'absolute',
            marginLeft: '-3px',
            marginTop: '-3px',
          }}
        />
      ))}
    </motion.button>
  );
}
