<template>
  <main class="home">
    <PostList :posts="feedPosts" />
    <CardSlider :posts="cardPosts" />
  </main>
</template>

<script setup lang="ts">
// * Post list
import PostList from "@/components/pages/Home/Posts/PostList.vue";

// * Cards section
import CardSlider from "@/components/ui/Card/CardSlider/CardSlider.vue";

// * Stores composables
import { usePosts } from "@/store/Post/composables";

const { feedPosts, cardPosts } = usePosts();
</script>
