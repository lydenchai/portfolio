<template>
  <div class="experience-box">
    <h2
      class="heading-3 mb-[10px] text-[22px] font-bold md:mb-[5px] md:text-[16px]"
    >
      education
    </h2>
    <div class="experience-items bar h-[2px] sm:h-[1px]"></div>
    <div class="experience-items mt-[20px] flex md:mt-[10px] sm:flex-col">
      <div class="experience-text font-medium md:text-[14px]">
        Bachelor's Degree in Computer Science
      </div>
      <a href="https://www.aeu.edu.kh/">
        <div class="experience-text smaller text-[14px] sm:text-[12px]">
          Asia Euro University
        </div>
      </a>
    </div>
    <div class="experience-text smaller text-[14px] sm:text-[12px]">
      October 2023 - Present
    </div>
    <div class="experience-items mt-[20px] flex md:mt-[10px] sm:flex-col">
      <div class="experience-text font-medium md:text-[14px]">
        Associate's Degree in Information Technology
      </div>
      <a href="https://www.passerellesnumeriques.org/en/our-actions/cambodia/">
        <div class="experience-text smaller text-[14px] sm:text-[12px]">
          Passerelles Numeriques Cambodia
        </div>
      </a>
    </div>
    <div class="experience-text smaller text-[14px] sm:text-[12px]">
      October 2019 - October 2021
    </div>
  </div>
  <div class="experience-box mt-[60px] md:mt-[50px] sm:mt-[30px]">
    <h2
      class="heading-3 mb-[10px] text-[22px] font-bold md:mb-[5px] md:text-[16px]"
    >
      experience
    </h2>
    <div class="experience-items bar h-[2px] sm:h-[1px]"></div>
    <div class="experience-items mt-[20px] flex md:mt-[10px] sm:flex-col">
      <div class="experience-text font-medium md:text-[14px]">
        Junior Frontend Developer
      </div>
      <a href="https://optistech.com/">
        <div class="experience-text smaller text-[14px] sm:text-[12px]">
          Optistech Co., LTD.
        </div>
      </a>
    </div>
    <div class="experience-text smaller text-[14px] sm:text-[12px]">
      June 2022 - Present
    </div>
    <br />
    <br />
    <div class="pl-[14px] text-[14px] sm:text-[12px]">
      <ul class="list-disc">
        <li>
          Created multiple responsive websites for mobile and desktop devices
          using HTML and CSS, as well as third-party libraries such as Angular
          and Vue.js
        </li>
        <li>
          Implemented accessibility standards such as WCAG 20 to ensure maximum
          user experience across all devices
        </li>
      </ul>
    </div>
    <div class="experience-items mt-[20px] flex sm:flex-col">
      <div class="experience-text font-medium md:text-[14px]">
        Web Developer Internship
      </div>
      <a href="https://poscardigital.com/">
        <div class="experience-text smaller text-[14px] sm:text-[12px]">
          POSCAR Digital Co., LTD.
        </div>
      </a>
    </div>
    <div class="experience-text smaller text-[14px] sm:text-[12px]">
      January 2022 - May 2022
    </div>
    <br />
    <br />
    <div class="pl-[14px] text-[14px] sm:text-[12px]">
      <ul class="list-disc">
        <li>
          Developed prototypes and mockups for new features, enhancing UX and UI
          design
        </li>
        <li>
          Successfully integrated websites with powerful backend services such
          as databases, APIs, and other services
        </li>
        <li>
          Employed version control systems such as Git to collaborate on
          projects and manage code
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from "vue";

const _this = getCurrentInstance().proxy;

const props = defineProps({});

const emits = defineEmits();
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
