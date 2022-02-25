import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgnomSsqEjBC-1jJO5he7s2__njKz7Vo8",
  authDomain: "house-marketplace-app-1e363.firebaseapp.com",
  projectId: "house-marketplace-app-1e363",
  storageBucket: "house-marketplace-app-1e363.appspot.com",
  messagingSenderId: "866481706364",
  appId: "1:866481706364:web:2083ccbaf4f21a8cbe00f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
