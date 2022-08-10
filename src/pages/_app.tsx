import type { AppProps } from 'next/app';

import { DefaultLayout } from '@layouts';

import '@styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default MyApp;
