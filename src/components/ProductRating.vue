<script setup lang="ts">
import { computed } from 'vue';
import StarIcon from './icons/StarIcon.vue';
const props = defineProps<{
  rating: number;
}>();

const ratingInteger = computed((): number => Math.round(props.rating));
</script>

<template>
  <div class="flex font-medium items-center gap-1.5">
    <StarIcon v-for="star in ratingInteger" :key="star" class="text-turquose w-7 h-7" />
    <p class="ml-2.5">
      {{ props.rating }}
    </p>
  </div>
</template>
