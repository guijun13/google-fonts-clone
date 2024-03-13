<script setup lang="ts">
const model = defineModel();
const props = defineProps(['placeholder']);
</script>

<template>
  <input
    type="text"
    v-model="model"
    :placeholder="props.placeholder"
    class="mx-4 grow py-4 border-none rounded-full bg-slate-100 p-4 font-sans"
  />
</template>
