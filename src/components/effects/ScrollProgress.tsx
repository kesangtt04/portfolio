'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

export function ScrollProgress() {
  const { scrollProgress } = useScrollAnimation();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 z-50"
      style={{
        width: `${scrollProgress * 100}%`,
        background: 'linear-gradient(to right, #06b6d4, #0891b2, #06b6d4)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
}
