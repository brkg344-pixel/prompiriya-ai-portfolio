# Prompiriya Phetyangphul (Boom) — AI & Digital Experience Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Official University Admission Portfolio for **Mr. Prompiriya Phetyangphul (`นายพรหมพิริยะ เพชรยังพูล`, บูม / Boom)**  
Upper-Secondary Student in the **TOP STAR Special Science-Math Classroom Program at Sa Kaeo School**.

**Target Program for TCAS70:**
- **Institution:** Silpakorn University (`มหาวิทยาลัยศิลปากร`)
- **Faculty:** Faculty of Information and Communication Technology (`คณะเทคโนโลยีสารสนเทศและการสื่อสาร - ICT`)
- **Degree Program:** Bachelor of Science in Artificial Intelligence for Digital Experience Technology (`สาขาวิชาปัญญาประดิษฐ์สำหรับเทคโนโลยีประสบการณ์ดิจิทัล`)

---

## 🌟 Key Features

1. **Syntropic Intelligence 3D Laboratory Interface**
   - **Interactive 3D Neural Constellation:** Built with Three.js WebGL rendering real-time responsive particle field.
   - **Interactive 3D Holo Core:** Toggleable 3D wireframe models representing AI & Digital UX, Mathematical Compounding, and Visual Media.
   - **Spatial Glass UI:** 3D cursor-tracking card tilt, dynamic spotlight glow, and fluid liquid-glass button interactions.

2. **Real-Time Interactive DCA Simulator (`/projects/dca-simulator`)**
   - Live dynamic mathematical simulation engine calculating geometric series compound interest (`S_n = P \cdot \frac{(1+r)^n - 1}{r}`).
   - Real-time parameter tuning: Monthly investment, expected annual return, investment duration, yearly step-up savings rate, and economic stress-test shocks.
   - Interactive Chart.js multi-curve visualizer comparing plain savings vs. stepped savings vs. DCA compounding.

3. **4 In-Depth Project Case Studies (13-Point Structured Format)**
   - `#01` DCA Investment Simulator & Financial Planning Web App
   - `#02` Sa Kaeo School Web Page & Content Management Initiative
   - `#03` Top Star Science Camp Visual Media & Video Production
   - `#04` Short-Form Video Content Strategy for Facebook Fanpage

4. **Bilingual Support & Accessibility**
   - Complete 1-click **Thai / English** language switcher with seamless real-time state persistence.
   - `prefers-reduced-motion` compliance to pause 3D loops and animations for low-spec hardware or user preference.

5. **Groundedness & Privacy Shield Audit (PDPA Compliance)**
   - All 28 authentic certificates and project photographs cross-verified against official school documents.
   - Sensitive personal information (national ID number, home address, personal phone number) strictly redacted from public source code in accordance with PDPA guidelines.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) `>= 18.17.0`
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/prompiriya-ai-portfolio.git
   cd prompiriya-ai-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Type-check and production build:**
   ```bash
   npm run typecheck
   npm run build
   npm run start
   ```

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14 (App Router, React 18, TypeScript) |
| **Styling & Design** | Tailwind CSS, CSS Grid, Custom Glow Gradients |
| **Motion & 3D** | Three.js (WebGL), GSAP (ScrollTrigger), Framer Motion |
| **Data Visualization** | Chart.js |
| **Icons & UI** | Lucide React, Radix UI Primitives |
| **Deployment** | Vercel / GitHub Pages / Node.js Server |

---

## 📁 Project Structure

```text
├── public/
│   ├── images/              # 28 authentic project scans, certificates & photos
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css      # Core Syntropic theme variables & glassmorphism
│   │   ├── layout.tsx       # Root metadata & font configuration
│   │   ├── page.tsx         # Main portfolio home page (10 comprehensive sections)
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx # Dynamic 13-point deep-dive case study page
│   ├── components/
│   │   ├── audit-modal.tsx  # Groundedness & Privacy Shield modal
│   │   ├── dca-interactive-sandbox.tsx # Interactive Chart.js simulator
│   │   ├── lightbox-modal.tsx          # Dual certificate & activity photo lightbox
│   │   ├── navigation/      # Sticky blur Navbar & Expandable Tabs
│   │   ├── three/           # Three.js 3D Background & Interactive Holo Core
│   │   └── ui/              # SpatialCard, LiquidButton, MetalButton
│   ├── context/
│   │   └── language-context.tsx # Bilingual TH/EN state provider
│   └── data/
│       └── portfolio-data.ts    # Single source of truth (TCAS70 verified data)
├── standalone-preview/      # Zero-dependency single-file HTML preview
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📄 License & Attribution

- Portfolio content, images, and credentials © 2026 Prompiriya Phetyangphul. All rights reserved.
- Codebase available under the [MIT License](LICENSE).
