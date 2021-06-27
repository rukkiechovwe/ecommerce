import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCWCLpzipUDXI4b-n4uMPK5nbVNs2O_oQc",
	authDomain: "rukkie-ecommerce-app.firebaseapp.com",
	projectId: "rukkie-ecommerce-app",
	storageBucket: "rukkie-ecommerce-app.appspot.com",
	messagingSenderId: "1080866422867",
	appId: "1:1080866422867:web:d50b8af63440054239c6a6",
};
const fb = firebase.initializeApp(firebaseConfig);
export const auth = fb.auth();
export const firestore = fb.firestore();
