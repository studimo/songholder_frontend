import { init } from 'next-firebase-auth'

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000

const initAuth = () => {
  init({
    debug: false,
    authPageURL: '/login',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    firebaseClientInitConfig: {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY
        ? process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY
        : '',
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    },
    cookies: {
      name: 'MaTchA',
      // keys: [process.env.COOKIE_SECRET_CURRENT, process.env.COOKIE_SECRET_PREVIOUS],
      // httpOnly: true,
      // maxAge: TWELVE_DAYS_IN_MS,
      // overwrite: true,
      // path: '/',
      // sameSite: 'strict',
      // secure: process.env.NEXT_PUBLIC_COOKIE_SECURE === 'true',
      // signed: true,
      signed: false,
    },
  })
}

export default initAuth
