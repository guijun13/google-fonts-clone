<script setup lang="ts">
import { useApi } from '@/stores/apiCall';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const api = useApi();
const yourTextInput = ref('');
const searchFontInput = ref('');

api.fetchApi();
const { getFilteredFonts } = storeToRefs(api);
</script>

<template>
  <main>
    <h1>Fonts List</h1>
    <div>
      <label for="yourTextInput">Try your text</label>
      <input type="text" v-model="yourTextInput" />
    </div>
    <div>
      <label for="searchFontInput">Search a font</label>
      <input type="text" v-model="searchFontInput" />
    </div>
    <ul>
      <li v-for="font in getFilteredFonts(searchFontInput)" :key="font.family">
        <h2>
          {{ font.family }}
        </h2>
        <link rel="stylesheet" :href="`https://fonts.googleapis.com/css?family=${font.family}`" />
        <p
          v-if="yourTextInput !== ''"
          :style="{ fontFamily: font.family, fontSize: '24px' }"
          class="sample-text"
        >
          {{ yourTextInput }}
        </p>
        <p v-else style="font-size: 24px">The quick brown fox jumps over the lazy dog</p>
      </li>
    </ul>
  </main>
</template>

<style scoped></style>
