// Import the functions y
?ou need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5sqQZwfQmjGcHAnMJzwIWpEajanKzMZY",
  authDomain: "neuropunk-sandbox.firebaseapp.com",
  projectId: "neuropunk-sandbox",
  storageBucket: "neuropunk-sandbox.appspot.com",
  messagingSenderId: "809926490574",
  appId: "1:809926490574:web:95e029c3b4ce2f7568939f",
  measurementId: "G-XK2VTBLLN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
