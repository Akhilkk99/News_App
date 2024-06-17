// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaxfYXukCEF2ZZB-cUuxnreQLo07UJ61g",
  authDomain: "news-app-de6df.firebaseapp.com",
  projectId: "news-app-de6df",
  storageBucket: "news-app-de6df.appspot.com",
  messagingSenderId: "586747798692",
  appId: "1:586747798692:web:d4ef7c6e9f79c1e15e7231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider= new GoogleAuthProvider(app)
export const database = getFirestore(app)