'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer 
      className="w-full border-t transition-colors duration-500 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-color-light)',
      }}
    >
      {/* Gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 153, 255, 0.05) 50%, rgba(0, 217, 255, 0.1) 100%)',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-6xl mx-auto px-4 md:px-8 py-16 relative z-10"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 
              className="text-3xl font-bold mb-3"
              style={{
                background: 'linear-gradient(135deg, #00d9ff 0%, #0099ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              KS
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Nguyễn Kế Sang | AI/ML Developer | Full-Stack Builder
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 
              className="font-bold mb-5 uppercase text-xs tracking-widest"
              style={{ color: 'var(--text-primary)' }}
            >
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <motion.a
                      whileHover={{ x: 6, color: '#00d9ff' }}
                      href={`#${link.toLowerCase()}`}
                      className="transition-all duration-300 inline-block"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 
              className="font-bold mb-5 uppercase text-xs tracking-widest"
              style={{ color: 'var(--text-primary)' }}
            >
              Follow
            </h4>
            <div className="flex gap-3 flex-wrap">
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/kesangtt04"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border transition-all duration-300 hover:shadow-lg"
                style={{
                  color: '#00d9ff',
                  borderColor: 'rgba(0, 217, 255, 0.5)',
                  backgroundColor: 'rgba(0, 217, 255, 0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 1)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.08)';
                }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:kesangtt04@gmail.com"
                className="p-3 rounded-lg border transition-all duration-300 hover:shadow-lg"
                style={{
                  color: '#00d9ff',
                  borderColor: 'rgba(0, 217, 255, 0.5)',
                  backgroundColor: 'rgba(0, 217, 255, 0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 1)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.08)';
                }}
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/sangzxje"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border transition-all duration-300 hover:shadow-lg"
                style={{
                  color: '#00d9ff',
                  borderColor: 'rgba(0, 217, 255, 0.5)',
                  backgroundColor: 'rgba(0, 217, 255, 0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 1)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.08)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Built With */}
          <motion.div variants={itemVariants}>
            <h4 
              className="font-bold mb-5 uppercase text-xs tracking-widest"
              style={{ color: 'var(--text-primary)' }}
            >
              Built With
            </h4>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Next.js, React, TypeScript, Tailwind CSS, Framer Motion
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div 
          className="border-t my-12"
          style={{ borderColor: 'var(--border-color-light)' }}
        />

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p 
            className="text-sm"
            style={{ color: 'var(--text-primary)' }}
          >
            © {currentYear} Nguyễn Kế Sang. All rights reserved.
          </p>

          <p 
            className="text-sm flex items-center gap-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            for the web
          </p>

          {/* Back to Top */}
          <motion.button
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-lg border transition-all duration-300 hover:shadow-lg"
            style={{
              color: '#00d9ff',
              borderColor: 'rgba(0, 217, 255, 0.5)',
              backgroundColor: 'rgba(0, 217, 255, 0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 1)';
              e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
              e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.08)';
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
}
