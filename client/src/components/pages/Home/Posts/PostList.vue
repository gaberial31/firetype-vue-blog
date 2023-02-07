<template>
  <template v-for="(post, index) in posts" :key="index">
    <Post :post="post" />
  </template>
</template>

<script setup lang="ts">
import { PropType } from "vue";

// * Post interface
import { IPostWithUser } from "@/types/entities/post.interface";

// * Post (signle item)
import Post from "./Post/Post.vue";

defineProps({
  posts: {
    type: Array as PropType<IPostWithUser[]>,
    required: true,
  },
});
</script>
