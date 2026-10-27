'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

// Custom Lightning Bolt Icon - Premium Style
function LightningIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00d9ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0099ff', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="lightningGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Glow effect */}
      <circle cx="20" cy="20" r="18" fill="none" stroke="#00d9ff" strokeWidth="0.5" opacity="0.3"/>
      {/* Lightning bolt */}
      <path d="M 20 2 L 24 16 L 32 16 L 14 36 L 18 22 L 8 22 Z" 
        fill="url(#lightningGradient)" 
        filter="url(#lightningGlow)"
        strokeLinecap="round" 
        strokeLinejoin="round"/>
    </svg>
  );
}

// Custom API Icon
function ApiIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.7 }} />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="9" height="9" rx="1" fill="url(#apiGradient)" opacity="0.8"/>
      <rect x="12" y="3" width="9" height="9" rx="1" fill="url(#apiGradient)" opacity="0.6"/>
      <rect x="3" y="12" width="9" height="9" rx="1" fill="url(#apiGradient)" opacity="0.6"/>
      <rect x="12" y="12" width="9" height="9" rx="1" fill="url(#apiGradient)" opacity="0.8"/>
    </svg>
  );
}

interface Command {
  input: string;
  output: string;
  type: 'command' | 'error' | 'api' | 'info';
  timestamp: Date;
}

