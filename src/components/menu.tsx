import { Tab } from '@headlessui/react';
import { MenuItem } from './menu-item';

export const Menu = () => {
  return (
    <div className="container mt-8">
      <Tab.List as="ul" className="flex flex-nowrap w-full overflow-x-auto">
        <MenuItem title="Repositories" />
        <MenuItem title="Blog" />
        <MenuItem title="Experience" />
        <MenuItem title="Education" />
        <MenuItem title="Contact" />
      </Tab.List>
    </div>
  );
};
