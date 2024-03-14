<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink
    class="p-4 text-blue-500 border border-solid border-blue-400 rounded-full transtion hover:bg-blue-100 duration-300"
    to="/"
  >
    <p class="font-semibold">Browse fonts</p>
  </RouterLink>
</template>
