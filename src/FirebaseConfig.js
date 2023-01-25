// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7qhSZLgPij6GlT9Zw5JENDZnmIRdphNU",
  authDomain: "cryptoapp-cdcc3.firebaseapp.com",
  databaseURL: "https://cryptoapp-cdcc3-default-rtdb.firebaseio.com",
  projectId: "cryptoapp-cdcc3",
  storageBucket: "cryptoapp-cdcc3.appspot.com",
  messagingSenderId: "210617770618",
  appId: "1:210617770618:web:cbbd25f570cd31eb0091c3",
  measurementId: "G-2WN294XLLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
export default db;