import { Fragment } from 'react';
import type { NextPage } from 'next';
import { Tab } from '@headlessui/react';

// components
import { Header } from '../components/header';
import { Menu } from '../components/menu';

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Tab.Group>
        <Menu />
      </Tab.Group>
    </Fragment>
  );
};

export default HomePage;
