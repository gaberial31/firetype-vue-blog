// * Firebase firestore instance
import { firestore } from "@/plugins/Firebase";

// * Firebase firestore functions
import { doc, setDoc, getDoc, DocumentData } from "firebase/firestore";

// * Axios
import axios from "@/plugins/Axios";

// * Function types
import { FirestoreAction, GetUserById } from "./user.types";

export const firebaseGetUserById: GetUserById = async (id) => {
  try {
    const userRef = doc(firestore, "users", id);
    const userSnap = await getDoc(userRef);

    const { email, firstname, lastname, username } =
      userSnap.data() as DocumentData;

    const uid = userSnap.id;

    return {
      email,
      firstname,
      lastname,
      username,
      uid,
    };
  } catch (e) {
    return Promise.reject(e);
  }
};

export const firebaseSetUser: FirestoreAction = async ({
  uid,
  email,
  username,
  firstname,
  lastname,
}) => {
  try {
    await setDoc(doc(firestore, "users", uid), {
      email,
      username,
      firstname,
      lastname,
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

export const firebaseAddUserAdminRole = async (email: string) => {
  try {
    const result = await axios.post("/addAdminRole", { email });

    return result.data.message as string;
  } catch (e) {
    return Promise.reject(e);
  }
};
