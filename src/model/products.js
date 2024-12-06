import axios from "axios";
import { zodParseAxiosResponse } from "../axios";
import { productsSchema } from "./serializers/products";
export async function fetchCategoryProducts({ categoryId, }) {
    return zodParseAxiosResponse(axios.get(`https://apimocha.com/test-frontend/category/${categoryId}`, {
        fetchOptions: { priority: "high" },
    }), productsSchema);
}
