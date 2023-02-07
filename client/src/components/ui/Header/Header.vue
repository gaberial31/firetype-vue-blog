<template>
  <header class="header">
    <div class="header__wrapper container">
      <template v-if="!isMobileScreen">
        <HeaderNavLeft class="left" />
      </template>

      <img src="@/assets/images/handsup-logo.svg" />

      <template v-if="!isMobileScreen">
        <HeaderNavRight
          class="right"
          :isLoggedIn="isLoggedIn"
          :isAdmin="user?.admin"
        >
          <ProfileMenu
            :isLoggedIn="isLoggedIn"
            :user="user"
            :userInitials="userInitials"
          />
        </HeaderNavRight>
      </template>

      <template v-if="isMobileScreen">
        <ProfileMenu
          :isLoggedIn="isLoggedIn"
          :user="user"
          :userInitials="userInitials"
        />
      </template>

      <template v-if="isMobileScreen">
        <HeaderNavMobile />
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

// * composables
import { useScreenWidth } from "@/composables/useScreenWidth";
import { useUser } from "@/store/User/composables";
import { useLoggedInState } from "@/store/Auth/composables";

// * Header navigation parts
import HeaderNavLeft from "./Navigation/NavigationLeft.vue";
import HeaderNavRight from "./Navigation/NavigationRight.vue";

// * Mobile navigation
import HeaderNavMobile from "./NavigationMobile/NavigationMobile.vue";

// * User menu
import ProfileMenu from "./ProfileMenu/ProfileMenu.vue";

// * User data
const { user, userInitials } = useUser();
const { isLoggedIn } = useLoggedInState();

// * Detect screen width for mobile navigation
const { isMobileScreen, checkScreen, addResizeListener, removeResizeListener } =
  useScreenWidth();

// * Adding screen check event on window resize
onMounted(() => {
  addResizeListener();
  checkScreen();
});

onUnmounted(() => {
  removeResizeListener();
});
</script>

<style lang="sass">
@import "./Header"
</style>
