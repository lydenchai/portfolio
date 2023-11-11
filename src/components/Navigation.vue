<template>
  <div id="navbar" class="h-[55px] px-[4%] py-4 md:px-2% flex w-full">
    <div class="flex justify-between">
      <li class="flex items-center">
        <RouterLink to="#"> Lyden CHAI </RouterLink>
      </li>
      <ul class="flex gap-5">
        <li class="h-full grid items-center">
          <RouterLink to="/"> Works </RouterLink>
        </li>
        <li class="h-full grid items-center">
          <RouterLink to="/about" class=""> About </RouterLink>
        </li>
        <li class="h-full grid items-center">
          <RouterLink to="/resume" class=""> Resume </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;
};
</script>

<style lang="scss" scoped>
#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: block;
  transition: top 0.5s;
  box-shadow: none;
  backdrop-filter: blur(10px);
  z-index: 99;
}

ul > li > a {
  display: block;
  color: #676767;
  line-height: 2px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
}
ul > li > a:hover {
  text-decoration: underline;
  transition: 0.3s;
}
ul > li > a:active,
ul > li > a:hover {
  outline: 0;
}
</style>
