<script setup lang="ts">
const model = defineModel();
defineProps(['title']);
</script>

<template>
  <div>
    <label for=""><slot /></label>
    <input type="text" v-model="model" />
  </div>
</template>
