# UI Redesign: Warm Minimal — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign from dark AI-gen aesthetic to warm minimal academic look.

**Architecture:** Single CSS variables overhaul + font swap in layout. All components inherit from global.css tokens.

**Tech Stack:** Astro, CSS custom properties, Google Fonts

## Global Constraints

- All colors, radii, shadows defined as CSS custom properties in `:root`
- Remove all cyan (#5bd6ff, rgba(91, 214, 255)), glassmorphism (backdrop-filter blur), radial gradient backgrounds
- Replace fonts: Crimson Pro (serif) for headings, Atkinson Hyperlegible (sans) for body
- Replace all rgba(...) color references with solid hex values
- Button border-radius: 8px (not 999px pills)
- Card border-radius: 12px
- Section padding: 4rem 0

---

### Task 1: Rewrite global.css with warm minimal tokens

**Files:**
- Modify: `src/styles/global.css` — entire file rewrite

- [ ] Replace `:root` design tokens: new color palette, radius, shadow, fonts, remove glassmorphism vars
- [ ] Rewrite body: solid warm background, remove gradients, remove body::before grid overlay
- [ ] Update .site-header: remove backdrop-filter, solid background
- [ ] Update .brand-logo/.footer-logo: remove cyan border/glow
- [ ] Update .nav-links a: use primary for active/hover instead of accent (cyan)
- [ ] Update .eyebrow: use muted color instead of accent
- [ ] Update h1/h2/h3: use Crimson Pro font
- [ ] Update .button: not pill (8px radius), solid colors, no gradient
- [ ] Update .hero-logo-card: remove glass gradient, simple border + shadow
- [ ] Update .signal-card, .content-card, .publication-year: remove backdrop-filter, white bg
- [ ] Update .tag-list li: use primary-soft instead of accent-soft
- [ ] Update .publication-item: remove rgba bg
- [ ] Update .publication-venue: remove cyan bg
- [ ] Update .cta-inner: solid primary bg instead of gradient
- [ ] Update .site-footer: solid white bg, border instead of dark semi-transparent
- [ ] Update .section: padding from 2rem to 4rem

### Task 2: Update BaseLayout fonts

**Files:**
- Modify: `src/layouts/BaseLayout.astro:33-35` — font link

- [ ] Replace Fraunces + Manrope with Crimson Pro + Atkinson Hyperlegible

### Task 3: Update Hero.astro (minimal)

**Files:**
- Modify: `src/components/Hero.astro:16` — hero-logo-card class

- [ ] No structural changes needed; CSS handles everything

### Task 4: Update CtaBlock.astro (minimal)

**Files:**
- Modify: `src/components/CtaBlock.astro` — no structural change

- [ ] No structural changes needed; CSS handles everything

### Task 5: Build verification

**Files:**
- N/A

- [ ] Run: `npm run build`
- [ ] Verify no errors
