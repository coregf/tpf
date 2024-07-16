// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkP0gbO7zsNraBwa83wIL_amzx-xwVy7E",
  authDomain: "utn-tpf.firebaseapp.com",
  projectId: "utn-tpf",
  storageBucket: "utn-tpf.appspot.com",
  messagingSenderId: "358035181592",
  appId: "1:358035181592:web:4ca866a9454a53a320736d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
setPersistence(auth, browserLocalPersistence);
