import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';

import Snackbar from '../src/components/Snackbar';
import theme from '../styles/theme';
import '../styles/globals.css';

interface IMyApp {
  Component: React.ComponentType<any>;
  pageProps: React.Props<any>;
}

function MyApp({ Component, pageProps }: IMyApp): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Squad Statistic</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Snackbar>
          <Component {...pageProps} />
        </Snackbar>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
