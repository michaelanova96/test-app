import { z } from "zod";
export const productSchema = z.object({
    id: z.number(),
    name: z.string(),
    subtitle: z.string(),
    image: z.string(),
});
export const productsSchema = z.object({
    products: z.array(productSchema),
});
