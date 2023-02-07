import { useAuthStore } from "@/store/Auth";
import { computed } from "vue";

export const useLoggedInState = () => {
  const authStore = useAuthStore();
  const isLoggedIn = computed(() => authStore.isLoggedIn);

  return {
    isLoggedIn,
  };
};
