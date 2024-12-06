import { productSchema } from "@src/model/serializers/products";
interface CategoryState {
    products: productSchema[];
    loading: boolean;
    error: Error | null;
}
export declare const useCategoryStore: import("pinia").StoreDefinition<"category", CategoryState, {
    getProducts(state: {
        products: {
            image: string;
            id: number;
            name: string;
            subtitle: string;
        }[];
        loading: boolean;
        error: Error | null;
    } & import("pinia").PiniaCustomStateProperties<CategoryState>): {
        image: string;
        id: number;
        name: string;
        subtitle: string;
    }[];
}, {
    fetchProducts(categoryId: string): Promise<void>;
}>;
export {};
