import { UserState } from "./interfaces/state.interface";

export const state = (): UserState => {
  return {
    user: null,
  };
};
