// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQmmKlRHY4raJNDhh5qBpyy5bomhDHFX4",
  authDomain: "portfolio-ff7ad.firebaseapp.com",
  projectId: "portfolio-ff7ad",
  storageBucket: "portfolio-ff7ad.appspot.com",
  messagingSenderId: "928049409576",
  appId: "1:928049409576:web:955e42628317e62e9e4f1d",
  measurementId: "G-WSD8DC6E98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
