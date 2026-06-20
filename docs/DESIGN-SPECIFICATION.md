# Design Specification — Reference Analysis & Adaptation

**Reference:** [Democracy Re:Boot Camp](https://democracyreboot.camp/)  
**Target:** Resistance Cinema Fest 2026  
**Purpose:** Capture transferable layout, typography, and interaction patterns from the reference site. Do **not** replicate its branding, palette, imagery, or copy.

---

## 1. Reference Analysis Summary

Democracy Re:Boot Camp uses a **single-page editorial landing** built for activist cultural events. The design treats typography and color blocks as the primary visual language. Photography and illustration support content but never compete with headlines. The overall feel is confident, direct, and print-inspired — closer to a campaign poster or festival broadsheet than a corporate site.

### What to adopt (patterns)

| Pattern | Reference behavior |
|---------|-------------------|
| Oversized display type | Headlines dominate the viewport; body copy is secondary |
| Full-bleed color sections | Entire viewport-width bands alternate background color |
| Two-column editorial splits | Text column + media or data column at ~50/50 or 60/40 |
| Fact badges | Key metadata in solid rectangular chips, not icon cards |
| Stacked thematic statements | One idea per color block, centered or left-aligned |
| Rule-based lists | Schedule/FAQ content in divided rows, not shadow cards |
| Minimal chrome | Logo + one CTA in header; no dense nav bar |
| High vertical rhythm | Large section padding creates breathing room |

### What not to copy

- Rainbow accent palette (yellow, pink, purple, green blocks)
- Lexend Tera / reference typefaces
- Photography style (protest merch, bright activist stickers)
- Content structure (boot camp application flow, FAQ accordion copy)
- Decorative marquee/ticker repetition of “Open call”
- Rounded pill badges at reference scale and saturation

---

## 2. Typography Hierarchy

### 2.1 Reference site

| Level | Role | Characteristics |
|-------|------|-----------------|
| **Display XL** | Hero statement | Very large (≈60–120px+), heavy weight, often uppercase, tight line-height (~0.95–1.05), can span multiple lines as a stack |
| **Display L** | Section titles | Large bold sans, left-aligned or centered within color blocks |
| **Display M** | Sub-section / card titles | Medium-large, still bold; used in lists and two-column areas |
| **Label** | Metadata, dates, categories | Small caps, wide letter-spacing, sits above or beside headings |
| **Body L** | Intro paragraphs | 18–20px, relaxed line-height (~1.5–1.6), max-width constrained |
| **Body M** | List items, FAQ, captions | 16–18px, regular weight |
| **CTA text** | Buttons | Bold, often uppercase, high contrast against solid fill |

**Hierarchy principle:** One dominant headline per viewport region. Supporting text never approaches headline size. Labels are visually distinct through case and tracking, not just size.

### 2.2 Adaptation for Resistance Cinema Fest

| Level | Token / class | Typeface | Size (responsive) |
|-------|---------------|----------|-------------------|
| Display XL | Hero `h1` | Instrument Serif | `clamp(2.75rem, 8vw, 5.5rem)` |
| Display L | Section `h2` | Instrument Serif | `clamp(2rem, 5vw, 3.5rem)` |
| Display M | Card / film `h3` | Instrument Serif | `text-xl` → `text-3xl` |
| Label | `.stamp` | Barlow Condensed | `text-xs` → `text-sm`, `letter-spacing: 0.22em`, uppercase |
| Body L | Lead paragraphs | Source Sans 3 | `text-lg`, `leading-relaxed` |
| Body M | Body, synopses | Source Sans 3 | `text-base`, `leading-relaxed` |
| CTA | Buttons, links | Barlow Condensed (`.stamp`) | `text-sm`, min-height 44px |

**Difference from reference:** RCF uses serif display type for a documentary/editorial tone rather than the reference’s geometric sans. Hierarchy rules remain the same — scale contrast, not decoration.

---

## 3. Grid System

### 3.1 Reference site

- **Page grid:** Implicit 12-column feel with content centered in a max-width container; some sections break out to full viewport width.
- **Common layouts:**
  - **Full bleed** — hero, stacked color blocks, image-quote bands
  - **Two-column split** — `~6/6` or `~7/5` on desktop; text left, media or badges right (order sometimes reversed)
  - **Badge cluster** — 2×2 or horizontal row of fact chips within a column
  - **Single-column stack** — thematic color blocks (100% width each)
  - **List column** — one wide column of ruled rows; optional narrow label column

- **Gutters:** Generous horizontal padding on container edges; tight internal gaps within badge groups.

### 3.2 Adaptation for Resistance Cinema Fest

```
Container: max-w-7xl, px-5 sm:px-8 lg:px-10
Grid: .grid-12 — 12 equal columns, responsive gaps
```

| Layout pattern | Column span (desktop) | Usage |
|----------------|----------------------|--------|
| Headline + body split | 5 + 6 (offset 7) | About, Why Festival |
| Full-width heading | 12 | Section intros |
| Three-up cards | 4 + 4 + 4 | Thematic tracks |
| Two-up cards | 6 + 6 | Featured films |
| Four-up grid | 3 + 3 + 3 + 3 | Speakers |
| Fact strip | 3 + 3 + 3 + 3 | About metadata |
| Programme rows | 12 (internal 2-5-2-3 sub-grid) | Schedule table |

**Rule:** Color-block sections use full viewport width (`w-full`); content inside still aligns to `Container` grid.

---

## 4. Spacing Scale

### 4.1 Reference site

The reference uses a **large-scale spacing** approach — sections feel like distinct “chapters.”

| Context | Approximate scale |
|---------|-------------------|
| Section vertical padding | 80–140px desktop; ~64px tablet; ~48px mobile |
| Between heading and body | 24–40px |
| Between body paragraphs | 16–24px |
| Badge internal padding | 16–24px vertical, 20–32px horizontal |
| Color block internal padding | 48–80px vertical |
| List row padding | 16–24px vertical per item |
| Container edge inset | 24–40px mobile; 48–64px desktop |

### 4.2 Adaptation — RCF spacing tokens

| Token | Value | Tailwind |
|-------|-------|----------|
| `space-section-sm` | 64px | `py-16` |
| `space-section-md` | 80px | `py-20` |
| `space-section-lg` | 112px | `py-28` |
| `space-heading-body` | 16–32px | `mb-8 sm:mb-10 lg:mb-12` |
| `space-paragraph` | 20px | `space-y-5` |
| `space-card` | 24–32px | `p-6 sm:p-8` |
| `space-inline` | 12–16px | `gap-3` / `gap-4` |
| `space-container-x` | 20–40px | `px-5 sm:px-8 lg:px-10` |

**Principle:** Match reference *proportions* (airy sections, tight badge clusters) using RCF’s darker, more restrained palette.

---

## 5. Component Patterns

### 5.1 Reference components

| Component | Description |
|-----------|-------------|
| **Hero band** | Full-width background (image or color); oversized headline; optional sub-copy; primary CTA |
| **Fact badge** | Solid fill rectangle, bold label + value, no shadow, sharp or softly rounded corners |
| **Color statement block** | Full-width band, one heading + one paragraph, background color carries meaning |
| **Editorial split** | Two columns: prose + supporting visual or data |
| **Image quote band** | Full-bleed photo, centered large white text overlay |
| **Ruled list row** | Horizontal divider between items; columns for time / title / meta |
| **Tag chip** | Small colored label for category (e.g. track, session type) |
| **Primary button** | Solid fill, high contrast, uppercase or bold label |
| **Ghost button** | Outline or text-only secondary action |
| **FAQ accordion** | Stacked questions with expand/collapse (reference uses this in lower page) |
| **Marquee/ticker** | Repeating text strip (decorative — **omit for RCF**) |
| **Footer band** | Image or color background, minimal links, partner credit |

### 5.2 RCF component mapping

| Reference pattern | RCF component | Notes |
|-------------------|---------------|-------|
| Hero band | `Hero` | Dark surface, serif headline, stamp metadata, dual CTA |
| Fact badge | `About` fact grid | 4-cell strip on `--surface` / `--bg`; no bright fills |
| Color statement block | `ThematicTracks` cards | Border-top accent instead of full rainbow fills |
| Editorial split | `WhyFestival`, `About` | 5/7 column split |
| Ruled list row | `Programme`, `Workshop` | `divide-y divide-rule` |
| Tag chip | Programme type labels | `.stamp` in `accent-secondary` / `accent-primary` |
| Primary button | Register CTAs | `bg-accent-primary`, `.stamp` |
| Ghost button | “View Programme” | `border border-rule` |
| FAQ accordion | *Not in v1* | Add later if needed |
| Footer band | `Footer` | Text on `--bg`, no sticker imagery |

---

## 6. Card Layouts

### 6.1 Reference site

The reference rarely uses “floating” cards with shadows. Instead:

1. **Badge cards** — flat color rectangles grouped in a cluster  
2. **Color-block cards** — the section *is* the card (full width)  
3. **List rows** — bordered/divided rows, not individual boxes  
4. **Media cards** — image + caption in editorial layout, minimal chrome  

No glassmorphism, no drop shadows, no hover lift effects.

### 6.2 RCF card variants

#### Track card
```
border-t-2 accent (primary or secondary)
bg-surface
padding: space-card
number: stamp, muted, oversized (decorative index)
title: display M
body: text-secondary
```

#### Film card
```
border border-rule, bg-bg
media placeholder: aspect-video, bg-surface
hover: border-accent-primary/50 (no transform/shadow)
meta: stamp + track label
```

#### Speaker card
```
border-l-2 border-rule
hover: border-accent-secondary
name: display M
role: body M, text-secondary
```

#### Partner cell
```
border border-rule, bg-surface
text only, no logo placeholders in v1
```

#### Programme day block
```
border-t-2 border-accent-primary (day header band)
rows: divide-y, internal grid for time / title / type / venue
```

---

## 7. Section Structure

### 7.1 Reference page flow

```
1. Hero (full-bleed image/color + headline)
2. Quick facts (light bg, 2-col: copy + badge cluster)
3. Audience / “Who it's for” (dark bg, 2-col: text + images)
4. Image quote / mission statement (full-bleed image)
5. Thematic content blocks (stacked full-width color bands)
6. Mission + CTA (light bg, 2-col)
7. Featured highlight (accent color, media + text)
8. Programme / list (light bg, ruled rows)
9. FAQ (accordion)
10. Footer (image background, links)
```

**Structural logic:** Hook → facts → audience → emotional statement → themes → action → detail → questions → close.

### 7.2 RCF section flow (adapted)

```
1. Hero           — hook, dates, dual CTA
2. About          — what the festival is + fact strip
3. Why Festival   — ideological rationale (editorial split)
4. Thematic Tracks— three accent-bordered cards
5. Programme      — ruled schedule by day
6. Featured Films — two-up film grid
7. Workshop       — ruled session list
8. Speakers       — four-up name grid
9. Partners       — three-up name cells
10. Registration  — split: headline + form
11. Footer        — navigate, contact, credit
```

**Mapping rationale:**

| Reference intent | RCF equivalent |
|-----------------|----------------|
| Quick facts | About fact strip |
| Who it's for | About + Why Festival |
| Thematic color blocks | Thematic Tracks |
| Programme list | Programme + Workshop |
| Featured highlight | Featured Films |
| CTA / apply | Registration |

---

## 8. Navigation Behavior

### 8.1 Reference site

- **Header:** Minimal fixed/sticky bar — logo/wordmark left, single primary CTA right (“Register” / “Menu”).
- **No traditional horizontal link bar** on desktop; wayfinding is scroll-driven.
- **Menu:** Likely overlay or drawer (mobile-first pattern).
- **In-page anchors:** Sections are reached by scrolling; footer may repeat links.
- **CTA persistence:** Register button remains visible in header throughout scroll.

### 8.2 RCF specification

| Behavior | Requirement |
|----------|-------------|
| Position | `sticky top-0`, solid `bg-bg` (no blur) |
| Left | Wordmark linking to `#top` |
| Desktop | Horizontal anchor nav (`lg:block`) — **deviation from reference** for accessibility and festival content density |
| Mobile | Menu button toggles panel (`aria-expanded`, `aria-controls`) |
| CTA | Register link in nav + hero + registration section |
| Focus | All nav links receive `:focus-visible` outline |
| Skip link | “Skip to main content” → `#main` |

**Note:** RCF includes explicit section nav where the reference relies on scroll discovery. This supports WCAG orientation and festival audiences looking for programme/films quickly.

---

## 9. Responsive Behavior

### 9.1 Reference site

| Breakpoint | Behavior |
|------------|----------|
| Mobile | Single column; headline scale reduces but stays dominant; badges stack vertically; color blocks remain full width |
| Tablet | Two-column splits begin; badge clusters may wrap 2×2 |
| Desktop | Full two-column editorial layouts; maximum headline scale; generous side margins |

**Typography:** Fluid scaling — headlines use viewport-relative sizing, not fixed jumps only.

**Images:** Full-bleed bands crop horizontally; collage grids reduce column count.

**Motion:** Subtle scroll reveals; repeating marquee on reference — **exclude for RCF**.

### 9.2 RCF breakpoints

| Breakpoint | Tailwind | Layout changes |
|------------|----------|----------------|
| Default | `< sm` | Single column; 12-col spans all `col-span-12`; mobile nav |
| `sm` | ≥640px | 2-col speakers, films; programme sub-grid |
| `lg` | ≥1024px | Editorial splits; horizontal nav; 3-col tracks |
| `xl` | container max | Content capped at `max-w-7xl` |

| Component | Mobile | Desktop |
|-----------|--------|---------|
| Hero | Stacked headline + CTA | 8/4 column split |
| About / Why | Stacked | 5/7 split |
| Tracks | 1 col | 3 col |
| Films | 1 col | 2 col |
| Speakers | 1 col | 4 col |
| Programme rows | Stacked fields | 12-col internal grid |
| Registration | Stacked | 7/5 split |

**Reduced motion:** Disable scroll fade and smooth scroll when `prefers-reduced-motion: reduce`.

---

## 10. Color Application (pattern, not palette)

### Reference approach
- Neutral base (black, white, light gray) for reading sections  
- Saturated full-bleed bands for thematic separation  
- Badge color encodes category  

### RCF approach
- Neutral base: `#0B0B0B` / `#161616`  
- Accent bands via `bg-surface` alternation, not rainbow fills  
- Accent color on borders, labels, and CTAs — not full-section backgrounds  
- Primary red for urgency (register, track 1/3); secondary orange for labels and track 2  

This preserves the reference’s **rhythm** (alternating section weight) while matching RCF’s serious, documentary tone.

---

## 11. Accessibility Requirements

Inherited from reference clarity + WCAG 2.2 AA:

- Contrast ≥ 4.5:1 for body text; ≥ 3:1 for large text  
- Visible focus on all interactive elements  
- Semantic landmarks and heading order (`h1` → `h2` → `h3`)  
- Form labels associated with inputs  
- `aria-labelledby` on sections  
- Touch targets ≥ 44×44px  
- No information conveyed by color alone (programme type also has text label)  

---

## 12. Implementation Checklist

- [ ] One display headline dominates each section  
- [ ] Section padding uses `py-16 sm:py-20 lg:py-28`  
- [ ] Cards use borders/rules, not shadows  
- [ ] Fact metadata in badge strip, not icon cards  
- [ ] Programme and workshops use ruled list pattern  
- [ ] Color blocks alternate `bg-bg` / `bg-surface`  
- [ ] Header sticky, solid, no glassmorphism  
- [ ] Mobile menu keyboard-accessible  
- [ ] Typography uses stamp / display / body hierarchy  
- [ ] No decorative marquee or excessive animation  

---

## 13. Document Relationships

| File | Role |
|------|------|
| `DESIGN-SPECIFICATION.md` (this file) | Reference analysis + pattern adaptation |
| `DESIGN.md` | RCF implementation tokens, components, QA |
| `lib/content.ts` | Section copy and data |
| `app/globals.css` | CSS custom properties and grid utilities |

---

*Last updated: June 2026. Reference site reviewed via live content and full-page screenshot.*
