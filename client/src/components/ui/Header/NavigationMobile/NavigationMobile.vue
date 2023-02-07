<template>
  <FontAwesomeIcon
    :icon="['fas', 'bars']"
    class="header__nav__menu-btn"
    @click="isMobileNavigation = !isMobileNavigation"
  />

  <transition name="mobile-nav">
    <div ref="menu" class="header__nav-mobile" v-show="isMobileNavigation">
      <HeaderNavList />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

// * A function that will close the menu when clicked outside
import { onClickOutside } from "@vueuse/core";

// * Navigation list
import HeaderNavList from "@/components/ui/NavList/NavList.vue";

// * Detect screen width for mobile navigation
const isMobileNavigation = ref(false);

const menu = ref<HTMLElement | null>(null);

onClickOutside(menu, () => (isMobileNavigation.value = false));
</script>
