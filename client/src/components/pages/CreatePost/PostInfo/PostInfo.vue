<template>
  <div class="post-info">
    <Modal
      v-model="modal"
      title="Cover preview"
      :content="preview"
      max-width="700px"
    />

    <Prompts
      title="Select Cover Photo"
      description="We recommend choosing cover photo that fit with the design of our site."
    />

    <div class="post-info__upload">
      <Button label="Upload Cover Photo" @click="emitInputClick" />

      <input
        class="post-info__upload__file"
        ref="postPhoto"
        type="file"
        id="post-photo"
        accept=".png, .jpg, .jpeg"
        @change="onChange"
      />

      <Button
        class="post-info__upload__preview"
        label="Preview Photo"
        :disabled="!post.cover"
        @click="modal = !modal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// * composables
import { usePost } from "@/store/Post/composables";

// * Prompts
import Prompts from "@/components/pages/CreatePost/PostPrompts/PostPrompts.vue";

// * Shared components
import Modal from "@/components/ui/Modal/Modal.vue";
import Button from "@/components/ui/Button/Button.vue";

const { post, setPostCover } = usePost();

// * Modal model
const modal = ref(false);
const preview = computed(() => `<img style='width: 100%' src='${post.cover}'>`);

// * Ref input template
const postPhoto = ref<HTMLInputElement | null>(null);

const emitInputClick = () => {
  if (postPhoto.value) {
    postPhoto.value.click();
  }
};

// * Cover photo actions
const onChange = () => {
  const fileList = postPhoto.value?.files;

  if (fileList) {
    setPostCover(fileList);
  }
};
</script>

<style lang="sass" scoped>
@import "./PostInfo"
</style>
