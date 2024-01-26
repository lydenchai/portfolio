<template>
  <div class="h-auto w-full">
    <div class="img-container relative">
      <img
        :src="project?.image"
        alt=""
        class="image h-[400px] w-full md:h-[300px]"
      />
      <div class="overlay">
        <div class="text">
          <h1 class="leading-tight">{{ project?.details?.title }}</h1>
          <p class="">{{ project?.details?.description }}</p>
        </div>
      </div>
    </div>
    <div class="mt-[15px] flex items-center md:flex-col md:items-start">
      <h2
        class="heading-project text-[20px] font-medium md:mb-2 md:text-[16px] sm:text-[14px]"
      >
        {{ project?.name }}
      </h2>
      <p class="tag-for-projects ml-[20px] mt-[3px] text-[14px] md:ml-0">
        {{ project?.description }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

interface Project {
  name: string;
  description: string;
  details?: Details;
  image: any;
}

interface Details {
  title: string;
  description: string;
}
</script>
<style lang="scss" scoped>
.heading-project {
  font-family: "Open Sans", sans-serif;
  line-height: 20px;
  font-weight: 700;
}

.tag-for-projects {
  font-family: Lato, sans-serif;
  color: #676767;
  line-height: 14px;
  letter-spacing: 0.5px;
}

.image {
  display: block;
  width: 100%;
  object-fit: contain;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #fff;
}

.img-container:hover .overlay {
  cursor: pointer;
  opacity: 0.9;
}

.text {
  color: black;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
