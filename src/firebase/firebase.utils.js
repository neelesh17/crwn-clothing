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
    measurementId: "G-Q0J2B5PD3V",
  };

  export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
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

  export const addCollectionAndDocuments = async (collecitonKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collecitonKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
      const { title, items } = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      }
    });

    return transformedCollections.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  }

  firebase.initializeApp(config);

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    });
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ 'prompt': 'select_account' });

  export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;