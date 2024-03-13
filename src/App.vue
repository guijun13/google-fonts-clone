<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <Suspense>
    <RouterView />

    <template v-slot:fallback>Data is loading...</template>
  </Suspense>
</template>

<style scoped></style>
