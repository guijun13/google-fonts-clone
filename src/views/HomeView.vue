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
  <header class="flex justify-around items-center gap-x-4">
    <img src="@/assets/google-fonts-logo.svg" alt="Google Fonts logo" />
    <TextInput v-model="searchFontInput" placeholder="Search fonts" />

    <RouterLink to="/selection" class="flex w-fit items-center">
      <v-icon name="md-shoppingbag-outlined" scale="1.5" />
      <p class="font-sans font-bold">({{ api.favoriteList.length }})</p>
    </RouterLink>
  </header>
  <main>
    <section class="my-8 sm:flex gap-y-8 sm:gap-x-4 sm:items-center">
      <TextInput v-model="previewTextInput" placeholder="Try your text">Preview:</TextInput>
      <div class="flex items-center">
        <RangeInput v-model="fontSizeInput" />
      </div>
    </section>
    <section
      ref="el"
      v-for="font in getFilteredFonts(searchFontInput)"
      :key="font.family"
      class="flex items-center justify-between my-4 p-4 gap-x-4 border border-gray-200 rounded-lg transition hover:bg-gray-200 duration-400"
    >
      <RouterLink :to="`/specimen/${font.family}`" class="flex flex-col gap-x-4 items-start">
        <link rel="stylesheet" :href="`https://fonts.googleapis.com/css?family=${font.family}`" />
        <div class="flex gap-x-4 font-sans my-4">
          <p class="">
            {{ font.family }}
          </p>
          <p class="text-gray-400">{{ font.variants?.length }} styles</p>
        </div>
        <p
          v-if="previewTextInput !== ''"
          :style="{ fontFamily: font.family, fontSize: `${fontSizeInput}px` }"
        >
          {{ previewTextInput }}
        </p>
        <p v-else :style="{ fontFamily: font.family, fontSize: `${fontSizeInput}px` }">
          The quick brown fox jumps over the lazy dog
        </p>
      </RouterLink>
      <button
        @click="api.addFavorite(font)"
        :disabled="api.favoriteList.includes(font)"
        class="p-4 text-blue-500 border border-blue-400 rounded-full disabled:cursor-not-allowed disabled:opacity-30 transtion hover:bg-blue-100 duration-300"
      >
        <p class="font-sans font-semibold">Favorite</p>
      </button>
    </section>
  </main>
</template>

<style scoped></style>
