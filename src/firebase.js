import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const fb = firebase.initializeApp(firebaseConfig);
export const gProvider = new firebase.auth.GoogleAuthProvider();
export const Ifirebase = fb;
export const auth = fb.auth();
export const firestore = fb.firestore();
export const fieldValue = firebase.firestore.FieldValue