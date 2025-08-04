// firebase/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5sqQZwfQmjGcHAnMJzwIWpEajanKzMZY",
  authDomain: "neuropunk-sandbox.firebaseapp.com",
  projectId: "neuropunk-sandbox",
  storageBucket: "neuropunk-sandbox.firebasestorage.app",
  messagingSenderId: "809926490574",
  appId: "1:809926490574:web:061cdf36b66c54a468939f",
  measurementId: "G-2MPV8J43YS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
