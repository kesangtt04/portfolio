'use client';

import { motion } from 'framer-motion';

interface AnimatedBlobProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'teal' | 'green';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  delay?: number;
}

export function AnimatedBlob({ 
  size = 'md', 
  color = 'cyan', 
  position = 'top-left',
  delay = 0 
}: AnimatedBlobProps) {
  const sizeMap = {
    sm: 'w-40 h-40',
    md: 'w-72 h-72',
    lg: 'w-96 h-96',
  };

  const colorMap = {
    cyan: 'bg-cyan-400',
    teal: 'bg-cyan-600',
    green: 'bg-green-500',
  };

  const positionMap = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <motion.div
      className={`absolute ${sizeMap[size]} ${colorMap[color]} rounded-full blur-3xl opacity-20 pointer-events-none`}
      style={{
        top: position.includes('top') && position !== 'center' ? '-50%' : undefined,
        right: position.includes('right') && position !== 'center' ? '-50%' : undefined,
        bottom: position.includes('bottom') ? '-50%' : undefined,
        left: position.includes('left') && position !== 'center' ? '-50%' : undefined,
      }}
      animate={{
        x: [0, 50, -50, 0],
        y: [0, -50, 50, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}
