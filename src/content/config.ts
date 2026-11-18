import { defineCollection, z } from 'astro:content';

// Novedades editables en Markdown: para publicar una nota nueva,
// agregá un archivo .md en src/content/novedades/ con este frontmatter.
const novedades = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string().default('Novedades'),
    excerpt: z.string(),
    cover: z.enum(['np1', 'np2', 'np3']).default('np1'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { novedades };
