
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAKQsvzYOOdTQulJkygmYpdZj9YJu8ePsw",
  authDomain: "dealpoly-42f81.firebaseapp.com",
  projectId: "dealpoly-42f81",
  storageBucket: "dealpoly-42f81.firebasestorage.app",
  messagingSenderId: "861409672771",
  appId: "1:861409672771:web:30904d8f89ff88a88e5ef6",
  measurementId: "G-YXDQKRXJMB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };
