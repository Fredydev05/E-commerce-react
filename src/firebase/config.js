// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBAUpS7iyWouvSz1B4ozzSoSA-Ke5FhoQ",
  authDomain: "glowstore-e0ec7.firebaseapp.com",
  projectId: "glowstore-e0ec7",
  storageBucket: "glowstore-e0ec7.firebasestorage.app",
  messagingSenderId: "482738525215",
  appId: "1:482738525215:web:0ae1f0883f820fec07712a",
  measurementId: "G-3WLJRVX6YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);