<script setup lang="ts">
import type { productSchema } from '@serializers';
import ProductItem from '../components/ProductItem.vue';

defineProps<{
  products: productSchema[];
  isLoading: boolean;
  isError: Error | null;
}>();

defineEmits<{
  'refetch-products': [];
}>();
</script>

<template>
  <div
    class="px-10 mx-auto max-w-full xl:max-w-[1240px] grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 py-8 sm:py-10"
  >
    <p v-if="isLoading">
      loading...
    </p>
    <p v-else-if="isError">
      Products loading failed
      <a @click="$emit('refetch-products')">Load again</a>
    </p>
    <div v-for="product in products" v-else :key="product.id">
      <ProductItem :product="product" :is-error="isError" :is-loading="isLoading" />
    </div>
  </div>
</template>
