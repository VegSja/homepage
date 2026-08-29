import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
  })
});

const presentations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    repoUrl: z.string().url(),
    slidesUrl: z.string().url().optional(),
    event: z.string().optional(),
    tags: z.array(z.string()).default([]),
  })
});

export const collections = {
  blog,
  presentations,
};
