<template>
  <div id="navbar" class="h-[55px] px-[4%] py-4 md:px-[5%] flex w-full">
    <div class="flex justify-between">
      <li class="flex items-center">
        <RouterLink
          to="#"
          class="text-[14px] font-bold"
          @click.native="scrollToTop"
        >
          Lyden CHAI
        </RouterLink>
      </li>
      <ul class="flex gap-5">
        <li class="h-full grid items-center">
          <RouterLink to="/" class="text-[14px]" @click.native="scrollToTop">
            Works
          </RouterLink>
        </li>
        <li class="h-full grid items-center">
          <RouterLink
            to="/about"
            class="text-[14px]"
            @click.native="scrollToTop"
          >
            About
          </RouterLink>
        </li>
        <li class="h-full grid items-center">
          <a
            href="../resume.pdf"
            onclick="window.location.href('resume.pdf');"
            class="text-[14px]"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
var prevScrollPos = window.pageYOffset;
window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  let navbar = document.getElementById("navbar");
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-55px";
  }
  prevScrollPos = currentScrollPos;
});
function scrollToTop() {
  window.scrollTo(0, 0);
}
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
