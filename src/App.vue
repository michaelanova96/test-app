<script setup lang="ts"></script>

<template>
  <header class="pt-10 pb-8 sm:pb-10 sm:pt-[3.625rem] px-10 text-center">
    <h1 class="text-3xl lg:text-4xl font-heading font-extrabold pb-6 sm:pb-10">
      The fab 4
    </h1>
    <nav class="rounded-lg lg:rounded-xl shadow-[inset_0px_0px_1px_1px_rgba(0,0,0,.2)] inline-flex">
      <RouterLink
        to="/category/for-dogs"
        active-class="font-bold bg-orange-gradient text-white"
        class="transition-all py-1.5 lg:py-2.5 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg lg:rounded-xl leading-5"
      >
        For Dogs
      </RouterLink>
      <RouterLink
        to="/category/for-humans"
        active-class="font-bold bg-orange-gradient text-white"
        class="transition-all py-1.5 lg:py-2.5 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg lg:rounded-xl leading-5"
      >
        For Humans
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
