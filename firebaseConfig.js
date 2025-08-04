?// firebaseConfig.js

// Core Firebase App SDK
import { initializeApp } from 'firebase/app';

// React Native Auth (with persistence)
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Optional: Other Firebase SDKs you might use
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC5sqQZwfQmjGcHAnMJzwIWpEajanKzMZY",
  authDomain: "neuropunk-sandbox.firebaseapp.com",
  projectId: "neuropunk-sandbox",
  storageBucket: "neuropunk-sandbox.firebasestorage.app",
  messagingSenderId: "809926490574",
  appId: "1:809926490574:web:061cdf36b66c54a468939f",
  measurementId: "G-2MPV8J43YS"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Enable persistent auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Export initialized services
export { app, auth };// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MSG_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
