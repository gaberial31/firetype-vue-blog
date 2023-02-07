import { defineStore } from "pinia";

// * Firebase auth instance
import { auth } from "@/plugins/Firebase";
import { onAuthStateChanged } from "firebase/auth";

// * User service
import { firebaseGetUserById } from "@/services/User/user.service";
import { getIdTokenResult } from "firebase/auth";

// * Constants
import { SET_USER_STATE } from "../constants";

// * Store parts
import { state } from "./state";
import { actions } from "./actions";

// * Spinner composables
import { useSpinner } from "@/composables/useSpinner";

const { showSpinner, hideSpinner } = useSpinner();

export const useUserStore = defineStore("userStore", {
  state,
  actions,
});

onAuthStateChanged(auth, async (user) => {
  const userStore = useUserStore();

  if (user) {
    showSpinner();

    const userData = await firebaseGetUserById(user.uid);
    const userClaims = await getIdTokenResult(user, true);

    const admin = Boolean(userClaims.claims.admin);

    userStore[SET_USER_STATE]({ ...userData, admin });

    hideSpinner();
  } else {
    userStore[SET_USER_STATE](null);
  }
});
