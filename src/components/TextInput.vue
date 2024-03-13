<script setup lang="ts">
const model = defineModel();
defineProps(['title']);
</script>

<template>
  <div>
    <label><slot /></label>
    <input type="text" v-model="model" />
  </div>
</template>
