import { useState, useEffect } from 'react'
import app from 'utility/firebase'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
  ParsedToken,
  User,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth'
import Axios from 'axios'

const auth = getAuth(app)

interface CustomClaims extends ParsedToken {
  permission?: string
}

const formatIdTokenResult = (token: any, claims: CustomClaims) => ({
  uid: claims.user_id,
  email: claims.email,
  name: claims.name,
  token: token,
  permission: claims.permission,
})

export interface CustomAuthUser {
  uid: string | null
  email: string | null
  displayName: string | null
  photoURL: string | null
  token: string | null
  claims: CustomClaims | null
}

const formatUser = (
  authUser: User,
  claims: CustomClaims,
  token: string,
): CustomAuthUser => ({
  uid: authUser.uid || null,
  email: authUser.email || null,
  displayName: authUser.displayName || null,
  photoURL: authUser.photoURL || null,
  token: token || null,
  claims: claims || null,
})

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<CustomAuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  const authStateChanged = async (authUser: User | null) => {
    if (!authUser) {
      setAuthUser(null)
      setLoading(false)
      return
    }

    setLoading(true)
    // const formattedUser2 = await authState.auth.currentUser.getAdditionalUserInfo();
    const { claims, token } = await authUser.getIdTokenResult()
    console.log('dfdf', authUser)
    // var formattedUser = formatIdTokenResult(
    //   formatIdToken.token,
    //   formatIdToken.claims
    // );
    const formattedUser = formatUser(authUser, claims, token)
    // console.log(await authState.auth.currentUser.getIdTokenResult())
    // console.log(formattedUser)
    setAuthUser(formattedUser)
    setLoading(false)
  }

  const IdTokenChanged = async (authUser: User | null) => {
    if (!authUser) {
      setAuthUser(null)
      setLoading(false)
      return
    }
    const { claims, token } = await authUser.getIdTokenResult()
    Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    Axios.defaults.headers.common['Content-Type'] = 'application/json'
    Axios.defaults.headers.common['Accept'] = 'application/json'
    Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

    setLoading(true)
    const formatIdToken = await authUser.getIdTokenResult()
    const formattedUser = formatUser(authUser, claims, token)
    setAuthUser(formattedUser)
    setLoading(false)
  }

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged)
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(IdTokenChanged)
    return () => unsubscribe()
  }, [])
  const signInWithEmail = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

  const signUpWithEmail = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

  const signInWithFacebook = () =>
    signInWithPopup(auth, new FacebookAuthProvider())
  const signInWithTwitter = () =>
    signInWithPopup(auth, new TwitterAuthProvider())

  const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider())

  const resetPassword = (email: string) => sendPasswordResetEmail(auth, email)

  const logout = () => {
    signOut(auth)
    setAuthUser(null)
    setLoading(true)
  }

  return {
    authUser,
    loading,
    signInWithEmail,
    signUpWithEmail,
    signInWithFacebook,
    signInWithTwitter,
    signInWithGoogle,
    signOut: logout,
    resetPassword,
  }
}
