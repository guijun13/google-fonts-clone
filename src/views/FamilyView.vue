<script setup>
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="flex flex-col items-center gap-y-4">
    <h1 class="text-[32px] text-center">{{ route.params.family }}</h1>
    <RouterLink
      class="w-fit text-center p-4 text-blue-500 border border-solid border-blue-400 rounded-full transtion hover:bg-blue-100 duration-300"
      to="/"
    >
      Browse other fonts
    </RouterLink>
  </div>
</template>
