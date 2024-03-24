// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-414306.firebaseapp.com",
  projectId: "blog-app-414306",
  storageBucket: "blog-app-414306.appspot.com",
  messagingSenderId: "564720766948",
  appId: "1:564720766948:web:a2084ec26e68331debc1f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);