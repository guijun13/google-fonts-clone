<script setup lang="ts">
import { useApi } from '@/stores/apiCall';
import { RouterLink } from 'vue-router';

const api = useApi();
</script>

<template>
  <div>
    <h1>Favorite fonts</h1>
    <ul v-for="favorite in api.favoriteList" :key="favorite.family">
      <li>
        <RouterLink :to="`/specimen/${favorite.family}`">
          {{ favorite.family }}
        </RouterLink>
        <button @click="api.removeFavorite(favorite)">Remove</button>
      </li>
    </ul>
  </div>
</template>
