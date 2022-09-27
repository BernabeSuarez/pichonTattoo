// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwOj8b-gZGzCT-x5L5JPdgQGrqjcYlSPM",
    authDomain: "pichon-tattoo-web.firebaseapp.com",
    projectId: "pichon-tattoo-web",
    storageBucket: "pichon-tattoo-web.appspot.com",
    messagingSenderId: "668059914523",
    appId: "1:668059914523:web:95a603c2ddd3a2820b83be",
    measurementId: "G-1S2E61D632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);




