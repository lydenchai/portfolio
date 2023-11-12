import { createRouter, createWebHistory } from "vue-router";
import WorkView from "../views/WorkView.vue";
import AboutView from "../views/AboutView.vue";
import ResumeView from "../views/ResumeView.vue";

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
    {
      path: "/resume",
      component: ResumeView,
    },
  ],
});

export default router;
