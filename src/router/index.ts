import { createRouter, createWebHistory } from "vue-router";
import WorkView from "../views/WorkView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(),
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

export default router;
