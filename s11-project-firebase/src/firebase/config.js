// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByLMlAO1uLGYsPK4210pbdJ3y1sQlRaeA",
  authDomain: "react-crud-fire.firebaseapp.com",
  projectId: "react-crud-fire",
  storageBucket: "react-crud-fire.appspot.com",
  messagingSenderId: "99325206634",
  appId: "1:99325206634:web:f8ce27c7be5a14a934aa13"
};

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };