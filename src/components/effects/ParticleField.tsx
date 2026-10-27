'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
}

export function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const generateParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          life: 1,
          maxLife: Math.random() * 3 + 2,
        });
      }
      return particles;
    };

    particlesRef.current = generateParticles();

    const animate = () => {
      particlesRef.current = particlesRef.current
        .map((p) => ({
          ...p,
          x: (p.x + p.vx + width) % width,
          y: (p.y + p.vy + height) % height,
          life: p.life - 1 / 60,
        }))
        .filter((p) => p.life > 0);

      if (particlesRef.current.length < 50) {
        particlesRef.current.push({
          id: Math.random(),
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          life: 1,
          maxLife: Math.random() * 3 + 2,
        });
      }

      // Render particles (using DOM for performance)
      container.innerHTML = particlesRef.current
        .map(
          (p) =>
            `<div style="position: absolute; left: ${p.x}px; top: ${p.y}px; width: ${p.size}px; height: ${p.size}px; background: rgba(6, 182, 212, ${p.life * 0.1}); border-radius: 50%; pointer-events: none; box-shadow: 0 0 ${p.size}px rgba(6, 182, 212, ${p.life * 0.2});" />`
        )
        .join('');

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      // Reinitialize on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        opacity: 0.15,
        mixBlendMode: 'screen',
      }}
    />
  );
}
