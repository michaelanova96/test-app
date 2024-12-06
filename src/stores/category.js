import { defineStore } from "pinia";
import { fetchCategoryProducts } from "../model/products";
export const useCategoryStore = defineStore("category", {
    state: () => ({
        products: [],
        loading: false,
        error: null,
    }),
    getters: {
        getProducts(state) {
            return state.products;
        },
    },
    actions: {
        async fetchProducts(categoryId) {
            try {
                this.error = null;
                this.loading = true;
                const { data } = await fetchCategoryProducts({
                    categoryId,
                });
                console.log(data.products);
                this.products = data.products;
                console.log(data);
                console.log(this.products);
            }
            catch (error) {
                if (error instanceof Error) {
                    this.error = error;
                    alert(error);
                }
            }
            finally {
                this.loading = false;
            }
        },
    },
});
