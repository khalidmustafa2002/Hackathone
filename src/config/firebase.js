// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOG3rvf1FWsUhLmRzKoegI04Q7yyOlXsg",
  authDomain: "hackathone-455ae.firebaseapp.com",
  projectId: "hackathone-455ae",
  storageBucket: "hackathone-455ae.appspot.com",
  messagingSenderId: "655289655699",
  appId: "1:655289655699:web:288434bf861574e8294866",
  measurementId: "G-YE519FE7GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {analytics,auth,firestore}