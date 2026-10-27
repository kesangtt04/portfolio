import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // CSS Variable-based colors for theme switching
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-tertiary": "var(--bg-tertiary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        
        // Dark Mode Colors
        "dark-bg": {
          primary: "#0a1428",
          secondary: "#141e2b",
        },
        "dark-text": {
          primary: "#f0f4f8",
          secondary: "#b0b8c1",
        },
        // Light Mode Colors
        "light-bg": {
          primary: "#f8fafb",
          secondary: "#ffffff",
        },
        "light-text": {
          primary: "#0f1419",
          secondary: "#505a66",
        },
        // Accent Colors - Fresh Teal/Cyan
        accent: {
          cyan: "#00d9ff",
          teal: "#00b8cc",
          "green-teal": "#1dd1a1",
          "subtle-cyan": "#0dd7df",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        h1: ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2.5rem", { lineHeight: "1.3", fontWeight: "700" }],
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
      },
      spacing: {
        section: "6rem",
        "section-mobile": "3rem",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        pill: "9999px",
      },
      boxShadow: {
        "cyan-glow": "0 0 20px rgba(0, 217, 255, 0.3)",
        "cyan-glow-sm": "0 0 10px rgba(0, 217, 255, 0.15)",
        "teal-glow": "0 0 20px rgba(29, 209, 161, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        type: "type 2.5s steps(40, end) forwards",
        shimmer: "shimmer 2s infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        blob: "blob 7s infinite",
        "gradient-shift": "gradientShift 3s ease infinite",
        "slide-in-left": "slideInFromLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInFromRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "rotate-in": "rotateIn 0.6s ease-out forwards",
        "hologram": "hologram 4s ease-in-out infinite",
        "neon-pulse": "neonPulse 2s ease-in-out infinite",
        "tilt-shimmer": "tiltShimmer 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite",
        "tech-pulse": "techPulse 1.5s ease-in-out infinite",
        "scan-line": "scanLine 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0, 217, 255, 0.2)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.4)" },
        },
        type: {
          "0%": { width: "0%", visibility: "hidden" },
          "100%": { width: "100%", visibility: "visible" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 217, 255, 0.2), inset 0 0 5px rgba(0, 217, 255, 0.1)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.4), inset 0 0 10px rgba(0, 217, 255, 0.2)" },
        },
        blob: {
          "0%, 100%": { transform: "scale(1) translate(0, 0)" },
          "25%": { transform: "scale(1.1) translate(-20px, -20px)" },
          "50%": { transform: "scale(0.9) translate(20px, 20px)" },
          "75%": { transform: "scale(1.05) translate(-10px, 20px)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        slideInFromLeft: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInFromRight: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        rotateIn: {
          "0%": { opacity: "0", transform: "rotate(-10deg)" },
          "100%": { opacity: "1", transform: "rotate(0)" },
        },
        hologram: {
          "0%, 100%": { transform: "translateZ(0) rotateX(0deg)", opacity: "1" },
          "50%": { transform: "translateZ(20px) rotateX(5deg)", opacity: "0.8" },
        },
        neonPulse: {
          "0%, 100%": { textShadow: "0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.3)" },
          "50%": { textShadow: "0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(0, 217, 255, 0.6)" },
        },
        tiltShimmer: {
          "0%": { transform: "perspective(1000px) rotateX(0deg) rotateY(-10deg)", opacity: "0.8" },
          "50%": { transform: "perspective(1000px) rotateX(5deg) rotateY(10deg)", opacity: "1" },
          "100%": { transform: "perspective(1000px) rotateX(0deg) rotateY(-10deg)", opacity: "0.8" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 217, 255, 0.3), inset 0 0 5px rgba(0, 217, 255, 0.1)" },
          "50%": { boxShadow: "0 0 30px rgba(0, 217, 255, 0.6), inset 0 0 15px rgba(0, 217, 255, 0.3)" },
        },
        techPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      transitionDuration: {
        fast: "300ms",
        normal: "400ms",
        slow: "500ms",
      },
    },
  },
  plugins: [],
};

export default config;
