<script setup lang="ts">
import { useApi } from '@/stores/apiCall';

const api = useApi();

api.fetchApi();
</script>

<template>
  <main>
    <h1>Fonts List</h1>
    <ul>
      <li v-for="font in api.fontsList.slice(0, 10)" :key="font.family">
        <h2>
          {{ font.family }}
        </h2>
        <link rel="stylesheet" :href="`https://fonts.googleapis.com/css?family=${font.family}`" />
        <h1 :style="{ fontFamily: font.family, fontSize: '24px' }" class="sample-text">
          The quick brown fox jumps over the lazy dog.
        </h1>
      </li>
    </ul>
  </main>
</template>

<style scoped></style>
