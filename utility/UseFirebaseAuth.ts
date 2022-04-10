import { useState, useEffect } from "react";
import app from "utility/firebase"; 
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Axios from "axios";

const auth = getAuth(app);

const formatIdTokenResult = (
  token: any,
  claims: { user_id: any; email: any; name: any; permission: any }
) => ({
  uid: claims.user_id,
  email: claims.email,
  name: claims.name,
  token: token,
  permission: claims.permission,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    // var formattedUser = formatAuthUser(authState)
    const formatIdToken = await authState.auth.currentUser.getIdTokenResult();
    var formattedUser = formatIdTokenResult(
      formatIdToken.token,
      formatIdToken.claims
    );
    // console.log(await authState.auth.currentUser.getIdTokenResult())
    // console.log(formattedUser)
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const IdTokenChanged = async (authState: any) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }
    Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
    Axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${authState.accessToken}`;
    Axios.defaults.headers.common["Content-Type"] = "application/json";
    Axios.defaults.headers.common["Accept"] = "application/json";
    Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

    setLoading(true);
    const formatIdToken = await authState.auth.currentUser.getIdTokenResult();
    var formattedUser = formatIdTokenResult(
      formatIdToken.token,
      formatIdToken.claims
    );
    setAuthUser(formattedUser);
    setLoading(false);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(IdTokenChanged);
    return () => unsubscribe();
  }, []);
  const signInWithEmail = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const signUpWithEmail = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signOut = () => {
    signOut();
    setAuthUser(null);
    setLoading(true);
  };

  return {
    authUser,
    loading,
    signInWithEmail,
    signUpWithEmail,
    signOut,
  };
}
