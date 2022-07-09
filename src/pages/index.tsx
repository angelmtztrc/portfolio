import { Fragment } from 'react';
import type { NextPage } from 'next';
import { Tab } from '@headlessui/react';

import { Header, Menu } from '@molecules';
import { Blog, Repositories } from '@organisms';

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <Fragment>
      <Header />
      <section className="container mt-12">
        <Tab.Group>
          <Menu />
          <Tab.Panels>
            <Repositories />
            <Blog />
          </Tab.Panels>
        </Tab.Group>
      </section>
    </Fragment>
  );
};

type HomePageProps = {};

export default HomePage;
