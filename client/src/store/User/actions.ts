// * Interfaces
import { UserState } from "./interfaces/state.interface";
import { IUser } from "@/types/entities/user.interface";
import { FirebaseUser } from "@/types/entities/user.interface";

// * Constants
import { SET_USER_STATE, SET_USER_DATA_FIELD } from "../constants";

export const actions = {
  [SET_USER_STATE](this: UserState, user: IUser | null) {
    this.user = user;
  },

  // ? Initially, I wanted to just make a two-way binding of an input with user data, but since the user can
  // ? null this led to errors, so I decided to use this function.

  [SET_USER_DATA_FIELD](
    this: UserState,
    userField: keyof FirebaseUser,
    userFieldValue: string
  ) {
    const user = this.user as IUser;
    user[userField] = userFieldValue;
  },
};
