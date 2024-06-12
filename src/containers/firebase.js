// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgGBoCTa3c7RAe-gFzeJ9MZ7aeODKI6yQ",
    authDomain: "trying-aceec.firebaseapp.com",
    databaseURL: "https://trying-aceec-default-rtdb.firebaseio.com",
    projectId: "trying-aceec",
    storageBucket: "trying-aceec.appspot.com",
    messagingSenderId: "400290388845",
    appId: "1:400290388845:web:a7b904ea99d0ccacb1d864",
    measurementId: "G-ZX26F5TFDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
