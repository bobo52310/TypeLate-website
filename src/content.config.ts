import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    description: z.string(),
    descriptionZh: z.string().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
    updated: z.date().optional(),
  }),
});

export const collections = { docs };
