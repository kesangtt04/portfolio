'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HologramEffectProps {
  children: ReactNode;
  className?: string;
  color?: 'cyan' | 'teal' | 'green';
}

const colorMap = {
  cyan: 'rgba(0, 217, 255, 0.3)',
  teal: 'rgba(0, 184, 204, 0.3)',
  green: 'rgba(29, 209, 161, 0.3)',
};

export function HologramEffect({
  children,
  className = '',
  color = 'cyan',
}: HologramEffectProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Main content */}
      <div className="relative z-10">{children}</div>

      {/* Hologram glow layers */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          boxShadow: [
            `0 0 20px ${colorMap[color]}, inset 0 0 20px ${colorMap[color]}`,
            `0 0 40px ${colorMap[color]}, inset 0 0 40px ${colorMap[color]}`,
            `0 0 20px ${colorMap[color]}, inset 0 0 20px ${colorMap[color]}`,
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Scan lines */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            ${colorMap[color]} 0px,
            transparent 2px,
            transparent 4px,
            ${colorMap[color]} 6px
          )`,
          opacity: 0.1,
        }}
        animate={{ y: ['0%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Glitch effect lines */}
      <motion.div
        className="absolute -left-1 top-0 w-1 h-1/2 rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #06b6d4, transparent)',
        }}
        animate={{
          opacity: [0, 1, 0],
          x: [-2, 2, -2],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-1 bottom-0 w-1 h-1/2 rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0891b2, transparent)',
        }}
        animate={{
          opacity: [0, 1, 0],
          x: [2, -2, 2],
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
}
