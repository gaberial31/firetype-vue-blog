import { computed } from "vue";
import { useRoute } from "vue-router";

export const useConfirmComponents = (componentName: string) => {
  const route = useRoute();

  return computed(() => Boolean(route.meta[componentName]));
};
