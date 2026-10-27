'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlitchEffectProps {
  children: ReactNode;
  className?: string;
}

export function GlitchEffect({ children, className = '' }: GlitchEffectProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Original text */}
      <div className="relative z-10">{children}</div>

      {/* Glitch layers */}
      <motion.div
        className="absolute inset-0 text-accent-cyan opacity-0 pointer-events-none"
        animate={{
          opacity: [0, 0.8, 0],
          x: [-2, 2, -2],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 4,
        }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0 text-accent-teal opacity-0 pointer-events-none"
        animate={{
          opacity: [0, 0.6, 0],
          x: [2, -2, 2],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 4,
          delay: 0.15,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
