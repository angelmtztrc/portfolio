import { Fragment } from 'react';
import type { NextPage } from 'next';

import { Header } from '@components/Layout';
import { Menu } from '@components/Navigation';
import { Repositories } from '@components/Sections';

const Home: NextPage<HomeProps> = () => {
  return (
    <Fragment>
      <Header />
      <Menu />
      <div className="container mt-10 space-y-24">
        <Repositories />
      </div>
    </Fragment>
  );
};

type HomeProps = {};

export default Home;
