import { defineStore } from "pinia";
import { fetchCategoryProducts } from "../model/products";
import { productSchema } from "@src/model/serializers/products";



interface CategoryState {
  products: productSchema[];
  loading: boolean;
  error: Error | null;
}

export const useCategoryStore = defineStore("category", {
  state: (): CategoryState => ({
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
    async fetchProducts(categoryId: string) {
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
      } catch (error) {
        if (error instanceof Error) {
          this.error = error;
          alert(error);
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
