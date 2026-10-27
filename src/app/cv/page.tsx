'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Github } from 'lucide-react';

export default function CVPage() {
  const [selectedVersion, setSelectedVersion] = useState<'all' | 'ml' | 'backend' | 'fullstack'>('all');

  const cvVersions = {
    all: {
      title: 'Full Stack CV',
      description: 'Comprehensive CV covering all my skills and experience',
      skills: ['RAG', 'LLM APIs', 'PyTorch', 'Computer Vision', 'NLP', 'FastAPI', 'Docker', 'SQL'],
      focus: 'AI/ML Developer | Full-Stack Engineer',
      color: '#00d9ff'
    },
    ml: {
      title: 'AI/ML Specialist',
      description: 'Focused on Machine Learning, Deep Learning & Computer Vision',
      skills: ['PyTorch', 'Transformers', 'CNN', 'RNN', 'Computer Vision', 'NLP', 'Prompt Engineering', 'Model Interpretability'],
      focus: 'AI/ML Engineer Fresher',
      color: '#1dd1a1'
    },
    backend: {
      title: 'Backend Developer',
      description: 'Specialized in server-side development and system design',
      skills: ['Python', 'FastAPI', 'SQL', 'Docker', 'REST APIs', 'Database Design', 'RAG Architecture'],
      focus: 'Backend Developer Fresher',
      color: '#0891b2'
    },
    fullstack: {
      title: 'Full-Stack Engineer',
      description: 'Complete end-to-end development capabilities',
      skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Docker', 'Cloud'],
      focus: 'Full-Stack Developer Fresher',
      color: '#06b6d4'
    }
  };

  const education = {
    degree: 'Bachelor of Science in Computer Science',
    university: 'Ho Chi Minh City University of Technology (HCMUT)',
    graduationYear: 2026,
    status: 'Graduated',
    gpa: '7.3/10',
    highlights: [
      'Strong foundation in Data Structures & Algorithms',
      'Advanced studies in Machine Learning & Computer Vision',
      'Practical experience through internships and real-world projects',
    ]
  };

  const experience = [
    {
      role: 'AI/ML Developer',
      duration: '6+ months',
      description: 'Hands-on experience with production ML systems',
      achievements: [
        'Text-to-SQL System: 94% accuracy on business queries',
        'Image Classification: 93.2% accuracy with 45ms inference',
        'VQA System: Advanced multimodal AI implementation'
      ]
    },
    {
      role: 'Software Engineering Intern',
      duration: '3 months',
      description: 'Full-stack development and system optimization',
      achievements: [
        'Designed RESTful APIs with optimal database queries',
        'Automated workflow systems',
        'Optimized database performance by 40%'
      ]
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <header 
        className="sticky top-0 z-40 py-6 px-4 md:px-8 border-b transition-colors duration-500"
        style={{
          backgroundColor: 'rgba(10, 14, 39, 0.8)',
          borderColor: 'var(--border-color-light)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <h1 className="text-3xl font-bold" style={{ color: '#00d9ff' }}>
              Curriculum Vitae
            </h1>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/"
              className="px-4 py-2 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                color: '#00d9ff',
                border: '1px solid rgba(0, 217, 255, 0.3)'
              }}
            >
              Back to Portfolio
            </motion.a>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 p-8 rounded-xl border transition-colors duration-300"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color-light)',
          }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#00d9ff' }}>
            🎓 Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                {education.degree}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                {education.university}
              </p>
              <p style={{ color: 'var(--text-tertiary)' }} className="text-sm">
                ✅ {education.status} - {education.graduationYear}
              </p>
              <p style={{ color: '#1dd1a1' }} className="font-semibold mt-2">
                GPA: {education.gpa}
              </p>
            </div>
            <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color-light)' }}>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Highlights:
              </h4>
              <ul className="space-y-2">
                {education.highlights.map((highlight, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)' }}>
                    ✓ {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#00d9ff' }}>
            💼 Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-6 rounded-xl border transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color-light)',
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {exp.description}
                    </p>
                  </div>
                  <span style={{ color: '#00d9ff' }} className="text-sm font-semibold whitespace-nowrap ml-4">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} style={{ color: 'var(--text-secondary)' }} className="text-sm">
                      → {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CV Versions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#00d9ff' }}>
            📋 Choose Your CV Version
          </h2>
          <p style={{ color: 'var(--text-secondary)' }} className="mb-6">
            Pick the CV version that best matches the role you're applying for
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(cvVersions).map(([key, version]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl border-2 cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: selectedVersion === key ? version.color : 'var(--border-color-light)',
                  boxShadow: selectedVersion === key ? `0 0 20px ${version.color}40` : 'none'
                }}
                onClick={() => setSelectedVersion(key as any)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: version.color }}>
                  {version.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }} className="text-sm mb-4">
                  {version.description}
                </p>
                <p style={{ color: 'var(--text-tertiary)' }} className="text-xs mb-4 font-semibold">
                  Focus: {version.focus}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {version.skills.slice(0, 4).map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: `${version.color}20`,
                        color: version.color,
                        borderColor: version.color
                      }}
                      className="text-xs px-2 py-1 rounded-full border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {selectedVersion === key && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-4 border-t flex gap-2"
                    style={{ borderColor: 'var(--border-color-light)' }}
                  >
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={`/cv/${key}`}
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all duration-300 text-sm font-semibold"
                      style={{
                        backgroundColor: version.color,
                        color: '#0a0e27',
                      }}
                    >
                      <Eye size={16} />
                      View
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/Nguyen-Ke-Sang.txt"
                      download
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all duration-300 text-sm font-semibold"
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        color: version.color,
                        border: `1px solid ${version.color}`
                      }}
                    >
                      <Download size={16} />
                      Download
                    </motion.a>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 rounded-xl text-center border"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color-light)',
          }}
        >
          <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            Want to see more? Check out my work on GitHub
          </h3>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/kesangtt04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
            style={{
              backgroundColor: '#00d9ff',
              color: '#0a0e27',
            }}
          >
            <Github size={20} />
            View Projects
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
}
