import { defineStore } from "pinia";

// * Firebase auth instance
import { auth } from "@/plugins/Firebase";
import { onAuthStateChanged } from "firebase/auth";

// * Constants
import { SET_IS_LOGGED_IN_STATE } from "../constants";

// * Service
import { firebaseGetUserIdToken } from "@/services/Auth/auth.service";

// * Store parts
import { state } from "./state";
import { actions } from "./actions";

export const useAuthStore = defineStore("authStore", {
  state,
  actions,
});

onAuthStateChanged(auth, async (user) => {
  const authStore = useAuthStore();

  authStore[SET_IS_LOGGED_IN_STATE](Boolean(user));

  if (user) {
    const token = await firebaseGetUserIdToken();
    localStorage.setItem(process.env.VUE_APP_LS_TOKEN_KEY as string, token);
  } else {
    localStorage.removeItem(process.env.VUE_APP_LS_TOKEN_KEY as string);
  }
});
