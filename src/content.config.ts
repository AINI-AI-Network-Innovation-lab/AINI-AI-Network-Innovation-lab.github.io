import { defineCollection, z } from "astro:content";

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().optional(),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.string().url()
      })
    ).optional()
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().optional(),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.string().url()
      })
    ).optional()
  })
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().optional(),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.string().url()
      })
    ).optional()
  })
});

export const collections = { research, projects, news };

