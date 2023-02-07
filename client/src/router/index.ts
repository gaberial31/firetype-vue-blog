import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// * Set page title function
import { setPageTitle } from "./utils/setPageTitle";

const routes: Array<RouteRecordRaw> = [
  // * Main route
  {
    path: "/",
    name: "home",
    meta: {
      requiresAuth: true,
      requiresAdmin: false,
      title: "Home",
      header: true,
      footer: true,
    },

    component: () => import("@/views/HomeView.vue"),
  },

  // * Blogs route
  {
    path: "/blogs",
    name: "blogs",
    meta: {
      requiresAuth: true,
      requiresAdmin: false,
      title: "Blogs",
      header: true,
      footer: true,
    },
    component: () => import("@/views/BlogsView.vue"),
  },

  // * Authorization route
  {
    path: "/authorization",
    name: "authorization",
    meta: {
      requiresAuth: false,
      requiresAdmin: false,
      title: "Auth",
      header: false,
      footer: false,
    },
    component: () => import("@/views/AuthView.vue"),

    children: [
      {
        path: "signin",
        name: "signin",
        component: () => import("@/components/pages/Auth/Forms/SignIn.vue"),
      },

      {
        path: "signup",
        name: "signup",
        component: () => import("@/components/pages/Auth/Forms/SignUp.vue"),
      },

      {
        path: "reset-password",
        name: "reset-password",
        component: () =>
          import("@/components/pages/Auth/Forms/ResetPassword.vue"),
      },
    ],
  },

  // * Profile view
  {
    path: "/profile",
    name: "profile",
    meta: {
      requiresAuth: true,
      requiresAdmin: false,
      title: "Profile",
      header: true,
      footer: true,
    },
    component: () => import("@/views/ProfileView.vue"),
  },

  // * Admin view
  {
    path: "/admin",
    name: "admin",
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
      title: "Admin",
      header: true,
      footer: true,
    },
    component: () => import("@/views/AdminView.vue"),
  },

  // * Create post view
  {
    path: "/create-post",
    name: "create-post",
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
      title: "Create Post",
      header: true,
      footer: true,
    },
    component: () => import("@/views/CreatePostView.vue"),
  },

  // * Blog preview
  {
    path: "/post-preview",
    name: "post-preview",
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
      title: "Preview",
      header: true,
      footer: true,
    },
    component: () => import("@/views/BlogPreview.vue"),
  },

  // * Single blog view
  {
    path: "/blog/:id",
    name: "blog-view",
    meta: {
      requiresAuth: true,
      requiresAdmin: false,
      title: "Blog",
      header: true,
      footer: true,
    },
    component: () => import("@/views/BlogView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

// * Changing the title name when going to the router
router.beforeEach((to, from, next) => {
  setPageTitle(to.meta.title);
  next();
});

export default router;
