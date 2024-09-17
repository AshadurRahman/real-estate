// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-87a8c.firebaseapp.com",
  projectId: "real-estate-87a8c",
  storageBucket: "real-estate-87a8c.appspot.com",
  messagingSenderId: "648842731517",
  appId: "1:648842731517:web:f36e0be884ee3b53458394",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
