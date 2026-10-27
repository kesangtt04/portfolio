'use client';

import { motion } from 'framer-motion';

export function SectionDivider() {
  return (
    <motion.div
      className="w-full h-px flex items-center justify-center relative"
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      {/* Main line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-md"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Dots on line */}
      <div className="absolute inset-0 flex items-center justify-center gap-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-cyan-400"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
