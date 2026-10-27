'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Animated nodes/connections
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    // Initialize nodes
    for (let i = 0; i < 6; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 2,
      });
    }

    let animationId: number;

    const animate = () => {
      // Clear with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Draw node
        ctx.fillStyle = `rgba(6, 182, 212, 0.6)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow
        ctx.strokeStyle = `rgba(6, 182, 212, 0.3)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + 8, 0, Math.PI * 2);
        ctx.stroke();

        // Draw connections to nearby nodes
        nodes.forEach((other, j) => {
          if (i < j) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 200) {
              ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - dist / 200)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Canvas for network effect */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.4 }}
      />

      {/* Animated gradient blobs */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity: 0.08, zIndex: 0 }}
      />

      <motion.div
        className="fixed bottom-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{ opacity: 0.06, zIndex: 0 }}
      />

      <motion.div
        className="fixed top-1/2 right-1/4 w-72 h-72 bg-cyan-600 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        style={{ opacity: 0.05, zIndex: 0 }}
      />

      {/* Tech grid lines */}
      <svg
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: 0.1, zIndex: 0 }}
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(6, 182, 212, 0.2)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated lines across screen */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent pointer-events-none"
        animate={{
          top: ['0%', '100%'],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ zIndex: 0 }}
      />

      <motion.div
        className="fixed top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent pointer-events-none"
        animate={{
          left: ['0%', '100%'],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
          delay: 2,
        }}
        style={{ zIndex: 0 }}
      />
    </>
  );
}
