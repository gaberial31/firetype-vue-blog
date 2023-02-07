<template>
  <div class="create-post">
    <div class="container">
      <div class="create-post__post-content">
        <PostInput
          name="title"
          title="Enter Your Post Title"
          description="Formulate the title so that it is immediately clear what it is about."
          placeholder="Enter Post Title"
          :max-length="70"
        />

        <PostInput
          name="description"
          title="Enter Short Post Description"
          description="This short description will be used when you first view the blog"
          placeholder="Enter Short Description"
          :max-length="200"
        />

        <PostInfo />
        <PostEditor />
      </div>

      <div class="create-post__actions">
        <Button label="Publish Blog" @click="publishBlog" />

        <RouterLink to="/post-preview">
          <Button label="Post Preview" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// * Create post common component
import PostInput from "@/components/pages/CreatePost/PostInput/PostInput.vue";
import PostInfo from "@/components/pages/CreatePost/PostInfo/PostInfo.vue";
import PostEditor from "@/components/pages/CreatePost/PostEditor/PostEditor.vue";

// * Common components
import Button from "@/components/ui/Button/Button.vue";

// * composables
import { usePost } from "@/store/Post/composables";
import { useUser } from "@/store/User/composables";
import { useSpinner } from "@/composables/useSpinner";

// * Services
import { firebaseAddPost } from "@/services/Post/post.service";

const { post } = usePost();
const { user } = useUser();
const { showSpinner, hideSpinner } = useSpinner();

const publishBlog = async () => {
  try {
    showSpinner();
    await firebaseAddPost(post, user.value.uid);
  } catch (e) {
    console.log(e);
    return e;
  } finally {
    hideSpinner();
  }
};
</script>

<style lang="sass" scoped>
@import "./styles/CreatePostView"
</style>
