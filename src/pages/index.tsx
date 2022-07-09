import { Fragment } from 'react';
import type { NextPage } from 'next';
import { Tab } from '@headlessui/react';

import { Header, Menu } from '@molecules';

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <Fragment>
      <Header />
      <section className="container mt-12">
        <Tab.Group>
          <Menu />
        </Tab.Group>
      </section>
    </Fragment>
  );
};

type HomePageProps = {};

export default HomePage;
