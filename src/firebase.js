import firebase from './FirebaseConfig'; 
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKOS5oRFsB8MhH3xdcbw3RifmY9lA5t3U",
  authDomain: "fuelmc-590d7.firebaseapp.com",
  databaseURL: "https://fuelmc-590d7.firebaseio.com",
  projectId: "fuelmc-590d7",
  storageBucket: "fuelmc-590d7.appspot.com",
  messagingSenderId: "774274952187",
  appId: "1:774274952187:web:e269ded6f0f01e65e2b95e",
  measurementId: "G-FQ08Q381F0"
};
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const db = app.firestore()
  const auth = app.auth()

  export { auth, db }