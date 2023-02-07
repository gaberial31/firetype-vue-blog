import { defineStore } from "pinia";

// * Store parts
import { state } from "./state";
import { actions } from "./actions";
import { getters } from "./getters";

export const usePostStore = defineStore("postStore", {
  state,
  actions,
  getters,
});
