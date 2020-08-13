import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDWsjY-sPQVsGQqMkh08dfb2XOayWXJngM",
  authDomain: "tik-tok-clone-50980.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-50980.firebaseio.com",
  projectId: "tik-tok-clone-50980",
  storageBucket: "tik-tok-clone-50980.appspot.com",
  messagingSenderId: "3643683152",
  appId: "1:3643683152:web:a6d1129ce2ea0b7d6dbc55",
  measurementId: "G-F0HZXPZZ8P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;