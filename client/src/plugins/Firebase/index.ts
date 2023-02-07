import { initializeApp } from "firebase/app";

// * Firebase auth
import { getAuth } from "firebase/auth";

// * Firestore imports
import { getFirestore } from "firebase/firestore";

// * Storage imports
import { getStorage } from "firebase/storage";

// * Init firebase app
const app = initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
});

// * Init firebase
const firestore = getFirestore(app);

// * Init auth
const auth = getAuth(app);

// * Init storage
const storage = getStorage(app);

export { app, firestore, auth, storage };
