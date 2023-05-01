import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD8WGRcAWIAAdE0BrKXF6P1h7CLN3Mn_Ws",
  authDomain: "react-notes-3b6e5.firebaseapp.com",
  projectId: "react-notes-3b6e5",
  storageBucket: "react-notes-3b6e5.appspot.com",
  messagingSenderId: "693081290559",
  appId: "1:693081290559:web:7005ca485419bd3e26458a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")