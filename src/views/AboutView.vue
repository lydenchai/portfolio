<template>
  <div class="w-full text-[#444444]">
    <div
      class="h-[100vh] md:h-auto w-full md:mt-[55px] flex justify-between items-center sm:flex-col md:mb-[50px] px-[20.5%] lg:px-[10%] md:px-[5%]"
    >
      <div class="w-[40%] sm:hidden">
        <img src="../assets/imgs/Photos.jpg" alt="Avatar" class="w-[80%]" />
      </div>
      <div class="w-[60%] sm:w-[100%]">
        <p class="letter-spacing-[0.3px] tracking-wide">
          Hi, I'm <span class="text-[#416bd8] font-bold">Lyden CHAI</span>, and
          I'm studying at
          <a href="https://www.aeu.edu.kh/" target="_blank">
            <span class="text-[#416bd8] font-bold cursor-pointer">
              Asia Euro University
            </span>
          </a>
          with a degree in Computer Science. My interests are in Front End
          Engineering, and I love to create beautiful and performant products
          with delightful user experiences.
        </p>
        <p class="mt-[30px] tracking-wide">
          I'm interested in the Front End Engineer role at
          <a href="https://www.intechdevkh.com/" target="_blank">
            <span class="text-[#416bd8] font-bold cursor-pointer">
              IntechDev
            </span>
          </a>
          because I like working in this ridesharing space and creating products
          to improve the lives of users.
        </p>
        <p class="mt-[30px] tracking-wide">
          When I am not developing projects, I love gardening, reading,
          traveling, photography, and listening to music.
        </p>
        <p class="mt-[30px] text-[25px] gap-4">🌱 📚 🌎 📸 🎧</p>
      </div>
    </div>
    <div
      class="px-[20.5%] lg:px-[10%] md:px-[5%] w-full h-auto bg-[#dadada] py-[60px]"
    >
      <div class="experience-box">
        <h2 class="heading-3 text-[22px] md:text-[18px]">education</h2>
        <div class="experience-items bar"></div>
        <div class="experience-items flex sm:flex-col mt-[20px]">
          <div class="experience-text">
            Bachelor's Degree in Computer Science
          </div>
          <a href="">
            <div class="experience-text smaller text-[15px] sm:text-[14px]">
              Asia Euro University
            </div>
          </a>
        </div>
        <div class="experience-text smaller text-[15px] sm:text-[14px]">
          October 2023 - Present
        </div>
        <div class="experience-items flex sm:flex-col mt-3">
          <div class="experience-text">
            Associate's Degree in Information Technology
          </div>
          <a href="">
            <div class="experience-text smaller text-[15px] sm:text-[14px]">
              Passerelles Numeriques Cambodia
            </div>
          </a>
        </div>
        <div class="experience-text smaller text-[15px] sm:text-[10px]">
          October 2019 - October 2021
        </div>
      </div>
      <div class="experience-box mt-[60px] md:mt-[50px] sm:mt-[30px]">
        <h2 class="heading-3 text-[22px] md:text-[18px]">experience</h2>
        <div class="experience-items bar"></div>
        <div class="experience-items flex sm:flex-col mt-3">
          <div class="experience-text">Front End Developer</div>
          <a href="">
            <div class="experience-text smaller text-[15px] sm:text-[14px]">
              IntechDev Co., LTD.
            </div>
          </a>
        </div>
        <div class="experience-text smaller text-[15px] sm:text-[14px]">
          June 2022 - Present
        </div>
        <div class="experience-items flex sm:flex-col mt-[20px]">
          <div class="experience-text">Web Developer Intern</div>
          <a href="">
            <div class="experience-text smaller text-[15px] sm:text-[14px]">
              POSCAR Digital Co., LTD.
            </div>
          </a>
        </div>
        <div class="experience-text smaller text-[15px] sm:text-[14px]">
          January 2022 - May 2022
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.heading-3 {
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;
  color: #343434;
  line-height: 30px;
  font-weight: 600;
  text-transform: capitalize;
}

.experience-items.bar {
  width: 100%;
  height: 2px;
  background-color: #676767;
}

.experience-text {
  padding-right: 15px;
  font-family: "Lato semi", sans-serif;
  color: #343434;
  font-weight: 600;
  letter-spacing: 0.025em;
}

.smaller {
  display: inline-block;
  font-family: "Lato", sans-serif;
  color: #676767;
  font-weight: 400;
}
</style>
