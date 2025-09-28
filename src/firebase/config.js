// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCL6P0YUTMQppTZp4jfckBDtNbHhryKiW0",
    authDomain: "mystorefamms.firebaseapp.com",
    projectId: "mystorefamms",
    storageBucket: "mystorefamms.firebasestorage.app",
    messagingSenderId: "112723174813",
    appId: "1:112723174813:web:aeffbd3f6559fa345dbb74",
    measurementId: "G-BVJYF5E9F2"
};
// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
