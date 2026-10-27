'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MatrixRainProps {
  density?: number;
}

export function MatrixRain({ density = 30 }: MatrixRainProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    char: string;
    duration: number;
  }>>([]);

  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const newParticles = Array.from({ length: density }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      char: chars[Math.floor(Math.random() * chars.length)],
      duration: 3 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, [density]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ top: '-10%', opacity: 0 }}
          animate={{ top: '110%', opacity: [0, 0.6, 0] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ left: `${particle.left}%` }}
          className="fixed text-cyan-400 text-sm font-mono"
        >
          {particle.char}
        </motion.div>
      ))}
    </div>
  );
}
