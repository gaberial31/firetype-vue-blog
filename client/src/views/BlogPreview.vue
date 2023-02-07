<template>
  <Blog :post="post" :user="user" />
</template>

<script setup lang="ts">
// * Composables
import { usePost } from "@/store/Post/composables";
import { useUser } from "@/store/User/composables";

// * Blog
import Blog from "@/components/pages/Blog/Blog.vue";

const { post } = usePost();
const { user } = useUser();
</script>

<style lang="sass" scoped>
@import "./styles/BlogView"
</style>
