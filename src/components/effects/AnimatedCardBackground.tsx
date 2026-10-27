'use client';

import { motion } from 'framer-motion';

interface AnimatedCardBackgroundProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export function AnimatedCardBackground({
  children,
  className = '',
  animated = true,
}: AnimatedCardBackgroundProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={animated ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Animated gradient background */}
      {animated && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{
            background:
              'linear-gradient(-45deg, rgba(6, 182, 212, 0.1), rgba(8, 145, 178, 0.05), rgba(6, 182, 212, 0.1))',
            backgroundSize: '200% 200%',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Border glow on hover */}
      {animated && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow:
              'inset 0 0 20px rgba(6, 182, 212, 0.2), 0 0 20px rgba(6, 182, 212, 0.1)',
          }}
        />
      )}
    </motion.div>
  );
}
