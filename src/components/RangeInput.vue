<script setup land="ts">
const model = defineModel();
</script>

<template>
  <span class="font-sans font-bold mr-4">{{ model }}px</span>
  <input type="range" min="8" max="300" v-model="model" class="cursor-pointer accent-blue-600" />
</template>
