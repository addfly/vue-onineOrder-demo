import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import userLogin from "./user/login.js";
import Mine from "../views/Mine.vue";
const Supermarket = () => import("../views/Supermarket.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/supermarket",
    name: "Supermarket",
    component: Supermarket
  },
  {
    path: "/discover",
    name: "Discover",
    component: () => import("../views/Discover.vue")
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order.vue")
  },
  {
    path: "/mine",
    name: "Mine",
    component: Mine
  },
  userLogin
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
