import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import cls from 'classnames';

const MenuItem = ({ title }: MenuItemProps) => {
  return (
    <Tab as="li" className="">
      {({}) => (
        <Fragment>
          <span className={cls('font-body font-medium')}>{title}</span>
          <span />
        </Fragment>
      )}
    </Tab>
  );
};

type MenuItemProps = {
  title: string;
};

export default MenuItem;
