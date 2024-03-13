<script setup lang="ts">
import { useApi } from '@/stores/apiCall';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import TextInput from '@/components/TextInput.vue';
import RangeInput from '@/components/RangeInput.vue';

const api = useApi();

const previewTextInput = ref<string>('');
const searchFontInput = ref<string>('');
const fontSizeInput = ref<number>(24);
const numberOfFonts = ref<number>(20);
const el = ref<HTMLElement | null>(null);

api.fetchApi(0, numberOfFonts.value);

const { getFilteredFonts } = storeToRefs(api);

function handleScroll(): void {
  if (
    window.innerHeight + document.documentElement.scrollTop + 2 >=
    document.documentElement.offsetHeight
  ) {
    setTimeout(() => {
      api.fetchApi(0, numberOfFonts.value);
      numberOfFonts.value += 5;
    }, 300);
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <main>
    <div>
      <h3>Favorite fonts</h3>
      <ul v-for="favorite in api.favoriteList" :key="favorite.family">
        <li>
          <RouterLink :to="`/specimen/${favorite.family}`">
            {{ favorite.family }}
          </RouterLink>
          <button @click="api.removeFavorite(favorite)">Remove</button>
        </li>
      </ul>
    </div>
    <h1>Fonts List</h1>
    <TextInput v-model="previewTextInput">Try your text</TextInput>
    <TextInput v-model="searchFontInput">Search a font</TextInput>
    <RangeInput v-model="fontSizeInput">Font size</RangeInput>
    <ul ref="el">
      <li v-for="font in getFilteredFonts(searchFontInput)" :key="font.family">
        <RouterLink :to="`/specimen/${font.family}`">
          {{ font.family }}
        </RouterLink>
        <link rel="stylesheet" :href="`https://fonts.googleapis.com/css?family=${font.family}`" />
        <p
          v-if="previewTextInput !== ''"
          :style="{ fontFamily: font.family, fontSize: `${fontSizeInput}px` }"
          class="sample-text"
        >
          {{ previewTextInput }}
        </p>
        <p v-else :style="{ fontFamily: font.family, fontSize: `${fontSizeInput}px` }">
          The quick brown fox jumps over the lazy dog
        </p>
        <button @click="api.addFavorite(font)" :disabled="api.favoriteList.includes(font)">
          Favorite
        </button>
      </li>
    </ul>
  </main>
</template>

<style scoped></style>
