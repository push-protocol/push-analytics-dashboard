// React, NextJS imports
import React from 'react';

// import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

// External Library imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Internal Components imports
import Theme from '../theme/Theme';
import { ThemeProvider as GlobalThemeProvider } from '../contexts/ThemeContext';
import { DataProvider } from '../contexts/DataContext';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Notification, useChainNotification } from '../common';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useChainNotification();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalThemeProvider>
        <Theme>
          <DataProvider>
            <Notification />
            <Component {...pageProps} />
          </DataProvider>
        </Theme>
        <ToastContainer />
      </GlobalThemeProvider>
    </QueryClientProvider>
  );
}
