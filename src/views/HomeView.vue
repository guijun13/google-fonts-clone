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
  <header class="flex justify-around items-center">
    <img src="@/assets/google-fonts-logo.svg" alt="Google Fonts logo" />
    <TextInput v-model="searchFontInput" placeholder="Search fonts" />

    <RouterLink to="/selection" class="flex w-fit items-center">
      <v-icon name="md-shoppingbag-outlined" scale="1.5" />
      <p class="font-sans font-bold">({{ api.favoriteList.length }})</p>
    </RouterLink>
  </header>
  <main>
    <h1>Fonts List</h1>
    <TextInput v-model="previewTextInput">Try your text</TextInput>
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
