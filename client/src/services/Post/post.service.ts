import { firestore, storage } from "@/plugins/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// * Interfaces
import { IUser } from "@/types/entities/user.interface";
import {
  IPost,
  IPostWithUser,
  INewPost,
} from "@/types/entities/post.interface";

// * User service
import { firebaseGetUserById } from "@/services/User/user.service";

// * Firebase firestore functions
import {
  collection,
  doc,
  addDoc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";

export const firebaseGetPosts = async () => {
  try {
    const postsQuery = query(
      collection(firestore, "posts"),
      orderBy("date", "desc")
    );

    const posts = await getDocs(postsQuery);

    const postsWithUser = await Promise.all(
      posts.docs.map(async (doc) => {
        const post = doc.data() as IPost;
        const user = await firebaseGetUserById(post.uid);

        return {
          ...post,
          id: doc.id,
          user,
        } as IPostWithUser;
      })
    );

    return postsWithUser;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const firebaseUploadPostImage = async (path: string, file: File) => {
  try {
    const storageRef = ref(storage, `${path}/${file.name}`);

    const newImage = await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(
      ref(storage, newImage.metadata.fullPath)
    );

    return imageUrl;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const firebaseAddPost = async (post: INewPost, uid: IUser["uid"]) => {
  try {
    // * Upload cover photo to storage
    const coverUrl = await firebaseUploadPostImage(
      "post-covers",
      post.coverFile as File
    );

    post.cover = coverUrl;

    const { title, cover, content, description } = post;

    await addDoc(collection(firestore, "posts"), {
      title,
      cover,
      content,
      description,
      uid,
      date: Date.now(),
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

export const firebaseRemovePostById = async (id: string) => {
  try {
    await deleteDoc(doc(firestore, "posts", id));
  } catch (e) {
    return Promise.reject(e);
  }
};
