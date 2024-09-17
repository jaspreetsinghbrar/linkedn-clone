// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa7kjzGIU7U1024PABPph8lS2-cNxjceQ",
  authDomain: "linkedin-clone-ab892.firebaseapp.com",
  projectId: "linkedin-clone-ab892",
  storageBucket: "linkedin-clone-ab892.appspot.com",
  messagingSenderId: "175724600069",
  appId: "1:175724600069:web:7a916bc31784863d9ff56c",
  measurementId: "G-WP5PZF01HJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
