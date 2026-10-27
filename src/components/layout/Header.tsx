'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

// Custom SVG Icons
function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.004 12.004 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function CVIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="9" y1="11" x2="15" y2="11"></line>
      <line x1="9" y1="15" x2="15" y2="15"></line>
      <line x1="9" y1="19" x2="13" y2="19"></line>
    </svg>
  );
}

function ConsoleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { key: 'nav.about', label: t('nav.about'), id: 'about' },
    { key: 'nav.experience', label: t('nav.experience'), id: 'experience' },
    { key: 'nav.skills', label: t('nav.skills'), id: 'skills' },
    { key: 'nav.projects', label: t('nav.projects'), id: 'projects' },
    { key: 'nav.console', label: t('nav.console'), href: '/console' },
    { key: 'nav.contact', label: t('nav.contact'), id: 'contact' },
  ];

  // Detect light mode - using client-side check
  const [isLight, setIsLight] = useState(false);
  
  useEffect(() => {
    const checkLight = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };
    checkLight();
    // Listen for theme changes
    const observer = new MutationObserver(checkLight);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Color for text - black in light mode, cyan in dark mode
  const textColor = isLight ? '#000000' : '#cbd5e1';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full px-4 md:px-8 py-4 backdrop-blur-xl border-b transition-all duration-500"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-color-light)',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold transition-all duration-300 cursor-pointer"
          style={{ color: textColor }}
        >
          KS
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => 
            'href' in link ? (
              <motion.a
                key={link.key}
                whileHover={{ scale: 1.05 }}
                href={link.href}
                className="transition-colors duration-300 font-medium relative group border-0 outline-0 bg-transparent"
                style={{ 
                  color: textColor,
                }}
              >
                {link.label}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: textColor }}
                ></span>
              </motion.a>
            ) : (
              <motion.button
                key={link.key}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(link.id!)}
                className="transition-colors duration-300 font-medium relative group border-0 outline-0 bg-transparent"
                style={{ 
                  color: textColor,
                }}
              >
                {link.label}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: textColor }}
                ></span>
              </motion.button>
            )
          )}
          
          {/* CV Link - Desktop */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/cv"
            className="transition-colors duration-300 font-medium relative group border-0 outline-0"
            style={{ 
              color: textColor,
              background: 'transparent',
            }}
            title="View CV"
          >
            CV
            <span 
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
              style={{ backgroundColor: textColor }}
            ></span>
          </motion.a>
        </nav>

        {/* Quick Links & Controls */}
        <div className="flex gap-3 items-center">
          {/* GitHub Link */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/kesangtt04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: 'var(--bg-secondary)',
              color: textColor
            }}
            title="GitHub"
          >
            <GitHubIcon />
          </motion.a>

          {/* CV Link */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/cv"
            className="p-2 rounded-lg transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: 'var(--bg-secondary)',
              color: textColor
            }}
            title="View CV"
          >
            <CVIcon />
          </motion.a>

          {/* Console/API */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/console"
            className="p-2 rounded-lg transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: 'var(--bg-secondary)',
              color: textColor
            }}
            title="API Console"
          >
            <ConsoleIcon />
          </motion.a>

          <LanguageSwitcher />
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300"
            style={{ 
              color: textColor,
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-4 pb-4 pt-4 border-t transition-colors duration-300"
          style={{ borderColor: 'var(--border-color-light)' }}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              'href' in link ? (
                <motion.a
                  key={link.key}
                  whileHover={{ x: 4 }}
                  href={link.href}
                  className="text-left px-4 py-2 rounded transition-all duration-300"
                  style={{ 
                    color: textColor,
                  }}
                >
                  {link.label}
                </motion.a>
              ) : (
                <motion.button
                  key={link.key}
                  whileHover={{ x: 4 }}
                  onClick={() => scrollToSection(link.id!)}
                  className="text-left px-4 py-2 rounded transition-all duration-300"
                  style={{ 
                    color: textColor,
                  }}
                >
                  {link.label}
                </motion.button>
              )
            ))}
            {/* CV Link - Mobile */}
            <motion.a
              whileHover={{ x: 4 }}
              href="/cv"
              className="text-left px-4 py-2 rounded transition-all duration-300"
              style={{ 
                color: textColor,
              }}
            >
              CV
            </motion.a>
            {/* Console Link - Mobile */}
            <motion.a
              whileHover={{ x: 4 }}
              href="/console"
              className="text-left px-4 py-2 rounded transition-all duration-300"
              style={{ 
                color: textColor,
              }}
            >
              API Console
            </motion.a>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
