// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, connectAuthEmulator, signInWithCustomToken, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_ENV_apiKey,
  authDomain: process.env.NEXT_PUBLIC_ENV_authDomain,
  projectId: process.env.NEXT_PUBLIC_ENV_projectId,
  storageBucket: process.env.NEXT_PUBLIC_ENV_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_ENV_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_ENV_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


