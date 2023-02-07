import { IUser } from "./user.interface";

export interface IPost {
  title: string;

  cover: string;

  description: string;
  content: string;

  date: number;

  uid: string;
  id: string;
}

export interface IPostWithUser extends IPost {
  user: IUser;
}

export interface INewPost extends Omit<IPost, "id" | "uid"> {
  coverFile?: File;
}
