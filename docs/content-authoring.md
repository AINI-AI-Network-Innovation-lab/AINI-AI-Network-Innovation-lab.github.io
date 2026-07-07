# Content Authoring Guide

This website is designed so the lab can update most content without touching layout code.

The current repository ships with fictional sample content so the site renders like a complete lab website from day one. Replace these entries with real lab data when available.

## Content Structure

- `src/content/research/*.md`
  - One Markdown file per research area
  - Required frontmatter: `title`, `summary`, `order`
  - Optional frontmatter: `tags`, `featured`, `links`
- `src/content/projects/*.md`
  - One Markdown file per featured project
  - Required frontmatter: `title`, `summary`, `order`
  - Optional frontmatter: `tags`, `featured`, `links`
- `src/content/news/*.md`
  - One Markdown file per update
  - Required frontmatter: `title`, `summary`, `date`
  - Optional frontmatter: `tags`, `featured`, `links`

## Structured Data

- `src/data/people.json`
  - Each entry follows the `Person` shape:
  - `name`, `role`, `group`, `order`
  - Optional: `affiliation`, `bio`, `image`, `links`
- `src/data/publications.json`
  - Each entry follows the `Publication` shape:
  - `title`, `authors`, `venue`, `year`
  - Optional: `topicTags`, `paperUrl`, `codeUrl`, `featured`
- `src/data/resources.json`
  - Each entry powers the `Resources` page
  - Suggested fields: `title`, `category`, `summary`, `href`, `order`
  - Optional: `secondaryHref`, `secondaryLabel`
- `src/data/site.json`
  - Global lab identity and CTA settings:
  - `labName`, `tagline`, `description`, `email`, `githubUrl`, `ctaPrimary`, `ctaSecondary`, `socialLinks`

## Common Tasks

### Add a research area

1. Create a new file in `src/content/research/`.
2. Copy the frontmatter pattern from an existing file.
3. Set `order` to control display order.

### Add a project or news post

1. Create a new Markdown file in the correct collection folder.
2. Fill in required frontmatter.
3. Use `featured: true` if it should be eligible for compact homepage display.

### Update people, publications, or resources

1. Open `src/data/people.json`, `src/data/publications.json`, or `src/data/resources.json`.
2. Add or edit an object in the array.
3. Keep JSON valid and preserve required fields.

### Update global site copy

1. Edit `src/data/site.json`.
2. Update the tagline, contact email, CTA labels, or organization links.

## Build and Deploy Locally

```bash
npm install
npm run dev
```

Before pushing changes:

```bash
npm run test
npm run check
npm run build
```
