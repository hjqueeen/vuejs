import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
      meta: { public: true },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/DashboardView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/tasks",
      name: "tasks",
      component: () => import("@/views/TasksView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/AdminView.vue"),
      meta: { requiresAuth: true, requiredRole: "admin" },
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundView.vue"),
      meta: { public: true },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (!store.getters["auth/isInitialized"]) {
    await store.dispatch("auth/bootstrap");
  }

  const isPublic = !!to.meta.public;
  const requiresAuth = !!to.meta.requiresAuth;
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (!isPublic && requiresAuth && !isLoggedIn) {
    next({ name: "login", query: { redirect: to.fullPath } });
    return;
  }

  const requiredRole = to.meta.requiredRole;
  if (requiredRole && !store.getters["auth/hasRole"](requiredRole)) {
    next({ name: "dashboard" });
    return;
  }

  next();
});

export default router;
