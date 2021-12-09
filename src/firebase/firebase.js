import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsMXCB-335-SwOl6O_IQPaC32nxInNIiA",
  authDomain: "segundaprueba-db629.firebaseapp.com",
  projectId: "segundaprueba-db629",
  storageBucket: "segundaprueba-db629.appspot.com",
  messagingSenderId: "515993016562",
  appId: "1:515993016562:web:d37fe9c9e09606de8d586b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export{
    app,
    db
}