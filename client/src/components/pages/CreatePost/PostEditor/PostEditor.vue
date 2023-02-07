<template>
  <div class="post-editor">
    <QuillEditor
      v-model:content="post.content"
      content-type="html"
      :toolbar="editorToolbar"
      :modules="editorModules"
    />
  </div>
</template>

<script setup lang="ts">
// * composables
import { usePost } from "@/store/Post/composables";

// * Editor
import { QuillEditor } from "@vueup/vue-quill";

// * Editor config
import { editorToolbar, editorModules } from "./PostEditor.config";

const { post } = usePost();
</script>

<style lang="sass" scoped>
@import "./PostEditor"
</style>
