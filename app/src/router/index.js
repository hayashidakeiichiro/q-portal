import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "top",
    component: () => import("../views/TopView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/NewsView.vue"),
  },
  {
    path: "/dining",
    name: "dining",
    component: () => import("../views/DiningView.vue"),
  },
  {
    path: "/traffic",
    name: "traffic",
    component: () => import("../views/TrafficInfoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
