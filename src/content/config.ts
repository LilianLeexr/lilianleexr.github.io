import { defineCollection, z } from "astro:content";

export const categoryOptions = ["Blog", "TechNotes", "Life"] as const;

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    updated: z.date().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    period: z.string(),
    role: z.string(),
    affiliation: z.string(),
    tags: z.array(z.string()),
    key_tech: z.array(z.string()),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
        })
      )
      .optional(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    category: z.enum(categoryOptions),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { pages, projects, posts };
