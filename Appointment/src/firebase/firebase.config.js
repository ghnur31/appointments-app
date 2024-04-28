// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHAlnwugvVw5rN7cf1jwn6VbLtbgSwZ_4",
  authDomain: "appointment-app-ec128.firebaseapp.com",
  projectId: "appointment-app-ec128",
  storageBucket: "appointment-app-ec128.appspot.com",
  messagingSenderId: "768903934810",
  appId: "1:768903934810:web:4c18ec30cb14b9aa5eb963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;