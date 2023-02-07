import { ref } from "vue";

export const useScreenWidth = () => {
  const isMobileScreen = ref(false);

  const checkScreen = () => {
    if (window.innerWidth <= 750) {
      isMobileScreen.value = true;
      return;
    }

    isMobileScreen.value = false;
  };

  const addResizeListener = () => {
    window.addEventListener("resize", checkScreen);
  };

  const removeResizeListener = () => {
    window.removeEventListener("resize", checkScreen);
  };

  return {
    isMobileScreen,
    checkScreen,
    addResizeListener,
    removeResizeListener,
  };
};
