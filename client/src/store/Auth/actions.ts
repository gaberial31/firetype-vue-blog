// * State interface
import { AuthState } from "./interfaces/state.interface";

// * Constants
import { SET_IS_LOGGED_IN_STATE } from "../constants";

export const actions = {
  [SET_IS_LOGGED_IN_STATE](this: AuthState, bool: boolean) {
    this.isLoggedIn = bool;
  },
};
