# Nguyễn Kế Sang - AI/ML Developer Portfolio

A modern, responsive portfolio website showcasing AI/ML expertise with fresh cyan/teal colors, smooth animations, and bilingual support (English & Vietnamese).

🌐 **Live Portfolio:** [https://portfolio-o41j.vercel.app](https://portfolio-o41j.vercel.app)

## ✨ Highlights

- 🎨 **Premium Dark/Light Theme** - Smooth toggle with CSS variables
- ⚡ **Interactive Console** - Terminal UI with 8 custom commands + REST API endpoints
- 🚀 **Production Ready** - Deployed on Vercel with auto-deploy
- 📊 **Responsive Design** - Mobile-first, works perfectly on all devices
- 🎬 **Smooth Animations** - Framer Motion for polished UX
- 🌍 **Bilingual** - English & Vietnamese support
- 🔐 **Type Safe** - Full TypeScript implementation

## 🎯 Key Features

### 🌓 Dark/Light Theme
- **CSS Variables System** - Dynamic theme switching
- **Light Mode Enhancements** - Mesh patterns, floating icons, gradient orbs
- **Smooth Transitions** - 0.5s cubic-bezier animations
- **System Preference** - Auto-detect user's system theme

### 💻 Interactive Console
- **8 Custom Commands**
  - `bio` - Portfolio biography
  - `skills` - Technical skills matrix
  - `projects` - Featured projects
  - `contact` - Contact information
  - `education` - University & GPA (7.3/10)
  - `experience` - Work experience
  - `status` - System health check
  - `help` - Command reference

- **Dual Tabs**
  - Terminal tab with command history (arrow keys)
  - API Explorer tab with live endpoint testing

- **5 REST API Endpoints**
  - `/api/v1/bio`
  - `/api/v1/skills`
  - `/api/v1/projects`
  - `/api/v1/contact`
  - `/api/v1/health`

### 🎨 Premium Design
- **Custom Lightning Icon** - Animated SVG with gradient
- **Enhanced Footer** - Improved visibility and interaction
- **Responsive Grid** - 2-4 column layouts
- **Hover Effects** - Scale, translate, glow animations
- **Consistent Colors** - Cyan (#00d9ff) primary accent

## 🚀 Features

- ✨ **Fresh Cyan Color Scheme** - Modern, eye-catching design with #00d9ff primary accent
- 🎬 **Smooth Animations** - Framer Motion animations on scroll and interactions
- 📱 **Fully Responsive** - Mobile-first design, perfect on all devices
- 🌍 **Dark/Light Mode** - Theme toggle with system preference detection
- ♿ **Accessible** - WCAG AA compliant with keyboard navigation support
- ⚡ **High Performance** - Optimized for Lighthouse 95+ scores
- 🎯 **Full-Stack Portfolio** - Showcasing AI/ML + Backend + UI skills

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ with TypeScript
- **Styling:** Tailwind CSS with custom extended configuration
- **Animations:** Framer Motion
- **Theme:** next-themes (dark/light mode)
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📋 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── ThemeToggle.tsx
│   │   └── providers.tsx
│   └── hooks/
│       └── useInView.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Build
npm run build

# Start production server
npm start
```

## 🎨 Color Palette

| Purpose | Color | Hex Code |
|---------|-------|----------|
| Primary Accent | Bright Cyan | #00d9ff |
| Secondary Accent | Teal | #00b8cc |
| Success State | Green-Teal | #1dd1a1 |
| Subtle Accent | Light Cyan | #0dd7df |
| Dark Background | Deep Navy | #0a1428 |
| Text Primary | Soft White | #f0f4f8 |
| Text Secondary | Muted Gray | #b0b8c1 |

## 📄 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage - Complete portfolio showcase |
| `/console` | Interactive terminal with commands & API explorer |
| `/cv` | CV page with 4 different resume versions |
| `/api/v1/bio` | GET - User biography |
| `/api/v1/skills` | GET - Technical & soft skills |
| `/api/v1/projects` | GET - Project portfolio |
| `/api/v1/contact` | GET - Contact information |
| `/api/v1/health` | GET - System health status |

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (single column, full width)
- **Tablet:** 640px - 1024px (1-2 columns)
- **Desktop:** > 1024px (multi-column, optimized)

## 🔄 Features Overview

### Hero Section
- Typing animation effect
- Call-to-action buttons
- Social media links
- Smooth fade-in animations

### About Section
- Professional introduction
- Animated statistics counters
- Education & certifications
- Full-stack positioning

### Experience Section
- Timeline layout with visual dot
- Work experience details
- Key achievements
- Performance metrics

### Skills Section
- 4 categorized skill groups
- Hover-interactive badges
- Visual organization
- Easy to update

### Projects Section
- 2-column responsive grid
- Project cards with metrics
- Technology tags
- Expandable project details

### Contact Section
- Contact form with validation
- Email, phone, location info
- Social media links
- Form feedback messages

### Header & Footer
- Sticky navigation
- Theme toggle
- Mobile hamburger menu
- Quick links
- Social connections

## 🔐 Environment Variables

Create a `.env.local` file for local development:

```env
# Add any API keys here if needed for contact form integration
# Example: FORMSPREE_KEY=your_formspree_key
```

## 📊 Performance Targets

- Lighthouse Performance: > 90
- Lighthouse Accessibility: > 90
- Page Load Time: < 2 seconds
- Mobile Responsive: 100%

## 🚀 Deployment

### ✅ Live on Vercel

The portfolio is **currently deployed** and live at:
```
https://portfolio-o41j.vercel.app
```

**Auto-Deploy Enabled:** Every `git push` to `main` branch automatically deploys

### Deploy Your Own

1. **Fork this repository**
   ```bash
   git clone https://github.com/kesangtt04/portfolio.git
   cd portfolio
   ```

2. **Push to your GitHub**
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Select your `portfolio` repository
   - Click "Deploy"
   - **Done!** Your portfolio is live in 2-3 minutes

### Environment Setup

No environment variables required for basic setup. Portfolio works out-of-the-box!

Optional: For contact form submissions, configure your provider in the contact form component.

## 🚀 Quick Deploy

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect GitHub repository to Vercel
3. Vercel auto-deploys on push

```bash
npm run build
npm start  # Test production build locally
```

### Deploy to Other Platforms

```bash
npm run build
# Next app is in .next folder, deploy it
```

## 🎯 Customization

### Update Personal Information

Edit `src/components/sections/` files to update:
- Name and title
- About section content
- Experience details
- Skills
- Projects
- Contact information

### Modify Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  accent: {
    cyan: "#00d9ff",  // Change primary color here
    // ... other colors
  }
}
```

### Add New Sections

1. Create new component in `src/components/sections/`
2. Import in `src/app/page.tsx`
3. Add corresponding navigation link

## 📝 License

This project is open source and available under the MIT License.

## 👤 About

**Nguyễn Kế Sang** - AI/ML Developer
- 📧 Email: kesangtt04@gmail.com
- 📱 Phone: 0376556259
- 🔗 GitHub: github.com/kesangtt04
- 📍 Location: Quận 7, TP. Hồ Chí Minh, Vietnam

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own portfolio.

## 📞 Support

For issues or questions, please open an issue on GitHub or contact me directly.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

**Status:** ✅ Production Ready  
**Last Updated:** October 26, 2026  
**Version:** 1.0.0
