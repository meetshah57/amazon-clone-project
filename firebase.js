import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDMCsLEDtesCXX-8PVf0L2Dk8EgCvv3iNQ",
    authDomain: "challenge-a509a.firebaseapp.com",
    projectId: "challenge-a509a",
    storageBucket: "challenge-a509a.appspot.com",
    messagingSenderId: "481480573357",
    appId: "1:481480573357:web:260f9a1561720adc52e124",
    measurementId: "G-VFGMYEDYE4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };