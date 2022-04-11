import React, { FC, useEffect } from "react"
import { createContext, useContext, Context } from "react"
import useFirebaseAuth from "utility/UseFirebaseAuth"
import { UserCredential } from "firebase/auth"

// interface UserContextInterface {
//   authUser: User | null
//   loading: boolean
//   signIn: (token: string) => void
//   signOut: () => void
// }

const userContext = {
  authUser: null,
  loading: true,
  signInWithEmail: (email: string, password: string): Promise<UserCredential> =>
    new Promise(() => {}),
  signUpWithEmail: (email: string, password: string): Promise<UserCredential> =>
    new Promise(() => {}),
  signInWithFacebook: (): Promise<UserCredential> => new Promise(() => {}),
  signInWithTwitter: (): Promise<UserCredential> => new Promise(() => {}),
  signOut: () => {},
}

const authUserContext = createContext(userContext)

export const AuthUserProvider: FC = ({ children }) => {
  const auth = useFirebaseAuth()

  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  )
}

export function useAuth() {
  return useContext(authUserContext)
}
