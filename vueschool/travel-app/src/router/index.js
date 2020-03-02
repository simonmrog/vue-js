import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details/:id",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "destinationDetails" */ "../views/DestinationDetails"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active-class",
  base: process.env.BASE_URL,
  routes
});

export default router;
