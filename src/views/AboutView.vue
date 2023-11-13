<template>
  <div class="w-full text-[#444444]">
    <div class="w-full h-[100vh] md:h-auto flex justify-between items-center">
      <div
        class="w-full flex md:mt-[55px] sm:mt-[80px] md:mb-[50px] px-[20.5%] lg:px-[10%] md:px-[5%]"
      >
        <div class="w-[40%]">
          <img src="../assets/imgs/Photos.jpg" alt="Avatar" class="w-[80%]" />
        </div>
        <div class="w-[60%] sm:w-[100%]">
          <p
            class="letter-spacing-[0.3px] tracking-wide md:text-[16px] sm:text-[14px]"
          >
            Hi, I'm <span class="text-[#416bd8] font-bold">Lyden CHAI</span>,
            and I'm studying at
            <a href="https://www.aeu.edu.kh/" target="_blank">
              <span class="text-[#416bd8] font-bold cursor-pointer">
                Asia Euro University
              </span>
            </a>
            with a Bachelor's degree in Computer Science. My interests are in
            Front End Engineering, and I love to create beautiful and performant
            products with delightful user experiences.
          </p>
          <p class="mt-[30px] tracking-wide md:text-[16px] sm:text-[14px]">
            I'm interested in the Front End Engineer role at
            <a href="https://www.intechdevkh.com/" target="_blank">
              <span class="text-[#416bd8] font-bold cursor-pointer">
                IntechDev
              </span>
            </a>
            because I like working in this ridesharing space and creating
            products to improve the lives of users.
          </p>
          <p class="mt-[30px] tracking-wide md:text-[16px] sm:text-[14px]">
            When I am not developing projects, I love gardening, reading,
            traveling, photography, and listening to music.
          </p>
          <p class="mt-[30px] text-[25px] gap-4">🌱 📚 🌎 📸 🎧</p>
        </div>
      </div>
    </div>
    <div
      class="px-[20.5%] lg:px-[10%] md:px-[5%] w-full h-auto bg-[#dadada] py-[60px]"
    >
      <div class="experience-box">
        <h2
          class="heading-3 text-[22px] mb-[10px] md:mb-[5px] md:text-[18px] font-bold"
        >
          education
        </h2>
        <div class="experience-items bar h-[2px] sm:h-[1px]"></div>
        <div class="experience-items flex sm:flex-col mt-[20px] md:mt-[10px]">
          <div class="experience-text sm:text-[15px] font-medium">
            Bachelor's Degree in Computer Science
          </div>
          <a href="https://www.aeu.edu.kh/">
            <div class="experience-text smaller text-[15px] sm:text-[12px]">
              Asia Euro University
            </div>
          </a>
        </div>
        <div class="experience-text smaller text-[15px] sm:text-[12px]">
          October 2023 - Present
        </div>
        <div class="experience-items flex sm:flex-col mt-[20px] md:mt-[10px]">
          <div class="experience-text sm:text-[15px] font-medium">
            Associate's Degree in Information Technology
          </div>
          <a
            href="https://www.passerellesnumeriques.org/en/our-actions/cambodia/"
          >
            <div class="experience-text smaller text-[15px] sm:text-[12px]">
              Passerelles Numeriques Cambodia
            </div>
          </a>
        </div>
        <div class="experience-text smaller text-[15px] sm:text-[12px]">
          October 2019 - October 2021
        </div>
      </div>
      <div class="experience-box mt-[60px] md:mt-[50px] sm:mt-[30px]">
        <h2
          class="heading-3 text-[22px] mb-[10px] md:mb-[5px] md:text-[18px] font-bold"
        >
          experience
        </h2>
        <div class="experience-items bar h-[2px] sm:h-[1px]"></div>
        <div class="experience-items flex sm:flex-col mt-[20px] md:mt-[10px]">
          <div class="experience-text sm:text-[15px] font-medium">
            Front End Developer
          </div>
          <a href="https://www.intechdevkh.com/">
            <div class="experience-text smaller text-[15px] sm:text-[12px]">
              IntechDev Co., LTD.
            </div>
          </a>
        </div>
        <div class="experience-text smaller text-[15px] sm:text-[12px]">
          June 2022 - Present
        </div>
        <div class="experience-items flex sm:flex-col mt-[20px]">
          <div class="experience-text sm:text-[15px] font-medium">
            Web Developer Intern
          </div>
          <a href="https://poscardigital.com/">
            <div class="experience-text smaller text-[15px] sm:text-[12px]">
              POSCAR Digital Co., LTD.
            </div>
          </a>
        </div>
        <div class="experience-text smaller text-[15px] sm:text-[12px]">
          January 2022 - May 2022
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
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
