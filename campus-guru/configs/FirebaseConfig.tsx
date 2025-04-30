// firebaseConfig.ts (or firebase.js)

// Firebase core and auth imports
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBQq5gzaL3kR29FTZ0pNsne6TDtHfrqYd0",
  authDomain: "collage-campus-guru-c0646.firebaseapp.com",
  projectId: "collage-campus-guru-c0646",
  storageBucket: "collage-campus-guru-c0646.appspot.com", // Corrected `.app` to `.com`
  messagingSenderId: "797399613673",
  appId: "1:797399613673:web:27b5f5bd7623b9c66cf078",
  measurementId: "G-KPSYD4ES26"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with React Native Persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Export auth to use in other files
export { auth };