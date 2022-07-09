import { Tab } from '@headlessui/react';

import { MenuItem } from '@atoms';

const Menu = () => {
  return (
    <Tab.List
      as="ul"
      className="flex items-center border border-indigo-500 border-opacity-25 bg-eerie-black-dark shadow"
    >
      <MenuItem title="Repositories" />
      <MenuItem title="blog" />
      <MenuItem title="Experience" />
      <MenuItem title="Education" />
      <MenuItem title="Contact" />
    </Tab.List>
  );
};

type MenuProps = {};

export default Menu;
