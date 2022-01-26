import { Tab } from '@headlessui/react';
import { MenuItem } from './menu-item';

export const Menu = () => {
  return (
    <div className="container mt-8">
      <Tab.List
        as="ul"
        className="flex w-full flex-nowrap overflow-x-auto pb-4 lg:pb-0"
      >
        <MenuItem title="Repositories" />
        <MenuItem title="Blog" />
        <MenuItem title="Experience" />
        <MenuItem title="Education" />
        <MenuItem title="Contact" />
      </Tab.List>
    </div>
  );
};
