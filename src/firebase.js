// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoCjkq7_7Zg3mF5zlXYqHtKNWBPqBDtg8",
  authDomain: "alenae-81425.firebaseapp.com",
  projectId: "alenae-81425",
  storageBucket: "alenae-81425.firebasestorage.app",
  messagingSenderId: "565087724104",
  appId: "1:565087724104:web:d0bead943105d59528ae7d",
  databaseURL:
    "https://alenae-81425-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
