<script setup lang="ts">
import BrowseFontsButton from '@/components/BrowseFontsButton.vue';
import { useApi } from '@/stores/apiCall';

const api = useApi();
</script>

<template>
  <div v-if="api.favoriteList.length !== 0">
    <h1 class="text-[32px]">{{ api.favoriteList.length }} font family selected</h1>
    <div
      v-for="favorite in api.favoriteList"
      :key="favorite.family"
      class="flex items-center justify-between my-4 p-4 gap-x-4 border border-gray-200 rounded-lg transition hover:bg-gray-200 duration-400"
    >
      <RouterLink :to="`/specimen/${favorite.family}`">
        <p>
          {{ favorite.family }}
        </p>
      </RouterLink>
      <button
        @click="api.removeFavorite(favorite)"
        class="p-4 text-blue-500 border border-solid border-blue-400 rounded-full transtion hover:bg-blue-100 duration-300"
      >
        <p>Remove</p>
      </button>
    </div>
    <div class="flex justify-center">
      <BrowseFontsButton />
    </div>
  </div>
  <div v-else class="flex flex-col items-center">
    <div class="my-10 text-[62px] text-gray-500">\(o_o)/</div>
    <p class="text-center my-8 text-[24px]">
      You don't have any fonts yet. Choose a font to get started.
    </p>
    <BrowseFontsButton />
  </div>
</template>
