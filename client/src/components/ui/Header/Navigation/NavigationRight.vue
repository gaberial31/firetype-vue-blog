<template>
  <nav class="header__nav">
    <ul>
      <template v-if="isAdmin">
        <li>
          <RouterLink to="/create-post">Create post</RouterLink>
        </li>
      </template>

      <template v-if="!isLoggedIn">
        <li>
          <RouterLink to="/authorization/signin">Login/Register</RouterLink>
        </li>
      </template>
    </ul>

    <slot></slot>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  isLoggedIn: {
    type: Boolean,
    default: false,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});
</script>
