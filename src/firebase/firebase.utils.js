import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBKgIxaWkjUI7ytmG9I2e9T5pzQ1qFTe3c",
    authDomain: "ecommerce-b44ae.firebaseapp.com",
    databaseURL: "https://ecommerce-b44ae.firebaseio.com",
    projectId: "ecommerce-b44ae",
    storageBucket: "ecommerce-b44ae.appspot.com",
    messagingSenderId: "510988510594",
    appId: "1:510988510594:web:3e50fa5f3dd389f8de5b9b",
    measurementId: "G-F80NDMMR6Y"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
