'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Code2, Zap, Brain } from 'lucide-react';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

interface StatProps {
  label: string;
  value: number;
  suffix: string;
  icon?: React.ReactNode;
}

function StatCounter({ label, value, suffix, icon }: StatProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let current = 0;
      const timer = setInterval(() => {
        current += Math.ceil(value / 20);
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-6 rounded-xl border border-cyan-500 border-opacity-30 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 group cursor-pointer relative overflow-hidden glass-dark"
    >
      {/* Gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-400/10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {icon && (
        <motion.div
          className="mb-3 text-cyan-400 group-hover:scale-110 transition-transform relative z-10"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {icon}
        </motion.div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 relative z-10">
        {count}
        {suffix}
      </div>
      <div className="text-sm relative z-10" style={{ color: 'var(--text-secondary)' }}>{label}</div>
    </motion.div>
  );
}

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="w-full px-4 md:px-8 py-section-mobile md:py-section border-t border-cyan-500 border-opacity-30 relative overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-primary)',
        backgroundImage: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 50%, var(--bg-secondary) 100%)',
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ opacity: 0.05 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-h2 font-bold mb-12 gradient-text"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('about.title')}
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-4">
              <StatCounter
                label={t('about.stats.experience')}
                value={6}
                suffix="+"
                icon={<Zap size={24} />}
              />
              <StatCounter
                label={t('about.stats.projects')}
                value={4}
                suffix="+"
                icon={<Code2 size={24} />}
              />
              <StatCounter
                label={t('about.stats.technologies')}
                value={10}
                suffix="+"
                icon={<Brain size={24} />}
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <motion.p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0.7 }}
            >
              {t('about.description1')}
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0.7 }}
              transition={{ delay: 0.1 }}
            >
              {t('about.description2')}
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0.7 }}
              transition={{ delay: 0.2 }}
            >
              {t('about.description3')}
            </motion.p>
          </motion.div>

          {/* Education & Certification */}
          <ScrollReveal>
            <motion.div
              variants={itemVariants}
              className="rounded-xl p-8 border border-cyan-500 border-opacity-50 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 glass-dark relative overflow-hidden"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-cyan-400/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="space-y-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    {t('about.education')}
                  </h3>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {t('about.educationValue')}
                  </p>
                </motion.div>

                <div className="h-px bg-gradient-to-r from-cyan-400 to-transparent opacity-50"></div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    {t('about.certification')}
                  </h3>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {t('about.certificationValue')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}
