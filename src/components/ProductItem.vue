<template>
  <div class="rounded-xl lg:rounded-3xl shadow-centered pb-4 h-full cursor-pointer group">
    <div class="flex flex-col h-full justify-between">
      <div>
        <div
          class="rounded-3xl w-full flex irems-center justify-center bg-gradient-to-br from-white to-yellow/5 shadow-centered"
        >
          <LazyImage
            width="800"
            height="1133"
            class="h-[300px] w-auto group-hover:scale-105 transition-all"
            :alt="product.name"
            :srcset="`
        /test-app/images/products/${product.image} 400w,
        /test-app/images/products/${product.image} 800w
        /test-app/images/products/${product.image} 1600w`"
            :sizes="'(max-width: 150px) 200px, 400px, 800p'"
            :src="`/test-app/images/products/${product.image}`"
            fetchpriority="high"
          />
        </div>

        <div class="p-4 space-y-4">
          <h2 class="text-xl lg:text-2xl font-bold leading-7">
            {{ product.name }}
          </h2>
          <p class="font-medium lg:text-lg leading-6">
            {{ product.subtitle }}
          </p>
          <ProductRating :rating="product.rating" />
          <p class="leading-6">
            <a
              href=""
              class="font-bold text-turquose underline hover:decoration-none"
            >{{ product.reviews.length }} reviews</a>
          </p>
          <p class="font-bold text-2xl leading-7">
            {{ product.price }}
          </p>
        </div>
      </div>
      <a
        href=""
        class="block font-bold py-3.5 px-4 text-center mx-4 leading-5 text-white bg-green rounded-lg lg:rounded-xl bg-green-gradient"
      >Add to Cart</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import LazyImage from '../components/LazyImage.vue';
import ProductRating from '../components/ProductRating.vue';
import { productSchema } from '../model/serializers/products';

defineProps<{
  product: productSchema;
  isLoading: boolean;
  isError: Error | null;
}>();
</script>
