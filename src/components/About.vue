<template>
  <div class="w-full text-[#444444] mb-[80px]">
    <div class="h-[400px] w-full flex justify-between">
      <div class="w-[40%]">
        <img src="../assets/imgs/Photos.jpg" alt="Avatar" class="w-[80%]" />
      </div>
      <div class="w-[60%]">
        <p class="letter-spacing-[0.3px]">
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
        <p class="mt-[30px]">
          I'm interested in the Front End Engineer role at
          <a href="https://www.intechdevkh.com/" target="_blank">
            <span class="text-[#416bd8] font-bold cursor-pointer">
              IntechDev
            </span>
          </a>
          because I like working in this ridesharing space and creating products
          to improve the lives of users.
        </p>
        <p class="mt-[30px]">
          When I am not developing projects, I love gardening, reading,
          traveling, photography, and listening to music.
        </p>
        <p class="mt-[30px] text-[25px] gap-4">🌱 📚 🌎 📸 🎧</p>
      </div>
    </div>
    <div class="experience-box">
      <h2 class="heading-3">education</h2>
      <div class="experience-items bar"></div>
      <div class="experience-items mt-[20px]">
        <div class="experience-text">Bachelor's Degree in Computer Science</div>
        <a href="">
          <div class="experience-text smaller">Asia Euro University</div>
        </a>
      </div>
      <div class="experience-text smaller">October 2023 - Present</div>
      <div class="experience-items mt-3">
        <div class="experience-text">
          Associate's Degree in Information Technology
        </div>
        <a href="">
          <div class="experience-text smaller">
            Passerelles Numeriques Cambodia
          </div>
        </a>
      </div>
      <div class="experience-text smaller">October 2019 - October 2021</div>
    </div>
    <div class="experience-box">
      <h2 class="heading-3">experience</h2>
      <div class="experience-items bar"></div>
      <div class="experience-items mt-3">
        <div class="experience-text">Front End Developer</div>
        <a href="">
          <div class="experience-text smaller">IntechDev Co., LTD.</div>
        </a>
      </div>
      <div class="experience-text smaller">June 2022 - Present</div>
      <div class="experience-items mt-[20px]">
        <div class="experience-text">Web Developer Intern</div>
        <a href="">
          <div class="experience-text smaller">POSCAR Digital Co., LTD.</div>
        </a>
      </div>
      <div class="experience-text smaller">January 2022 - May 2022</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.experience-box {
  margin-top: 100px;
  // background: #dadada;
}
.heading-3 {
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;
  color: #343434;
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  text-transform: capitalize;
}

.experience-items.bar {
  width: 100%;
  height: 2px;
  background-color: #676767;
}

.experience-items {
  display: flex;
  align-items: flex-end;
}

.experience-text {
  padding-right: 15px;
  font-family: "Lato semi", sans-serif;
  color: #343434;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.025em;
}

.smaller {
  display: inline-block;
  font-family: "Lato", sans-serif;
  color: #676767;
  font-size: 15px;
  font-weight: 400;
}
</style>
