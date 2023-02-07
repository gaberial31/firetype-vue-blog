<template>
  <Blog :post="post" :user="post?.user" />
</template>

<script setup lang="ts">
// * Route
import { useRoute } from "vue-router";

// * Blog
import Blog from "@/components/pages/Blog/Blog.vue";

// * Store composables
import { usePosts } from "@/store/Post/composables";

// * Posts
const { getPostById } = usePosts();
const { params } = useRoute();

const post = getPostById(params.id as string);
</script>

<style lang="sass" scoped>
@import "./styles/BlogView"
</style>
