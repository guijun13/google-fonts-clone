<script setup lang="ts">
import { useApi } from '@/stores/apiCall';
import { RouterLink } from 'vue-router';

const api = useApi();
</script>

<template>
  <div v-if="api.favoriteList.length !== 0">
    <h1 class="font-sans text-[32px]">{{ api.favoriteList.length }} font family selected</h1>
    <div
      v-for="favorite in api.favoriteList"
      :key="favorite.family"
      class="flex items-center justify-between my-4 p-4 gap-x-4 border border-gray-200 rounded-lg transition hover:bg-gray-200 duration-400"
    >
      <p class="font-sans">
        {{ favorite.family }}
      </p>
      <button
        @click="api.removeFavorite(favorite)"
        class="p-4 text-blue-500 border border-solid border-blue-400 rounded-full transtion hover:bg-blue-100 duration-300"
      >
        <p class="font-sans">Remove</p>
      </button>
    </div>
  </div>
  <div v-else class="flex flex-col items-center">
    <div class="my-10 font-sans text-[62px] text-gray-500">\(o_o)/</div>
    <p class="font-sans text-center my-8 text-[24px]">
      You don't have any fonts yet. Choose a font to get started.
    </p>
    <RouterLink
      class="p-4 text-blue-500 border border-solid border-blue-400 rounded-full transtion hover:bg-blue-100 duration-300"
      to="/"
    >
      <p class="font-sans font-semibold">Browse fonts</p></RouterLink
    >
  </div>
</template>
