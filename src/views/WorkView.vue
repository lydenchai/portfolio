<template>
  <div class="w-full h-auto mb-[25px]">
    <div class="intro mt-[30px] mb-[60px] h-auto">
      <h1 class="text-block-for-intro text-[28px] md:text-[20px] h-auto w-full">
        Hello! I am a
        <span class="text-[#416bd8] font-bold">Front End Developer</span> who
        enjoys crafting experiences that empower users. I am now working at
        <a href="https://www.intechdevkh.com/" target="_blank">
          <span class="text-[#416bd8] font-bold cursor-pointer">IntechDev</span>
        </a>
        front end team
      </h1>
      <h3 class="text-block-for-intro02 mt-3 text-[16px] md:text-[14px]">
        Bachelor's degree in Computer Science at
        <a href="https://www.aeu.edu.kh/" target="_blank">
          <span class="text-[#416bd8] font-bold cursor-pointer">
            Asia Euro University
          </span>
        </a>
      </h3>
      <h3 class="text-block-for-intro02 mt-3 text-[16px] md:text-[14px]">
        I previously internship at
        <a href="https://poscardigital.com/" target="_blank">
          <span class="text-[#416bd8] font-bold cursor-pointer">
            POSCAR Digital Co., LTD.
          </span>
        </a>
      </h3>
      <div class="mt-[50px] flex items-center gap-4">
        <a href="mailto:lyden.chai@gmail.com" target="_blank">
          <img
            src="https://uploads-ssl.webflow.com/611e891b6b88d2aae555b967/6222197c3b4bae024f0b223e_01%20mail%202x.png"
            alt=""
            width="25"
          />
        </a>
        <a href="https://www.linkedin.com/in/lyden-chai/" target="_blank">
          <img
            src="https://uploads-ssl.webflow.com/611e891b6b88d2aae555b967/6222197c09f2ec23ff1fe525_akar-icons_linkedinv2-fill%202x.png"
            alt=""
            width="25"
          />
        </a>
      </div>
    </div>
    <div class="projects">
      <div class="w-full h-auto mt-[50px]">
        <Project />
      </div>
      <div class="w-full h-auto mt-[50px]">
        <Project />
      </div>
      <!-- other projects -->
      <div class="w-full h-auto mt-[50px]">
        <h1 class="other-project-title">Other Projects</h1>
        <div class="w-full h-auto relative mt-[25px]">
          <Project />
        </div>
      </div>
    </div>
    <div class="footer w-full h-auto">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Project from "../components/Project.vue";
import Footer from "../components/Footer.vue";
</script>

<style lang="scss" scoped>
.text-block-for-intro {
  max-width: 100%;
  margin-bottom: 25px;
  font-family: "Lato", sans-serif;
  color: #676767;
  line-height: 55px;
  font-weight: 400;
  letter-spacing: 0.3px;
}

.text-block-for-intro02 {
  margin-bottom: 0vh;
  line-height: 20px;
}

.other-project-title {
  font-family: Lato, sans-serif;
  color: #676767;
  font-size: 32px;
  line-height: 55px;
  font-weight: 700;
  letter-spacing: 0.3px;
}
</style>
