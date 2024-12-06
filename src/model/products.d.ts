import { AxiosResponse } from "axios";
import { productsSchema } from "./serializers/products";
export declare function fetchCategoryProducts({ categoryId, }: {
    categoryId: string;
}): Promise<AxiosResponse<productsSchema>>;
