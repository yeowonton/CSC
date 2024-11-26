import { z, defineCollection } from 'astro:content'
import type { SchemaContext } from 'astro:content'

const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    image: image(),
    description: z.string(),
  });


const galleryCollection = defineCollection({
  schema: (image: SchemaContext) => z.object({
    title: z.string(),
    image: imageSchema(image),
  }),
});

const boardCollection = defineCollection({
  type: 'data',
  schema: (image: SchemaContext) => z.object({
    name: z.string(),
    position: z.string(),
    picture: imageSchema(image)
  })
});

const eventCollection = defineCollection({
  type: 'data',
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
