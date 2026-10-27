'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1 bg-dark-bg-secondary rounded-lg p-1 border border-accent-subtle-cyan border-opacity-30">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-accent-cyan text-dark-bg-primary shadow-cyan-glow-sm'
            : 'text-dark-text-secondary hover:text-accent-cyan'
        }`}
      >
        EN
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('vi')}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 ${
          language === 'vi'
            ? 'bg-accent-cyan text-dark-bg-primary shadow-cyan-glow-sm'
            : 'text-dark-text-secondary hover:text-accent-cyan'
        }`}
      >
        VI
      </motion.button>
    </div>
  );
}
