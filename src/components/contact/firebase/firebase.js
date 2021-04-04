import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyBmW9AT48Qb5o2c1zSSoMlVSWFHHwwEGlw",
   authDomain: "porfoliowebsite-f15cb.firebaseapp.com",
   databaseURL: "https://porfoliowebsite-f15cb-default-rtdb.firebaseio.com",
   projectId: "porfoliowebsite-f15cb",
   storageBucket: "porfoliowebsite-f15cb.appspot.com",
   messagingSenderId: "621885981771",
   appId: "1:621885981771:web:f57dcc10075e42304db9ce"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export {db};