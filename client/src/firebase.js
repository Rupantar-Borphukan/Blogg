// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bloog-8960f.firebaseapp.com",
  projectId: "bloog-8960f",
  storageBucket: "bloog-8960f.appspot.com",
  messagingSenderId: "551537619730",
  appId: "1:551537619730:web:b4a5e42d20f5ead9ed79cb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
