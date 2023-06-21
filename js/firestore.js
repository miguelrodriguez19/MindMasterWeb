
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { 
    getFirestore, 
    collection,
    getDocs,
    orderBy,
    query
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTUfHBu36zLYlBXkdWN-nPzwLlVdJjSUE",
    authDomain: "mindmaster-9b361.firebaseapp.com",
    projectId: "mindmaster-9b361",
    storageBucket: "mindmaster-9b361.appspot.com",
    messagingSenderId: "295470441833",
    appId: "1:295470441833:web:3d23a3325e91e3f3ddc9f8",
    measurementId: "G-57F3ZYE555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const getFaqs = () => getDocs(query(collection(db, 'FAQs'), orderBy('question')));
