// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX6GX3_u8y5ZOJ-VP8hSfa0JHWxj4mSwc",
  authDomain: "colleges-admission-project.firebaseapp.com",
  projectId: "colleges-admission-project",
  storageBucket: "colleges-admission-project.appspot.com",
  messagingSenderId: "83901781013",
  appId: "1:83901781013:web:d3b7b751ff1cca928daa1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;