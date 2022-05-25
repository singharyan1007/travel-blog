// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcUIJrcv67s5ngecrkvpDq77sOiaHUxmA",
  authDomain: "travel-blog-app-bc43a.firebaseapp.com",
  projectId: "travel-blog-app-bc43a",
  storageBucket: "travel-blog-app-bc43a.appspot.com",
  messagingSenderId: "447951438351",
  appId: "1:447951438351:web:01816616561aee5000d97a",
  measurementId: "G-ELQDF0HPSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
