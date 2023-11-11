<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div>
    <Navigation />
    <div class="px-[20.5%] lg:px-[6%] md:px-0">
      <RouterView class="mt-[55px]" />
    </div>
  </div>
</template>

<style scoped></style>
