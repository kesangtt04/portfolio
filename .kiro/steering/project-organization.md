# Portfolio Project Organization & Standards

---

## 📋 Project Overview

**Premium AI/ML Portfolio** - Dark/Light theme, Next.js 15, TypeScript, Framer Motion

**Location**: `c:\Users\Thinkpad\Desktop\cv ca nhan\portfolio`

---

## 🗂️ Organized Structure

### Root Directory Files
```
portfolio/
├── src/                    # Source code (organized by feature)
├── public/                 # Static assets (organized by type)
├── docs/                   # Documentation (setup, guides, reports)
├── .kiro/                  # Kiro configuration
├── .next/                  # Build output (git ignored)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

### Public Directory (`public/`)
```
public/
├── images/
│   ├── avatar.jpg          # Profile picture
│   ├── profile.jpg         # Alternative profile picture
│   └── projects/           # Project screenshots
├── documents/
│   └── Nguyen-Ke-Sang.pdf # Resume/CV
└── Nguyen-Ke-Sang.txt     # Text CV version
```

### Source Directory (`src/`)
```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + theme CSS vars
│   ├── cv/                 # CV page
│   └── console/            # Console page
│
├── components/             # React components (organized by feature)
│   ├── layout/             # Layout components
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Page sections
│   ├── decorations/        # Visual effects
│   ├── effects/            # Animation effects
│   └── providers.tsx       # App providers wrapper
│
├── context/                # React Context
│   ├── LanguageContext.tsx # i18n context
│   └── ThemeContext.tsx    # (if using custom theme)
│
├── hooks/                  # Custom React hooks
│   ├── useInView.tsx       # Intersection observer hook
│   └── useLanguage.tsx     # Language context hook
│
└── i18n/                   # Internationalization
    ├── en.json             # English translations
    ├── vi.json             # Vietnamese translations
    └── index.ts            # i18n config
```

### Documentation (`docs/`)
```
docs/
├── LIGHT_MODE_IMPROVEMENTS.md  # Feature docs
├── TEST_REPORT.md              # QA results
├── PORTFOLIO_READY.txt         # Deployment checklist
└── BUG_FIXES.md               # Bug fix log
```

---

## 📍 Files Moved & Organized

### Before (Messy)
```
cv ca nhan/
├── anh dai dien.jpg              # ❌ Root level image
├── Nguyen-Ke-Sang.pdf            # ❌ Root level PDF
├── LIGHT_MODE_IMPROVEMENTS.md     # ❌ Root level doc
├── TEST_REPORT.md                # ❌ Root level doc
└── portfolio/
```

### After (Organized)
```
cv ca nhan/portfolio/
├── public/
│   ├── images/
│   │   ├── avatar.jpg
│   │   └── profile.jpg           # ✅ Moved here
│   └── documents/
│       └── Nguyen-Ke-Sang.pdf    # ✅ Moved here
├── docs/
│   ├── LIGHT_MODE_IMPROVEMENTS.md # ✅ Moved here
│   ├── TEST_REPORT.md            # ✅ Moved here
│   └── PORTFOLIO_READY.txt       # ✅ Moved here
└── PROJECT_STRUCTURE.md          # ✅ Created
```

---

## 🎯 Component Organization Principles

### 1. **Feature-Based Organization**
- Components grouped by feature/purpose
- Not by type (pages, components, etc.)
- Each feature is self-contained

### 2. **Single Responsibility**
- Each component does ONE thing well
- Small, focused, reusable
- Easy to test and maintain

### 3. **Clear Naming**
- Components named by their purpose
- Files use PascalCase: `HeroSection.tsx`
- Folders use kebab-case: `dark-mode-effects/`

### 4. **Consistent Structure**
```typescript
// Component structure template
'use client';  // Mark client components

import { dependencies };
import { useHooks };

