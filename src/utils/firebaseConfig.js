import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyAKQsvzYOOdTQulJkygmYpdZj9YJu8ePsw",
  authDomain: "dealpoly-42f81.firebaseapp.com",
  projectId: "dealpoly-42f81",
  storageBucket: "dealpoly-42f81.firebasestorage.app", 
  messagingSenderId: "861409672771",
  appId: "1:861409672771:web:30904d8f89ff88a88e5ef6",
  measurementId: "G-YXDQKRXJMB",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore & Authentication
const db = getFirestore(app);
const auth = getAuth(app); // Added Firebase Authentication

export { db, auth };
