'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronRight, Github } from 'lucide-react';
import { useState } from 'react';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

const projectsData = {
  en: [
    {
      id: 1,
      title: 'Text-to-SQL Business System',
      category: 'LLM Integration | RAG',
      icon: '🔍',
      image: '/images/projects/project1.svg',
      description:
        'AI-powered system converting Vietnamese business questions into executable SQL queries using RAG architecture, schema analysis, and entity recognition.',
      technologies: ['RAG', 'LLM APIs', 'Prompt Engineering', 'SQLite', 'NLP'],
      metrics: {
        accuracy: '94%',
        speed: '<200ms',
        impact: 'Real-time business data retrieval',
      },
    },
    {
      id: 2,
      title: 'Image Search & Classification',
      category: 'Computer Vision',
      icon: '🖼️',
      image: '/images/projects/project2.svg',
      description:
        'CNN-powered system for product image classification and visual search. Users upload images and receive instant categorization with similarity matching.',
      technologies: ['PyTorch', 'CNN', 'Computer Vision', 'FastAPI', 'Docker'],
      metrics: {
        accuracy: '93.2%',
        speed: '45ms inference',
        impact: 'Reduced categorization by 70%',
      },
    },
    {
      id: 3,
      title: 'Visual Question Answering',
      category: 'Multimodal AI',
      icon: '🤖',
      image: '/images/projects/project3.svg',
      description:
        'Advanced VQA system that understands images and answers natural language questions about visual content using Transformers and CNNs.',
      technologies: ['Transformers', 'CNN', 'Vision Transformer', 'NLP', 'PyTorch'],
      metrics: {
        accuracy: '71.3%',
        type: 'VQA Accuracy',
        impact: 'Bridge CV & NLP domains',
      },
    },
    {
      id: 4,
      title: 'Deep Learning Research',
      category: 'Model Explainability',
      icon: '🧠',
      image: '/images/projects/project4.svg',
      description:
        'Comprehensive research on machine translation, chatbot Q&A systems, and model interpretability using Class Activation Maps for explainability.',
      technologies: ['Seq2Seq', 'Transformers', 'RNN', 'CAM', 'PyTorch'],
      metrics: {
        bleu: '0.42 BLEU',
        focus: 'Model Interpretability',
        impact: 'Production AI trust',
      },
    },
  ],
  vi: [
    {
      id: 1,
      title: 'Hệ thống Text-to-SQL cho kinh doanh',
      category: 'Tích hợp LLM | RAG',
      icon: '🔍',
      image: '/images/projects/project1.svg',
      description:
        'Hệ thống hỗ trợ AI chuyển đổi các câu hỏi kinh doanh tiếng Việt thành truy vấn SQL bằng cách sử dụng kiến trúc RAG, phân tích lược đồ và nhận dạng thực thể.',
      technologies: ['RAG', 'LLM APIs', 'Prompt Engineering', 'SQLite', 'NLP'],
      metrics: {
        accuracy: '94%',
        speed: '<200ms',
        impact: 'Truy xuất dữ liệu kinh doanh thời gian thực',
      },
    },
    {
      id: 2,
      title: 'Tìm kiếm & Phân loại hình ảnh',
      category: 'Thị giác máy tính',
      icon: '🖼️',
      image: '/images/projects/project2.svg',
      description:
        'Hệ thống CNN để phân loại hình ảnh sản phẩm và tìm kiếm hình ảnh. Người dùng tải lên hình ảnh và nhận được phân loại tức thì với khớp tương tự.',
      technologies: ['PyTorch', 'CNN', 'Computer Vision', 'FastAPI', 'Docker'],
      metrics: {
        accuracy: '93.2%',
        speed: '45ms suy luận',
        impact: 'Giảm phân loại 70%',
      },
    },
    {
      id: 3,
      title: 'Trả lời câu hỏi về hình ảnh',
      category: 'AI Đa phương thức',
      icon: '🤖',
      image: '/images/projects/project3.svg',
      description:
        'Hệ thống VQA nâng cao hiểu được hình ảnh và trả lời các câu hỏi ngôn ngữ tự nhiên về nội dung hình ảnh bằng Transformers và CNN.',
      technologies: ['Transformers', 'CNN', 'Vision Transformer', 'NLP', 'PyTorch'],
      metrics: {
        accuracy: '71.3%',
        type: 'Độ chính xác VQA',
        impact: 'Kết nối CV & NLP',
      },
    },
    {
      id: 4,
      title: 'Nghiên cứu Học sâu',
      category: 'Khả năng giải thích mô hình',
      icon: '🧠',
      image: '/images/projects/project4.svg',
      description:
        'Nghiên cứu toàn diện về dịch máy, hệ thống Q&A chatbot và khả năng giải thích mô hình bằng cách sử dụng Class Activation Maps.',
      technologies: ['Seq2Seq', 'Transformers', 'RNN', 'CAM', 'PyTorch'],
      metrics: {
        bleu: '0.42 BLEU',
        focus: 'Khả năng giải thích mô hình',
        impact: 'Tin tưởng AI sản xuất',
      },
    },
  ],
};

