import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDJeR2AOgd6IOlNFEh6U6h77x_KGdEYlqk",
    authDomain: "product-feedback-af4ea.firebaseapp.com",
    projectId: "product-feedback-af4ea",
    storageBucket: "product-feedback-af4ea.appspot.com",
    messagingSenderId: "525892850869",
    appId: "1:525892850869:web:cbbbf82fb1b83c916b9afc",
    storageBucket: ''
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()
const storage = getStorage(app);


export { db, auth, storage }