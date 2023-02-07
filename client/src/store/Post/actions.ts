// * Interfaces
import { PostState } from "./interfaces/state.inteface";

// * Constants
import { FETCH_ALL_POSTS, REMOVE_POST_BY_ID } from "../constants";

// * Services
import {
  firebaseGetPosts,
  firebaseRemovePostById,
} from "@/services/Post/post.service";

export const actions = {
  async [FETCH_ALL_POSTS](this: PostState): Promise<void> {
    try {
      const posts = await firebaseGetPosts();
      this.posts = posts;
    } catch (e) {
      return Promise.reject(e);
    }
  },

  async [REMOVE_POST_BY_ID](this: PostState, id: string): Promise<void> {
    try {
      this.posts = this.posts.filter((post) => post.id !== id);
      await firebaseRemovePostById(id);
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
