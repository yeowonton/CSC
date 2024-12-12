import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders';
import type { SchemaContext } from 'astro:content'

const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    image: image(),
    description: z.string(),
  });


const galleryCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.yaml', base: "./src/content/gallery" }),
    schema: (image: SchemaContext) => z.object({
    title: z.string(),
    picture: imageSchema(image),
  }),
});

const boardCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.yaml', base: "./src/content/board" }),
  schema: (image: SchemaContext) => z.object({
    name: z.string(),
    position: z.string(),
    picture: imageSchema(image)
  })
});

const eventCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.yaml', base: "./src/content/events" }),
    schema: z.object({
    name: z.string(),
    date: z.date(),
    description: z.string()
  })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'event': eventCollection,
  'board': boardCollection,
  'gallery': galleryCollection
};
