// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-c62bb.firebaseapp.com",
  projectId: "mernestate-c62bb",
  storageBucket: "mernestate-c62bb.appspot.com",
  messagingSenderId: "737085539887",
  appId: "1:737085539887:web:2612e1a5e68faa95cce8da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
