// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpwQ_FPS_ySxyUxOpZ7l1ofF_36sIIH4g",
  authDomain: "gamecanvas2d.firebaseapp.com",
  projectId: "gamecanvas2d",
  storageBucket: "gamecanvas2d.appspot.com",
  messagingSenderId: "1049428871489",
  appId: "1:1049428871489:web:15d00af2a2eb386854f9c0",
  measurementId: "G-38WQ0BQ95H",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(App);
export default appFirebase;
