'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { useState } from 'react';

const skillsData = {
  en: [
    {
      category: 'AI & Machine Learning',
      color: 'from-accent-cyan to-accent-teal',
      icon: '🤖',
      items: [
        'Model Training & Fine-tuning',
        'Transfer Learning',
        'Optical Character Recognition (OCR)',
        'Computer Vision',
        'Natural Language Processing (NLP)',
        'CNN, RNN, LSTM, Transformers',
        'Generative AI',
      ],
    },
    {
      category: 'Data Pipelines & Libraries',
      color: 'from-accent-teal to-accent-green-teal',
      icon: '📊',
      items: [
        'PyTorch',
        'Hugging Face',
        'OpenCV',
        'Tesseract OCR',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Data Augmentation',
      ],
    },
    {
      category: 'Tools & Platforms',
      color: 'from-accent-green-teal to-accent-cyan',
      icon: '⚙️',
      items: [
        'Docker',
        'AWS',
        'MLflow',
        'Label Studio / CVAT',
        'GitHub',
        'Google Cloud API',
        'FastAPI',
        'SQLite & SQL Server',
      ],
    },
    {
      category: 'Programming Languages',
      color: 'from-accent-cyan to-accent-green-teal',
      icon: '💻',
      items: [
        'Python (Expert)',
        'JavaScript',
        'TypeScript',
        'SQL',
        'C#',
        'Java',
      ],
    },
  ],
  vi: [
    {
      category: 'AI & Học máy',
      color: 'from-accent-cyan to-accent-teal',
      icon: '🤖',
      items: [
        'Huấn luyện & Tinh chỉnh mô hình',
        'Học truyền',
        'Nhận dạng ký tự quang học (OCR)',
        'Thị giác máy tính',
        'Xử lý ngôn ngữ tự nhiên (NLP)',
        'CNN, RNN, LSTM, Transformers',
        'AI sinh thành',
      ],
    },
    {
      category: 'Đường ống dữ liệu & Thư viện',
      color: 'from-accent-teal to-accent-green-teal',
      icon: '📊',
      items: [
        'PyTorch',
        'Hugging Face',
        'OpenCV',
        'Tesseract OCR',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Tăng cường dữ liệu',
      ],
    },
    {
      category: 'Công cụ & Nền tảng',
      color: 'from-accent-green-teal to-accent-cyan',
      icon: '⚙️',
      items: [
        'Docker',
        'AWS',
        'MLflow',
        'Label Studio / CVAT',
        'GitHub',
        'Google Cloud API',
        'FastAPI',
        'SQLite & SQL Server',
      ],
    },
    {
      category: 'Ngôn ngữ lập trình',
      color: 'from-accent-cyan to-accent-green-teal',
      icon: '💻',
      items: [
        'Python (Chuyên gia)',
        'JavaScript',
        'TypeScript',
        'SQL',
        'C#',
        'Java',
      ],
    },
  ],
};

interface SkillBadgeProps {
  skill: string;
  index: number;
}

function SkillBadge({ skill, index }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500 border-opacity-40 hover:bg-cyan-500/20 hover:shadow-cyan-glow-sm transition-all duration-300 cursor-pointer"
    >
      {skill}
    </motion.span>
  );
}

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { language } = useLanguage();
  const skills = skillsData[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="skills"
      className="w-full px-4 md:px-8 py-section-mobile md:py-section border-t border-cyan-500 border-opacity-30 transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-primary)',
        backgroundImage: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 50%, var(--bg-secondary) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-h2 font-bold mb-12"
          style={{ color: 'var(--text-primary)' }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skills.map((skillGroup, index) => (
            <ScrollReveal key={index}>
              <motion.div
                variants={itemVariants}
                className="group relative"
              >
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-400 opacity-0 group-hover:opacity-20 rounded-xl blur transition-opacity duration-300"></div>

                {/* Card */}
                <div className="relative rounded-xl p-6 border border-cyan-500 border-opacity-30 hover:border-cyan-400 hover:shadow-cyan-glow transition-all duration-300" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-3xl">{skillGroup.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400">
                        {skillGroup.category}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <SkillBadge key={idx} skill={skill} index={idx} />
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skillGroup.color} rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
