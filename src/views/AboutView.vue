<template>
  <div class="w-full text-[#444444]">
    <div class="flex h-[100vh] w-full items-center justify-between md:h-auto">
      <div
        class="flex w-full px-[20.5%] lg:px-[10%] md:mb-[50px] md:mt-[55px] md:px-[5%] sm:mt-[80px] sm:flex-col"
      >
        <div class="h-auto w-[40%] sm:hidden">
          <img
            src="../assets/imgs/Photo.jpg"
            alt="Image not found"
            class="h-auto w-[80%] md:w-[90%]"
          />
        </div>
        <div class="w-[60%] sm:w-[100%]">
          <p
            class="letter-spacing-[0.3px] tracking-wide md:text-[16px] sm:text-[14px]"
          >
            Hello there! My name is
            <span class="font-bold text-[#416bd8]">Lyden CHAI</span>, and I am
            currently pursuing a Bachelor's degree in Computer Science at
            <a href="https://www.aeu.edu.kh/" target="_blank">
              <span class="cursor-pointer font-bold text-[#416bd8]">
                Asia Euro University
              </span> </a
            >. I have a keen interest in Front End Engineering and thoroughly
            enjoy crafting visually appealing and high-performing products that
            provide an exceptional user experience.
          </p>
          <!-- <p class="mt-[30px] tracking-wide md:text-[16px] sm:text-[14px]">
            I am excited about the opportunity to work as a Front End Engineer
            at
            <a href="https://www.intechdevkh.com/" target="_blank">
              <span class="cursor-pointer font-bold text-[#416bd8]">
                IntechDev
              </span>
            </a>
            because I am keen on working in the ridesharing industry and
            building products that enhance the lives of users.
          </p> -->
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
          <a
            href="https://www.passerellesnumeriques.org/en/our-actions/cambodia/"
          >
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
            Front End Developer
          </div>
          <a href="https://www.intechdevkh.com/">
            <div class="experience-text smaller text-[14px] sm:text-[12px]">
              IntechDev Co., LTD.
            </div>
          </a>
        </div>
        <div class="experience-text smaller text-[14px] sm:text-[12px]">
          June 2022 - Present
        </div>
        <div class="experience-items mt-[20px] flex sm:flex-col">
          <div class="experience-text font-medium md:text-[14px]">
            Web Developer Intern
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
