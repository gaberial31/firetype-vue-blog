<template>
  <ul>
    <template v-for="(navItem, index) in list" :key="index">
      <li>
        <RouterLink :to="navItem.url">
          {{ navItem.label }}
        </RouterLink>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from "vue";

// * Nav item interface
import { navItem } from "./NavList.interface";

// * Nav items
import navItems from "./NavList.data";

defineProps({
  list: {
    type: Array as PropType<navItem[]>,
    default: navItems,
  },
});
</script>
