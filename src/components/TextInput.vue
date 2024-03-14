<script setup lang="ts">
const model = defineModel();
const props = defineProps(['placeholder']);
</script>

<template>
  <label class="font-semibold"><slot /></label>
  <input
    type="text"
    v-model="model"
    :placeholder="props.placeholder"
    class="grow py-4 border-none rounded-full bg-slate-100 p-4"
  />
</template>
