import { z, defineCollection } from 'astro:content';

export const collections = {
    posts: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            author: z.string(),
            date: z.date(),
            tags: z.array(z.string())
        })
    })
}