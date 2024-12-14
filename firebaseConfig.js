/* eslint-disable prettier/prettier */
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import firebaseConfig from './firebaseConfig.json'

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export { db }
