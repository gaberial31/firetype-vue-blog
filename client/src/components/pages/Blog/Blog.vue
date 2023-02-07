<template>
  <div class="post-view">
    <div class="post-view__wrapper container">
      <div class="post-view__user-info">
        <div class="post-view__user-info__initials">
          {{ getUserInitials(user) }}
        </div>

        <div class="post-view__user-info__names">
          <p class="post-view__user-info__names__name">
            {{ user.firstname }} {{ user.lastname }}
          </p>
          <p class="post-view__user-info__names__date">
            {{ formatDate(post.date) }}
          </p>
        </div>
      </div>

      <div class="post-view__post-info">
        <h2 class="post-view__post-info__title">{{ post.title }}</h2>
        <img
          class="post-view__post-info__cover"
          :src="post?.cover"
          alt="Here is your cover"
        />
      </div>

      <div class="post-view__content ql-editor" v-html="post.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

// * Utils
import { formatDate } from "@/utils/format-date";
import { getUserInitials } from "@/utils/user-initials";

// * Interfaces
import { IPost, INewPost } from "@/types/entities/post.interface";
import { IUser } from "@/types/entities/user.interface";

defineProps({
  post: {
    type: Object as PropType<IPost | INewPost>,
    required: true,
  },

  user: {
    type: Object as PropType<IUser>,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
@import "./Blog"
</style>
