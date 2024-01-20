<template>
  <div class="experience-box mt-[60px] md:mt-[50px] sm:mt-[30px]">
    <h2
      class="heading-3 mb-[10px] text-[22px] font-bold md:mb-[5px] md:text-[16px]"
    >
      Interest
    </h2>
    <div class="experience-items bar h-[2px] sm:h-[1px]"></div>
    <div class="experience-items mt-[20px] flex sm:flex-col">
      <div class="experience-text w-fit text-[14px] font-medium">
        Self-learning:
      </div>
      <div class="experience-text smaller text-[14px] sm:text-[12px]">
        Research something new related to technology.
      </div>
    </div>
    <div class="experience-items mt-[20px] flex sm:flex-col">
      <div class="experience-text w-fit text-[14px] font-medium">
        Reading book:
      </div>
      <div class="experience-text smaller text-[14px] sm:text-[12px]">
        Technology, success, and motivation.
      </div>
    </div>
    <div class="experience-items mt-[20px] flex sm:flex-col">
      <div class="experience-text w-fit text-[14px] font-medium">Coding:</div>
      <div class="experience-text smaller text-[14px] sm:text-[12px]">
        creating static website
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  project: {
    type: Object as PropType<any>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.heading-3 {
  font-family: "Open Sans", sans-serif;
  color: #343434;
  line-height: 30px;
  text-transform: capitalize;
}

.experience-items.bar {
  width: 100%;
  background-color: #676767;
}

.experience-text {
  padding-right: 15px;
  font-family: "Lato semi", sans-serif;
  color: #343434;
  letter-spacing: 0.025em;
}

.smaller {
  display: inline-block;
  font-family: "Lato", sans-serif;
  color: #676767;
  font-weight: 400;
}
</style>
