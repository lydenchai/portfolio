<template>
  <div class="w-full text-[#444444]">
    <div class="flex h-[100vh] w-full items-center justify-between md:h-[55vh]">
      <div
        class="flex w-full px-[20.5%] lg:px-[10%] md:mb-[50px] md:mt-[55px] md:px-[5%] sm:mt-[80px] sm:flex-col"
      >
        <div class="h-auto w-[40%] sm:hidden">
          <img
            src="../assets/imgs/my-photo.jpeg"
            alt="Image not found"
            class="h-auto w-[80%] rounded-md md:w-[90%]"
          />
        </div>
        <div class="w-[60%] sm:w-[100%]">
          <p class="letter-spacing-[0.3px] tracking-wide md:text-[15px]">
            Hello there! My name is
            <span class="font-bold text-[#416bd8]">Lyden CHAI</span>, a
            passionate front-end developer with 1 year and 7 months of hands-on
            experience. Proficient in HTML5, CSS3, and JavaScript, I specialize
            in crafting visually appealing and user-friendly web applications.
            My skills extend to Angular and Vue.js, where I enjoy bringing
            design concepts to life in seamless interfaces.
          </p>
          <p class="mt-[30px] tracking-wide md:text-[16px] sm:text-[14px]">
            When I am not developing projects, I love gardening, reading,
            traveling, photography, and listening to music.
          </p>
          <p class="mt-[30px] gap-4 text-[25px]">🌱 📚 🌎 📸 🎧</p>
        </div>
      </div>
    </div>
    <div
      class="h-auto w-full bg-[#dadada] px-[20.5%] py-[60px] lg:px-[10%] md:px-[5%]"
    >
      <Experiences :project="project" />
      <TrainingCourse :project="project" />
      <Interest :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Experiences from "../components/Experience.vue";
import TrainingCourse from "../components/Training-Course.vue";
import Interest from "../components/Interest.vue";

const project = {};
</script>

<style lang="scss" scoped></style>
