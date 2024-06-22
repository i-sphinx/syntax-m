// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "syntax-sunrise.firebaseapp.com",
  projectId: "syntax-sunrise",
  storageBucket: "syntax-sunrise.appspot.com",
  messagingSenderId: "911260511602",
  appId: "1:911260511602:web:91c9fbc42a04754a32c1eb",
  measurementId: "G-6SK31RQ082",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
