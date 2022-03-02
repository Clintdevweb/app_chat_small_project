// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq_2bNb26Ugp9X7-5eu66ASTONpV0SsVc",
  authDomain: "app-chat-5b41f.firebaseapp.com",
  projectId: "app-chat-5b41f",
  storageBucket: "app-chat-5b41f.appspot.com",
  messagingSenderId: "179703350049",
  appId: "1:179703350049:web:6773d53e9f19a39734b460",
  measurementId: "G-QWHGMRLHLK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  auth.useEmulator('http://localhost:9099');
  db.useEmulator('localhost', '8080');
}


export { db, auth };
export default firebase;

