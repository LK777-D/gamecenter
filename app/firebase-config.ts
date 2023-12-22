
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLjlyM3meQLsa2Sb5ioXOwlZc-bprhmGk",
  authDomain: "gamecenter-4b490.firebaseapp.com",
  projectId: "gamecenter-4b490",
  storageBucket: "gamecenter-4b490.appspot.com",
  messagingSenderId: "1024344191965",
  appId: "1:1024344191965:web:5abd5262e9025726c73c34"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)