// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db }