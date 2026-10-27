'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  glassEffect?: 'dark' | 'light' | 'medium';
  hoverEffect?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className = '',
  glassEffect = 'dark',
  hoverEffect = true,
  delay = 0,
  ...motionProps
}: GlassCardProps) {
  const glassClasses = {
    dark: 'bg-dark-bg-secondary/60 backdrop-blur-xl border-accent-subtle-cyan/50',
    light: 'bg-white/10 backdrop-blur-md border-white/20',
    medium: 'bg-white/20 backdrop-blur-lg border-white/30',
  };

  return (
    <motion.div
      className={`rounded-xl border transition-all duration-300 ${glassClasses[glassEffect]} ${
        hoverEffect
          ? 'hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] hover:scale-105'
          : ''
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect ? { scale: 1.02 } : {}}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
