import { Ref, ref, computed } from "vue";
import { useElementSize } from "@vueuse/core";

export const useSlider = (
  container: Ref<HTMLElement | null>,
  translateSize: number
) => {
  const position = ref(0);
  const { width } = useElementSize(container);

  const slideLeft = () => {
    position.value -= translateSize;
  };

  function slideRight() {
    position.value += translateSize;
  }

  const isPrevButton = computed(() => position.value > 0);
  const isNextButton = computed(() => position.value <= width.value);

  return {
    position,
    slideLeft,
    slideRight,
    isPrevButton,
    isNextButton,
  };
};
