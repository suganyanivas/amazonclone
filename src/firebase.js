  
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCpen4Pnh8ChVT9WKitXEPjW6ne7Az1fFI",
    authDomain: "clone-2f3f0.firebaseapp.com",
    projectId: "clone-2f3f0",
    storageBucket: "clone-2f3f0.appspot.com",
    messagingSenderId: "744879055763",
    appId: "1:744879055763:web:bd1d391e04ba6f5b36be66"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };