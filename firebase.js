import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGHTBPcCev_WR2non8CiFQ8WHMLIC3e4",
  authDomain: "incsystem-dca1e.firebaseapp.com",
  databaseURL: "https://incsystem-dca1e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "incsystem-dca1e",
  storageBucket: "incsystem-dca1e.firebasestorage.app",
  messagingSenderId: "3903402927",
  appId: "1:3903402927:web:4e41c6e8b93756f96c99e7",
  measurementId: "G-5H2LWNRBRG"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, set, onValue, remove };
