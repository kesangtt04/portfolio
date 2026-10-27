# 📁 Portfolio Project Structure

## Overview
Premium AI/ML Developer Portfolio with Dark/Light theme support, built with Next.js, React, TypeScript, and Framer Motion.

---

## 🗂️ Directory Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with theme providers
│   │   ├── globals.css          # Global styles + CSS variables for themes
│   │   ├── page.tsx             # Home page
│   │   ├── cv/
│   │   │   └── page.tsx         # CV display page
│   │   ├── console/
│   │   │   └── page.tsx         # API Console page
│   │   └── not-found.tsx        # 404 page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Navigation header with theme toggle
│   │   │   ├── Footer.tsx       # Footer component
│   │   │   └── Navbar.tsx       # Mobile navbar (if needed)
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx       # Reusable button component
│   │   │   ├── ThemeToggle.tsx  # Dark/light theme toggle button
│   │   │   ├── LanguageSwitcher.tsx # EN/VI language switcher
│   │   │   ├── GlassCard.tsx    # Glass-morphism card component
│   │   │   └── ScrollProgress.tsx # Scroll progress indicator
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Hero/landing section with avatar
│   │   │   ├── AboutSection.tsx      # About me section
│   │   │   ├── ExperienceSection.tsx # Work experience timeline
│   │   │   ├── SkillsSection.tsx     # Technical skills showcase
│   │   │   ├── ProjectsSection.tsx   # Portfolio projects grid
│   │   │   ├── ContactSection.tsx    # Contact form + social links
│   │   │   └── CVSection.tsx         # CV display section
│   │   │
│   │   ├── decorations/
│   │   │   ├── LightModeDecorations.tsx  # Light mode visual effects
│   │   │   └── BackgroundEffects.tsx     # Dark mode background animations
│   │   │
│   │   ├── effects/
│   │   │   ├── ScrollProgress.tsx    # Scroll progress indicator
│   │   │   ├── BackgroundEffects.tsx # Animated background
│   │   │   └── ParticleEffect.tsx    # Particle animations (if used)
│   │   │
│   │   └── providers.tsx          # Theme + Language providers
│   │
│   ├── context/
│   │   ├── LanguageContext.tsx   # Multi-language support (EN/VI)
│   │   └── ThemeContext.tsx      # Theme state management (if needed)
│   │
│   ├── hooks/
│   │   ├── useInView.tsx         # Intersection observer hook
│   │   ├── useTheme.tsx          # Custom theme hook (if needed)
│   │   └── useLanguage.tsx       # Language context hook
│   │
│   └── i18n/
│       ├── en.json              # English translations
│       ├── vi.json              # Vietnamese translations
│       └── index.ts             # i18n configuration
│
├── public/
│   ├── images/
│   │   ├── avatar.jpg           # Profile picture (used in Hero)
│   │   ├── profile.jpg          # Alternative profile picture
│   │   ├── favicon.ico          # Website favicon
│   │   └── projects/
│   │       ├── project1.jpg
│   │       ├── project2.jpg
│   │       └── project3.jpg
│   │
│   ├── documents/
│   │   └── Nguyen-Ke-Sang.pdf   # CV/Resume PDF
│   │
│   └── Nguyen-Ke-Sang.txt       # Text version of CV
│
├── docs/
│   ├── LIGHT_MODE_IMPROVEMENTS.md   # Light mode feature documentation
│   ├── TEST_REPORT.md               # Testing results
│   ├── PORTFOLIO_READY.txt          # Deployment checklist
│   ├── BUG_FIXES.md                 # Bug fixes applied
│   └── PROJECT_STRUCTURE.md         # This file
│
├── .kiro/
│   └── steering/
│       └── project-standards.md     # Project coding standards & guidelines
│
├── .next/                       # Next.js build output (git ignored)
├── node_modules/                # Dependencies (git ignored)
│
├── package.json                 # Project dependencies
├── package-lock.json           # Dependency lock file
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── next.config.js              # Next.js configuration
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── README.md                   # Project readme
└── PROJECT_STRUCTURE.md        # This documentation
```

---

## 📌 Key Files Explained

### Core Configuration
- **`src/app/globals.css`**: CSS variables for dark/light themes, global animations, responsive utilities
- **`tailwind.config.ts`**: Tailwind CSS customization with custom colors and spacing
- **`tsconfig.json`**: TypeScript strict mode enabled, path aliases configured
- **`next.config.js`**: Next.js optimization settings

### Theme System
- **`src/components/providers.tsx`**: Wraps app with `ThemeProvider` (next-themes) and `LanguageProvider`
- **`src/app/globals.css`**: Defines CSS variables for both dark and light modes
- **`src/components/ui/ThemeToggle.tsx`**: Theme toggle button with animations
- **`src/components/decorations/LightModeDecorations.tsx`**: Light mode visual effects

### Pages & Sections
- **`src/app/page.tsx`**: Home page with all sections
- **`src/app/cv/page.tsx`**: Full-page CV display
- **`src/app/console/page.tsx`**: API console/playground
- **`src/components/sections/*`**: Individual section components

### Internationalization
- **`src/i18n/en.json`**: English translations (all text strings)
- **`src/i18n/vi.json`**: Vietnamese translations
- **`src/context/LanguageContext.tsx`**: Language state provider
- **`src/components/ui/LanguageSwitcher.tsx`**: Language toggle button

---

## 🎨 Theme System

### Dark Mode (Default)
- `--bg-primary: #0a0e27` - Dark navy background
- `--text-secondary: #cbd5e1` - Cyan text (accent)
- `--border-color: #00d9ff` - Cyan borders
- Cyan glow effects, floating particles

### Light Mode
- `--bg-primary: #ffffff` - White background
- `--text-secondary: #374151` - Dark gray text
- `--border-color: #e5e7eb` - Subtle gray borders
- Mesh grid pattern, floating gradient orbs, interactive glows

---

## 📁 Asset Organization

### Images (`public/images/`)
- **`avatar.jpg`**: Main profile picture (used in Hero section)
- **`profile.jpg`**: Alternative profile picture
- **`projects/`**: Project showcase images

### Documents (`public/documents/`)
- **`Nguyen-Ke-Sang.pdf`**: Official CV/Resume PDF
- Accessible via `/api/cv` or download link

### Text Assets (`public/`)
- **`Nguyen-Ke-Sang.txt`**: Plain text CV version

---

## 🔧 Component Architecture

### Layout Components
- `Header.tsx` - Top navigation with logo, menu, theme toggle
- `Footer.tsx` - Bottom footer with links
- `providers.tsx` - App-wide providers (Theme, Language, etc.)

### UI Components (Reusable)
- `Button.tsx` - Primary CTA button component
- `ThemeToggle.tsx` - Dark/light theme switcher
- `LanguageSwitcher.tsx` - EN/VI language switcher
- `GlassCard.tsx` - Glass-morphism card wrapper

### Section Components (Page Sections)
- `HeroSection.tsx` - Hero/intro with avatar and CTA
- `AboutSection.tsx` - About me content
- `ExperienceSection.tsx` - Work experience timeline
- `SkillsSection.tsx` - Technical skills matrix
- `ProjectsSection.tsx` - Portfolio projects showcase
- `ContactSection.tsx` - Contact form and social links

### Decoration Components
- `LightModeDecorations.tsx` - Light mode visual effects
- `BackgroundEffects.tsx` - Dark mode animations

---

## 🎯 CSS Architecture

### Global Styles (`globals.css`)
1. **CSS Variables** - Theme colors and sizing
2. **Base Styles** - Reset, font, scrollbar
3. **Animations** - Keyframes for effects
4. **Responsive** - Media queries and utilities
5. **Light Mode Overrides** - Specific light mode styling

### Tailwind CSS
- Custom color palette (dark & light themes)
- Extended spacing and sizing
- Custom utilities for common patterns

### Component Styles
- Inline styles for dynamic theme colors
- Framer Motion for animations
- Tailwind classes for layout

---

## 🌐 i18n (Internationalization)

### Supported Languages
- **English (en)** - Default language
- **Vietnamese (vi)** - Alternative language

### Translation Files
- `src/i18n/en.json` - All English strings
- `src/i18n/vi.json` - All Vietnamese strings

### Usage
```typescript
const { t } = useLanguage();
const translatedText = t('key.subkey'); // e.g., t('hero.greeting')
```

---

## 📊 File Size & Performance

| Category | Files | Purpose |
|----------|-------|---------|
| Pages | 3 | Home, CV, Console |
| Sections | 6 | Hero, About, Experience, Skills, Projects, Contact |
| UI Components | 5 | Reusable elements |
| Layouts | 1-2 | Header, Footer |
| Effects | 2 | Light/Dark mode decorations |
| Context/Hooks | 3 | Language, Theme, Utilities |

---

## 🚀 Development Workflow

### Adding New Section
1. Create component in `src/components/sections/NewSection.tsx`
2. Add translations to `src/i18n/en.json` and `vi.json`
3. Import and use in `src/app/page.tsx`

### Adding New Page
1. Create folder in `src/app/newpage/`
2. Add `page.tsx` inside
3. Use same layout structure
4. Add to Header navigation

### Modifying Theme
1. Edit CSS variables in `src/app/globals.css`
2. Update both `html {}` (dark) and `html.light {}` (light)
3. Test in both themes

### Adding Translations
1. Add key-value pairs to `src/i18n/en.json`
2. Add Vietnamese translations to `src/i18n/vi.json`
3. Use `useLanguage()` hook to access

---

## 📚 Documentation Files

- **`docs/LIGHT_MODE_IMPROVEMENTS.md`** - Light mode features and effects
- **`docs/TEST_REPORT.md`** - Testing results and quality metrics
- **`docs/PORTFOLIO_READY.txt`** - Deployment checklist
- **`docs/BUG_FIXES.md`** - All bug fixes applied to project
- **`PROJECT_STRUCTURE.md`** - This file

---

## ✅ Best Practices

1. **Always use CSS variables** for colors (never hardcode)
2. **Test in both themes** before committing
3. **Keep components small** and focused on single responsibility
4. **Use i18n for all user-facing text** (never hardcode strings)
5. **Follow TypeScript strict mode** - no `any` types
6. **Use Framer Motion** for all animations
7. **Test on mobile** - maintain responsive design
8. **Optimize images** before adding to `public/`

---

## 🔗 Quick Links

- **Home**: `/`
- **CV Page**: `/cv`
- **Console**: `/console`
- **API**: `/api/*` (if implemented)
- **CV Download**: `/public/documents/Nguyen-Ke-Sang.pdf`

---

**Last Updated**: October 26, 2026  
**Version**: 1.0 - Production Ready
