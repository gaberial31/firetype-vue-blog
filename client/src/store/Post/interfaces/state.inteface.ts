import { IPostWithUser, INewPost } from "@/types/entities/post.interface";

export interface PostState {
  post: INewPost;
  posts: IPostWithUser[];
}
