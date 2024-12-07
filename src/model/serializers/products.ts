import { z } from 'zod';

export const productRatingSchema = z.object({
  name: z.string(),
  review: z.string()
});

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  subtitle: z.string(),
  image: z.string(),
  rating: z.number(),
  reviews: z.array(productRatingSchema),
  price: z.string()
});

export const productsSchema = z.object({
  products: z.array(productSchema)
});

export type productSchema = Zod.infer<typeof productSchema>;
export type productsSchema = Zod.infer<typeof productsSchema>;
