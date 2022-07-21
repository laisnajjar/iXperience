// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAthiW2DIRUmhS_Hz4ZRGp1ClrJ7z3H7-E",
  authDomain: "recipe-app-35ae6.firebaseapp.com",
  projectId: "recipe-app-35ae6",
  storageBucket: "recipe-app-35ae6.appspot.com",
  messagingSenderId: "22767944812",
  appId: "1:22767944812:web:3fd686ad736e1a741e0449",
  measurementId: "G-3W2BP1RGY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
// const analytics = getAnalytics(app);
export { firestore }