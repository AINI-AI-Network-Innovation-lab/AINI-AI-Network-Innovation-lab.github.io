# Homepage Content Reduction Design

## Goal

Reduce text density on the AINI Lab homepage so visitors can understand the lab's focus quickly and navigate to detailed pages when needed.

## Scope

- Keep the homepage focused on the lab introduction, three research areas, and contact call to action.
- Remove the Featured Projects section from the homepage only. Project content and project pages remain unchanged.
- Simplify the homepage hero by removing the three signal cards beside the logo.
- Remove the duplicated "Research Areas" eyebrow above the research section heading.
- Keep each research card compact, displaying only its title and tags.
- Keep the final contact block with its short description and primary contact button.

## Component Changes

### Homepage

`src/pages/index.astro` will stop loading featured projects, remove the related imports and section markup, and render the research heading without an eyebrow.

### Hero

`src/components/Hero.astro` will retain the eyebrow, main tagline, one-sentence description, primary and secondary actions, and logo. The signal-card group will be removed.

### Styling

Hero layout styles will be adjusted only if the removed signal-card group leaves spacing or alignment issues. Existing responsive behavior and the site's current visual language will be preserved.

## Validation

- Run Astro's type/content checks.
- Run the production build.
- Verify the homepage renders the Hero, Research Areas, and contact block without the Featured Projects section or hero signal cards.
- Confirm the layout remains usable at desktop and mobile widths.

## Non-Goals

- Rewriting research or project source content.
- Changing navigation or detailed pages.
- Redesigning the overall visual identity.
