import { Capitalize } from "@/functions/utilities";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/produtos",
    name: "produtos",
    component: () =>
      import(/* webpackChunkName: "produtos" */ "../views/ProductsView.vue"),
  },
  {
    path: "/produto/:id",
    name: "produto-detalhes",
    component: () =>
      import(/* webpackChunkName: "produto-detalhe" */ "../views/ProductDetailView.vue"),
  },
  {
    path: "/cardapio",
    name: "cardapio",
    component: () =>
      import(/* webpackChunkName: "cardapio" */ "../views/CardapioView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.name === "produto-detalhes") {
    const routerParamsId = to.params.id as string;
    document.title = `Produto - Villa do Mar`;
  } else if (to.name === "cardapio") {
    document.title = `Cardápio Digital - Villa do Mar`;
  } else {
    document.title = `${Capitalize(String(to.name))} - Villa do Mar`;
  }

  next();
});

export default router;
