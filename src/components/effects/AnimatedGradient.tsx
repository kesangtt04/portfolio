'use client';

import { motion } from 'framer-motion';

interface AnimatedGradientProps {
  className?: string;
  type?: 'hero' | 'section' | 'card';
}

export function AnimatedGradient({ className = '', type = 'hero' }: AnimatedGradientProps) {
  const variants = {
    hero: {
      animate: {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    section: {
      animate: {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      },
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    card: {
      animate: {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      },
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      style={{
        background:
          type === 'hero'
            ? 'linear-gradient(-45deg, #06b6d4, #22c55e, #0891b2, #06b6d4)'
            : type === 'section'
            ? 'linear-gradient(-45deg, rgba(6, 182, 212, 0.1), rgba(34, 197, 94, 0.1))'
            : 'linear-gradient(-45deg, rgba(6, 182, 212, 0.05), rgba(34, 197, 94, 0.05))',
        backgroundSize: type === 'hero' ? '300% 300%' : '200% 200%',
      }}
      animate={variants[type].animate}
      transition={variants[type].transition}
    />
  );
}
