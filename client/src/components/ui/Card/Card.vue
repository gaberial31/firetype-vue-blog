<template>
  <RouterLink :class="['card', { small: small }]" :to="`blog/${post.id}`">
    <template v-if="controls">
      <div class="card__controls">
        <div class="card__controls__item">
          <FontAwesomeIcon :icon="['fas', 'edit']" />
        </div>

        <div class="card__controls__item">
          <FontAwesomeIcon
            :icon="['fas', 'trash']"
            @click="removePostById(post.id)"
          />
        </div>
      </div>
    </template>

    <div class="card__background">
      <img v-lazy="post.cover" />
    </div>

    <div class="card__info">
      <h4>{{ post.title }}</h4>
      <p>{{ post.description }}</p>
      <p class="card__info__date">{{ formatDate(post.date) }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { PropType } from "vue";

import { formatDate } from "@/utils/format-date";

// * Store composables
import { usePosts } from "@/store/Post/composables";

// * Card interface
import { IPostWithUser } from "@/types/entities/post.interface";

defineProps({
  post: {
    type: Object as PropType<IPostWithUser>,
    required: true,
  },

  controls: {
    type: Boolean,
    default: false,
  },

  small: {
    type: Boolean,
    default: false,
  },
});

const { removePostById } = usePosts();
</script>

<style lang="sass" scoped>
@import "./Card"
</style>
