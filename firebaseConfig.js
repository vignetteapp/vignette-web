import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDARro02yJnKIO_GMf4CtyynigyOjcNaek",
  authDomain: "vignette-survey-c10b6.firebaseapp.com",
  projectId: "vignette-survey-c10b6",
  storageBucket: "vignette-survey-c10b6.firebasestorage.app",
  messagingSenderId: "823189834296",
  appId: "1:823189834296:web:16ead38b21290d293ef4cd",
  measurementId: "G-ZGV7EBTXBS"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };