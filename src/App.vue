<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div>
    <Navigation />
    <div class="">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
