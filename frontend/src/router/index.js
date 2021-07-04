import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Commands from "../views/Commands.vue";
import Guild from "../views/Guild.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/commands",
    name: "Commands",
    component: Commands,
  },
  {
    path: "/guild/:guild_id",
    name: "Guild",
    component: Guild,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
