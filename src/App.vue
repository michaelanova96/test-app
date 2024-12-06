<script setup lang="ts">
</script>

<template>
  <header>
    <h1 class="text-4xl">The fab 4</h1>
    <nav class="rounded border border-black/20">
      <RouterLink to="/category/for-dogs">For Dogs</RouterLink>
      <RouterLink to="/category/for-humans">For Humans</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
