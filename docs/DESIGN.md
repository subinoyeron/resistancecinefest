# Resistance Cinema Fest 2026 — Design System

## Intent

Implementation-ready design guidance for a documentary-inspired human rights film festival site. Typography is the primary visual element. Layouts are editorial, grid-driven, and accessible.

Inspired by the structural clarity of Democracy Re:Boot Camp — **not** its branding, colors, or content.

## Brand Personality

Resistance Cinema Fest is a film festival and public engagement space focused on torture prevention, transitional justice, solidarity, memory, resistance, and human rights.

The site must feel: serious, reflective, contemporary, human-centered, documentary-inspired.

**Avoid:** startup aesthetics, corporate NGO aesthetics, tech conference aesthetics, excessive animations, glassmorphism.

## Design Tokens

### Color

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0B0B0B` | Page background |
| `--surface` | `#161616` | Cards, color-block sections |
| `--text` | `#FFFFFF` | Primary text |
| `--text-secondary` | `#BDBDBD` | Body copy, metadata |
| `--accent-primary` | `#D62828` | CTAs, emphasis, track accents |
| `--accent-secondary` | `#F4A261` | Labels, section markers |
| `--accent-primary-hover` | `#B82222` | Interactive hover on primary |
| `--rule` | `#2A2A2A` | Borders, dividers |
| `--focus` | `#F4A261` | Focus-visible outline |

Use semantic Tailwind classes (`bg-bg`, `text-text-secondary`, `bg-accent-primary`) — not raw hex in components.

### Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Instrument Serif | Headlines, film titles |
| Condensed | Barlow Condensed | Stamp labels, metadata, buttons |
| Body | Source Sans 3 | Paragraphs, forms |

Scale: oversized headings via `clamp()`, generous line-height on body (`leading-relaxed`), strong hierarchy between display and body.

### Layout

- 12-column editorial grid (`.grid-12`)
- Max content width: `max-w-7xl` via `Container`
- Section spacing: `py-16 sm:py-20 lg:py-28`
- Alternating `bg-bg` / `bg-surface` for color-block rhythm

### Motion

- Framer Motion: fade-in on scroll only (`FadeIn`)
- Must respect `prefers-reduced-motion`
- No parallax, no glass effects, no decorative loops

## Page Sections

1. Hero
2. About
3. Why This Festival Exists
4. Thematic Tracks
5. Programme
6. Featured Films
7. Workshop
8. Speakers
9. Partners
10. Registration
11. Footer

## Component Rules

### Interactive elements

All links, buttons, and form controls must define:

- **Default** — token colors
- **Hover** — contrast-safe shift (primary → `--accent-primary-hover`)
- **Focus-visible** — 2px `--focus` outline, 3px offset (global)
- **Disabled** — reduced opacity, no pointer events

Minimum touch target: 44px (`min-h-11`).

### SectionHeading

- Stamp label in `accent-secondary`
- `h2` carries the section `id` for `aria-labelledby`
- Display font, clamp-based responsive size

### Forms (Registration)

- Visible labels or `sr-only` with associated `htmlFor`
- Required fields marked with `required`
- Native inputs with high-contrast borders on `--rule`

## Accessibility (WCAG 2.2 AA)

- Semantic landmarks: `header`, `main`, `footer`, `nav`, `section`
- Skip link to `#main`
- Keyboard navigation for all interactive elements
- Visible focus states on all focusable elements
- Responsive layouts from mobile up
- Screen reader labels on icon-only or abbreviated UI
- `aria-labelledby` on every major section
- Color contrast: white on `#0B0B0B` and `#161616` passes AA; secondary text `#BDBDBD` on dark backgrounds passes AA for large text — use for body copy at 16px+ or non-essential metadata

### Testable checks

- [ ] Tab through entire page; every link/button receives visible focus
- [ ] Skip link appears on focus and moves to main content
- [ ] All sections announced correctly by screen reader
- [ ] Page usable at 320px width without horizontal scroll
- [ ] Animations disabled when `prefers-reduced-motion: reduce`

## Anti-patterns

- Do not use `backdrop-blur`, gradients as decoration, or neon accents
- Do not hide focus outlines
- Do not use raw hex in component class strings
- Do not add sections outside the defined page structure without design review
- Do not use stock-photo hero backgrounds; imagery should feel archival

## Technology

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4 with `@theme inline` tokens
- Framer Motion (minimal, scroll-triggered fade only)

## QA Checklist

- [ ] All 11 sections present in correct order
- [ ] Color palette matches tokens exactly
- [ ] Navigation links match section IDs
- [ ] No glassmorphism or excessive animation
- [ ] Build and lint pass
- [ ] Mobile menu keyboard-accessible (`aria-expanded`, `aria-controls`)
