# UI Redesign: Warm Minimal

## Goal

Redesign AINI Lab website from dark AI-gen aesthetic to warm, minimal, human-centric academic look.

## Design System

### Mode
Light mode. No dark mode support needed for this iteration.

### Colors
```css
--bg:          #F7F5F0    /* warm off-white background */
--surface:     #FFFFFF    /* cards, sections */
--text:        #1F2937    /* near-black warm */
--muted:       #6B7280    /* warm gray */
--border:      #E5E0D8    /* light beige border */
--primary:     #1E3A5F    /* deep navy */
--accent:      #B45309    /* warm amber */
--accent-soft: rgba(180, 83, 9, 0.08)
--shadow:      0 1px 3px rgba(0,0,0,0.06)
--radius:      12px
--container:   1120px
```

### Typography
| Level | Font | Weight |
|-------|------|--------|
| Headings (h1/h2/h3) | Crimson Pro (serif) | 600–700 |
| Body / UI | Atkinson Hyperlegible (sans) | 400–600 |
| Eyebrow / Labels | Atkinson Hyperlegible | 600 uppercase |

Body line-height: 1.7

Google Fonts URL:
`https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Crimson+Pro:wght@400;500;600;700&display=swap`

### Removed Elements
- Glassmorphism (backdrop-filter blur, rgba surfaces)
- Radial gradient backgrounds
- Grid lines overlay (body::before)
- Heavy shadows (0 20px 60px etc.)
- Cyan accent color (#5bd6ff)
- Gradient buttons
- Large border-radius (24px → 12px)

### Component Styles
- Cards: white surface, 1px solid #E5E0D8 border, 12px radius, soft shadow
- Buttons (primary): solid #1E3A5F bg, white text, 8px radius
- Buttons (secondary): transparent, 1px solid #E5E0D8 border
- Hover: subtle border/text color shift, no layout transform
- Section padding: 4rem 0 (increased from 2rem)

### Layout
Keep existing grid system (3-up, 2-up). Increase vertical rhythm.

## Files to Modify

- `src/styles/global.css` — redesign all CSS variables and styles
- `src/layouts/BaseLayout.astro` — update Google Fonts link
- `src/components/Hero.astro` — remove hero-logo-card glass effect
- `src/components/CtaBlock.astro` — simplify CTA styling
- `src/components/Footer.astro` — update footer styling
- `src/components/Nav.astro` — update nav styling
- `src/components/ResearchCard.astro` — update card styling
- `src/components/ProjectCard.astro` — update card styling
- `src/components/PeopleGrid.astro` — update card styling
- `src/components/PublicationList.astro` — update card styling
- `src/components/NewsList.astro` — update card styling
- `src/components/ResourceGrid.astro` — update card styling
- `src/components/SectionHeader.astro` — update styling

## Order of Implementation

1. global.css (design tokens and base styles)
2. BaseLayout.astro (fonts)
3. Components (Nav, Hero, Footer, cards)
4. Pages (verify layout)
5. Clean up unused code
6. Verify with `npm run build`
