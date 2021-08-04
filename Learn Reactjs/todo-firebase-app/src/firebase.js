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

import firebase from 'firebase';
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db;

//"todos" colection is created in firebase website
