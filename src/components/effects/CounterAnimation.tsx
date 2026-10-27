'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CounterAnimationProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function CounterAnimation({
  from,
  to,
  duration = 2,
  suffix = '',
  className = '',
}: CounterAnimationProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const range = to - from;
    const increment = range / (duration * 60); // 60 frames per second
    let current = from;

    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}
      {suffix}
    </motion.span>
  );
}
