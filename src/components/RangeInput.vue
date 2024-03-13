<script setup land="ts">
const model = defineModel();
</script>

<template>
  <div>
    <label><slot /></label>
    <input type="range" min="8" max="300" v-model="model" />
    <span>{{ model }}px</span>
  </div>
</template>
