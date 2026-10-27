'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function LightModeDecorations() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkLight = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };
    checkLight();
    const observer = new MutationObserver(checkLight);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  if (!isLight) return null;

  // Floating decoration elements
  const decorations = [
    { icon: '💡', delay: 0, x: 10, y: 20 },
    { icon: '🚀', delay: 0.5, x: 80, y: 15 },
    { icon: '⚡', delay: 1, x: 15, y: 70 },
    { icon: '🎯', delay: 1.5, x: 75, y: 75 },
    { icon: '💻', delay: 2, x: 85, y: 40 },
    { icon: '🔧', delay: 2.5, x: 5, y: 50 },
  ];

  return (
    <>
      {/* Floating Icons */}
      {decorations.map((item, idx) => (
        <motion.div
          key={idx}
          className="fixed pointer-events-none text-3xl opacity-5"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            zIndex: 0,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + idx,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Floating gradient orbs */}
      <motion.div
        className="fixed rounded-full blur-3xl pointer-events-none opacity-20"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
          left: '10%',
          top: '10%',
          zIndex: 0,
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="fixed rounded-full blur-3xl pointer-events-none opacity-15"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
          right: '10%',
          bottom: '15%',
          zIndex: 0,
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Mesh pattern animation */}
      <div
        className="fixed inset-0 pointer-events-none opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          zIndex: 0,
          animation: 'meshPulse 6s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes meshPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </>
  );
}
