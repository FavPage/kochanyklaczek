import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(155),
    category: z.enum(['zywienie', 'zdrowie', 'zachowanie', 'nowy-kot', 'akcesoria']),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Kochany Kłaczek'),
    image: z.string(),
    imageAlt: z.string(),
    mainQuery: z.string(),
    readingTime: z.number(),
    relatedPosts: z.array(z.string()).default([]),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
