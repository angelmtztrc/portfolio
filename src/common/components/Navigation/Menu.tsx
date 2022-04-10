import { Tab } from '@headlessui/react';

const Menu = ({}: MenuProps) => {
  return (
    <div className="container mt-8">
      <Tab.List
        as="ul"
        className="flex w-full flex-nowrap overflow-x-auto pb-4"
      ></Tab.List>
    </div>
  );
};

type MenuProps = {};

export default Menu;
