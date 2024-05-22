import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqEgAzqnEJBhGKJlx1pml5oCe5rKUFsoc",
  authDomain: "t-5d237.firebaseapp.com",
  projectId: "t-5d237",
  storageBucket: "t-5d237.appspot.com",
  messagingSenderId: "53972727954",
  appId: "1:53972727954:web:a2f59f53db33f0d8714e4b",
  measurementId: "G-YF2KHRJM8K"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();


export { auth, db };