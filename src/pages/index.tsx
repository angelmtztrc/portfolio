import { Fragment } from 'react';
import type { NextPage } from 'next';

import { Header } from '@components/Layout';

const Home: NextPage<HomeProps> = () => {
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};

type HomeProps = {};

export default Home;
