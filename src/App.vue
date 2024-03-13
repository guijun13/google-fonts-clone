<script setup lang="ts"></script>

<template>
  <Suspense>
    <div class="p-4">
      <RouterView />
    </div>

    <template v-slot:fallback>Data is loading...</template>
  </Suspense>
</template>

<style scoped></style>
