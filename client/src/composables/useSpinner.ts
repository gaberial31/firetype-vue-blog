import { ref } from "vue";

export const spinnerOpen = ref(false);

export const useSpinner = () => {
  const showSpinner = () => {
    spinnerOpen.value = true;
  };

  const hideSpinner = () => {
    spinnerOpen.value = false;
  };

  return {
    showSpinner,
    hideSpinner,
  };
};
