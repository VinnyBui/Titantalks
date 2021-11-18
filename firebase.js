// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI_gMEu_3SvrUXoDT0BjW4KHMWtlNSINw",
  authDomain: "titantalks-db807.firebaseapp.com",
  projectId: "titantalks-db807",
  storageBucket: "titantalks-db807.appspot.com",
  messagingSenderId: "743256972871",
  appId: "1:743256972871:web:1c0508d4566f07a47c9b62",
  measurementId: "G-4CJ4FGE2B4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};
