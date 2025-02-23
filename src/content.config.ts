import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const news = defineCollection({
    loader: glob({ pattern: '**/*.(md|mdx)', base: 'src/data/news'}),
    schema: z.object({
        date: z.date(),
        title: z.string(),
    }),
});

export const collections = { news };