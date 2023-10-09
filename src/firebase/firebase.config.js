// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8YYVYVu8X3XJTJ-h3mJTRb6TEFIebhaU",
  authDomain: "event-management-birthday.firebaseapp.com",
  projectId: "event-management-birthday",
  storageBucket: "event-management-birthday.appspot.com",
  messagingSenderId: "266170454704",
  appId: "1:266170454704:web:8aba59fd5f783e85b46175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;