// Custom Project Icons
const ProjectIcon1 = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00d9ff" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8M12 8v8" />
    <path d="M8 6l4-3 4 3M8 18l4 3 4-3" />
    <line x1="5" y1="10" x2="19" y2="10" />
    <line x1="5" y1="14" x2="19" y2="14" />
  </svg>
);

const ProjectIcon2 = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00d9ff" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" fill="#00d9ff" />
    <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectIcon3 = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00d9ff" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectIcon4 = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00d9ff" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6l3 5h-6l3-5zm0 12l-3-5h6l-3 5z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 9v6M9 12h6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface ProjectCardProps {
  project: (typeof projectsData.en)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (id: number) => {
    switch(id) {
      case 1: return <ProjectIcon1 />;
      case 2: return <ProjectIcon2 />;
      case 3: return <ProjectIcon3 />;
      case 4: return <ProjectIcon4 />;
      default: return <ProjectIcon1 />;
    }
  };

  return (
    <ScrollReveal>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative rounded-xl overflow-hidden border transition-all duration-300"
        style={{
          borderColor: 'var(--border-color-light)',
        }}
      >
        {/* Hover glow effect */}
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #00d9ff 0%, transparent 50%, #00d9ff 100%)',
              opacity: 0.1,
            }}
          ></div>
        )}

        {/* Icon Section */}
        <motion.div
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-40 relative overflow-hidden bg-gradient-to-br flex items-center justify-center"
          style={{
            backgroundColor: 'var(--bg-secondary)',
          }}
        >
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'linear-gradient(to top, var(--bg-primary), transparent)',
            }}
          ></div>
          
          {/* Custom Icons */}
          <div className="relative z-10">
            {getIcon(project.id)}
          </div>
        </motion.div>

        {/* Content Section */}
        <div 
          className="relative p-6"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="inline-block mb-3"
          >
            <span 
              className="text-xs uppercase font-semibold tracking-wider px-3 py-1 rounded-full border"
              style={{
                color: '#00d9ff',
                backgroundColor: 'rgba(0, 217, 255, 0.1)',
                borderColor: 'var(--border-color-light)',
              }}
            >
              {project.category}
            </span>
          </motion.div>

          {/* Title */}
          <h3 
            className="text-xl font-bold mb-3 group-hover:transition-colors duration-300"
            style={{ 
              color: 'var(--text-primary)',
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p 
            className="text-sm mb-4 line-clamp-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index * 0.1 + 0.3) + (idx * 0.05) }}
                className="px-2 py-1 text-xs rounded-full font-medium border transition-all duration-300"
                style={{
                  color: '#00d9ff',
                  backgroundColor: 'rgba(0, 217, 255, 0.1)',
                  borderColor: 'var(--border-color-light)',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Metrics */}
          <div 
            className="rounded-lg p-4 mb-4 border transition-all duration-300"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color-light)',
            }}
          >
            <div className="grid grid-cols-2 gap-3 text-xs">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <p 
                    className="font-semibold text-sm"
                    style={{ color: '#00d9ff' }}
                  >
                    {value}
                  </p>
                  <p 
                    className="capitalize text-xs"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {key.replace(/([A-Z])/g, ' $1')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.02, x: 2 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-lg transition-all duration-300 text-sm group"
              style={{
                backgroundColor: '#00d9ff',
                color: '#0a0e27',
              }}
            >
              Learn More
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-lg transition-all duration-300 text-sm border-2"
              style={{
                borderColor: '#00d9ff',
                color: '#00d9ff',
              }}
            >
              <Github size={16} />
              Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { language } = useLanguage();
  const projects = projectsData[language];

  return (
    <section
      id="projects"
      className="w-full px-4 md:px-8 py-section-mobile md:py-section border-t transition-colors duration-500"
      style={{
        background: 'linear-gradient(to bottom right, var(--bg-primary), var(--bg-secondary))',
        borderColor: 'var(--border-color-light)',
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
          Featured Projects
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
