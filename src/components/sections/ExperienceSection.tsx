'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { HologramEffect } from '@/components/effects/HologramEffect';
import { TechBorder } from '@/components/effects/TechBorder';

const experienceData = {
  en: {
    title: 'Work Experience',
    company: 'Mecsu',
    position: 'AI/ML Developer',
    department: 'Technical Department',
    duration: 'Mar 2024 - Oct 2024 (6 months)',
    location: 'Ho Chi Minh City, Vietnam',
    achievements: [
      'Designed and developed prompts and logical workflows for an intelligent AI Chatbot system',
      'Handled end-to-end data preparation and processing pipelines for diverse data formats',
      'Trained and fine-tuned ML/DL models for image classification and text categorization',
      'Gained full-stack experience developing backend APIs and designing UI dashboards for business intelligence',
      'Built production-grade systems with 92-95% accuracy and <100ms response times',
      'Collaborated with cross-functional teams to deliver AI solutions for business problems',
    ],
    metrics: [
      { value: '92-95%', label: 'Model Accuracy' },
      { value: '<100ms', label: 'Response Time' },
      { value: '99.5%+', label: 'Uptime' },
    ],
  },
  vi: {
    title: 'Kinh nghiệm làm việc',
    company: 'Mecsu',
    position: 'Lập trình viên AI/ML',
    department: 'Bộ phận Kỹ thuật',
    duration: 'Tháng 3 2024 - Tháng 10 2024 (6 tháng)',
    location: 'Thành phố Hồ Chí Minh, Việt Nam',
    achievements: [
      'Thiết kế và phát triển prompt và quy trình logic cho hệ thống AI Chatbot thông minh',
      'Xử lý các đường ống chuẩn bị và xử lý dữ liệu end-to-end cho các định dạng dữ liệu khác nhau',
      'Huấn luyện và tinh chỉnh các mô hình ML/DL cho phân loại hình ảnh và phân loại văn bản',
      'Có kinh nghiệm toàn diện phát triển API backend và thiết kế bảng điều khiển UI cho trí tuệ kinh doanh',
      'Xây dựng các hệ thống cấp sản xuất với độ chính xác 92-95% và thời gian phản hồi <100ms',
      'Hợp tác với các đội đa chức năng để cung cấp các giải pháp AI cho các vấn đề kinh doanh',
    ],
    metrics: [
      { value: '92-95%', label: 'Độ chính xác mô hình' },
      { value: '<100ms', label: 'Thời gian phản hồi' },
      { value: '99.5%+', label: 'Thời gian hoạt động' },
    ],
  },
};

export function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { language } = useLanguage();
  const experience = experienceData[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experience"
      className="w-full px-4 md:px-8 py-section-mobile md:py-section border-t border-cyan-500 border-opacity-30 relative overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-primary)',
        backgroundImage: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 50%, var(--bg-secondary) 100%)',
      }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 -left-96 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ opacity: 0.03 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-h2 font-bold mb-12 gradient-text"
          style={{ color: 'var(--text-primary)' }}
        >
          {experience.title}
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline visualization */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-400 to-cyan-400 ml-8 shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>

          {/* Experience Card with glassmorphism */}
          <ScrollReveal>
            <motion.div
              variants={itemVariants}
              className="group relative md:ml-20 rounded-xl border border-cyan-500 border-opacity-50 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 overflow-hidden glass-dark"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              {/* Animated gradient background overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-cyan-400/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Timeline Dot with glow */}
              <motion.div
                className="hidden md:block absolute -left-[50px] top-8 w-6 h-6 bg-cyan-400 border-4 border-slate-950 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)] group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all duration-300"
                animate={{ boxShadow: ['0_0_20px_rgba(34,211,238,0.5)', '0_0_30px_rgba(34,211,238,0.8)', '0_0_20px_rgba(34,211,238,0.5)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Content */}
              <div className="relative p-8 md:p-10">
                {/* Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 pb-8 border-b border-cyan-500 border-opacity-30">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl font-bold text-cyan-400 mb-2 neon-cyan"
                    >
                      {experience.company}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-sm uppercase text-cyan-300 tracking-widest font-semibold mb-3"
                    >
                      {experience.department}
                    </motion.p>
                    <motion.h4
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {experience.position}
                    </motion.h4>
                  </div>

                  {/* Duration Badge with glassmorphism */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur border border-cyan-400 border-opacity-30 rounded-lg whitespace-nowrap hover:border-cyan-400/100 hover:bg-cyan-500/20 transition-all"
                  >
                    <Calendar size={16} className="text-cyan-400" />
                    <span className="text-sm font-medium text-cyan-400">{experience.duration}</span>
                  </motion.div>
                </div>

                {/* Meta Information */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex items-center gap-2 mb-6 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <MapPin size={16} className="text-cyan-300" />
                  <span>{experience.location}</span>
                </motion.div>

                {/* Achievements */}
                <div className="mb-8">
                  <h5 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-4">
                    Key Achievements
                  </h5>
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="flex gap-3 group/item hover:translate-x-2 transition-transform"
                      >
                        <CheckCircle
                          size={20}
                          className="text-cyan-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform group-hover/item:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                        />
                        <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="pt-8 border-t border-cyan-500 border-opacity-30">
                  <h5 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-6">
                    Performance Metrics
                  </h5>
                  <div className="grid grid-cols-3 gap-4">
                    {experience.metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="p-4 rounded-lg border border-cyan-500 border-opacity-30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 text-center group/metric"
                        style={{ backgroundColor: 'var(--bg-tertiary)' }}
                      >
                        <p className="text-2xl font-bold text-cyan-400 group-hover/metric:scale-110 transition-transform mb-1">
                          {metric.value}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{metric.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}
