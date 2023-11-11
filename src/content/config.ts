import { defineCollection, z, type SchemaContext } from "astro:content";

const projects = defineCollection({
  schema: ({ image }: SchemaContext) =>
    z.object({
      title: z.string(),
      description: z.string(),
      link: z.string(),
      tags: z.array(z.string()).default(["all"]),
      heroImage: image().refine((img) => img.width >= 1200, {
        message: "Cover image must be at least 1200 pixels wide!",
      }),
      heroAlt: z.string().optional().default("Hero Image"),
      featured: z.boolean().default(false),
    }),
});

export const collections = { projects };
