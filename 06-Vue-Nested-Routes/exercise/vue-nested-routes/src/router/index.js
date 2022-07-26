import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AboutHome from "../views/About/index.vue";
import Changelog from "../views/About/Changelog.vue";
import GitHub from "../views/About/GitHub.vue";
import Guide from "../views/About/Guide.vue";
import Reference from "../views/About/Reference.vue";
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
    // component: () => import("../views/About.vue"),
    children:[
      {
        path: "",
        component: AboutHome,
      },
      {
        path: "guide",
        component: Guide,
      },
      {
        path: "changelog",
        component: Changelog,
      },
      {
        path: "gitHub",
        component: GitHub,
      },
      {
        path: "reference",
        component: Reference,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
