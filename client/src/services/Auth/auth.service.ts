// * Firebase auth instance
import { auth } from "@/plugins/Firebase";

// * Firebase auth functions
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  getIdToken,
} from "firebase/auth";

// * User interface
import { User } from "firebase/auth";

// * User service
import { firebaseSetUser } from "@/services/User/user.service";

// * Auth types
import { SignIn, SignUp, ResetPassword } from "./auth.types";

export const firebaseSignIn: SignIn = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const firebaseSignUp: SignUp = async ({
  email,
  password,
  username,
  firstname,
  lastname,
}) => {
  try {
    // * User credential from firebase
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // * User auth id
    const uid = userCredential.user.uid;

    await firebaseSetUser({
      uid,
      email,
      username,
      firstname,
      lastname,
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

export const firebaseResetPassword: ResetPassword = async ({ email }) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const firebaseLogout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    return Promise.reject(e);
  }
};

// * Getting a user ID token to save the authorization state
export const firebaseGetUserIdToken = async () => {
  try {
    const token = await getIdToken(auth.currentUser as User);
    return token;
  } catch (e) {
    return Promise.reject(e);
  }
};
