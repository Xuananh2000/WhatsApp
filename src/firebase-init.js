import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANF4bX6HrA6erYrxg1zynVhn1Uz6eL22k",
    authDomain: "wsaxa-2cdab.firebaseapp.com",
    projectId: "wsaxa-2cdab",
    storageBucket: "wsaxa-2cdab.appspot.com",
    messagingSenderId: "951415475994",
    appId: "1:951415475994:web:8748f901dac258ac6ee6a3",
    measurementId: "G-E77EMZN6FN"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }
