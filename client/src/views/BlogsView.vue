<template>
  <div class="blogs">
    <div class="container">
      <div class="blogs__wrapper">
        <template v-for="post in displayedCards" :key="post.id">
          <Card :post="post" />
        </template>
      </div>

      <template v-if="maxPages > 1">
        <Pagination v-model="page" :length="maxPages" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// * Card item
import Card from "@/components/ui/Card/Card.vue";

// * Pagination
import Pagination from "@/components/ui/Pagination/Pagination.vue";

// * Store composables
import { usePosts } from "@/store/Post/composables";

// * Posts
const { posts } = usePosts();

// * Pagination
const page = ref(1);
const cardPerPage = 8;

const sliceFrom = computed(() => (page.value - 1) * cardPerPage);
const sliceTo = computed(() => page.value * cardPerPage);

const maxPages = computed(() => Math.ceil(posts.value.length / cardPerPage));

const displayedCards = computed(() =>
  posts.value.slice(sliceFrom.value, sliceTo.value)
);
</script>

<style lang="sass" scoped>
@import "./styles/BlogsView"
@import "@/styles/animations"
</style>
