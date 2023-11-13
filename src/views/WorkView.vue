<template>
  <div
    class="w-full h-auto mt-[55px] mb-[25px] px-[20.5%] lg:px-[10%] md:px-[5%]"
  >
    <div class="intro mt-[30px] mb-[60px] md:mb-[30px] h-auto">
      <h1
        class="text-block-for-intro text-[28px] leading-[55px] md:leading-[40px] sm:leading-[30px] md:text-[20px] w-full"
      >
        Hello! I am a
        <span class="text-[#416bd8] font-bold">Front End Developer</span> who
        enjoys crafting experiences that empower users. I am now working at
        <a href="https://www.intechdevkh.com/" target="_blank">
          <span class="text-[#416bd8] font-bold cursor-pointer">IntechDev</span>
        </a>
        front end team
      </h1>
      <h3
        class="text-block-for-intro02 mt-[20px] md:mt-[10px] text-[16px] md:text-[14px]"
      >
        Bachelor's degree in Computer Science at
        <a href="https://www.aeu.edu.kh/" target="_blank">
          <span class="text-[#416bd8] font-bold cursor-pointer">
            Asia Euro University
          </span>
        </a>
      </h3>
      <h3
        class="text-block-for-intro02 mt-[20px] md:mt-[10px] text-[16px] md:text-[14px]"
      >
        I previously internship at
        <a href="https://poscardigital.com/" target="_blank">
          <span class="text-[#416bd8] font-bold cursor-pointer">
            POSCAR Digital Co., LTD.
          </span>
        </a>
      </h3>
      <div class="mt-[50px] md:mt-[30px] flex items-center gap-4">
        <a href="mailto:lyden.chai@gmail.com" target="_blank">
          <img
            src="https://uploads-ssl.webflow.com/611e891b6b88d2aae555b967/6222197c3b4bae024f0b223e_01%20mail%202x.png"
            alt=""
            width="25"
          />
        </a>
        <a href="https://www.instagram.com/denchai_sewatanont" target="_blank">
          <img
            src="https://www.svgrepo.com/show/521711/instagram.svg"
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
        <a href="https://github.com/lydenchai" target="_blank">
          <img
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt=""
            width="25"
          />
        </a>
      </div>
    </div>
    <div class="projects">
      <div
        class="w-full h-auto mt-[50px] md:mt-[30px]"
        v-for="project in projects"
        :key="project"
      >
        <Project :project="project" />
      </div>
      <div class="w-full h-auto mt-[50px]">
        <h1 class="other-project-title mb-[25px]">Other Projects</h1>
        <div
          class="w-full h-auto md:mt-[15px] mb-[50px]"
          v-for="project in otherProjects"
          :key="project"
        >
          <Project :project="project" />
        </div>
      </div>
    </div>
    <div class="footer w-full h-auto">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/Footer.vue";
const projects: any[] = [
  {
    name: "Rental Management System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fugit eaque.",
    details: {
      title: "title",
      description: "description",
    },
    image: "",
  },
  {
    name: "KAS-PORTAL",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fugit eaque.",
    details: {
      title: "title",
      description: "description",
    },
    image: "",
  },
  {
    name: "Travona Hotel Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fugit eaque.",
    details: {
      title: "title",
      description: "description",
    },
    image: "",
  },
];
const otherProjects: any[] = [
  {
    name: "Travona mini app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fugit eaque.",
    details: {
      title: "title",
      description: "description",
    },
    image: "",
  },
];
</script>

<style lang="scss" scoped>
.text-block-for-intro {
  max-width: 100%;
  font-family: "Lato", sans-serif;
  color: #676767;
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
