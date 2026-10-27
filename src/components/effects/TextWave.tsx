'use client';

import { motion } from 'framer-motion';

interface TextWaveProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TextWave({
  text,
  className = '',
  speed = 0.05,
}: TextWaveProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * speed,
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}
