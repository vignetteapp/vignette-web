/* eslint-disable prettier/prettier */
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG!)

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export { db }
