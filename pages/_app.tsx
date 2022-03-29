import React from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material";

import createEmotionCache from "utility/createEmotionCache";
import lightTheme from "styles/theme/lightTheme";
import "styles/globals.css";
import ResponsiveAppBar from "components/ResponsiveAppBar";
import { height } from "@mui/system";
import MediaPlayer from "components/MediaPlayer";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "lib/ApolloClient";
import initAuth from "utility/firebase";

const clientSideEmotionCache = createEmotionCache();
initAuth();

const MyApp = (props: any) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <ResponsiveAppBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
