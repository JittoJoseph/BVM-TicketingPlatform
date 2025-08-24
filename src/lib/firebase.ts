import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export function getFirebaseApp() {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return app;
}

export const db = (() => {
  try {
    const app = getFirebaseApp();
    if (!firebaseConfig.projectId) {
      console.warn("Firebase project ID not configured");
      return null;
    }
    return getFirestore(app);
  } catch (error) {
    console.warn("Firebase Firestore initialization failed:", error);
    return null;
  }
})();

export const auth = (() => {
  try {
    const app = getFirebaseApp();
    if (!firebaseConfig.projectId) {
      console.warn("Firebase project ID not configured");
      return null;
    }
    return getAuth(app);
  } catch (error) {
    console.warn("Firebase Auth initialization failed:", error);
    return null;
  }
})();
