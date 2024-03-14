<script setup>
import BrowseFontsButton from '@/components/BrowseFontsButton.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="flex flex-col items-center gap-y-4">
    <h1 class="text-[32px] text-center">{{ route.params.family }}</h1>
    <BrowseFontsButton />
  </div>
</template>
