import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductCart from "../views/ProductCart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/store",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cart",
      name: "cart",
      component: ProductCart,
    },
  ],
});

export default router;
