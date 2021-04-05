import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyBq34sVaOONjRgVYskJ-Fc1AKrSqZ3KZto",
   authDomain: "emilkovacevic-website.firebaseapp.com",
   databaseURL: "https://emilkovacevic-website-default-rtdb.firebaseio.com",
   projectId: "emilkovacevic-website",
   storageBucket: "emilkovacevic-website.appspot.com",
   messagingSenderId: "1096580233742",
   appId: "1:1096580233742:web:3da4f7d93ef84361b95a5f",
   measurementId: "G-N0FX87RTF1"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
firebase.analytics();
export {db};