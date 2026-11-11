---
name: Syntropic Intelligence
colors:
  surface: '#11131b'
  surface-dim: '#11131b'
  surface-bright: '#373942'
  surface-container-lowest: '#0c0e16'
  surface-container-low: '#191b24'
  surface-container: '#1d1f28'
  surface-container-high: '#282a33'
  surface-container-highest: '#32343e'
  on-surface: '#e1e1ee'
  on-surface-variant: '#bacabf'
  inverse-surface: '#e1e1ee'
  inverse-on-surface: '#2e3039'
  outline: '#85948a'
  outline-variant: '#3c4a41'
  surface-tint: '#2ce19c'
  primary: '#83ffc3'
  on-primary: '#003823'
  primary-container: '#35e6a1'
  on-primary-container: '#006341'
  inverse-primary: '#006c48'
  secondary: '#cdbdff'
  on-secondary: '#370095'
  secondary-container: '#4f28ae'
  on-secondary-container: '#bda8ff'
  tertiary: '#e0e7ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#b5cbff'
  on-tertiary-container: '#0052b3'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#56feb7'
  primary-fixed-dim: '#2ce19c'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005235'
  secondary-fixed: '#e8ddff'
  secondary-fixed-dim: '#cdbdff'
  on-secondary-fixed: '#20005e'
  on-secondary-fixed-variant: '#4f28ae'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#aec6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004396'
  background: '#11131b'
  on-background: '#e1e1ee'
  surface-variant: '#32343e'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '800'
    lineHeight: 4.25rem
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system projects high-caliber academic credibility fused with cutting-edge creative technologist acumen. Tailored for academic committees in advanced AI and Digital Experience disciplines, the aesthetic rejects superficial "gamer neon" tropes in favor of an exacting, laboratory-grade dark glassmorphism. It balances computational rigor with organic interaction design.

### Visual Aesthetic & Style
- **Dark Premium Glassmorphism:** Deep, layered cosmic canvas shades punctuated by translucent frosted surfaces, high backdrop blurs (20px to 32px), and hairline chromatic reflections.
- **Controlled Luminescence:** Restrained use of neon accents—primarily crisp Emerald Green (`#35E6A1`) signifying intelligence, algorithmic synthesis, and vitality, accented by Electric Purple and Tech Blue for secondary states.
- **Editorial Technologist Discipline:** Clean typographic hierarchy paired with micro-grid textures, subtle hairline borders, and fluid depth that communicate precision, intentionality, and academic maturity.

## Colors

The palette leverages deep, void-level dark tones to establish infinite depth, allowing vibrant spectral accents to carry functional hierarchy without visual fatigue.

### Palette Architecture
- **Primary (`#35E6A1` - Emerald Neon):** Designates active states, primary CTAs, critical data highlights, and successful algorithmic states. Contrast-calibrated against dark surfaces.
- **Secondary (`#9B7BFF` - Electric Violet):** Reserved for conceptual synthesis, AI/Machine Learning tagging, research category tags, and secondary action highlights.
- **Tertiary (`#4D8DFF` - Tech Cobalt):** Expresses technical infrastructure, system metrics, academic citations, and informational badges.
- **Neutral Canvas Hierarchy:**
  - `Base Canvas`: `#070910` (Ultimate depth, zero back-light glare)
  - `Surface Level 1`: `#080A12` (Page sections and structural panels)
  - `Surface Level 2 (Glass Layer)`: `#111522` at 65%–80% opacity with backdrop-filter
  - `Surface Level 3 (Active Glass / Hover)`: `#181E32` at 85% opacity
- **Text & Foreground:**
  - `Text Primary`: `#F5F7FF` (Crisp off-white, high legibility)
  - `Text Secondary`: `#9AA5BE` (Subdued metadata, academic notes)
  - `Text Tertiary / Muted`: `#5E6982` (Captions, inactive indicators)
  - `Border Hairline`: `rgba(245, 247, 255, 0.08)` to `rgba(53, 230, 161, 0.25)` for active elements

## Typography

Typography unifies structural engineering with editorial finesse. Headings leverage the contemporary geometry of **Plus Jakarta Sans**, offering approachable confidence, while body narrative and statistical readouts rely on **Inter** for uncompromising legibility.

### Application Guidelines
- **Bilingual & Thai Support:** For deployments requiring Thai script, `Noto Sans Thai` acts as the primary paired typeface, matching Inter’s cap-height and baseline rhythm precisely.
- **Mathematical / Code References:** Data points, AI algorithm parameters, and academic paper references use tabular numeric features (`tnum`, `cv05`) within Inter.
- **Letter Spacing:** Tighter negative tracking on display titles enhances visual density and authority; open positive tracking on metadata tags (`label-sm`) provides immediate scanning value.

## Layout & Spacing

The layout operates on a flexible 12-column architectural grid with generous rhythmic spacing that prevents cognitive clutter, reinforcing an academic and contemplative atmosphere.

