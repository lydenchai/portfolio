import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { Icon } from "@iconify/vue";

import "./assets/main.scss";
import "vant/lib/index.css";

const app = createApp(App);
app.component("Icon", Icon);
app.use(createPinia());
app.use(router);
app.mount("#app");
