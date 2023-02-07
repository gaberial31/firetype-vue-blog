// * Editor plugins
import BlotFormatter from "quill-blot-formatter";
import ImageUploader from "quill-image-uploader";

// * Services
import { firebaseUploadPostImage } from "@/services/Post/post.service";

export const editorToolbar = [
  // * Text formatting
  ["bold", "italic", "underline", "strike"],

  // * Text style
  ["blockquote", "code-block"],

  // * Text lists
  [{ list: "ordered" }, { list: "bullet" }],

  // * Text size
  [{ size: ["small", false, "large", "huge"] }],

  // * Text color
  [{ color: [] }, { background: [] }],

  // * Text align
  [{ align: [] }],

  // * Links and images
  ["link", "image"],
];

export const editorModules = [
  {
    name: "blotFormatter",
    module: BlotFormatter,
  },

  {
    name: "imageUploader",
    module: ImageUploader,
    options: {
      upload: async (file: File) => {
        try {
          const imageUrl = await firebaseUploadPostImage("post-images", file);
          return imageUrl;
        } catch (e) {
          return Promise.reject(e);
        }
      },
    },
  },
];
