<template>
  <div
    class="mb-[25px] mt-[55px] h-auto w-full px-[20.5%] lg:px-[10%] md:px-[5%] sm:mt-[80px]"
  >
    <div class="intro mb-[60px] mt-[30px] h-auto md:mb-[30px]">
      <h1
        class="text-block-for-intro w-full text-[24px] leading-[55px] md:text-[20px] md:leading-[40px] sm:text-[18px] sm:leading-[30px]"
      >
        Hello! I'm a
        <span class="font-bold text-[#416bd8]">Front End Developer</span> who
        takes pleasure in creating user-friendly experiences. I currently work
        with the front-end team at
        <a href="https://www.intechdevkh.com/" target="_blank">
          <span class="cursor-pointer font-bold text-[#416bd8]">
            IntechDev Co., LTD.
          </span>
        </a>
      </h1>
      <h3
        class="text-block-for-intro02 mt-[20px] md:mt-[10px] md:text-[16px] sm:text-[14px]"
      >
        I hold a Bachelor's degree in Computer Science from
        <a href="https://www.aeu.edu.kh/" target="_blank">
          <span class="cursor-pointer font-bold text-[#416bd8]">
            Asia Euro University.
          </span>
        </a>
      </h3>
      <h3
        class="text-block-for-intro02 mt-[20px] md:mt-[10px] md:text-[16px] sm:text-[14px]"
      >
        Prior to this, I had an internship at
        <a href="https://poscardigital.com/" target="_blank">
          <span class="cursor-pointer font-bold text-[#416bd8]">
            POSCAR Digital Co., LTD.
          </span>
        </a>
      </h3>
      <div class="mt-[50px] flex items-center gap-4 md:mt-[30px]">
        <a href="mailto:lyden.chai@gmail.com" target="_blank">
          <img
            src="https://uploads-ssl.webflow.com/611e891b6b88d2aae555b967/6222197c3b4bae024f0b223e_01%20mail%202x.png"
            alt=""
            class="w-[25px] md:w-[20px]"
          />
        </a>
        <a href="https://www.instagram.com/denchai_sewatanont" target="_blank">
          <img
            src="https://www.svgrepo.com/show/521711/instagram.svg"
            alt=""
            class="w-[25px] md:w-[20px]"
          />
        </a>
        <a href="https://www.linkedin.com/in/lyden-chai/" target="_blank">
          <img
            src="https://uploads-ssl.webflow.com/611e891b6b88d2aae555b967/6222197c09f2ec23ff1fe525_akar-icons_linkedinv2-fill%202x.png"
            alt=""
            class="w-[25px] md:w-[20px]"
          />
        </a>
        <a href="https://github.com/lydenchai" target="_blank">
          <img
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt=""
            class="w-[25px] md:w-[20px]"
          />
        </a>
      </div>
    </div>
    <div class="projects">
      <div
        class="mt-[50px] h-auto w-full md:mt-[30px]"
        v-for="project in projects"
        :key="project"
      >
        <Project :project="project" />
      </div>
      <div class="mt-[50px] h-auto w-full md:mt-[30px]">
        <h1
          class="other-project-title mb-[25px] text-[24px] md:mb-[15px] md:text-[20px] sm:text-[18px]"
        >
          Other Projects
        </h1>
        <div
          class="mb-[50px] h-auto w-full md:mt-[15px]"
          v-for="project in otherProjects"
          :key="project"
        >
          <Project :project="project" />
        </div>
      </div>
    </div>
    <div class="footer h-auto w-full">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Project from "../components/Project.vue";
import Footer from "../components/Footer.vue";

const projects: any[] = [
  {
    name: "Rental Management System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fugit eaque.",
    details: {
      title:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fugit eaque.",
      description: "description",
    },
    image: "https://bontub.com/bg-hero.png",
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
const otherProjects: any[] = [
  {
    name: "Sabay News Clone",
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
  line-height: 55px;
  font-weight: 700;
  letter-spacing: 0.3px;
}
</style>
