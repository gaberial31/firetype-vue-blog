import { computed } from "vue";

// * Store
import { usePostStore } from "..";

// * Constants
import {
  GET_POST_BY_ID,
  GET_POSTS_BY_USER_ID,
  REMOVE_POST_BY_ID,
} from "@/store/constants";

// * Input file composables
import { useFile } from "@/composables/useFile";
import { IPostWithUser } from "@/types/entities/post.interface";

export const usePost = () => {
  const { post } = usePostStore();

  const setPostCover = (fileList: FileList) => {
    const { createFileURL } = useFile();

    const file = fileList[0];

    post.cover = createFileURL(file);
    post.coverFile = fileList[0];
  };

  return {
    post,
    setPostCover,
  };
};

export const usePosts = () => {
  const postStore = usePostStore();

  const posts = computed(() => postStore.posts as IPostWithUser[]);

  const feedPosts = computed(() => posts.value.slice(0, 2));
  const cardPosts = computed(() => posts.value.slice(2, 10));

  const getPostById = (id: string) => {
    return computed(() => postStore[GET_POST_BY_ID](id));
  };

  const getUsersPost = (userId: string) => {
    return postStore[GET_POSTS_BY_USER_ID](userId);
  };

  const removePostById = async (id: string) => {
    try {
      await postStore[REMOVE_POST_BY_ID](id);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return {
    posts,
    feedPosts,
    cardPosts,
    getPostById,
    getUsersPost,
    removePostById,
  };
};

// * The function is used when publishing a new post
export const resetStore = () => {
  const postStore = usePostStore();
  postStore.$reset();
};
