import { defineCollection, z } from "astro:content";

const places = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    country: z.string().optional(),
    city: z.string(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = { places };
