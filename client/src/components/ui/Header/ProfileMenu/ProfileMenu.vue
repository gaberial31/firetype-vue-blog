<template>
  <template v-if="isLoggedIn">
    <div ref="profileMenu" class="profile">
      <span @click="profileMenuOpen = !profileMenuOpen">
        {{ userInitials }}
      </span>

      <Transition name="fadeScale">
        <template v-if="profileMenuOpen">
          <div class="profile-menu">
            <div class="profile-menu__info">
              <p class="profile-menu__info__initials">
                {{ userInitials }}
              </p>

              <div class="profile-menu__info__full">
                <p class="name">{{ user?.firstname }} {{ user?.lastname }}</p>
                <p class="email">@{{ user?.username }}</p>
              </div>
            </div>

            <div class="profile-menu__options">
              <div class="profile-menu__options__item">
                <RouterLink class="option" to="/profile">
                  <FontAwesomeIcon :icon="['fas', 'user']" />
                  <p>Profile</p>
                </RouterLink>
              </div>

              <template v-if="user?.admin">
                <div class="profile-menu__options__item">
                  <RouterLink class="option" to="/admin">
                    <FontAwesomeIcon :icon="['fas', 'crown']" />
                    <p>Admin</p>
                  </RouterLink>
                </div>
              </template>

              <div class="profile-menu__options__item" @click="logout">
                <RouterLink class="option" to="#">
                  <FontAwesomeIcon :icon="['fas', 'sign-out']" />
                  <p>Sign Out</p>
                </RouterLink>
              </div>
            </div>
          </div>
        </template>
      </Transition>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import { useRouter } from "vue-router";

// * User interface
import { IUser } from "@/types/entities/user.interface";

// * Spinner hook
import { useSpinner } from "@/composables/useSpinner";

// * A function that will close the menu when clicked outside
import { onClickOutside } from "@vueuse/core";

// * Services
import { firebaseLogout } from "@/services/Auth/auth.service";

defineProps({
  isLoggedIn: {
    type: Boolean,
    default: false,
  },

  user: {
    type: Object as PropType<IUser | null>,
    default: null,
  },

  userInitials: {
    type: String,
    default: "",
  },
});

// * Profile info controller
const profileMenu = ref<HTMLElement | null>(null);
const profileMenuOpen = ref(false);

onClickOutside(profileMenu, () => (profileMenuOpen.value = false));

// * Logout function
const router = useRouter();
const { showSpinner, hideSpinner } = useSpinner();

const logout = async () => {
  showSpinner();

  await firebaseLogout();
  router.push("/");

  hideSpinner();
};
</script>

<style lang="sass" scoped>
@import "./ProfileMenu"
@import "@/styles/animations"
</style>
