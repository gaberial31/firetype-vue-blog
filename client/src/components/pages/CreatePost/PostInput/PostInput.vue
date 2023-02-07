<template>
  <div class="post-input">
    <Prompts :title="title" :description="description" />

    <div class="post-input__wrapper">
      <input
        v-model="post[name]"
        type="text"
        :placeholder="placeholder"
        :maxlength="maxLength"
      />
      <div class="post-input__counter">
        {{ `${post[name]?.toString().length}/${maxLength}` }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

// * composables
import { usePost } from "@/store/Post/composables";

// * Prompts
import Prompts from "@/components/pages/CreatePost/PostPrompts/PostPrompts.vue";

// * interfaces
import { IPost } from "@/types/entities/post.interface";

defineProps({
  title: {
    type: String,
    default: "",
  },

  description: {
    type: String,
    default: "",
  },

  placeholder: {
    type: String,
    default: "",
  },

  name: {
    type: String as PropType<keyof IPost>,
    default: "",
  },

  maxLength: {
    type: Number,
    default: 30,
  },
});

const { post } = usePost();
</script>

<style lang="sass" scoped>
@import "./PostInput"
</style>
