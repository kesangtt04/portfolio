'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Phone, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();
  const subtitle = t('hero.subtitle');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < subtitle.length) {
        setDisplayedText(subtitle.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [subtitle]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-20 relative overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-20"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-15"
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="max-w-5xl mx-auto w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div className="flex flex-col gap-6">
            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                {t('hero.greeting')}
              </h1>
            </motion.div>

            {/* Typing Subtitle */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 min-h-10">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg hover:shadow-lg cursor-pointer group relative overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: '#00d9ff',
                  color: '#ffffff'
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <FileText size={20} className="relative" />
                <span className="relative">{t('hero.downloadCV')}</span>
                <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer border-2"
                style={{
                  borderColor: '#00d9ff',
                  color: '#00d9ff',
                  backgroundColor: 'transparent'
                }}
              >
                <Mail size={20} />
                {t('hero.contactMe')}
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-6"
            >
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/kesangtt04"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:transition-all duration-300 rounded-lg border"
                style={{
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color-light)'
                }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:kesangtt04@gmail.com"
                className="p-3 hover:transition-all duration-300 rounded-lg border"
                style={{
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color-light)'
                }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="tel:+84376556259"
                className="p-3 hover:transition-all duration-300 rounded-lg border"
                style={{
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color-light)'
                }}
              >
                <Phone size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full max-w-sm aspect-square mx-auto">
              {/* Tech hexagons background */}
              <motion.div
                className="absolute -inset-12 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 400"
                  className="opacity-10"
                >
                  <defs>
                    <pattern id="hex-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="400" height="400" fill="url(#hex-pattern)" />
                </svg>
              </motion.div>

              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 p-1 opacity-50"
                style={{
                  background: 'linear-gradient(to right, var(--accent-gradient-start), #0891b2, var(--accent-gradient-start))',
                  opacity: 0.5
                }}
              >
                <div className="w-full h-full rounded-3xl" style={{ backgroundColor: 'var(--bg-primary)' }} />
              </motion.div>

              {/* Glow background */}
              <motion.div
                className="absolute inset-0 rounded-3xl blur-2xl"
                animate={{ opacity: isHovered ? 0.8 : 0.3 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(to right, rgba(0, 217, 255, 0.2), rgba(8, 145, 178, 0.2))'
                }}
              />

              {/* Tech corner markers */}
              <motion.div
                className="absolute -top-4 -left-4 w-3 h-3 border-2"
                animate={{ scale: isHovered ? 1.5 : 1 }}
                transition={{ duration: 0.3 }}
                style={{ borderColor: '#00d9ff' }}
              />
              <motion.div
                className="absolute -top-4 -right-4 w-3 h-3 border-2"
                animate={{ scale: isHovered ? 1.5 : 1 }}
                transition={{ duration: 0.3 }}
                style={{ borderColor: '#00d9ff' }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-3 h-3 border-2"
                animate={{ scale: isHovered ? 1.5 : 1 }}
                transition={{ duration: 0.3 }}
                style={{ borderColor: '#00d9ff' }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-3 h-3 border-2"
                animate={{ scale: isHovered ? 1.5 : 1 }}
                transition={{ duration: 0.3 }}
                style={{ borderColor: '#00d9ff' }}
              />

              {/* Main container */}
              <div className="absolute inset-1 rounded-3xl bg-gradient-to-b overflow-hidden backdrop-blur-sm" style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color-light)',
                border: '1px solid var(--border-color-light)'
              }}>
                {/* Avatar image */}
                <div className="w-full h-full relative">
                  <img
                    src="/images/avatar.jpg"
                    alt="Nguyễn Kế Sang"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  
                  {/* Tech overlay lines */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ opacity: isHovered ? 0.3 : 0.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-full h-full">
                      <line x1="0" y1="33%" x2="100%" y2="33%" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />
                      <line x1="0" y1="66%" x2="100%" y2="66%" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />
                      <line x1="33%" y1="0" x2="33%" y2="100%" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />
                      <line x1="66%" y1="0" x2="66%" y2="100%" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />
                    </svg>
                  </motion.div>
                </div>

                {/* Stats - appearing on hover */}
                <motion.div
                  animate={{ y: isHovered ? -20 : 0, scale: isHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 px-4 py-2 rounded-lg text-center border transition-colors duration-300"
                  style={{
                    backgroundColor: 'rgba(10, 14, 39, 0.9)',
                    borderColor: 'var(--border-color-light)',
                    color: '#00d9ff'
                  }}
                >
                  <div className="text-lg font-bold">6+</div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Months</div>
                </motion.div>

                <motion.div
                  animate={{ y: isHovered ? 20 : 0, scale: isHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="absolute bottom-4 left-4 px-4 py-2 rounded-lg text-center border transition-colors duration-300"
                  style={{
                    backgroundColor: 'rgba(10, 14, 39, 0.9)',
                    borderColor: 'var(--border-color-light)',
                    color: '#00d9ff'
                  }}
                >
                  <div className="text-lg font-bold">4+</div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Projects</div>
                </motion.div>

                <motion.div
                  animate={{ y: isHovered ? -20 : 0, scale: isHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute bottom-4 right-4 px-4 py-2 rounded-lg text-center border transition-colors duration-300"
                  style={{
                    backgroundColor: 'rgba(10, 14, 39, 0.9)',
                    borderColor: 'var(--border-color-light)',
                    color: '#00d9ff'
                  }}
                >
                  <div className="text-lg font-bold">10+</div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Tech Stack</div>
                </motion.div>
              </div>

              {/* Enhanced outer glow */}
              <motion.div
                className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"
                animate={{ 
                  opacity: isHovered ? [0.5, 1, 0.5] : 0.2,
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ filter: 'blur(30px)', zIndex: -1 }}
              />

              {/* Orbiting particles */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    x: [
                      Math.cos((i / 4) * Math.PI * 2) * 120,
                      Math.cos(((i + 0.5) / 4) * Math.PI * 2) * 120,
                    ],
                    y: [
                      Math.sin((i / 4) * Math.PI * 2) * 120,
                      Math.sin(((i + 0.5) / 4) * Math.PI * 2) * 120,
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-4px',
                    marginTop: '-4px',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Scroll to explore</span>
          <motion.div className="w-6 h-10 border-2 rounded-full flex justify-center p-2" style={{ borderColor: 'var(--border-color)' }}>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full"
              style={{ backgroundColor: 'var(--border-color)' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
