import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCNrrJp5wXADUDjycNU_CBe7wpAHhQgZCA",
    authDomain: "sethandsons-a9c5b.firebaseapp.com",
    projectId: "sethandsons-a9c5b",
    storageBucket: "sethandsons-a9c5b.appspot.com",
    messagingSenderId: "973496315838",
    appId: "1:973496315838:web:97274c7adf2b6ede2b93ef",
    measurementId: "G-7F1CWRSPE8"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app