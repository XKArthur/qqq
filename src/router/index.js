import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () =>
  import("../views/home.vue");
const Details = () =>
  import("../views/details.vue");
const routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  {
    path: "/",
    component: Home,
    meta: {
      title: "Talecast"
    }
  },
  {
    path: "/details",
    component: Details,
    meta: {
      title: "Talecast"
    }
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router;
