import { z } from "zod";
export declare const productSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    subtitle: z.ZodString;
    image: z.ZodString;
}, "strip", z.ZodTypeAny, {
    image: string;
    id: number;
    name: string;
    subtitle: string;
}, {
    image: string;
    id: number;
    name: string;
    subtitle: string;
}>;
export declare const productsSchema: z.ZodObject<{
    products: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        subtitle: z.ZodString;
        image: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        image: string;
        id: number;
        name: string;
        subtitle: string;
    }, {
        image: string;
        id: number;
        name: string;
        subtitle: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    products: {
        image: string;
        id: number;
        name: string;
        subtitle: string;
    }[];
}, {
    products: {
        image: string;
        id: number;
        name: string;
        subtitle: string;
    }[];
}>;
export type productSchema = Zod.infer<typeof productSchema>;
export type productsSchema = Zod.infer<typeof productsSchema>;
