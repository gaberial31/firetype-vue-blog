<template>
  <div class="post">
    <div class="post__content">
      <div class="post__content__wrapper">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>

        <RouterLink :to="postUrl" class="post__link">
          View the Post
          <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
        </RouterLink>
      </div>
    </div>

    <div class="post__photo">
      <img v-lazy="post.cover" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";

// * Post interface
import { IPostWithUser } from "@/types/entities/post.interface";

const props = defineProps({
  post: {
    type: Object as PropType<IPostWithUser>,
    required: true,
  },
});

const postUrl = computed(() => `/blog/${props.post.id}`);
</script>

<style lang="sass" scoped>
@import "./Post"
</style>
