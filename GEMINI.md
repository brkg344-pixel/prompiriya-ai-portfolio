# GEMINI.md — Google Antigravity Workspace Rules & Project Context

## Project Identity
- **Project Name:** Prompiriya Phetyangphul (Boom) — Personal AI & Digital Experience Portfolio
- **Owner / Candidate:** Mr. Prompiriya Phetyangphul (`นายพรหมพิริยะ เพชรยังพูล`, Nickname: `Boom / บูม`)
- **School:** Sa Kaeo School (`โรงเรียนสระแก้ว`), TOP STAR Science-Math Gifted Program (`ห้องเรียนพิเศษ TOP STAR`)
- **Target University Admission:** Silpakorn University (`มหาวิทยาลัยศิลปากร`) — Faculty of Information and Communication Technology (`คณะเทคโนโลยีสารสนเทศและการสื่อสาร - ICT`) — Artificial Intelligence for Digital Experience Technology (`สาขาวิชาปัญญาประดิษฐ์สำหรับเทคโนโลยีประสบการณ์ดิจิทัล`)

## Tech Stack & Architecture
- **Framework:** Next.js 14 App Router (`src/app/`), React 18, TypeScript
- **Styling:** Tailwind CSS (`tailwind.config.ts`, `src/app/globals.css`) following the **Syntropic Intelligence** dark glassmorphism design system (`docs/DESIGN.md`)
- **Components:**
  - `src/components/ui/liquid-glass-button.tsx`: Reusable `Button`, `LiquidButton`, and `MetalButton`
  - `src/components/ui/expandable-tabs.tsx`: Framer Motion `ExpandableTabs` navigation bar
  - `src/components/navigation/navbar.tsx`: Floating glass header, language switcher (`TH` / `EN`), case study quick links, and reduced-motion toggle
  - `src/components/dca-interactive-sandbox.tsx`: Live interactive Chart.js simulator for Dollar-Cost Averaging (Geometric Series + Stress Test + Goal Seeker)
  - `src/components/lightbox-modal.tsx`: Certificate & authentic activity photo lightbox
- **Data Layer (Single Source of Truth):**
  - `src/data/portfolio-data.ts`: Complete bilingual (`th` and `en`) content dictionary and 13-part case studies for all 4 projects (`dca-simulator`, `organ-donation-media`, `sk-top-star`, `photography-media`)
- **Static Assets:**
  - `public/images/`: All 28 authentic, optimized photos, project screenshots, certificate scans, and QR codes from the candidate's portfolio archive
- **Standalone Single-File Build:**
  - `standalone-preview/prompiriya_ai_portfolio.html`: Self-contained HTML/CSS/JS build with base64-inlined images for instant zero-server previewing

## Hard Constraints for Antigravity Agents
1. **Strict Groundedness (Zero Hallucination):**
   - Never invent awards, grades, competitions, or technical skills not documented in the candidate's official Portfolio PDF.
   - Always frame the candidate honestly as a motivated high school student with hands-on project experience and strong potential—never overclaim senior industry titles.
   - For the **DCA Investment Simulator**, always preserve the distinction between the **3-member group collaboration** and Prompiriya's individual contributions (UI design, AI prompt engineering with Gemini/Claude/ChatGPT, cell-by-cell verification against Microsoft Excel, and peer satisfaction survey collection `4.60 / 5.00`).
2. **Strict Privacy Protection:**
   - NEVER expose the candidate's home address or personal phone number in any UI component, metadata tag, or public commit.
   - Use `brkg344@gmail.com` as the primary verified contact channel.
3. **Bilingual Parity (`TH` / `EN`):**
   - Every UI change or content update must be applied to both `DATA.th` and `DATA.en` (and `proj.th` / `proj.en` in `PROJECTS_CASE_STUDIES`) inside `src/data/portfolio-data.ts`.
4. **Design System Compliance:**
   - Maintain the dark futuristic palette (`#080A12` canvas, `#101522` surface, `#35E6A1` emerald, `#9B7BFF` purple, `#4D8DFF` tech blue, `#F5F7FF` primary text) and respect `prefers-reduced-motion`.
