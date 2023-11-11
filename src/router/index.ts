import { createRouter, createWebHistory } from "vue-router";
import WorkView from "../views/WorkView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: WorkView,
    },
    {
      path: "/about",
      component: AboutView,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   document.title = `${to.name}`;
//   next();
// });

export default router;
