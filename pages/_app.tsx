import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from 'utility/createEmotionCache'
import lightTheme from 'styles/theme/lightTheme'
import 'styles/globals.css'
import ResponsiveAppBar from 'components/ResponsiveAppBar'
import { ApolloProvider } from '@apollo/client'
import apolloClient from 'lib/ApolloClient'
import { AuthUserProvider } from 'Providers/FirebaseAuthProvider'

const clientSideEmotionCache = createEmotionCache()
// initAuth()

function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const router = useRouter()

  // const appBarBackground = () => {
  //   switch (router.pathname) {
  //     case '/':
  //       return 'auto'
  //     case '/signin':
  //       return 'transparent'
  //     default:
  //       return 'gradient'
  //   }
  // }

  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <AuthUserProvider>
            <Component {...pageProps} />
          </AuthUserProvider>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