### Grid & Breakpoints
- **Desktop (>= 1280px):** 12 columns, max container width `1280px`, `gutter: 1.5rem`, `margin: 4rem`. Fluid centering with structural vertical margins of `5rem` to `7rem` between case studies.
- **Tablet (768px – 1279px):** 8 columns, `gutter: 1.25rem`, `margin: 2rem`. Content regions scale down modularly; dual-pane portfolio layouts stack into single sequential flows.
- **Mobile (< 768px):** 4 columns, `gutter: 1rem`, `margin: 1.25rem`. Navigational panels collapse into a sticky bottom-docked glass command bar.

### Spacing Philosophy
Internal card structures observe strict hierarchical spacing: compact element relations use `space-xs` and `space-sm`, textual content uses `space-md`, and disparate functional groupings within cards use `space-lg`.

## Elevation & Depth

Rather than relying on heavy drop shadows that muddy dark themes, the design system utilizes translucent **Tonal Glassmorphism** accented with **Subtle Neon Ambient Glows**.

### Depth Layers
1. **Layer 0 (Canvas Void):** `#070910` base canvas. Static, non-reactive.
2. **Layer 1 (Card Matrix):** Background `rgba(17, 21, 34, 0.65)`, backdrop blur `24px`, bound by a delicate 1px border of `rgba(245, 247, 255, 0.08)`.
3. **Layer 2 (Interactive Floating Surfaces & Hover States):** Background `rgba(24, 30, 50, 0.8)`, backdrop blur `32px`. Edge lighting activates via a subtle gradient border transitioning from `rgba(53, 230, 161, 0.4)` to `rgba(155, 123, 255, 0.1)`.
4. **Layer 3 (Modals & Overlays):** Background `rgba(8, 10, 18, 0.92)`, backdrop blur `40px`, supported by an outer ambient diffusion: `0 20px 50px -10px rgba(0, 0, 0, 0.7)`.

### Chromatic Glow Tokens
Active focal elements emit diffused back-shadows:
- **Emerald Pulse:** `0 0 24px -4px rgba(53, 230, 161, 0.25)`
- **Purple Luminescence:** `0 0 24px -4px rgba(155, 123, 255, 0.2)`
- Outlines remain crisp at 1px thickness; glow is always soft and diffused to preserve high-tech refinement.

## Shapes

The shape vocabulary emphasizes structural modernism. Using a base roundedness tier of `2`, corners are confident and geometric rather than overly toy-like or spherical.

### Curvature Values
- **Base Components (Inputs, Buttons, Pills):** `0.5rem` (`8px`) corner radius.
- **Containers & Glass Cards (`rounded-lg`):** `1rem` (`16px`) corner radius.
- **Large Presentation Panels & Modals (`rounded-xl`):** `1.5rem` (`24px`) corner radius.
- **Filter Tags & Meta Badges:** Pill-shaped radius (`9999px`) to create clear semantic differentiation between containers and interactive tags.

## Components

### 1. Buttons & CTAs
- **Primary CTA:** Background tinted emerald gradient `linear-gradient(135deg, #35E6A1 0%, #20BF7C 100%)`, text `#070910` (weight 700), border `1px solid rgba(255, 255, 255, 0.3)`. Hover triggers an upward 1px translation and emerald aura glow.
- **Glass / Metallic Secondary:** Translucent surface `rgba(245, 247, 255, 0.05)`, border `1px solid rgba(245, 247, 255, 0.15)`, text `#F5F7FF`. Hover initiates an electric purple border transition with `rgba(155, 123, 255, 0.15)` internal illumination.

### 2. Glass Cards & Case Study Containers
- Constructed with `1rem` corner radiuses, `24px` backdrop blur, and an inset top reflection line `inset 0 1px 0 0 rgba(255, 255, 255, 0.12)`.
- Cards feature an expandable bottom state displaying AI architecture, training parameters, or UX research findings upon interactive selection.

### 3. Tag Pills & Meta Badges
- **AI / Tech Pills:** Pill-shaped borders containing `0.25rem` vertical and `0.75rem` horizontal padding. Font `label-sm`. Background `rgba(53, 230, 161, 0.08)`, border `1px solid rgba(53, 230, 161, 0.3)`, text `#35E6A1`.
- **Theory / Design Pills:** Background `rgba(155, 123, 255, 0.08)`, border `1px solid rgba(155, 123, 255, 0.3)`, text `#9B7BFF`.

### 4. Interactive Expandable Tabs
- Tab strips housed inside a floating frosted track (`rgba(255, 255, 255, 0.03)`).
- Active tab pill glides with a spring animation, using `#181E32` with a subtle bottom accent underline of `#35E6A1`.

### 5. Input Fields & Search Bars
- Dark sunken inset (`#080A12`) with `1px solid rgba(245, 247, 255, 0.1)`. Focus state produces a razor-sharp emerald outline and a subtle inner ambient shadow.

### 6. Interactive Metric & Data Display
- Terminal-inspired performance tickers displaying machine learning benchmarks, user engagement deltas, and academic indices with high-contrast emerald or tech-blue figures and subdued secondary descriptions.