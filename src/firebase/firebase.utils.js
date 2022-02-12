import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAmbOJ2OT1FJcVTsuBfA1SGeS73Vmc8xVA",
    authDomain: "benmark-33174.firebaseapp.com",
    projectId: "benmark-33174",
    storageBucket: "benmark-33174.appspot.com",
    messagingSenderId: "174571786542",
    appId: "1:174571786542:web:5a957b5dd0afcb90302abf"
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propmt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;