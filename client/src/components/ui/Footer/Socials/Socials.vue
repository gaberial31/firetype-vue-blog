<template>
  <ul>
    <template v-for="socialIcon in socialIcons" :key="socialIcon">
      <li>
        <RouterLink :to="socialIcon.url">
          <img :src="require(`../assets/icons/${socialIcon.icon}`)" />
        </RouterLink>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
// * Social icons
import socialIcons from "./Socials.data";
</script>
