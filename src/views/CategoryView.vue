<script setup lang="ts">
import type { productSchema } from '@serializers';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import { useCategoryStore } from '../stores/category';

const route = useRoute();

const store = useCategoryStore();

const products = computed((): productSchema[] => {
  return store.products;
});

const isLoading = computed((): boolean => {
  return store.loading;
});

const isError = computed((): Error | null => {
  return store.error;
});

onMounted((): void => {
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
    <p class="bg-yellow text-black py-2 md:py-3 lg:py-4 rounded-t-full rounded-br-full text-center font-semibold px-4">
      Buy multiples original canine or human products
    </p>
    <ProductList :products="products" :is-error="isError" :is-loading="isLoading" />
  </main>
</template>
