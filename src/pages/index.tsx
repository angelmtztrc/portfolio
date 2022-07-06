import { Fragment } from 'react';
import type { NextPage } from 'next';

import { Header } from '@molecules';

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};

type HomePageProps = {};

export default HomePage;