export function ConsoleSection() {
  const [commands, setCommands] = useState<Command[]>([
    {
      input: '',
      output:
        '╔════════════════════════════════════════════════════════╗\n║     PORTFOLIO SYSTEM v1.0 - Nguyễn Kế Sang             ║\n║          AI/ML Developer & Full-Stack Engineer          ║\n╚════════════════════════════════════════════════════════╝\n\nType "help" for available commands\nType "bio" for portfolio information',
      type: 'info',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [apiTab, setApiTab] = useState(false);
  const [apiResponse, setApiResponse] = useState<{
    endpoint: string;
    status: number;
    data: unknown;
  } | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandMap: Record<string, () => Promise<string>> = {
    'help': async () => `Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  bio              → Display portfolio biography
  skills           → List all technical skills
  projects         → Show featured projects
  contact          → Get contact information
  education        → University & GPA info
  experience       → Work experience details
  status           → System status & health
  clear            → Clear terminal screen
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

    'bio': async () => {
      const res = await fetch('/api/v1/bio');
      const data = await res.json();
      return `👤 ${data.name}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Title:     ${data.title}
Email:     ${data.email}
Phone:     ${data.phone}
Location:  ${data.location}
GitHub:    ${data.github}

"Full-stack AI/ML Developer with 6+ months experience
transforming data into intelligent systems."`;
    },

    'skills': async () => {
      const res = await fetch('/api/v1/skills');
      const data = await res.json();
      return `💻 TECHNICAL SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Languages:  ${data.technical.languages.join(' • ')}
Backend:    ${data.technical.backend.join(' • ')}
Frontend:   ${data.technical.frontend.join(' • ')}
ML/DL:      ${data.technical.ml_dl.join(' • ')}
Databases:  ${data.technical.databases.join(' • ')}
Tools:      ${data.technical.tools.join(' • ')}

Soft Skills: ${data.softSkills.join(' • ')}`;
    },

    'projects': async () => {
      const res = await fetch('/api/v1/projects');
      const data = await res.json();
      let output = `🚀 FEATURED PROJECTS (${data.total} total)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
      data.projects.slice(0, 3).forEach(
        (project: { title: string; description: string; technologies: string[] }, idx: number) => {
          output += `${idx + 1}. ${project.title}\n   ${project.description}\n   Stack: ${project.technologies.join(', ')}\n\n`;
        }
      );
      return output.trim();
    },

    'contact': async () => {
      const res = await fetch('/api/v1/contact');
      const data = await res.json();
      return `📧 CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email:    ${data.email}
Phone:    ${data.phone}
Location: ${data.location}

Social Media:
  GitHub:   ${data.social.github}
  Facebook: ${data.social.facebook}

Status: ${data.availability}`;
    },

    'education': async () => `🎓 EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
University:  Ton Duc Thang University
Major:       Computer Science
Graduation:  2026
GPA:         7.3/10

Achievements:
  • Strong foundation in Data Structures & Algorithms
  • Full-stack development experience
  • AI/ML specialization`,

    'experience': async () => `💼 WORK EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Role:       AI/ML Developer
Duration:   6+ months
Company:    Mecsu Vietnam

Responsibilities:
  • Trained and fine-tuned ML/DL models
  • Designed and implemented backend APIs
  • Developed UI dashboards
  • Built production-grade systems (92-95% accuracy)`,

    'status': async () => {
      const res = await fetch('/api/v1/health');
      const data = await res.json();
      return `⚡ SYSTEM STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status:      ${data.status === 'online' ? '🟢 ONLINE' : '🔴 OFFLINE'}
Environment: ${data.environment}
Timestamp:   ${new Date(data.timestamp).toLocaleString()}
API:         ${data.message}

All systems operational ✓`;
    },

    'clear': async () => {
      setCommands([]);
      return '';
    },
  };

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (!trimmedCmd) return;

    setIsLoading(true);
    setHistory([...history, cmd]);
    setHistoryIndex(-1);

    let output = '';
    let type: 'command' | 'error' | 'api' | 'info' = 'command';

    try {
      if (trimmedCmd === 'clear') {
        setCommands([]);
        setInput('');
        setIsLoading(false);
        return;
      }

      if (commandMap[trimmedCmd]) {
        output = await commandMap[trimmedCmd]();
        type = 'api';
      } else {
        output = `❌ Command not found: "${cmd}"\nType "help" for available commands.`;
        type = 'error';
      }

      setCommands([
        ...commands,
        { input: cmd, output, type, timestamp: new Date() },
      ]);
    } catch (error) {
      setCommands([
        ...commands,
        {
          input: cmd,
          output: `❌ Error: Failed to execute command`,
          type: 'error',
          timestamp: new Date(),
        },
      ]);
    }

    setInput('');
    setIsLoading(false);

    setTimeout(() => {
      terminalRef.current?.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const callApi = async (endpoint: string) => {
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setApiResponse({
        endpoint,
        status: res.status,
        data,
      });
    } catch (error) {
      setApiResponse({
        endpoint,
        status: 500,
        data: { error: 'Failed to fetch' },
      });
    }
  };

  return (
    <section
      className="w-full px-4 md:px-8 py-section-mobile md:py-section border-t transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-color-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
          }}
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #0099ff 0%, transparent 70%)',
            bottom: '-150px',
            left: '-150px',
          }}
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          href="/"
          className="inline-flex items-center gap-2 mb-12 px-4 py-2 rounded-lg font-medium transition-all duration-300"
          style={{
            background: 'rgba(0, 217, 255, 0.1)',
            border: '1px solid rgba(0, 217, 255, 0.3)',
            color: 'var(--border-color)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 217, 255, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.6)';
            e.currentTarget.style.transform = 'translateX(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 217, 255, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.3)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </motion.a>

        {/* Premium Header with Icon */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <LightningIcon />
          </motion.div>
          
          <h2 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(135deg, #00d9ff 0%, #0099ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Interactive Console
          </h2>
          
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Execute commands and explore my portfolio through a premium terminal interface. Real REST API endpoints powered by Next.js.
          </p>
        </motion.div>

        {/* Quick Commands Grid - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 
            className="text-xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            💡 Quick Commands
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['bio', 'skills', 'projects', 'contact', 'education', 'experience', 'status', 'help'].map((cmd, idx) => (
              <motion.button
                key={cmd}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => executeCommand(cmd)}
                className="group relative px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(0, 153, 255, 0.1))',
                  border: '2px solid rgba(0, 217, 255, 0.4)',
                  color: 'var(--text-primary)',
                }}
              >
                {/* Hover gradient background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.3), rgba(0, 153, 255, 0.2))',
                  }}
                />
                <span className="relative z-10">{cmd}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tabs - Enhanced */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-2 mb-8 border-b-2 overflow-x-auto"
          style={{ borderColor: 'var(--border-color-light)' }}
        >
          <motion.button
            onClick={() => setApiTab(false)}
            className="px-6 py-3 transition-all duration-300 font-semibold flex items-center gap-2 whitespace-nowrap relative group"
            style={{
              color: !apiTab ? 'var(--border-color)' : 'var(--text-secondary)',
            }}
          >
            <Code2 size={20} />
            Terminal
            {!apiTab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-[-2px] left-0 right-0 h-1 rounded-t-full"
                style={{ background: 'linear-gradient(90deg, #00d9ff, #0099ff)' }}
              />
            )}
          </motion.button>
          
          <motion.button
            onClick={() => setApiTab(true)}
            className="px-6 py-3 transition-all duration-300 font-semibold flex items-center gap-2 whitespace-nowrap relative group"
            style={{
              color: apiTab ? 'var(--border-color)' : 'var(--text-secondary)',
            }}
          >
            <ApiIcon />
            API Explorer
            {apiTab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-[-2px] left-0 right-0 h-1 rounded-t-full"
                style={{ background: 'linear-gradient(90deg, #00d9ff, #0099ff)' }}
              />
            )}
          </motion.button>
        </motion.div>

        {/* Terminal or API Panel */}
        {!apiTab ? (
          // Terminal - Enhanced
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl overflow-hidden border-2 shadow-2xl"
            style={{
              backgroundColor: '#0a0e27',
              borderColor: 'rgba(0, 217, 255, 0.5)',
              boxShadow: '0 0 50px rgba(0, 217, 255, 0.1)',
            }}
          >
            {/* Premium Header */}
            <div
              className="px-6 py-4 border-b flex justify-between items-center font-mono text-sm"
              style={{
                background: 'linear-gradient(90deg, rgba(0, 217, 255, 0.1), rgba(0, 153, 255, 0.05))',
                borderColor: 'rgba(0, 217, 255, 0.3)',
                color: '#00ff00',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
                <span>LIVE CONNECTION</span>
              </div>
              <span style={{ color: '#0099ff' }}>NGUYỄN KẾ SANG • v1.0</span>
            </div>

            {/* Output Area */}
            <div
              ref={terminalRef}
              className="p-6 h-96 overflow-y-auto space-y-4 font-mono text-sm scrollbar-thin"
              style={{ 
                backgroundColor: '#0a0e27',
                color: '#00d9ff',
              }}
            >
              {commands.map((cmd, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {cmd.input && (
                    <div style={{ color: '#00ff00' }} className="font-bold">
                      $ {cmd.input}
                    </div>
                  )}
                  <div
                    style={{
                      color:
                        cmd.type === 'error'
                          ? '#ff6b6b'
                          : cmd.type === 'info'
                            ? '#ffd93d'
                            : '#00d9ff',
                    }}
                    className="whitespace-pre-wrap break-words leading-relaxed text-xs md:text-sm ml-2"
                  >
                    {cmd.output}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="text-yellow-400 animate-pulse">
                  ⟳ Loading...
                </div>
              )}
            </div>

            {/* Input Area */}
            <div
              className="px-6 py-4 border-t flex items-center gap-3 font-mono"
              style={{
                background: 'linear-gradient(90deg, rgba(0, 217, 255, 0.1), rgba(0, 153, 255, 0.05))',
                borderColor: 'rgba(0, 217, 255, 0.3)',
              }}
            >
              <span style={{ color: '#00ff00' }} className="font-bold">
                $
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none font-mono text-sm"
                style={{ color: '#00d9ff' }}
                placeholder="Type a command and press Enter..."
                autoFocus
              />
            </div>
          </motion.div>
        ) : (
          // API Explorer - Enhanced
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl p-8 border-2"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'rgba(0, 217, 255, 0.5)',
              boxShadow: '0 0 50px rgba(0, 217, 255, 0.1)',
            }}
          >
            <h3 
              className="text-2xl font-bold mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              🚀 API Endpoints
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { endpoint: '/api/v1/bio', label: '👤 Bio', desc: 'Get portfolio biography' },
                { endpoint: '/api/v1/skills', label: '💻 Skills', desc: 'List all skills' },
                { endpoint: '/api/v1/projects', label: '🚀 Projects', desc: 'Featured projects' },
                { endpoint: '/api/v1/contact', label: '📧 Contact', desc: 'Contact information' },
              ].map(({ endpoint, label, desc }) => (
                <motion.button
                  key={endpoint}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => callApi(endpoint)}
                  className="p-6 rounded-lg border-2 transition-all duration-300 text-left group overflow-hidden relative"
                  style={{
                    borderColor: 'rgba(0, 217, 255, 0.5)',
                    backgroundColor: 'var(--bg-tertiary)',
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #00d9ff, #0099ff)',
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{label.split(' ')[0]}</span>
                      <div>
                        <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                          GET {label.split(' ')[1]}
                        </div>
                        <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          {desc}
                        </div>
                      </div>
                    </div>
                    <div 
                      className="text-xs font-mono mt-2 px-2 py-1 rounded"
                      style={{ 
                        backgroundColor: 'rgba(0, 217, 255, 0.1)',
                        color: '#0099ff'
                      }}
                    >
                      {endpoint}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {apiResponse && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-lg border-2 overflow-auto max-h-96"
                style={{
                  backgroundColor: '#0a0e27',
                  borderColor: 'rgba(0, 217, 255, 0.5)',
                  color: '#00d9ff',
                  fontFamily: 'Monaco, Courier New, monospace',
                  fontSize: '12px',
                }}
              >
                <div className="flex justify-between items-center mb-4 pb-4 border-b" style={{ borderColor: 'rgba(0, 217, 255, 0.3)' }}>
                  <div>
                    <span style={{ color: '#00ff00' }}>GET</span>{' '}
                    <span>{apiResponse.endpoint}</span>
                  </div>
                  <span
                    style={{
                      color: apiResponse.status === 200 ? '#00ff00' : '#ff6b6b',
                    }}
                  >
                    {apiResponse.status} OK
                  </span>
                </div>
                <pre className="whitespace-pre-wrap break-words leading-relaxed">
                  {JSON.stringify(apiResponse.data, null, 2)}
                </pre>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
