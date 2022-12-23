// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKaK5CRuieSJtH9lEG4_UgyccVveWp3y8",
  authDomain: "boland-unfug-cv.firebaseapp.com",
  projectId: "boland-unfug-cv",
  storageBucket: "boland-unfug-cv.appspot.com",
  messagingSenderId: "875633449611",
  appId: "1:875633449611:web:1b8dc0be30e18bbf90d28e",
  measurementId: "G-MWVV0MMYJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);