<template>
  <div class="">
    <div class="img-container relative">
      <img
        src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
        alt="Avatar"
        class="image"
      />
      <div class="overlay">
        <div class="text">Hello World</div>
      </div>
    </div>
    <div class="flex items-center mt-[15px] md:flex-col md:items-start">
      <h2 class="heading-project md:mb-2">TikTok - Effect House</h2>
      <p class="tag-for-projects mt-[3px] ml-[20px] md:ml-0">
        User Experience / 3D Code-based Desktop Software / Augmented Reality
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.heading-project {
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
}

.tag-for-projects {
  font-family: Lato, sans-serif;
  color: #676767;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.5px;
}
.image {
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  text-align: center;
}
</style>
