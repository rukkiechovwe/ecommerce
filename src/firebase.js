import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAkUWQV1JydtoNVjY67wOee3ltxypQguFs",
	authDomain: "rukkies-store-fa414.firebaseapp.com",
	projectId: "rukkies-store-fa414",
	storageBucket: "rukkies-store-fa414.appspot.com",
	messagingSenderId: "45804139342",
	appId: "1:45804139342:web:1051dff92c28e49267241f",
};
const fb = firebase.initializeApp(firebaseConfig);
export const auth = fb.auth();
export const firestore = fb.firestore();

