import { createApp } from "vue";

// * Root component
import App from "./App.vue";

// * Vue router
import router from "./router";

// * Auth guard
import authGuard from "@/guards/auth.guard";

// * Pinia state
import { createPinia } from "pinia";

// * Fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// * Fontawesome icons
import {
  faBars,
  faArrowRight,
  faArrowLeft,
  faEdit,
  faTrash,
  faEnvelope,
  faLock,
  faUser,
  faClose,
  faCrown,
  faSignOut,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// * Adding fontawesome icons for common library
library.add(
  faBars,
  faArrowRight,
  faArrowLeft,
  faEdit,
  faTrash,
  faEnvelope,
  faLock,
  faUser,
  faClose,
  faCrown,
  faSignOut,
  faChevronLeft,
  faChevronRight
);

// * Quill editor styles
import "@vueup/vue-quill/dist/vue-quill.snow.css";

// * Vue lazyload
import VueLazyload from "vue-lazyload";

createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueLazyload, {
    loading: require("@/assets/images/loading.gif"),
  })
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount("#app");

authGuard();
