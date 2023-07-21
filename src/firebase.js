import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMqofB9DeD7H0p7Qk_G-mWDmrygSgeEns",
  authDomain: "disneyplus-clone-5941a.firebaseapp.com",
  projectId: "disneyplus-clone-5941a",
  storageBucket: "disneyplus-clone-5941a.appspot.com",
  messagingSenderId: "538793928757",
  appId: "1:538793928757:web:760e814c18f4535b6c697c",
  measurementId: "G-VYXL0J4X0M"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;