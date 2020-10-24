import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCAxy7hVd8zAFwz7XJ4G86uRXAv0n64YEI",
  authDomain: "crwndb-64c62.firebaseapp.com",
  databaseURL: "https://crwndb-64c62.firebaseio.com",
  projectId: "crwndb-64c62",
  storageBucket: "crwndb-64c62.appspot.com",
  messagingSenderId: "488250060976",
  appId: "1:488250060976:web:c10ba1c9b88df6fce0cb75",
  measurementId: "G-RXXYQPVDGX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
