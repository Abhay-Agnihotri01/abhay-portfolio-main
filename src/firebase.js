// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvXOyS6f8_ochY5O0WXP7iyUSvAYKnCco",
  authDomain: "portfolio-abhay-c4dc1.firebaseapp.com",
  projectId: "portfolio-abhay-c4dc1",
  storageBucket: "portfolio-abhay-c4dc1.firebasestorage.app",
  messagingSenderId: "118259514825",
  appId: "1:118259514825:web:b0831dc4118b90e5f83c18"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
