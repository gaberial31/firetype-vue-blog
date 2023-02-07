// * Interfaces
import { PostState } from "./interfaces/state.inteface";
import { IPostWithUser } from "@/types/entities/post.interface";

// * Contants
import { GET_POST_BY_ID, GET_POSTS_BY_USER_ID } from "../constants";

export const getters = {
  [GET_POST_BY_ID]: (state: PostState) => {
    return (postId: string) =>
      state.posts.find((post) => post.id == postId) as IPostWithUser;
  },

  [GET_POSTS_BY_USER_ID]: (state: PostState) => {
    return (userId: string) =>
      state.posts.filter((post) => post.uid == userId) as IPostWithUser[];
  },
};
