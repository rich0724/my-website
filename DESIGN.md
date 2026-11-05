# DESIGN.md — Apple Store Inspired High-End Dark & Light UI System

## 1. Visual World & Aesthetic Direction
- **Reference:** Apple Korea Store (`apple.com/kr/store`)
- **Core Philosophy:** Crisp silver-grey gallery canvas (`#F5F5F7`) paired with alternating high-contrast **Pitch-Black (`#000000`)** and **Pure-White (`#FFFFFF`)** rounded feature cards (`border-radius: 28px`), razor-sharp Korean typography, translucent frosted-glass navigation (`backdrop-filter: saturate(180%) blur(20px)`), and fluid spring-like micro-interactions.

## 2. Color Tokens
- **Canvas Background:** `#F5F5F7` (Apple Store Light Surface) / `#000000` (Dark Mode Toggle Option)
- **Translucent Chrome (Global Nav):** `rgba(255, 255, 255, 0.82)` with `backdrop-filter: saturate(180%) blur(20px)`
- **Primary Ink (Headings):** `#1D1D1F`
- **Secondary Ink (Two-Tone Sub-headings & Body):** `#6E6E73`
- **Muted Caption Ink:** `#86868B`
- **Dark Shelf Card Surface:** `#000000` (Primary text `#F5F5F7`, Secondary text `#A1A1A6`, Accent eyebrow `#F56300`)
- **Light Shelf Card Surface:** `#FFFFFF` (Primary text `#1D1D1F`, Secondary text `#6E6E73`, Accent eyebrow `#B64400`)
- **Interactive Link / Primary CTA Accent:** `#0066CC` (Hover: `#0071E3`)
- **Semantic Status Colors:**
  - Safe / Balanced: `#28CD41`
  - Warning / Load Imbalance: `#FF9500`
  - Critical / Overdue / Free-rider Alert: `#FF3B30`

## 3. Typography & Hierarchy
- **Font Stack:** `'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif`
- **Hero Store Title:** `clamp(2.5rem, 4.5vw, 3.5rem)`, `font-weight: 700`, `letter-spacing: -0.03em`, `line-height: 1.08`
- **Two-Tone Section Header:** `clamp(1.5rem, 2.5vw, 1.85rem)`, `font-weight: 700`, `letter-spacing: -0.025em`
  - Lead phrase in `#1D1D1F`, trailing phrase immediately inline in `#6E6E73`.
- **Shelf Card Title:** `1.625rem` (`26px`), `font-weight: 700`, `letter-spacing: -0.02em`, `line-height: 1.2`
- **Tabular Numerals:** `font-variant-numeric: tabular-nums` on all percentages, timers, and contribution scores.

## 4. Layout & Motion Rules
- **Shelf Card Elevation:** `border-radius: 28px`, `box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.06)`, hover transition `transform 260ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 260ms cubic-bezier(0.23, 1, 0.32, 1)` (`scale(1.012)` on hover, `scale(0.985)` on `:active`).
- **Category Icon Dock:** Horizontal scrollable dock of tactile product-style module icons with `12px` labels below.
- **Accessibility & Reduced Motion:** Respect `@media (prefers-reduced-motion: reduce)` and `@media (prefers-reduced-transparency: reduce)`.
