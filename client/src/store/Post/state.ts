import { PostState } from "./interfaces/state.inteface";
import { INewPost } from "@/types/entities/post.interface";

export const state = (): PostState => {
  return {
    post: {
      title: "",
      description: "",
      content: "",

      cover: "",
      coverFile: undefined,

      date: Date.now(),
    },
    posts: [],
  };
};
