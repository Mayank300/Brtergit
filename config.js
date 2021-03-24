import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCKgJAFOSOu9CGCr_t2EatZfxNeMij4Gm0",
  authDomain: "barter-de87a.firebaseapp.com",
  projectId: "barter-de87a",
  databaseURL: "https://book-santa-20848.firebaseio.com",
  storageBucket: "barter-de87a.appspot.com",
  messagingSenderId: "405251909745",
  appId: "1:405251909745:web:5cea4d1e0b402dbb1313d0"
};


// Initialize Firebase
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }

export default firebase.firestore();
