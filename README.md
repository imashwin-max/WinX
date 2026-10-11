# 🚀 Winx — Enterprise AI & Automation Agency Website

A production-grade, highly interactive single-page React 18 application for **Winx**, an enterprise AI & automation agency founded by Akash & Ashwin.

Built with **React 18**, **Vite 5**, **Framer Motion**, **CSS Modules**, **Tailwind CSS**, **React Hook Form**, **Zod**, and **Lucide Icons**.

> **Live Brand:** Winx — *Solving Problems through Advanced Technologies*

---

## ✨ Features & Architecture

- ⚡ **Vite 5 Build Setup** — Instant HMR, optimized manual vendor chunk splitting
- 🎨 **Luxury Warm Linen & Obsidian Noir Theme** — Custom CSS variables (`variables.css`) with warm linen backgrounds (`#F5F2EB`, `#FAF8F5`, `#FCFBF9`) and deep obsidian noir accents (`#141413`)
- 🎭 **Framer Motion Animations** — Scroll-triggered entry animations (`AnimatedSection`), interactive card lifts, spring physics
- ⭐ **Team Carousel** — Button-controlled horizontal carousel (`TeamCarousel.jsx`) with active center card scaling, blur/unblur cues, arrow + dot controls, clamped offset to prevent card clipping, and keyboard navigation (`ArrowLeft` / `ArrowRight`)
- 📝 **Validated Contact Form** — Powered by **React Hook Form** + **Zod** schema validation, live character counter, custom Toast notifications, and real-time state feedback
- ❓ **Multi-Expand FAQ Accordion** — Interactive accordion with smooth height expansion and rotating toggle icon
- 📊 **Animated Counters** — Count-up statistics for metrics (`MetricCard.jsx`)
- 🛡️ **Error Boundaries & Fallbacks** — Top-level `ErrorBoundary` catching component errors gracefully
- 📊 **Analytics Integration** — Centralized `analytics.js` for tracking pageviews and form submissions
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile breakpoints
- 🔗 **Working LinkedIn Links** — Team member profiles connected with proper `https://` URLs

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--color-bg-primary` | `#F5F2EB` | Main section backgrounds |
| `--color-bg-secondary` | `#EFEBE1` | Alternate section backgrounds (Process, FAQ) |
| `--color-surface` | `#FAF8F5` | Cards, panels |
| `--color-accent-blue` | `#141413` | Buttons, active states, headings |
| `--color-text-muted` | `#57534E` | Body text, labels |
| `--border-light` | `#E5DFD5` | Card borders, dividers |

Sections alternate between `#F5F2EB`, `#EFEBE1`, and `#FCFBF9` with subtle `1px` warm stone border dividers for visual contrast.

---

## 🛠️ Project Structure

```
winx-agency/
├── public/
│   ├── favicon.svg
│   ├── winx-logo-dark.png
│   ├── winx-logo-white.png
│   ├── winx-icon-dark.png
│   ├── winx-icon-white.png
│   ├── akash.png
│   ├── ashwin.jpeg
│   └── robots.txt
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimatedSection/
│   │   │   ├── Badge/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── ErrorBoundary/
│   │   │   ├── Input/
│   │   │   ├── SectionHeader/
│   │   │   ├── Select/
│   │   │   └── Textarea/
│   │   ├── layout/
│   │   │   ├── Footer/
│   │   │   ├── Navigation/
│   │   │   └── PageLayout/
│   │   ├── sections/
│   │   │   ├── Blog/
│   │   │   ├── Contact/
│   │   │   ├── FAQ/
│   │   │   ├── Hero/
│   │   │   ├── NotFound/
│   │   │   ├── Portfolio/
│   │   │   ├── Process/
│   │   │   ├── Services/
│   │   │   ├── Team/             ← Button-controlled carousel with clamp fix
│   │   │   └── Testimonials/
│   │   └── ui/
│   │       ├── AnimatedCounter/
│   │       ├── LoadingSpinner/
│   │       ├── ScrollProgress/
│   │       ├── Skeleton/
│   │       └── Toast/
│   ├── context/
│   ├── data/
│   │   ├── team.js              ← Akash (CEO) & Ashwin (CTO) profiles
│   │   ├── testimonials.js
│   │   ├── faq.js
│   │   └── blog.js
│   ├── hooks/
│   ├── styles/
│   │   ├── variables.css        ← Global design tokens (theme)
│   │   ├── index.css
│   │   └── utilities.css
│   └── utils/
│       └── constants.js         ← COMPANY_INFO (name, email, phone)
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Local Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

---

## 👥 Founders

| Name | Role | LinkedIn |
|---|---|---|
| Akash | CEO & Co-Founder | [linkedin.com/in/akash-m-543745371](https://www.linkedin.com/in/akash-m-543745371) |
| Ashwin | CTO & Co-Founder | [linkedin.com/in/ashwin0027](https://www.linkedin.com/in/ashwin0027) |

---

## 📞 Contact

- **Email:** info@winx.com
- **Solutions Desk:** +91 8148092163

---

*© 2025 Winx. All rights reserved.*
