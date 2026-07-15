# Homepage Content Reduction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce homepage text density by keeping only the simplified hero, three compact research cards, and the contact call to action.

**Architecture:** Preserve the existing Astro component structure and content collections. Remove project loading and rendering at the page level, simplify the hero's right column to the logo only, and leave detailed research and project pages unchanged.

**Tech Stack:** Astro 7, TypeScript, CSS, Vitest

## Global Constraints

- Preserve the site's current visual language and responsive behavior.
- Do not rewrite research or project source content.
- Do not change navigation or detailed pages.
- Do not add dependencies.

---

### Task 1: Simplify Homepage Content

**Files:**
- Modify: `src/pages/index.astro:1-62`
- Modify: `src/components/Hero.astro:4-35`
- Verify only: `src/styles/global.css:216-270`

**Interfaces:**
- Consumes: Astro's `getCollection("research")`, `byOrder()`, `site.json`, `Hero`, `ResearchCard`, `SectionHeader`, and `CtaBlock`.
- Produces: The `/` static route containing one hero, one three-card research section, and one contact block.

- [ ] **Step 1: Confirm the old homepage elements are present**

Run:

```bash
rg -n 'ProjectCard|selectFeaturedProjects|Featured Projects|eyebrow="Research Areas"' src/pages/index.astro
rg -n 'hero-metrics|signal-card' src/components/Hero.astro
```

Expected: both commands return matches, proving the project section, duplicated research eyebrow, and hero signal cards still exist before the change.

- [ ] **Step 2: Replace the homepage with the reduced composition**

Set `src/pages/index.astro` to:

```astro
---
import { getCollection } from "astro:content";
import CtaBlock from "../components/CtaBlock.astro";
import Hero from "../components/Hero.astro";
import ResearchCard from "../components/ResearchCard.astro";
import SectionHeader from "../components/SectionHeader.astro";
import site from "../data/site.json";
import BaseLayout from "../layouts/BaseLayout.astro";
import { byOrder } from "../lib/content";

const research = byOrder(await getCollection("research")).slice(0, 3);
---
<BaseLayout title="Home" description={site.description}>
  <Hero />

  <section class="section">
    <div class="container">
      <SectionHeader title="Research areas" />
      <div class="card-grid three-up">
        {research.map((entry) => (
          <ResearchCard title={entry.data.title} summary={entry.data.summary} tags={entry.data.tags} compact />
        ))}
      </div>
    </div>
  </section>

  <CtaBlock
    title="Open to students, collaborators, and research partners."
    copy="Reach out for student opportunities, research collaboration, or project discussion."
    primaryHref={`mailto:${site.email}`}
    primaryLabel="Contact the Lab"
  />
</BaseLayout>
```

- [ ] **Step 3: Remove the hero signal cards**

Set the rendered section in `src/components/Hero.astro` to:

```astro
<section class="hero">
  <div class="container hero-grid">
    <div>
      <p class="eyebrow">AI Systems + Network Innovation</p>
      <h1>{site.tagline}</h1>
      <p class="hero-copy">Research on intelligent infrastructure, resilient networks, and deployable AI systems.</p>
      <div class="hero-actions">
        <a class="button primary" href={site.ctaPrimary.href}>{site.ctaPrimary.label}</a>
        <a class="button secondary" href={site.ctaSecondary.href}>{site.ctaSecondary.label}</a>
      </div>
    </div>
    <div class="hero-panel">
      <div class="hero-logo-card">
        <img src="/logo.jpeg" alt="AINI Lab logo" class="hero-logo" />
      </div>
    </div>
  </div>
</section>
```

Keep the existing frontmatter import of `site.json`. Do not remove the unused `.hero-metrics` or `.signal-card` CSS in this task because those selectors are shared in grouped rules and stylesheet cleanup is outside the approved content-reduction scope.

- [ ] **Step 4: Verify removed content is absent from homepage sources**

Run:

```bash
rg -n 'ProjectCard|selectFeaturedProjects|Featured Projects|eyebrow="Research Areas"' src/pages/index.astro
rg -n 'hero-metrics|signal-card' src/components/Hero.astro
```

Expected: both commands exit with status 1 and print no matches.

- [ ] **Step 5: Run automated checks**

Run:

```bash
npm test
npm run check
npm run build
```

Expected: Vitest reports all tests passing, Astro check reports zero errors, and the production build generates all static routes including `/index.html`.

- [ ] **Step 6: Verify the homepage visually**

Run `npm run dev`, then inspect `/` at approximately 1440px and 390px viewport widths.

Expected at both widths:

- Hero displays the eyebrow, tagline, short description, two actions, and logo with no signal cards.
- Research section displays one heading and exactly three compact cards with title and tags.
- Featured Projects is absent.
- Contact block remains visible and no horizontal overflow or broken spacing appears.

- [ ] **Step 7: Commit the implementation**

```bash
git add src/pages/index.astro src/components/Hero.astro
git commit -m "refactor: simplify homepage content"
```
