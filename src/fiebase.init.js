// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW4UtZbAWvr079WTl5pTgraV7s0UYCuHA",
  authDomain: "ema-john-reacap-auth.firebaseapp.com",
  projectId: "ema-john-reacap-auth",
  storageBucket: "ema-john-reacap-auth.appspot.com",
  messagingSenderId: "316638167680",
  appId: "1:316638167680:web:3fe0d0ac3008d7b51e1c65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;