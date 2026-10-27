'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/context/LanguageContext';

export function EducationSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { language } = useLanguage();

  const educationData = {
    en: {
      title: 'Education',
      degree: 'Bachelor of Science in Computer Science',
      university: 'Ho Chi Minh City University of Technology (HCMUT)',
      status: 'Graduated ✅',
      year: '2026',
      gpa: '7.3 / 10',
      highlights: [
        'Strong foundation in Data Structures & Algorithms',
        'Advanced studies in Machine Learning & Computer Vision',
        'Practical experience through internships and real-world projects',
        'Focus on AI/ML and Full-Stack Development',
      ],
    },
    vi: {
      title: 'Học Vấn',
      degree: 'Cử Nhân Khoa Học Máy Tính',
      university: 'Đại học Công Nghệ Thành Phố Hồ Chí Minh (HCMUT)',
      status: 'Đã tốt nghiệp ✅',
      year: '2026',
      gpa: '7.3 / 10',
      highlights: [
        'Nền tảng vững chắc về Cấu Trúc Dữ Liệu & Thuật Toán',
        'Nghiên cứu nâng cao về Học Máy & Thị Giác Máy Tính',
        'Kinh nghiệm thực tế qua thực tập và dự án thực tế',
        'Tập trung vào AI/ML và Full-Stack Development',
      ],
    },
  };

  const data = educationData[language as keyof typeof educationData];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="education"
      className="w-full px-4 md:px-8 py-section-mobile md:py-section border-t transition-colors duration-500"
      style={{
        background: 'linear-gradient(to bottom right, var(--bg-primary), var(--bg-secondary))',
        borderColor: 'var(--border-color-light)',
      }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-h2 font-bold mb-12"
          style={{ color: 'var(--text-primary)' }}
        >
          🎓 {data.title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {/* Main Education Card */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl border transition-all duration-300 hover:border-cyan-400"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color-light)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left - Degree Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#00d9ff' }}>
                    {data.degree}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }} className="text-lg">
                    {data.university}
                  </p>
                </div>

                <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color-light)' }}>
                  <div className="flex justify-between items-center mb-3">
                    <span style={{ color: 'var(--text-secondary)' }}>Status:</span>
                    <span style={{ color: '#1dd1a1' }} className="font-bold text-lg">
                      {data.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span style={{ color: 'var(--text-secondary)' }}>Year:</span>
                    <span style={{ color: '#00d9ff' }} className="font-bold">
                      {data.year}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: 'var(--text-secondary)' }}>GPA:</span>
                    <span style={{ color: '#1dd1a1' }} className="font-bold text-lg">
                      {data.gpa}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right - Achievements */}
              <div>
                <h4 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Key Achievements:
                </h4>
                <ul className="space-y-3">
                  {data.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className="flex gap-3"
                    >
                      <span style={{ color: '#00d9ff' }} className="text-xl flex-shrink-0">
                        ✓
                      </span>
                      <span style={{ color: 'var(--text-secondary)' }}>
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Major', value: 'Computer Science' },
              { label: 'Duration', value: '4 Years' },
              { label: 'Focus', value: 'AI/ML' },
              { label: 'Status', value: 'Graduate' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg text-center border transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color-light)',
                }}
              >
                <p style={{ color: 'var(--text-tertiary)' }} className="text-xs uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p style={{ color: '#00d9ff' }} className="font-bold">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg border text-center"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color-light)',
            }}
          >
            <p style={{ color: 'var(--text-secondary)' }} className="mb-4">
              Want to learn more about my academic projects and coursework?
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/cv"
              className="inline-block px-6 py-2 rounded-lg transition-all duration-300 font-semibold"
              style={{
                backgroundColor: '#00d9ff',
                color: '#0a0e27',
              }}
            >
              View Full CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
