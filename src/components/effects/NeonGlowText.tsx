'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonGlowTextProps {
  children: ReactNode;
  color?: 'cyan' | 'teal' | 'green';
  className?: string;
}

const colorStyles = {
  cyan: 'drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]',
  teal: 'drop-shadow-[0_0_10px_rgba(8,145,178,0.6)]',
  green: 'drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]',
};

export function NeonGlowText({
  children,
  color = 'cyan',
  className = '',
}: NeonGlowTextProps) {
  const colorRgb = {
    cyan: '6, 182, 212',
    teal: '8, 145, 178',
    green: '34, 197, 94',
  };

  return (
    <motion.span
      className={`text-cyan-400 ${colorStyles[color]} ${className}`}
      animate={{
        textShadow: [
          `0 0 10px rgba(${colorRgb[color]}, 0.5)`,
          `0 0 20px rgba(${colorRgb[color]}, 0.8)`,
          `0 0 10px rgba(${colorRgb[color]}, 0.5)`,
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {children}
    </motion.span>
  );
}
