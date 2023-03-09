// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7NhHmCy7_zdNElAEby5R16d61w2dhlbs",
  authDomain: "chatapp-17d3e.firebaseapp.com",
  projectId: "chatapp-17d3e",
  storageBucket: "chatapp-17d3e.appspot.com",
  messagingSenderId: "165791637024",
  appId: "1:165791637024:web:57c13c1b949356c87be645",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
