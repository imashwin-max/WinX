<div align="center">

# ⚡ Winx — Enterprise AI & Automation Agency

**Solving complex enterprise challenges through applied artificial intelligence and intelligent automation.**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](#)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](#)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF?logo=framer&logoColor=white)](#)
[![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel&logoColor=white)](https://win-x-pied.vercel.app)

[Live Demo](https://win-x-pied.vercel.app) · [Report Bug](https://github.com/imashwin-max/WinX/issues) · [Request Feature](https://github.com/imashwin-max/WinX/issues)

</div>

---

## 📖 Overview

**Winx** is a high-performance, single-page web platform created for an enterprise AI & automation agency. Designed with a luxury editorial aesthetic, the site delivers responsive performance, fluid scroll-triggered physics, and schema-validated interaction flows.

---

## ✨ Key Features

- **Luxury Design System:** Custom theme tokens utilizing Warm Linen (`#F5F2EB`, `#FAF8F5`) and Obsidian Noir (`#141413`) for high-end contrast and typography hierarchy.
- **Fluid Physics & Micro-interactions:** Built with Framer Motion for scroll-triggered reveals (`AnimatedSection`), spring physics, and interactive cards.
- **Team Carousel:** Custom button-controlled carousel (`TeamCarousel.jsx`) featuring active center-card scaling, background defocusing, dot navigation, clamped offsets to prevent clipping, and full keyboard arrow navigation (`ArrowLeft` / `ArrowRight`).
- **Validated Contact System:** Form state handling via React Hook Form backed by Zod runtime schema validation, character counters, and toast notifications.
- **Accordion Components:** Multi-expand FAQ interface with dynamic height transitions and animated toggle indicators.
- **Live Metric Counters:** Animated count-up statistics via `MetricCard.jsx` triggered on viewport intersection.
- **Resilient Architecture:** Integrated top-level Error Boundaries catching runtime errors gracefully.

---

## 🎨 Design System Tokens

| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--color-bg-primary` | `#F5F2EB` | Main section background |
| `--color-bg-secondary` | `#EFEBE1` | Alternate section background (FAQ, Process) |
| `--color-surface` | `#FAF8F5` | Elevated surfaces, cards, and modal panels |
| `--color-accent-blue` | `#141413` | Headings, active states, and primary CTAs |
| `--color-text-muted` | `#57534E` | Secondary body text and metadata labels |
| `--border-light` | `#E5DFD5` | Section dividers and card strokes |

---

## 🛠️ Tech Stack

- **Core:** React 18, Vite 5
- **Styling:** Tailwind CSS, CSS Modules, Custom CSS Variables
- **Animations:** Framer Motion
- **Form Management:** React Hook Form, Zod
- **Icons:** Lucide Icons
- **Deployment:** Vercel

---

## 📁 Project Structure

```text
winx-agency/
├── public/
│   ├── favicon.svg
│   ├── winx-logo-dark.png
│   ├── winx-logo-white.png
│   ├── akash.png
│   └── ashwin.jpeg
├── src/
│   ├── components/
│   │   ├── common/        # Shared atoms (Buttons, Cards, Inputs, Modals)
│   │   ├── layout/        # Navbar, Footer, Page shell
│   │   ├── sections/      # Hero, Services, Process, Team, Portfolio, FAQ, Contact
│   │   └── ui/            # Toast, Skeleton, AnimatedCounter, ScrollProgress
│   ├── data/              # Static content (team profiles, FAQ, testimonials)
│   ├── styles/            # CSS Modules, variables.css, Tailwind baseline
│   ├── utils/             # Form schemas, constants, tracking
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
