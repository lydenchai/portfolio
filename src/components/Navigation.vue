<template>
  <div class="text-2xl w-full">
    <van-sticky>
      <nav
        id="menu"
        class="navbar navbar-inverse navbar-static-top h-[40px] bg-[#9b939467] px-[4%] lg:px-[6%] md:px-0% flex items-center justify-between"
      >
        <li class="h-full grid items-center">
          <RouterLink to=""> Lyden CHAI </RouterLink>
        </li>
        <ul class="h-full">
          <li class="h-full grid items-center">
            <RouterLink to="/"> Works </RouterLink>
          </li>
          <li id="entertainment" class="category">
            <RouterLink to="/about" class="font-semibold"> About </RouterLink>
          </li>
          <li id="entertainment" class="category">
            <RouterLink to="/resume" class="font-semibold"> Resume </RouterLink>
          </li>
        </ul>
      </nav>
    </van-sticky>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
a.router-link-exact-active {
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
}

a:hover {
  color: #fff;
  transition: 0.3s;
}

ul > li > a {
  height: 40px;
  font-size: 14px;
  padding: 5px 13px;
  position: relative;
  text-decoration: none;
  display: grid;
  place-items: center;
  color: rgba(255, 255, 255, 0.8);
}

nav > ul > li {
  float: left;
}
</style>
