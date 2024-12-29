// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo_hM5X4jIKETUb3J3MhunNrXWJrFiuaM",
  authDomain: "and-github-10f40.firebaseapp.com",
  projectId: "and-github-10f40",
  storageBucket: "and-github-10f40.firebasestorage.app",
  messagingSenderId: "886822025467",
  appId: "1:886822025467:web:44a1bb225216ae84bb185e",
  measurementId: "G-L6XCTFRB3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;