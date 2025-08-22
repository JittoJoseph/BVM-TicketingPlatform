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
    return getFirestore(getFirebaseApp());
  } catch {
    return undefined as unknown as ReturnType<typeof getFirestore>;
  }
})();

export const auth = (() => {
  try {
    return getAuth(getFirebaseApp());
  } catch {
    return undefined as unknown as ReturnType<typeof getAuth>;
  }
})();
