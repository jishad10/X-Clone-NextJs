// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-social-app-cb167.firebaseapp.com",
  projectId: "next-social-app-cb167",
  storageBucket: "next-social-app-cb167.appspot.com",
  messagingSenderId: "406022181798",
  appId: "1:406022181798:web:0c5a6c806bb3ff92acf567"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);