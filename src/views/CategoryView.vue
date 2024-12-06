<script setup lang="ts">
import { onMounted, computed, watch } from "vue";
import { useCategoryStore } from "../stores/category";
import { useRoute } from "vue-router";
import type { productSchema } from "@serializers";
import LazyImage from "../components/LazyImage.vue";

const route = useRoute();

const store = useCategoryStore();

const products = computed((): productSchema[] => {
  return store.products;
});

const isLoading = computed(() => {
  return store.loading;
});

const isError = computed(() => {
  return store.error;
});

onMounted(() => {
  fetchProducts();
});

watch(
  (): string => String(route.params.id),
  (categoryId: string): void => {
    store.fetchProducts(String(categoryId));
  },
  { immediate: true }
);

const fetchProducts = (): void => {
  store.fetchProducts(String(route.params.id));
};
</script>

<template>
  <main>
    category {{ $route.params.id }}
    <p class="bg-yellow text-black">
      Buy multiples original canine or human products
    </p>
    Výpis produktů
    <p v-if="isLoading">loading...</p>
    <p v-else-if="isError">
      Products loading failed <a @click="fetchProducts">Load again</a>
    </p>
    <div v-else v-for="product in products" :key="product.id">
      {{ product.id }} {{ product.name }} {{ product.subtitle }}
      <LazyImage
        width="800"
        height="1133"
        class="h-[300px] w-auto"
        :alt="product.name"
        :srcset="`
        /images/products/${product.image} 400w,
        /images/products/${product.image} 800w
        /images/products/${product.image} 1600w`"
        :sizes="'(max-width: 150px) 200px, 400px, 800p'"
        :src="`/images/products/${product.image}`"
        fetchpriority="high"
      ></LazyImage>
    </div>
  </main>
</template>