export function ComponentName() {
  // state & logic
  
  return (
    // JSX
  );
}
```

---

## 🌈 Theme System

### CSS Variables Location
**File**: `src/app/globals.css`

### Dark Mode (Default)
```css
html {
  --bg-primary: #0a0e27;
  --text-secondary: #cbd5e1;  /* Cyan accent */
  --border-color: #00d9ff;
}
```

### Light Mode
```css
html.light {
  --bg-primary: #ffffff;
  --text-secondary: #374151;  /* Dark gray */
  --border-color: #e5e7eb;
}
```

### Using Theme Variables
```typescript
style={{
  backgroundColor: 'var(--bg-primary)',
  color: 'var(--text-secondary)',
  borderColor: 'var(--border-color)'
}}
```

---

## 🌐 Internationalization (i18n)

### Supported Languages
- **English**: `src/i18n/en.json`
- **Vietnamese**: `src/i18n/vi.json`

### Adding New Translation
1. Add to `src/i18n/en.json`:
```json
{
  "section.key": "English text"
}
```

2. Add to `src/i18n/vi.json`:
```json
{
  "section.key": "Văn bản tiếng Việt"
}
```

3. Use in component:
```typescript
const { t } = useLanguage();
<h1>{t('section.key')}</h1>
```

---

## 📝 Naming Conventions

### Components
- Use **PascalCase**: `HeroSection.tsx`, `ThemeToggle.tsx`
- Descriptive names: `ContactForm.tsx` not `Form.tsx`
- Suffix by type: `...Section.tsx`, `...Button.tsx`, `...Card.tsx`

### Folders
- Use **kebab-case**: `light-mode-effects/`
- Meaningful names: `decorations/`, `sections/`, `ui/`

### Variables & Functions
- Use **camelCase**: `handleSubmit()`, `isLight`
- Boolean prefix with: `is`, `has`, `can`: `isLoading`, `hasError`

### CSS Classes (Tailwind)
- Use predefined utilities
- Chain for brevity: `flex gap-4 items-center`
- Create custom classes in `globals.css` if reused 3+ times

### i18n Keys
- Use **dot notation**: `hero.title`, `contact.email`
- Group by section: `hero.*`, `about.*`, `skills.*`

---

## ✅ Development Checklist

### Before Committing Code
- [ ] Uses CSS variables (no hardcoded colors)
- [ ] Works in both dark & light modes
- [ ] Responsive on mobile/tablet/desktop
- [ ] English & Vietnamese translations added
- [ ] No console errors or warnings
- [ ] Follows naming conventions
- [ ] No unused imports or variables
- [ ] TypeScript strict mode passes

### Before Deploying
- [ ] All pages tested manually
- [ ] Theme toggle tested
- [ ] Language toggle tested
- [ ] Images optimized (< 200KB)
- [ ] PDFs and documents in correct folder
- [ ] No sensitive data in public files
- [ ] Build completes without errors: `npm run build`

---

## 🔄 File Movement Guide

### Moving Assets
```bash
# Images → public/images/
cp original/image.jpg portfolio/public/images/

# PDFs → public/documents/
cp original/file.pdf portfolio/public/documents/

# Docs → docs/
cp original/DOC.md portfolio/docs/
```

### Accessing Moved Files
```typescript
// In components:
<img src="/images/avatar.jpg" />
<a href="/documents/Nguyen-Ke-Sang.pdf">Download CV</a>

// Or use Next.js Image component (recommended):
<Image src="/images/avatar.jpg" alt="Profile" width={400} height={400} />
```

---

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| Total Components | ~15 |
| UI Components | 5 |
| Page Sections | 6 |
| Pages | 3 |
| Supported Languages | 2 (EN, VI) |
| Theme Modes | 2 (Dark, Light) |
| CSS Variables | 12+ |

---

## 🚀 Common Tasks

### Add New Section
1. Create `src/components/sections/NewSection.tsx`
2. Add translations to `src/i18n/*.json`
3. Import in `src/app/page.tsx`
4. Add to Header navigation

### Add New Page
1. Create `src/app/newpage/page.tsx`
2. Use existing layout
3. Add navigation link in Header

### Modify Theme Colors
1. Edit CSS variables in `src/app/globals.css`
2. Update both `html {}` and `html.light {}` sections
3. Test in browser
4. No component changes needed (uses variables)

### Deploy to Production
1. Run `npm run build` - verify no errors
2. Check `next start` - preview production build
3. Deploy to hosting (Vercel, Netlify, etc.)

---

## 📚 Related Documentation

- **`PROJECT_STRUCTURE.md`** - Detailed directory structure
- **`docs/BUG_FIXES.md`** - All bugs fixed
- **`docs/LIGHT_MODE_IMPROVEMENTS.md`** - Light mode features
- **`README.md`** - Project setup and usage

---

## 🎨 Quality Standards

### Code Quality
- ✅ TypeScript strict mode enabled
- ✅ ESLint configured and enforced
- ✅ No hardcoded values (use constants/variables)
- ✅ Comments for complex logic only
- ✅ Consistent formatting (Prettier if available)

### Performance
- ✅ Images optimized (< 200KB)
- ✅ Code splitting enabled (Next.js default)
- ✅ No unnecessary re-renders
- ✅ Animations GPU-accelerated
- ✅ Lazy loading for below-fold content

### Accessibility
- ✅ Semantic HTML elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation supported
- ✅ Color contrast >= WCAG AA standard
- ✅ alt text for all images

### User Experience
- ✅ Fast load time (< 3s)
- ✅ Smooth animations (60fps)
- ✅ Responsive design (mobile-first)
- ✅ Clear visual hierarchy
- ✅ Consistent branding

---

**Last Updated**: October 26, 2026  
**Maintainer**: Development Team
