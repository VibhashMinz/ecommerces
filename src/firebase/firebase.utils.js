import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCo3kMfRh8ZBl1fmLzJyzK8soWqGSDBY8o",
  authDomain: "ecommerce-db-843ec.firebaseapp.com",
  databaseURL: "https://ecommerce-db-843ec.firebaseio.com",
  projectId: "ecommerce-db-843ec",
  storageBucket: "ecommerce-db-843ec.appspot.com",
  messagingSenderId: "101012183898",
  appId: "1:101012183898:web:9ffb5e17febc18194c7163",
  measurementId: "G-DKNSG5VHX7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
