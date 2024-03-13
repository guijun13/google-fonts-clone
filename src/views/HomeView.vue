<script setup lang="ts">
import { useApi } from '@/stores/apiCall';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const api = useApi();
const yourTextInput = ref('');
const searchFontInput = ref('');
const numberOfFonts = ref(20);
const el = ref<HTMLElement | null>(null);

api.fetchApi(0, numberOfFonts.value);

const { getFilteredFonts } = storeToRefs(api);

function handleScroll() {
  if (
    window.innerHeight + document.documentElement.scrollTop + 2 >=
    document.documentElement.offsetHeight
  ) {
    setTimeout(() => {
      api.fetchApi(0, numberOfFonts.value);
      numberOfFonts.value += 5;
    }, 1000);
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
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
    <ul ref="el">
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
        <p v-else :style="{ fontFamily: font.family, fontSize: '24px' }">
          The quick brown fox jumps over the lazy dog
        </p>
      </li>
    </ul>
  </main>
</template>

<style scoped></style>
