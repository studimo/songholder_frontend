import { getApp, getApps, initializeApp } from 'firebase/app'
// import { getAuth, signInWithCustomToken, signOut } from "firebase/auth"

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
}
// if a Firebase instance doesn't exist, create one
const firebaseApp =
  getApps().length === 0 ? initializeApp(FirebaseCredentials) : getApp()
export default firebaseApp
// export const auth = getAuth(firebaseApp)
