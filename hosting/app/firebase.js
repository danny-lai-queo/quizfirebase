// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlzu0De1wc1A34zJ4C5ytf9qm82a1UxD4",
  authDomain: "danny-quiz-chat.firebaseapp.com",
  projectId: "danny-quiz-chat",
  storageBucket: "danny-quiz-chat.appspot.com",
  messagingSenderId: "226982573995",
  appId: "1:226982573995:web:39ff9e56c5508fec3ac4ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
