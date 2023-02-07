import { AuthState } from "./interfaces/state.interface";

export const state = (): AuthState => {
  return {
    isLoggedIn: Boolean(
      localStorage.getItem(process.env.VUE_APP_LS_TOKEN_KEY as string)
    ),
  };
};
