import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCm6ndz3_M6kZj9gjeBRorBn6vhArMoy-g",
	authDomain: "todo-firebase-app-8af5d.firebaseapp.com",
	projectId: "todo-firebase-app-8af5d",
	storageBucket: "todo-firebase-app-8af5d.appspot.com",
	messagingSenderId: "146798258010",
	appId: "1:146798258010:web:76bffdeeffc756aad1b563",
	measurementId: "G-8DSFQDJYM0",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };

export default firebase;
