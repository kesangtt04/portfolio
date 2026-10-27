'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/context/LanguageContext';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, Linkedin } from 'lucide-react';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { TechBorder } from '@/components/effects/TechBorder';

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current!);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };

      // For demo purposes, just show success message
      // In production, connect to your email service
      setFormMessage('Thank you for your message! I will get back to you soon.');
      formRef.current?.reset();
    } catch (error) {
      setFormMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormMessage(''), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const contactCards = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'kesangtt04@gmail.com',
      link: 'mailto:kesangtt04@gmail.com',
      color: 'from-accent-cyan to-accent-teal',
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+84 376 556 259',
      link: 'tel:+84376556259',
      color: 'from-accent-teal to-accent-green-teal',
    },
  ];

  return (
    <section
      id="contact"
      className="w-full px-4 md:px-8 py-section-mobile md:py-section border-t border-cyan-500 border-opacity-30 transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-primary)',
        backgroundImage: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 50%, var(--bg-secondary) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2 font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            {t('contact.title')}
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t('contact.description')}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Quick Contact Cards */}
          <ScrollReveal>
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1 space-y-4"
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                {t('contact.email')}
              </h3>

              {contactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={index}
                    href={card.link}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-start gap-4 p-5 rounded-xl border border-cyan-500 border-opacity-30 hover:border-cyan-400 hover:shadow-cyan-glow transition-all duration-300"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <div className={`p-3 bg-gradient-to-br ${card.color} rounded-lg group-hover:shadow-cyan-glow transition-all duration-300`}>
                      <Icon size={24} className="text-slate-950" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold mb-1 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                        {card.title}
                      </p>
                      <p className="font-medium break-all group-hover:text-cyan-400 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        {card.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Social Links */}
              <div className="pt-6 border-t border-cyan-500 border-opacity-30">
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Connect
                </h4>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/kesangtt04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500 hover:bg-opacity-10 rounded-lg border border-cyan-500 border-opacity-30 hover:border-cyan-400 transition-all duration-300"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:kesangtt04@gmail.com"
                    className="p-3 text-gray-400 hover:text-cyan-300 hover:bg-cyan-500 hover:bg-opacity-10 rounded-lg border border-cyan-500 border-opacity-30 hover:border-cyan-300 transition-all duration-300"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.facebook.com/sangzxje"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500 hover:bg-opacity-10 rounded-lg border border-cyan-500 border-opacity-30 hover:border-blue-400 transition-all duration-300"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                    aria-label="Facebook"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal>
            <motion.div
              variants={itemVariantsRight}
              className="lg:col-span-2"
            >
              <div className="rounded-xl p-8 border border-cyan-500 border-opacity-30 hover:border-cyan-400 hover:shadow-cyan-glow transition-all duration-300" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                        className="w-full px-4 py-3 border border-cyan-500 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-cyan-glow-sm focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-20 transition-all duration-300"
                        style={{ backgroundColor: 'var(--bg-tertiary)' }}
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 border border-cyan-500 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-cyan-glow-sm focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-20 transition-all duration-300"
                        style={{ backgroundColor: 'var(--bg-tertiary)' }}
                      />
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 border border-cyan-500 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-cyan-glow-sm focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-20 transition-all duration-300"
                      style={{ backgroundColor: 'var(--bg-tertiary)' }}
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-cyan-500 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-cyan-glow-sm focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-20 transition-all duration-300 resize-none"
                      style={{ backgroundColor: 'var(--bg-tertiary)' }}
                    />
                  </motion.div>

                  {/* Message Feedback */}
                  {formMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-cyan-400 bg-opacity-15 border border-cyan-400 border-opacity-50 rounded-lg text-cyan-400 text-sm font-medium"
                    >
                      {formMessage}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-400 text-slate-950 font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-cyan-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Sending...' : t('contact.sendMessage')}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}
