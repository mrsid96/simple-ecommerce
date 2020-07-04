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

const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

const signInWithGoogle = () => auth.signInWithPopup(provider);

const createUserProfileDocument = async (userAuth, additionalData) => {
    if (userAuth) {
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
            const { displayName, email, photoURL } = userAuth;
            const createdAt = new Date();
            try {
                await userRef.set({
                    displayName, email, createdAt, photoURL, ...additionalData
                });
            } catch (error) {
                console.log(error);
            }
        }
        console.log(snapshot);
        return userRef;
    }
}


export {
    firebase,
    auth,
    firestore,
    signInWithGoogle,
    createUserProfileDocument
}