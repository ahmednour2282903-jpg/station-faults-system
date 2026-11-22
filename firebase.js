// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZOjJBMnGaJ_vR2nXbd8CrFQiWkhLjc30",
  authDomain: "incsystem-dca1e.firebaseapp.com",
  databaseURL: "https://incsystem-dca1e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "incsystem-dca1e",
  storageBucket: "incsystem-dca1e.firebasestorage.app",
  messagingSenderId: "8013992427",
  appId: "1:8013992427:web:dc1c1ea0d3c756f5a6c9ae",
  measurementId: "G-9HZZNLBBRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
