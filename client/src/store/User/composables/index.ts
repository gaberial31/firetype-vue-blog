import { useUserStore } from "@/store/User";
import { computed } from "vue";

// * Utils
import { getUserInitials } from "@/utils/user-initials";

// * User interface
import { IUser } from "@/types/entities/user.interface";

// * User
export const useUser = () => {
  const userStore = useUserStore();

  const user = computed(() => userStore.user as IUser);

  const userInitials = computed(() => getUserInitials(user.value));

  return {
    user,
    userInitials,
  };
};
