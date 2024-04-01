import { z, defineCollection, reference } from 'astro:content';

export const collections = {
    posts: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            author: reference('authors'),
            date: z.date(),
            tags: z.array(z.string())
        })
    }),
    authors: defineCollection({
        type: 'data',
        schema: z.object({
            name: z.string(),
            fields: z.array(z.string())
        })
    })
}