'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TechBorderProps {
  children: ReactNode;
  className?: string;
}

export function TechBorder({ children, className = '' }: TechBorderProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          background: [
            'linear-gradient(90deg, #00d9ff 0%, #00d9ff 25%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, #00b8cc 25%, #00b8cc 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, transparent 75%, #00d9ff 100%)',
            'linear-gradient(90deg, #00d9ff 0%, #00d9ff 25%, transparent 100%)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          padding: '2px',
          borderRadius: '12px',
        }}
      />

      {/* Corner glows */}
      <motion.div
        className="absolute -top-2 -left-2 w-4 h-4 rounded-full pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 217, 255, 0.5)',
            '0 0 20px rgba(0, 217, 255, 0.8)',
            '0 0 10px rgba(0, 217, 255, 0.5)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 184, 204, 0.5)',
            '0 0 20px rgba(0, 184, 204, 0.8)',
            '0 0 10px rgba(0, 184, 204, 0.5)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
