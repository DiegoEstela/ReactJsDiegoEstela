import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCXXpR9_Pg4VUiADnXaEts8m5uT4iY1ViQ",
  authDomain: "nbp-estudio.firebaseapp.com",
  projectId: "nbp-estudio",
  storageBucket: "nbp-estudio.appspot.com",
  messagingSenderId: "787751869058",
  appId: "1:787751869058:web:d52b85aaf179009abf729b",
});

export const getFierebase = () => app;
export const getFirestore = () => app.firestore();

export const auth = firebase.auth();
