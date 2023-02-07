import router from "@/router";

import { useAuthStore } from "@/store/Auth";
import { useUserStore } from "@/store/User";

export default function authGuard() {
  router.beforeEach((to, from, next) => {
    const authState = useAuthStore();
    const userState = useUserStore();

    const isAuth = authState.isLoggedIn;
    const isAdmin = userState.user?.admin;

    if (!to.meta.requiresAuth && isAuth) {
      return next({ name: "home" });
    }

    if (to.meta.requiresAdmin && !isAdmin) {
      return next({ name: "home" });
    }

    return next();
  });
}
