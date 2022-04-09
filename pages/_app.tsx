import React from "react"
import PropTypes from "prop-types"
import { CacheProvider } from "@emotion/react"
import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material"

import createEmotionCache from "utility/createEmotionCache"
import lightTheme from "styles/theme/lightTheme"
import "styles/globals.css"
import ResponsiveAppBar from "components/ResponsiveAppBar"
import { height } from "@mui/system"
import { ApolloProvider } from "@apollo/client"
import apolloClient from "lib/ApolloClient"
import initAuth from "utility/next-firebase"
import { AuthUserProvider } from "Providers/FirebaseAuthProvider"
import Footer from "components/Footer"

const clientSideEmotionCache = createEmotionCache()
// initAuth()

const MyApp = (props: any) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

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
