import type { AppProps } from 'next/app';

import { Layout } from '@atoms';

import '@styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
};

export default MyApp;
