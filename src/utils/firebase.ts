// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, } from 'firebase/firestore'
//I have got NO idea why but it absouletely HATED having signinwithemailandpassword so it got an alias
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword as firebaseSignIn} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export const createUserDocFromAuth = async (userAuth, additionalInformation  = {}) => {
    if (!userAuth.email) return;


    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);

    const userSnapshop = await getDoc(userDocRef);
    console.log(userSnapshop)
    console.log(userSnapshop.exists())

    if (!userSnapshop.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation 
            }
            )
        }
        catch (error) {
            console.log('error in creating user', error.message)
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await firebaseSignIn(auth, email, password);
};