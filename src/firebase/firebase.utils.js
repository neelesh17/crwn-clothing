import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4fD8SpwlgwKTQkLRpRsHWMv8Gnus8R7o",
    authDomain: "crwn-db-40a55.firebaseapp.com",
    databaseURL: "https://crwn-db-40a55.firebaseio.com",
    projectId: "crwn-db-40a55",
    storageBucket: "crwn-db-40a55.appspot.com",
    messagingSenderId: "119921873388",
    appId: "1:119921873388:web:e906f80d99dea36875b0c9",
    measurementId: "G-Q0J2B5PD3V"
  };

  export const createUserProfileDocument = async (userAuth,displayName , ...additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
      const { email } = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(error) {
        console.log("error creating user ", error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ 'prompt': 'select_account' });

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;